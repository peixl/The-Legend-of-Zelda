export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export function isLocale(value: string | undefined | null): value is Locale {
  return value != null && (locales as readonly string[]).includes(value);
}

/** Native label shown in the language switcher. */
export const localeLabel: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

/** Value for the <html lang> attribute. */
export const htmlLang: Record<Locale, string> = {
  zh: "zh-Hans",
  en: "en",
};

/** Open Graph locale code. */
export const ogLocale: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_US",
};

/** BCP-47 hreflang values mapped to their locale route. */
export const hreflang: Record<string, Locale> = {
  "zh-Hans": "zh",
  zh: "zh",
  en: "en",
};

/**
 * Pick the best-matching locale from a raw Accept-Language header.
 * Used by the proxy to auto-switch based on the visitor's browser.
 */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return "en";
  const parts = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parts) {
    if (tag.startsWith("zh")) return "zh";
    if (tag.startsWith("en")) return "en";
  }
  // Default for visitors whose browser prefers neither Chinese nor English.
  return "en";
}
