import type { Locale } from "@/lib/i18n/config";

/** Canonical production origin. */
export const SITE_URL = "https://zelda.ifq.ai";

/** Brand / publisher behind the project. */
export const BRAND = {
  name: "IFQ.AI",
  url: "https://ifq.ai",
  logo: `${SITE_URL}/favicon.svg`,
} as const;

/** Author / maintainer. */
export const AUTHOR = {
  name: "peixl",
  url: "https://github.com/peixl",
} as const;

/** Open-source repository. */
export const REPO_URL = "https://github.com/peixl/The-Legend-of-Zelda";

/** Social / preview image (raster, for OG + Twitter cards). */
export const OG_IMAGE = `${SITE_URL}/screenshot.jpeg`;

/** Absolute URL for a given locale route. */
export function localeUrl(locale: Locale): string {
  return `${SITE_URL}/${locale}`;
}
