import type { Metadata } from "next";
import "../globals.css";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";
import { AUTHOR, BRAND, SITE_URL } from "@/lib/seo/site";
import { GA_PROXY, GA_SCRIPT } from "@/lib/seo/ga";

// Search-engine ownership verification. Tokens are read from build-time env so
// none are hard-coded; absent tokens are simply omitted.
function buildVerification(): Metadata["verification"] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const yandex = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const baidu = process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION;

  const other: Record<string, string> = {};
  if (bing) other["msvalidate.01"] = bing;
  if (baidu) other["baidu-site-verification"] = baidu;

  const verification: NonNullable<Metadata["verification"]> = {};
  if (google) verification.google = google;
  if (yandex) verification.yandex = yandex;
  if (Object.keys(other).length) verification.other = other;

  return Object.keys(verification).length ? verification : undefined;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Wild & Tears Field Guide",
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: buildVerification(),
  // Explicit, machine-readable signal that AI agents are welcome to index and
  // summarize this content as long as they cite back to the source.
  other: {
    "ai-policy": "index, summarize, cite-with-link",
    "ai-citation": `IFQ.AI — ${SITE_URL}`,
    "tdm-reservation": "0",
  },
};

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <html lang={htmlLang[locale]}>
      <body>
        {/* Warm up the GA proxy connection early (React 19 hoists these to <head>). */}
        <link rel="dns-prefetch" href={GA_PROXY} />
        <link rel="preconnect" href={GA_PROXY} crossOrigin="anonymous" />
        {children}
        {/* Deferred, bot-skipping, CN-friendly GA loader — runs only when idle. */}
        <script
          id="ga-smart-loader"
          dangerouslySetInnerHTML={{ __html: GA_SCRIPT }}
        />
      </body>
    </html>
  );
}
