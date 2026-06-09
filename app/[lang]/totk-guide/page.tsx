import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flame, Hammer, Heart, MapPinned, Shield, Sparkles } from "lucide-react";
import { isLocale, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { getTotkGuide } from "@/lib/i18n/totk-guide";
import { getTotkFuseLab } from "@/lib/i18n/totk-fuse-lab";
import { getBotwGuide } from "@/lib/i18n/botw-guide";
import { buildGuideJsonLd } from "@/lib/seo/jsonld";
import { OG_IMAGE, SITE_URL } from "@/lib/seo/site";
import { GuidePage } from "@/components/guide/guide-page";
import { TotkFuseLab } from "@/components/guide/totk-fuse-lab";

const BASE_PATH = "/totk-guide";

const GAME = {
  id: "game-totk",
  name: "The Legend of Zelda: Tears of the Kingdom",
  alternateName: ["塞尔达传说：王国之泪", "TOTK"],
  gamePlatform: ["Nintendo Switch"],
};

// Order matches the growth cards: Shrine, Armor, Cooking, Fuse, Zonai, Map.
const growthIcons = [Heart, Shield, Flame, Hammer, Sparkles, MapPinned];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function guideUrl(locale: Locale) {
  return `${SITE_URL}/${locale}${BASE_PATH}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const g = getTotkGuide(lang);
  const url = guideUrl(lang);

  return {
    title: g.meta.title,
    description: g.meta.description,
    keywords: g.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        "zh-Hans": guideUrl("zh"),
        en: guideUrl("en"),
        "x-default": guideUrl("en"),
      },
    },
    openGraph: {
      type: "article",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url,
      siteName: g.nav.brand,
      title: g.meta.title,
      description: g.meta.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 750, alt: g.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: g.meta.title,
      description: g.meta.description,
      images: [OG_IMAGE],
    },
    category: "gaming",
  };
}

export default async function TotkGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getTotkGuide(locale);
  const jsonLd = buildGuideJsonLd(locale, dict, { basePath: BASE_PATH, game: GAME });

  return (
    <GuidePage
      basePath={BASE_PATH}
      dict={dict}
      growthIcons={growthIcons}
      heroVariant="totk"
      jsonLd={jsonLd}
      locale={locale}
      sibling={{
        label: getBotwGuide(locale).nav.crossLabel,
        href: `/${locale}/botw-guide`,
      }}
      signature={<TotkFuseLab data={getTotkFuseLab(locale)} />}
      signatureAfter="route"
      storageKey="totk-guide-tasks"
      theme="totk"
    />
  );
}
