import { locales } from "@/lib/i18n/config";
import { BRAND, REPO_URL, SITE_URL, localeUrl } from "@/lib/seo/site";

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=3600, s-maxage=86400",
  "access-control-allow-origin": "*",
  "x-robots-tag": "all",
};

export function GET() {
  const payload = {
    name: "The Legend of Zelda — Wild & Tears Field Guide API",
    description:
      "Machine-readable, structured guide data for The Legend of Zelda: Breath of the Wild & Tears of the Kingdom. Free for AI agents and apps to consume.",
    publisher: { name: BRAND.name, url: BRAND.url },
    repository: REPO_URL,
    site: SITE_URL,
    endpoints: locales.map((lang) => ({
      locale: lang,
      page: localeUrl(lang),
      json: `${SITE_URL}/api/guide/${lang}`,
    })),
    discovery: {
      llms: `${SITE_URL}/llms.txt`,
      llmsFull: `${SITE_URL}/llms-full.txt`,
      sitemap: `${SITE_URL}/sitemap.xml`,
      robots: `${SITE_URL}/robots.txt`,
    },
  };

  return new Response(JSON.stringify(payload, null, 2), { headers: JSON_HEADERS });
}
