import { createClient } from "@supabase/supabase-js";

type NewsletterConfig = {
  beehiivApiKey: string;
  beehiivPublicationId: string;
  siteUrl: string;
  supabaseTable: string;
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
};

type BeehiivSubscription = {
  id?: string;
  status?: string;
  email?: string;
  created?: number;
};

export class NewsletterConfigError extends Error {
  missingKeys: string[];

  constructor(missingKeys: string[]) {
    super(`Missing newsletter env vars: ${missingKeys.join(", ")}`);
    this.name = "NewsletterConfigError";
    this.missingKeys = missingKeys;
  }
}

export class NewsletterSyncError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.name = "NewsletterSyncError";
    this.statusCode = statusCode;
  }
}

export function getNewsletterConfig() {
  const config = {
    beehiivApiKey: process.env.BEEHIIV_API_KEY ?? "",
    beehiivPublicationId: process.env.BEEHIIV_PUBLICATION_ID ?? "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    supabaseTable: process.env.SUPABASE_NEWSLETTER_TABLE ?? "newsletter_subscribers",
    supabaseUrl: process.env.SUPABASE_URL ?? "",
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  };

  const missingKeys = Object.entries({
    BEEHIIV_API_KEY: config.beehiivApiKey,
    BEEHIIV_PUBLICATION_ID: config.beehiivPublicationId,
    SUPABASE_URL: config.supabaseUrl,
    SUPABASE_SERVICE_ROLE_KEY: config.supabaseServiceRoleKey,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  return {
    ...config,
    isConfigured: missingKeys.length === 0,
    missingKeys,
  };
}

function requireNewsletterConfig(): NewsletterConfig {
  const config = getNewsletterConfig();

  if (!config.isConfigured) {
    throw new NewsletterConfigError(config.missingKeys);
  }

  return config;
}

async function subscribeOnBeehiiv(email: string, config: NewsletterConfig) {
  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${config.beehiivPublicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.beehiivApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "website",
        utm_medium: "newsletter",
        referring_site: config.siteUrl,
      }),
    }
  );

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      payload?.message ||
      payload?.error ||
      "Beehiiv subscription request failed.";

    throw new NewsletterSyncError(message, response.status);
  }

  return (payload?.data ?? payload) as BeehiivSubscription;
}

async function upsertSubscriber(
  email: string,
  beehiivSubscription: BeehiivSubscription,
  config: NewsletterConfig
) {
  const supabase = createClient(
    config.supabaseUrl,
    config.supabaseServiceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  const { error } = await supabase.from(config.supabaseTable).upsert(
    {
      email,
      source: "website",
      beehiiv_subscription_id: beehiivSubscription.id ?? null,
      beehiiv_status: beehiivSubscription.status ?? "active",
      subscribed_at: new Date().toISOString(),
      metadata: { provider: "beehiiv", source: "website" },
    },
    {
      onConflict: "email",
    }
  );

  if (error) {
    throw new NewsletterSyncError(error.message, 500);
  }
}

export async function syncNewsletterSubscriber(email: string) {
  const config = requireNewsletterConfig();
  const beehiivSubscription = await subscribeOnBeehiiv(email, config);

  await upsertSubscriber(email, beehiivSubscription, config);

  return {
    beehiivSubscription,
    message: "Identity synced. Confirmation and welcome flow are now handled.",
  };
}
