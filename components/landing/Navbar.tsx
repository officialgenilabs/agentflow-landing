"use client";

import { useState, useEffect } from "react";
import { nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a href="#" className="font-heading text-lg font-bold tracking-tight text-white">
            GEN{" "}
            <span className="text-purple">I</span>{" "}
            LABS
          </a>

          {/* Center badge – desktop */}
          <div className="hidden md:flex">
            <span className="rounded-full border border-purple/30 bg-purple-soft px-4 py-1.5 text-sm font-medium text-purple font-heading">
              {nav.badge}
            </span>
          </div>

          {/* CTA – desktop */}
          <div className="hidden md:flex">
            <a
              href={nav.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple/90 hover:shadow-lg hover:shadow-purple/25"
            >
              {nav.ctaText}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl pb-6 pt-4 flex flex-col gap-4 items-center">
            <span className="rounded-full border border-purple/30 bg-purple-soft px-4 py-1.5 text-sm font-medium text-purple font-heading">
              {nav.badge}
            </span>
            <a
              href={nav.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white"
            >
              {nav.ctaText}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
