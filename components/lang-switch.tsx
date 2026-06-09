"use client";

import { locales, localeLabel, type Locale } from "@/lib/i18n/config";

function persist(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LangSwitch({
  current,
  label,
  basePath = "",
}: {
  current: Locale;
  label: string;
  /** Path suffix kept when switching locale, e.g. "/botw-guide". */
  basePath?: string;
}) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {locales.map((locale) => (
        <a
          aria-current={locale === current ? "true" : undefined}
          className={locale === current ? "is-active" : undefined}
          href={`/${locale}${basePath}`}
          hrefLang={locale}
          key={locale}
          onClick={() => persist(locale)}
          rel="alternate"
        >
          {localeLabel[locale]}
        </a>
      ))}
    </div>
  );
}
