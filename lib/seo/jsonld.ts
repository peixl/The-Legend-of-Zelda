import type { Locale } from "@/lib/i18n/config";
import { htmlLang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { AUTHOR, BRAND, OG_IMAGE, REPO_URL, SITE_URL, localeUrl } from "./site";

/**
 * Build a JSON-LD @graph describing the site, brand, author, the two games,
 * and the FAQ. This is the machine-readable "site core" that AI agents and
 * search engines consume as a native source of truth.
 */
export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = localeUrl(locale);
  const lang = htmlLang[locale];

  const publisher = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#publisher`,
    name: BRAND.name,
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      url: BRAND.logo,
    },
    sameAs: [BRAND.url, REPO_URL],
  };

  const author = {
    "@type": "Person",
    "@id": `${SITE_URL}/#author`,
    name: AUTHOR.name,
    url: AUTHOR.url,
    sameAs: [AUTHOR.url],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: dict.nav.brand,
    description: dict.meta.description,
    inLanguage: lang,
    publisher: { "@id": `${SITE_URL}/#publisher` },
    author: { "@id": `${SITE_URL}/#author` },
  };

  const games = [
    {
      "@type": "VideoGame",
      name: "The Legend of Zelda: Breath of the Wild",
      alternateName: ["塞尔达传说：旷野之息", "BOTW"],
      genre: ["Action-adventure", "Open world"],
      gamePlatform: ["Nintendo Switch", "Wii U"],
      operatingSystem: "Nintendo Switch",
      publisher: { "@type": "Organization", name: "Nintendo" },
      sameAs: [
        "https://www.nintendo.com/us/store/products/the-legend-of-zelda-breath-of-the-wild-switch/",
        "https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild",
      ],
    },
    {
      "@type": "VideoGame",
      name: "The Legend of Zelda: Tears of the Kingdom",
      alternateName: ["塞尔达传说：王国之泪", "TOTK"],
      genre: ["Action-adventure", "Open world"],
      gamePlatform: ["Nintendo Switch"],
      operatingSystem: "Nintendo Switch",
      publisher: { "@type": "Organization", name: "Nintendo" },
      sameAs: [
        "https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
        "https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom",
      ],
    },
  ];

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: lang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: games.map((game) => ({ "@type": "VideoGame", name: game.name })),
    primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
    author: { "@id": `${SITE_URL}/#author` },
    publisher: { "@id": `${SITE_URL}/#publisher` },
    breadcrumb: { "@id": `${url}/#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: BRAND.name, item: BRAND.url },
      { "@type": "ListItem", position: 2, name: dict.nav.brand, item: url },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    inLanguage: lang,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [publisher, author, website, webPage, breadcrumb, ...games, faqPage],
  };
}
