import { NextApiRequest, NextApiResponse } from "next";
import {
  NewsletterConfigError,
  NewsletterSyncError,
  syncNewsletterSubscriber,
} from "../../lib/newsletter";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    const result = await syncNewsletterSubscriber(email.toLowerCase().trim());

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    if (error instanceof NewsletterConfigError) {
      return res.status(503).json({
        error: `Newsletter setup incomplete: ${error.missingKeys.join(", ")}`,
      });
    }

    if (error instanceof NewsletterSyncError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error("[Newsletter API] Error:", error);
    return res
      .status(500)
      .json({ error: "Internal server error while processing subscription." });
  }
}
