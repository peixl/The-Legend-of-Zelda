"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { GuideDictionary } from "@/lib/i18n/guide-types";

type Group = GuideDictionary["checklist"]["groups"][number];

// Treat localStorage as an external store so reads stay SSR-safe (no hydration
// gap) and ticks sync across tabs — instead of a setState-in-effect. The key is
// passed per guide so BOTW and TOTK progress are stored independently.
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

/** Progress checklist persisted to localStorage under `storageKey`. */
export function GuideChecklist({
  groups,
  storageKey,
}: {
  groups: Group[];
  storageKey: string;
}) {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(storageKey) ?? "";
      } catch {
        return "";
      }
    },
    () => "",
  );

  const checked = useMemo<Record<string, boolean>>(() => {
    if (!raw) return {};
    try {
      return JSON.parse(raw) as Record<string, boolean>;
    } catch {
      return {};
    }
  }, [raw]);

  const toggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Ignore write failures (private mode, quota); UI updates won't persist.
    }
    emitChange();
  };

  return (
    <div className="bw-checklist">
      {groups.map((group) => (
        <article className="bw-check-card" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="bw-task-list">
            {group.tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    checked={Boolean(checked[task.id])}
                    onChange={() => toggle(task.id)}
                    type="checkbox"
                  />
                  <span>{task.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
