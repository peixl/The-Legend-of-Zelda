"use client";

import { useRef, useState } from "react";
import type { BotwGuideDictionary } from "@/lib/i18n/botw-guide";

type Stage = BotwGuideDictionary["route"]["stages"][number];

function ordinal(index: number) {
  return String(index + 1).padStart(2, "0");
}

/**
 * Stage switcher for the route section. Improves on the original click-only
 * tabs with a proper roving-tabindex + arrow-key tablist (WAI-ARIA pattern).
 */
export function StageTabs({ stages, label }: { stages: Stage[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const clamped = (index + stages.length) % stages.length;
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
        focusTab(stages.length - 1);
        break;
      default:
        break;
    }
  };

  const panel = stages[active].panel;

  return (
    <div className="bw-stage-tool">
      <div className="bw-segments" role="tablist" aria-label={label}>
        {stages.map((stage, index) => {
          const selected = index === active;
          return (
            <button
              aria-controls="stagePanel"
              aria-selected={selected}
              className="bw-segment"
              id={`stageTab-${stage.id}`}
              key={stage.id}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              <span>{stage.name}</span>
              <small>{stage.small}</small>
            </button>
          );
        })}
      </div>
      <div
        aria-labelledby={`stageTab-${stages[active].id}`}
        className="bw-stage-panel"
        id="stagePanel"
        role="tabpanel"
        tabIndex={0}
      >
        <h3>{panel.title}</h3>
        <p>{panel.intro}</p>
        <div className="bw-columns">
          <div>
            <p className="bw-eyebrow">{panel.goalsLabel}</p>
            <ul className="bw-mini-list">
              {panel.goals.map((item, index) => (
                <li key={item}>
                  <b>{ordinal(index)}</b>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="bw-eyebrow">{panel.avoidLabel}</p>
            <ul className="bw-mini-list">
              {panel.avoid.map((item, index) => (
                <li key={item}>
                  <b>{ordinal(index)}</b>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
