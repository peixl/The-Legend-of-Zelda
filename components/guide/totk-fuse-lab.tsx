"use client";

import { useRef, useState } from "react";
import type { TotkFuseLab } from "@/lib/i18n/totk-fuse-lab";

/**
 * TOTK signature section: an interactive Fuse & Zonai bench. Pick a base
 * (weapon / shield / arrow) and the recipe table swaps to show what to fuse and
 * why; below it, a static row of Zonai device combos. Tabs use the same
 * roving-tabindex + arrow-key pattern as the route StageTabs for consistency.
 */
export function TotkFuseLab({ data }: { data: TotkFuseLab }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const clamped = (index + data.bases.length) % data.bases.length;
    setActive(clamped);
    tabRefs.current[clamped]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(data.bases.length - 1);
        break;
      default:
        break;
    }
  };

  const current = data.bases[active];

  return (
    <section id="fuse" className="bw-band bw-alt">
      <div className="bw-wrap">
        <div className="bw-section-head">
          <div>
            <p className="bw-eyebrow">{data.eyebrow}</p>
            <h2>{data.title}</h2>
          </div>
          <p className="bw-section-note">{data.note}</p>
        </div>

        <div className="bw-lab">
          <div className="bw-lab-head" role="tablist" aria-label={data.baseLabel}>
            {data.bases.map((base, index) => {
              const selected = index === active;
              return (
                <button
                  aria-controls="fusePanel"
                  aria-selected={selected}
                  className="bw-lab-tab"
                  id={`fuseTab-${base.id}`}
                  key={base.id}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  {base.name}
                  <small>{base.small}</small>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`fuseTab-${current.id}`}
            className="bw-lab-body"
            id="fusePanel"
            role="tabpanel"
          >
            <p className="bw-lab-base">{current.base}</p>
            <div className="bw-recipe-rows">
              {current.recipes.map((recipe) => (
                <div className="bw-fuse-row" key={recipe.material}>
                  <div className="bw-fuse-mat">
                    {recipe.material}
                    <small>{recipe.materialNote}</small>
                  </div>
                  <div className="bw-fuse-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="bw-fuse-effect">{recipe.effect}</div>
                </div>
              ))}
            </div>

            <div className="bw-zonai">
              <p className="bw-zonai-label">{data.zonaiLabel}</p>
              <div className="bw-zonai-grid">
                {data.zonai.map((combo) => (
                  <div className="bw-zonai-card" key={combo.title}>
                    <strong>{combo.title}</strong>
                    <span>{combo.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
