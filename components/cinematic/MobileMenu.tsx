"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__trigger"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-navigation"
        className="mobile-menu__panel"
        data-open={open ? "true" : "false"}
      >
        <nav aria-label="Mobile navigation">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mobile-menu__link"
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
