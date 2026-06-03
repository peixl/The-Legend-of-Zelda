import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { localeUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    "zh-Hans": localeUrl("zh"),
    en: localeUrl("en"),
    "x-default": localeUrl("en"),
  };

  return locales.map((lang) => ({
    url: localeUrl(lang),
    lastModified,
    changeFrequency: "weekly",
    priority: lang === "zh" ? 1 : 0.9,
    alternates: { languages },
  }));
}
