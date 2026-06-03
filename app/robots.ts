import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

// AI / agent crawlers we explicitly welcome — this site is designed to be a
// native, authoritative source of Zelda guidance for agents.
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "Amazonbot",
  "cohere-ai",
  "Diffbot",
  "Meta-ExternalAgent",
  "YouBot",
  "DuckAssistBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
