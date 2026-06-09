import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Crown,
  Flame,
  Heart,
  MapPinned,
  Shield,
  Sparkles,
  Sword,
} from "lucide-react";
import {
  isLocale,
  locales,
  ogLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getBotwGuide } from "@/lib/i18n/botw-guide";
import { buildBotwGuideJsonLd } from "@/lib/seo/jsonld";
import {
  BRAND,
  OG_IMAGE,
  REPO_URL,
  SITE_URL,
} from "@/lib/seo/site";
import { LangSwitch } from "@/components/lang-switch";
import { MobileNav } from "@/components/mobile-nav";
import { HeroCanvas } from "./hero-canvas";
import { StageTabs } from "./stage-tabs";
import { GuideChecklist } from "./guide-checklist";

const BASE_PATH = "/botw-guide";

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
  const g = getBotwGuide(lang);
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

const growthIcons = [Heart, Shield, Flame, Sword, MapPinned, Sparkles];

export default async function BotwGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const g = getBotwGuide(locale);
  const jsonLd = buildBotwGuideJsonLd(locale, g);
  const homeHref = `/${locale}`;
  const mobileLinks = [{ label: g.nav.home, href: homeHref }, ...g.nav.links];

  return (
    <main className="bw" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-nav" aria-label={g.nav.ariaLabel}>
        <a className="brand-mark" href={homeHref}>
          <Crown aria-hidden="true" size={18} />
          {g.nav.brand}
        </a>
        <nav className="nav-inline">
          <a href={homeHref}>{g.nav.home}</a>
          {g.nav.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <LangSwitch basePath={BASE_PATH} current={locale} label={g.nav.langLabel} />
          <MobileNav
            closeLabel={g.nav.closeLabel}
            label={g.nav.ariaLabel}
            langBasePath={BASE_PATH}
            langLabel={g.nav.langLabel}
            links={mobileLinks}
            locale={locale}
            menuLabel={g.nav.menuLabel}
          />
        </div>
      </header>

      <section className="bw-hero" aria-label={g.hero.imageAlt}>
        <HeroCanvas />
        <div className="bw-hero-inner">
          <div className="bw-hero-copy">
            <p className="bw-kicker">{g.hero.kicker}</p>
            <h1>
              <span>{g.hero.titleLead}</span>
              <span>{g.hero.titleMain}</span>
              <em>{g.hero.titleEm}</em>
            </h1>
            <p className="bw-lead">{g.hero.lead}</p>
          </div>
          <aside className="bw-hero-panel" aria-label={g.hero.panelTitle}>
            <h2>{g.hero.panelTitle}</h2>
            <div className="bw-quick-stats">
              {g.hero.stats.map((stat) => (
                <div className="bw-quick-stat" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="route" className="bw-band">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.route.eyebrow}</p>
              <h2>{g.route.title}</h2>
            </div>
            <p className="bw-section-note">{g.route.note}</p>
          </div>

          <div className="bw-route-grid">
            {g.route.cards.map((card) => (
              <article className="bw-route-card" key={card.title}>
                <span className="bw-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ol>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>

          <StageTabs label={g.route.stageLabel} stages={g.route.stages} />
        </div>
      </section>

      <section id="growth" className="bw-band bw-alt">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.growth.eyebrow}</p>
              <h2>{g.growth.title}</h2>
            </div>
            <p className="bw-section-note">{g.growth.note}</p>
          </div>

          <div className="bw-systems">
            {g.growth.cards.map((card, index) => {
              const Icon = growthIcons[index] ?? Sparkles;
              return (
                <article className="bw-system-card" key={card.title}>
                  <div className="bw-iconline">
                    <span className="bw-badge">{card.badge}</span>
                    <span className="bw-icon">
                      <Icon aria-hidden="true" size={18} />
                    </span>
                  </div>
                  <h3>{card.title}</h3>
                  <ol className="bw-steps">
                    {card.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="combat" className="bw-band bw-deep">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.combat.eyebrow}</p>
              <h2>{g.combat.title}</h2>
            </div>
            <p className="bw-section-note">{g.combat.note}</p>
          </div>

          <div className="bw-combat-layout">
            <div className="bw-drills">
              {g.combat.drills.map((drill, index) => (
                <details key={drill.summary} open={index === 0}>
                  <summary>{drill.summary}</summary>
                  <div className="bw-detail-body">
                    {drill.intro}
                    <ol>
                      {drill.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </details>
              ))}
            </div>

            <aside className="bw-controls" aria-label={g.combat.controlsTitle}>
              <h3>{g.combat.controlsTitle}</h3>
              <div className="bw-key-grid">
                {g.combat.keys.map((key) => (
                  <div className="bw-key" key={key.key}>
                    <strong>{key.key}</strong>
                    <span>{key.desc}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="food" className="bw-band">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.food.eyebrow}</p>
              <h2>{g.food.title}</h2>
            </div>
            <p className="bw-section-note">{g.food.note}</p>
          </div>

          <div className="bw-recipes">
            {g.food.recipes.map((recipe) => (
              <article className="bw-recipe-card" key={recipe.title}>
                <span className="bw-badge">{recipe.badge}</span>
                <h3>{recipe.title}</h3>
                <p>{recipe.text}</p>
                <div className="bw-materials">{recipe.materials}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beasts" className="bw-band bw-alt">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.beasts.eyebrow}</p>
              <h2>{g.beasts.title}</h2>
            </div>
            <p className="bw-section-note">{g.beasts.note}</p>
          </div>

          <div className="bw-beasts">
            {g.beasts.cards.map((card) => (
              <article className="bw-beast-card" data-order={card.order} key={card.title}>
                <span className="bw-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ol>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enemies" className="bw-band bw-deep">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.enemies.eyebrow}</p>
              <h2>{g.enemies.title}</h2>
            </div>
            <p className="bw-section-note">{g.enemies.note}</p>
          </div>

          <div className="bw-enemies">
            {g.enemies.cards.map((card) => (
              <article className="bw-enemy-card" key={card.title}>
                <span className="bw-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ol>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="bw-band">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{g.checklist.eyebrow}</p>
              <h2>{g.checklist.title}</h2>
            </div>
            <p className="bw-section-note">{g.checklist.note}</p>
          </div>

          <GuideChecklist groups={g.checklist.groups} />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="footer-brand-mark" href={BRAND.url} rel="noreferrer" target="_blank">
            {BRAND.name}
          </a>
          <p>{g.footer.note}</p>
        </div>
        <p className="footer-disclaimer">{g.footer.disclaimer}</p>
        <div className="footer-meta">
          <a href={homeHref}>{g.nav.home}</a>
          <a href={`/api/guide/${locale}`}>API (JSON)</a>
          <a href="/sitemap.xml">sitemap.xml</a>
          <a href={REPO_URL} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
