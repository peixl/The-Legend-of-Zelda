import type { Metadata } from "next";
import "../globals.css";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";
import { AUTHOR, BRAND, SITE_URL } from "@/lib/seo/site";

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
      <body>{children}</body>
    </html>
  );
}
