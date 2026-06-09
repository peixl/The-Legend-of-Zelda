"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { LangSwitch } from "@/components/lang-switch";
import type { Locale } from "@/lib/i18n/config";
import type { NavLink } from "@/lib/i18n/types";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

export function MobileNav({
  links,
  label,
  menuLabel,
  closeLabel,
  locale,
  langLabel,
  langBasePath = "",
}: {
  links: NavLink[];
  label: string;
  menuLabel: string;
  closeLabel: string;
  locale: Locale;
  langLabel: string;
  /** Path suffix kept when switching locale from the drawer. */
  langBasePath?: string;
}) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawer = (
    <>
      <div
        aria-hidden="true"
        className={`mobile-nav-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <nav
        aria-label={label}
        className={`mobile-nav-panel${open ? " is-open" : ""}`}
        id="mobile-nav-panel"
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-nav-lang">
          <span>{langLabel}</span>
          <LangSwitch basePath={langBasePath} current={locale} label={langLabel} />
        </div>
      </nav>
    </>
  );

  return (
    <>
      <button
        aria-controls="mobile-nav-panel"
        aria-expanded={open}
        aria-label={open ? closeLabel : menuLabel}
        className="nav-toggle"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>
      {isClient ? createPortal(drawer, document.body) : null}
    </>
  );
}

