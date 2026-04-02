create extension if not exists pgcrypto;

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  beehiiv_subscription_id text,
  beehiiv_status text,
  subscribed_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_current_timestamp_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_newsletter_subscribers_updated_at on public.newsletter_subscribers;

create trigger set_newsletter_subscribers_updated_at
before update on public.newsletter_subscribers
for each row
execute function public.set_current_timestamp_updated_at();
