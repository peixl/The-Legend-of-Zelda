import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/config";
import {
  AUTHOR,
  BRAND,
  REPO_URL,
  SITE_URL,
  localeUrl,
} from "@/lib/seo/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "x-robots-tag": "all",
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: JSON_HEADERS });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return Response.json(
      { error: "unsupported locale", supported: locales },
      { status: 404, headers: JSON_HEADERS },
    );
  }

  const dict = getDictionary(lang);

  const payload = {
    $schema: "https://schema.org/VideoGame",
    name: dict.nav.brand,
    description: dict.meta.description,
    locale: lang,
    url: localeUrl(lang),
    canonical: localeUrl(lang),
    availableLocales: locales.map((l) => ({ locale: l, url: localeUrl(l) })),
    publisher: { name: BRAND.name, url: BRAND.url },
    author: { name: AUTHOR.name, url: AUTHOR.url },
    repository: REPO_URL,
    license: "MIT (code) · CC BY 4.0 (guide text)",
    keywords: dict.meta.keywords,
    games: [
      {
        name: "The Legend of Zelda: Breath of the Wild",
        shortName: "BOTW",
        shrines: 120,
        korokSeeds: 900,
      },
      {
        name: "The Legend of Zelda: Tears of the Kingdom",
        shortName: "TOTK",
        shrines: 152,
        korokSeeds: 1000,
        lightroots: 120,
      },
    ],
    faq: dict.faq.items,
    sections: {
      whereToStart: { title: dict.route.title, items: dict.route.items },
      comparison: { headers: dict.compare.headers, rows: dict.compare.rows },
      themes: dict.themeDuel.panels,
      firstHours: { title: dict.firstHours.title, items: dict.firstHours.items },
      systems: dict.systems.items,
      essence: dict.essence.items,
      guides: dict.guides,
      characters: dict.characters.items,
      story: { groups: dict.story.groups, spoilers: dict.story.spoilers },
      veteran: dict.veteran.items,
      checklists: dict.checklist.items,
    },
    sources: dict.footer.sources,
    generatedFrom: SITE_URL,
  };

  return new Response(JSON.stringify(payload, null, 2), { headers: JSON_HEADERS });
}
