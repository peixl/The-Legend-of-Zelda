import type { ComponentType, ReactNode } from "react";
import { Crown } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { GuideDictionary } from "@/lib/i18n/guide-types";
import { BRAND, REPO_URL } from "@/lib/seo/site";
import { LangSwitch } from "@/components/lang-switch";
import { MobileNav } from "@/components/mobile-nav";
import { HeroCanvas } from "@/components/guide/hero-canvas";
import { StageTabs } from "@/components/guide/stage-tabs";
import { GuideChecklist } from "@/components/guide/guide-checklist";

type GuideIcon = ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" }>;

/** Anchor ids of the standard sections, used to place the signature module. */
type SectionId = "route" | "growth" | "combat" | "food" | "beasts" | "enemies" | "checklist";

interface GuidePageProps {
  locale: Locale;
  dict: GuideDictionary;
  /** Path suffix for this guide, e.g. "/botw-guide". */
  basePath: string;
  heroVariant: "botw" | "totk";
  /** Visual theme: shifts the accent palette so each game reads distinctly. */
  theme: "botw" | "totk";
  jsonLd: object;
  /** One lucide icon per growth card, in order. */
  growthIcons: GuideIcon[];
  /** localStorage key for the checklist (kept distinct per guide). */
  storageKey: string;
  /** The other guide, linked from the nav. */
  sibling: { label: string; href: string };
  /**
   * A game-specific signature section, rendered right after `signatureAfter`.
   * This is what breaks the two guides out of a shared template — BOTW gets a
   * wilderness "rules" board, TOTK an interactive Fuse/Zonai bench.
   */
  signature?: ReactNode;
  signatureAfter?: SectionId;
}

/**
 * Shared layout for a single-game walkthrough. Reuses the site nav/footer shell
 * (`.site-nav` / `.site-footer` / LangSwitch / MobileNav) and the scoped `.bw`
 * styles. The BOTW and TOTK routes diverge through the dictionary, hero variant,
 * accent `theme`, growth icons, and a unique `signature` section placed at a
 * different point in each flow.
 */
export function GuidePage({
  locale,
  dict,
  basePath,
  heroVariant,
  theme,
  jsonLd,
  growthIcons,
  storageKey,
  sibling,
  signature,
  signatureAfter,
}: GuidePageProps) {
  const homeHref = `/${locale}`;
  const navLinks = [...dict.nav.links, { label: sibling.label, href: sibling.href }];
  const mobileLinks = [{ label: dict.nav.home, href: homeHref }, ...navLinks];
  const slot = (id: SectionId) => (signatureAfter === id ? signature : null);

  return (
    <main className={`bw bw-${theme}`} id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-nav" aria-label={dict.nav.ariaLabel}>
        <a className="brand-mark" href={homeHref}>
          <Crown aria-hidden="true" size={18} />
          {dict.nav.brand}
        </a>
        <nav className="nav-inline">
          <a href={homeHref}>{dict.nav.home}</a>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <LangSwitch basePath={basePath} current={locale} label={dict.nav.langLabel} />
          <MobileNav
            closeLabel={dict.nav.closeLabel}
            label={dict.nav.ariaLabel}
            langBasePath={basePath}
            langLabel={dict.nav.langLabel}
            links={mobileLinks}
            locale={locale}
            menuLabel={dict.nav.menuLabel}
          />
        </div>
      </header>

      <section className="bw-hero" aria-label={dict.hero.imageAlt}>
        <HeroCanvas variant={heroVariant} />
        <div className="bw-hero-inner">
          <div className="bw-hero-copy">
            <p className="bw-kicker">{dict.hero.kicker}</p>
            <h1>
              <span>{dict.hero.titleLead}</span>
              <span>{dict.hero.titleMain}</span>
              <em>{dict.hero.titleEm}</em>
            </h1>
            <p className="bw-lead">{dict.hero.lead}</p>
          </div>
          <aside className="bw-hero-panel" aria-label={dict.hero.panelTitle}>
            <h2>{dict.hero.panelTitle}</h2>
            <div className="bw-quick-stats">
              {dict.hero.stats.map((stat) => (
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
              <p className="bw-eyebrow">{dict.route.eyebrow}</p>
              <h2>{dict.route.title}</h2>
            </div>
            <p className="bw-section-note">{dict.route.note}</p>
          </div>

          <div className="bw-route-grid">
            {dict.route.cards.map((card) => (
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

          <StageTabs label={dict.route.stageLabel} stages={dict.route.stages} />
        </div>
      </section>

      {slot("route")}

      <section id="growth" className="bw-band bw-alt">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.growth.eyebrow}</p>
              <h2>{dict.growth.title}</h2>
            </div>
            <p className="bw-section-note">{dict.growth.note}</p>
          </div>

          <div className="bw-systems">
            {dict.growth.cards.map((card, index) => {
              const Icon = growthIcons[index] ?? growthIcons[growthIcons.length - 1];
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

      {slot("growth")}

      <section id="combat" className="bw-band bw-deep">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.combat.eyebrow}</p>
              <h2>{dict.combat.title}</h2>
            </div>
            <p className="bw-section-note">{dict.combat.note}</p>
          </div>

          <div className="bw-combat-layout">
            <div className="bw-drills">
              {dict.combat.drills.map((drill, index) => (
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

            <aside className="bw-controls" aria-label={dict.combat.controlsTitle}>
              <h3>{dict.combat.controlsTitle}</h3>
              <div className="bw-key-grid">
                {dict.combat.keys.map((key) => (
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

      {slot("combat")}

      <section id="food" className="bw-band">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.food.eyebrow}</p>
              <h2>{dict.food.title}</h2>
            </div>
            <p className="bw-section-note">{dict.food.note}</p>
          </div>

          <div className="bw-recipes">
            {dict.food.recipes.map((recipe) => (
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

      {slot("food")}

      <section id="beasts" className="bw-band bw-alt">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.beasts.eyebrow}</p>
              <h2>{dict.beasts.title}</h2>
            </div>
            <p className="bw-section-note">{dict.beasts.note}</p>
          </div>

          <div className="bw-beasts">
            {dict.beasts.cards.map((card) => (
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

      {slot("beasts")}

      <section id="enemies" className="bw-band bw-deep">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.enemies.eyebrow}</p>
              <h2>{dict.enemies.title}</h2>
            </div>
            <p className="bw-section-note">{dict.enemies.note}</p>
          </div>

          <div className="bw-enemies">
            {dict.enemies.cards.map((card) => (
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

      {slot("enemies")}

      <section id="checklist" className="bw-band">
        <div className="bw-wrap">
          <div className="bw-section-head">
            <div>
              <p className="bw-eyebrow">{dict.checklist.eyebrow}</p>
              <h2>{dict.checklist.title}</h2>
            </div>
            <p className="bw-section-note">{dict.checklist.note}</p>
          </div>

          <GuideChecklist groups={dict.checklist.groups} storageKey={storageKey} />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="footer-brand-mark" href={BRAND.url} rel="noreferrer" target="_blank">
            {BRAND.name}
          </a>
          <p>{dict.footer.note}</p>
        </div>
        <p className="footer-disclaimer">{dict.footer.disclaimer}</p>
        <div className="footer-meta">
          <a href={homeHref}>{dict.nav.home}</a>
          <a href={sibling.href}>{sibling.label}</a>
          <a href={`/api/guide/${locale}`}>API (JSON)</a>
          <a href={REPO_URL} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
