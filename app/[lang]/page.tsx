import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BookOpen,
  ChevronDown,
  Compass,
  Crown,
  Flame,
  Hammer,
  Heart,
  MapPinned,
  Mountain,
  Route,
  Shield,
  Sparkles,
  Sword,
  Users,
} from "lucide-react";
import {
  isLocale,
  locales,
  ogLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { buildJsonLd } from "@/lib/seo/jsonld";
import {
  AUTHOR,
  BRAND,
  OG_IMAGE,
  REPO_URL,
  SITE_URL,
  localeUrl,
} from "@/lib/seo/site";
import { LangSwitch } from "@/components/lang-switch";
import { MobileNav } from "@/components/mobile-nav";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  const url = localeUrl(lang);

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        "zh-Hans": localeUrl("zh"),
        en: localeUrl("en"),
        "x-default": localeUrl("en"),
      },
      types: {
        "application/json": `${SITE_URL}/api/guide/${lang}`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => ogLocale[l]),
      url,
      siteName: t.nav.brand,
      title: t.meta.title,
      description: t.meta.description,
      images: [
        { url: OG_IMAGE, width: 1200, height: 750, alt: t.meta.ogAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [OG_IMAGE],
    },
    category: "gaming",
  };
}

const systemIcons = [Mountain, Hammer, Sparkles];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = getDictionary(locale);
  const jsonLd = buildJsonLd(locale, t);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-nav" aria-label={t.nav.ariaLabel}>
        <a className="brand-mark" href="#top">
          <Crown aria-hidden="true" size={18} />
          {t.nav.brand}
        </a>
        <nav className="nav-inline">
          {t.nav.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <LangSwitch current={locale} label={t.nav.langLabel} />
          <MobileNav
            closeLabel={t.nav.closeLabel}
            label={t.nav.ariaLabel}
            langLabel={t.nav.langLabel}
            links={t.nav.links}
            locale={locale}
            menuLabel={t.nav.menuLabel}
          />
        </div>
      </header>

      <section className="hero" id="top">
        <img
          alt={t.hero.imageAlt}
          className="hero-image"
          decoding="async"
          fetchPriority="high"
          src="/hyrule-field-original.webp"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#route">
              <Compass aria-hidden="true" size={18} />
              {t.hero.primaryAction}
            </a>
            <a className="secondary-action" href="#story">
              <BookOpen aria-hidden="true" size={18} />
              {t.hero.secondaryAction}
            </a>
          </div>
          <dl className="hero-stats" aria-label={t.hero.statsLabel}>
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <a className="hero-scroll" href="#route" aria-label={t.hero.scroll}>
          <span>{t.hero.scroll}</span>
          <ChevronDown aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="section intro-band" id="route">
        <div className="section-heading">
          <p className="eyebrow">{t.route.eyebrow}</p>
          <h2>{t.route.title}</h2>
          <p>{t.route.intro}</p>
        </div>
        <div className="route-grid">
          {t.route.items.map((route) => (
            <article className="info-card" key={route.title}>
              <span>{route.label}</span>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="compare">
        <div className="section-heading">
          <p className="eyebrow">{t.compare.eyebrow}</p>
          <h2>{t.compare.title}</h2>
        </div>
        <div className="comparison-table" role="table" aria-label={t.compare.tableLabel}>
          <div className="comparison-header" role="row">
            <span role="columnheader">{t.compare.headers.axis}</span>
            <span role="columnheader">{t.compare.headers.botw}</span>
            <span role="columnheader">{t.compare.headers.totk}</span>
          </div>
          {t.compare.rows.map((row) => (
            <div className="comparison-row" role="row" key={row.axis}>
              <strong role="rowheader">{row.axis}</strong>
              <p role="cell">{row.botw}</p>
              <p role="cell">{row.totk}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section theme-duel">
        <div className="section-heading">
          <p className="eyebrow">{t.themeDuel.eyebrow}</p>
          <h2>{t.themeDuel.title}</h2>
        </div>
        <div className="theme-grid">
          {t.themeDuel.panels.map((panel) => (
            <article className="theme-panel" key={panel.title}>
              <img alt={panel.alt} decoding="async" loading="lazy" src={panel.image} />
              <div>
                <span>{panel.label}</span>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">{t.firstHours.eyebrow}</p>
          <h2>{t.firstHours.title}</h2>
          <p>{t.firstHours.intro}</p>
        </div>
        <ol className="timeline-list">
          {t.firstHours.items.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section visual-atlas">
        <div className="section-heading">
          <p className="eyebrow">{t.visualAtlas.eyebrow}</p>
          <h2>{t.visualAtlas.title}</h2>
          <p>{t.visualAtlas.intro}</p>
        </div>
        <div className="visual-grid">
          {t.visualAtlas.items.map((chapter) => (
            <article className="visual-card" key={chapter.title}>
              <img alt={chapter.alt} decoding="async" loading="lazy" src={chapter.image} />
              <div>
                <span>{chapter.kicker}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section signature-section" id="scenes">
        <div className="section-heading">
          <p className="eyebrow">{t.scenes.eyebrow}</p>
          <h2>{t.scenes.title}</h2>
          <p>{t.scenes.intro}</p>
        </div>
        <div className="scene-grid">
          {t.scenes.items.map((scene) => (
            <article className="scene-card" key={scene.title}>
              <img alt={scene.alt} decoding="async" loading="lazy" src={scene.image} />
              <div>
                <h3>{scene.title}</h3>
                <p>{scene.smile}</p>
                <p>{scene.hook}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section systems-band" id="systems">
        <div className="section-heading">
          <p className="eyebrow">{t.systems.eyebrow}</p>
          <h2>{t.systems.title}</h2>
        </div>
        <div className="systems-grid">
          {t.systems.items.map((item, index) => {
            const Icon = systemIcons[index] ?? Sparkles;
            return (
              <article key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section essence-section">
        <div className="section-heading">
          <p className="eyebrow">{t.essence.eyebrow}</p>
          <h2>{t.essence.title}</h2>
        </div>
        <ol className="essence-list">
          {t.essence.items.map((point, index) => (
            <li key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section game-guides">
        <div className="guide-column botw">
          <div className="guide-title">
            <Shield aria-hidden="true" />
            <div>
              <p className="eyebrow">{t.guides.botw.eyebrow}</p>
              <h2>{t.guides.botw.title}</h2>
            </div>
          </div>
          <img
            alt={t.guides.botw.imageAlt}
            className="guide-art"
            decoding="async"
            loading="lazy"
            src={t.guides.botw.image}
          />
          {t.guides.botw.steps.map((item) => (
            <article className="guide-step" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="guide-column totk">
          <div className="guide-title">
            <Sword aria-hidden="true" />
            <div>
              <p className="eyebrow">{t.guides.totk.eyebrow}</p>
              <h2>{t.guides.totk.title}</h2>
            </div>
          </div>
          <img
            alt={t.guides.totk.imageAlt}
            className="guide-art"
            decoding="async"
            loading="lazy"
            src={t.guides.totk.image}
          />
          {t.guides.totk.steps.map((item) => (
            <article className="guide-step" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section character-section" id="characters">
        <div className="section-heading">
          <p className="eyebrow">{t.characters.eyebrow}</p>
          <h2>{t.characters.title}</h2>
          <p>{t.characters.intro}</p>
        </div>
        <div className="character-grid">
          {t.characters.items.map((character) => (
            <article className="character-card" key={character.title}>
              <img alt={character.alt} decoding="async" loading="lazy" src={character.image} />
              <div>
                <h3>{character.title}</h3>
                <p>{character.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="story">
        <div className="section-heading">
          <p className="eyebrow">{t.story.eyebrow}</p>
          <h2>{t.story.title}</h2>
        </div>
        <div className="relationship-grid">
          {t.story.groups.map((group) => (
            <article className="relation-card" key={group.title}>
              <Users aria-hidden="true" />
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
        <figure className="story-art">
          <img alt={t.story.figureAlt} decoding="async" loading="lazy" src={t.story.figureImage} />
          <figcaption>{t.story.figcaption}</figcaption>
        </figure>
        <div className="spoiler-wrap">
          {t.story.spoilers.map((block) => (
            <details key={block.summary}>
              <summary>
                <Flame aria-hidden="true" size={18} />
                {block.summary}
              </summary>
              <p>{block.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section emotion-section">
        <div className="section-heading">
          <p className="eyebrow">{t.emotion.eyebrow}</p>
          <h2>{t.emotion.title}</h2>
        </div>
        <div className="anchor-cloud">
          {t.emotion.items.map((anchor) => (
            <span key={anchor}>
              <Heart aria-hidden="true" size={16} />
              {anchor}
            </span>
          ))}
        </div>
      </section>

      <section className="section veteran-section">
        <div className="section-heading">
          <p className="eyebrow">{t.veteran.eyebrow}</p>
          <h2>{t.veteran.title}</h2>
        </div>
        <div className="experiment-list">
          {t.veteran.items.map((experiment) => (
            <article key={experiment}>
              <Route aria-hidden="true" />
              <p>{experiment}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.intro}</p>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section checklist-section" id="checklist">
        <div className="section-heading">
          <p className="eyebrow">{t.checklist.eyebrow}</p>
          <h2>{t.checklist.title}</h2>
        </div>
        <div className="collection-art">
          <img alt={t.checklist.artAlt} decoding="async" loading="lazy" src={t.checklist.artImage} />
        </div>
        <div className="checklist-grid">
          {t.checklist.items.map((block) => (
            <article className="check-card" key={block.title}>
              <MapPinned aria-hidden="true" />
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-call">
        <div>
          <p className="eyebrow">{t.finalCall.eyebrow}</p>
          <h2>{t.finalCall.title}</h2>
          <p>{t.finalCall.body}</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a
            className="footer-brand-mark"
            href={BRAND.url}
            rel="noreferrer"
            target="_blank"
          >
            {BRAND.name}
          </a>
          <p>
            {t.footer.brandLead}{" "}
            <a href={BRAND.url} rel="noreferrer" target="_blank">
              {BRAND.name}
            </a>{" "}
            {t.footer.brandTail}{" "}
            <a href={AUTHOR.url} rel="noreferrer" target="_blank">
              {AUTHOR.name}
            </a>
          </p>
        </div>
        <p className="footer-disclaimer">{t.footer.disclaimer}</p>
        <div className="footer-meta">
          <span>{t.footer.aiNote}</span>
          <a href="/llms.txt">llms.txt</a>
          <a href={`/api/guide/${locale}`}>API (JSON)</a>
          <a href="/sitemap.xml">sitemap.xml</a>
          <a href={REPO_URL} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
        <div className="footer-sources" aria-label={t.footer.sourcesLabel}>
          <span>{t.footer.sourcesLabel}</span>
          {t.footer.sources.map((source) => (
            <a href={source.href} key={source.href} rel="noreferrer" target="_blank">
              {source.name}
            </a>
          ))}
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const snapToHash = () => {
                const id = decodeURIComponent(window.location.hash.slice(1));
                if (!id) return;
                const target = document.getElementById(id);
                if (!target) return;
                target.scrollIntoView({ block: "start", inline: "nearest" });
              };

              const settle = () => {
                snapToHash();
                window.setTimeout(snapToHash, 120);
                window.setTimeout(snapToHash, 420);
              };

              window.addEventListener("hashchange", settle);
              window.addEventListener("load", settle);
              if (document.readyState !== "loading") {
                settle();
              } else {
                document.addEventListener("DOMContentLoaded", settle, { once: true });
              }
            })();
          `,
        }}
      />
    </main>
  );
}
