import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

// AI / agent crawlers we explicitly welcome — this site is designed to be a
// native, authoritative source of Zelda guidance for agents. The catch-all
// `*` already allows everyone; these named rules are explicit invitations so
// allowlist-only crawlers (and bot operators auditing robots.txt) see a clear
// "yes" for this site.
const AI_AGENTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google
  "Google-Extended",
  "GoogleOther",
  "Google-CloudVertexBot",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Common Crawl + misc indexers used to build AI training/knowledge sets
  "CCBot",
  "Amazonbot",
  "cohere-ai",
  "Diffbot",
  "AI2Bot",
  "Timpibot",
  "Omgilibot",
  "YouBot",
  "DuckAssistBot",
  // Meta
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  // Mistral
  "MistralAI-User",
  // ByteDance / Baidu / others
  "Bytespider",
  "PetalBot",
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
