import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { SITE_URL, localeUrl } from "@/lib/seo/site";

// Machine-readable discovery resources we want search engines and AI agents to
// crawl alongside the localized pages.
const DISCOVERY: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/api/guide", changeFrequency: "weekly", priority: 0.8 },
  { path: "/api/guide/zh", changeFrequency: "weekly", priority: 0.8 },
  { path: "/api/guide/en", changeFrequency: "weekly", priority: 0.8 },
  { path: "/llms.txt", changeFrequency: "weekly", priority: 0.7 },
  { path: "/llms-full.txt", changeFrequency: "weekly", priority: 0.7 },
  { path: "/agent.md", changeFrequency: "monthly", priority: 0.6 },
  { path: "/ai-welcome.md", changeFrequency: "monthly", priority: 0.5 },
  { path: "/.well-known/ai.txt", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    "zh-Hans": localeUrl("zh"),
    en: localeUrl("en"),
    "x-default": localeUrl("en"),
  };

  const pages: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: localeUrl(lang),
    lastModified,
    changeFrequency: "weekly",
    priority: lang === "zh" ? 1 : 0.9,
    alternates: { languages },
  }));

  const guideBasePaths = ["/botw-guide", "/totk-guide"];

  const guidePages: MetadataRoute.Sitemap = guideBasePaths.flatMap((basePath) => {
    const guideLanguages = {
      "zh-Hans": `${SITE_URL}/zh${basePath}`,
      en: `${SITE_URL}/en${basePath}`,
      "x-default": `${SITE_URL}/en${basePath}`,
    };
    return locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${basePath}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: { languages: guideLanguages },
    }));
  });

  const discovery: MetadataRoute.Sitemap = DISCOVERY.map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  return [...pages, ...guidePages, ...discovery];
}
