import { CloudRain, Flame, Moon, Mountain, Snowflake, Zap } from "lucide-react";
import type { BotwSurvival, SurvivalLaw } from "@/lib/i18n/botw-survival";

const icons: Record<SurvivalLaw["icon"], typeof CloudRain> = {
  CloudRain,
  Zap,
  Snowflake,
  Flame,
  Moon,
  Mountain,
};

/**
 * BOTW signature section: a "Laws of the Wild" board. Each law reads
 * omen → world rule → your move — framing the environment as the route
 * designer. Static/server-rendered; the flair is in the content and layout.
 */
export function BotwSurvivalBoard({ data }: { data: BotwSurvival }) {
  return (
    <section id="survival" className="bw-band bw-alt">
      <div className="bw-wrap">
        <div className="bw-section-head">
          <div>
            <p className="bw-eyebrow">{data.eyebrow}</p>
            <h2>{data.title}</h2>
          </div>
          <p className="bw-section-note">{data.note}</p>
        </div>

        <div className="bw-rules-grid">
          {data.laws.map((law) => {
            const Icon = icons[law.icon];
            return (
              <article className="bw-rule" key={law.title}>
                <span className="bw-rule-glyph">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <div>
                  <h3>{law.title}</h3>
                  <p className="bw-rule-omen">{law.omen}</p>
                  <dl>
                    <div>
                      <dt>{law.ruleLabel}</dt>
                      <dd>{law.rule}</dd>
                    </div>
                    <div>
                      <dt>{law.moveLabel}</dt>
                      <dd className="is-move">{law.move}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
