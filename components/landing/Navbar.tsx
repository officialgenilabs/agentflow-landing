"use client";

import { useState, useEffect } from "react";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

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
          {/* Wordmark with DNA Monogram Logo */}
          <a href="#" className="flex items-center font-heading text-lg font-bold tracking-tight text-white group">
            <Logo 
              size={24}
              className="mr-2 transition-transform duration-500 group-hover:scale-105" 
            />
            <span className="tracking-wide">GEN <span className="text-primary font-extrabold">I</span> LABS</span>
          </a>

          {/* Center badge – desktop */}
          <div className="hidden md:flex">
            <span className="rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary font-heading tracking-wider uppercase">
              {nav.badge}
            </span>
          </div>

          {/* CTA – desktop */}
          <div className="hidden md:flex">
            <a
              href={nav.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-[#0A0A0A] uppercase tracking-wider transition duration-300 hover:bg-white hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
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
            <span className="rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary font-heading tracking-wider uppercase">
              {nav.badge}
            </span>
            <a
              href={nav.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-primary px-6 py-3 text-xs font-bold text-[#0A0A0A] uppercase tracking-wider transition hover:bg-white"
            >
              {nav.ctaText}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
