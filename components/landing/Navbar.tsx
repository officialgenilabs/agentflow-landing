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
          {/* Wordmark with Routing Node Diamond Logo */}
          <a href="#" className="flex items-center font-heading text-lg font-bold tracking-tight text-white group">
            <svg 
              className="w-5.5 h-5.5 text-primary mr-2.5 transition-transform duration-500 group-hover:rotate-45" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 12 12 22 2 12" className="stroke-primary" />
              <polygon points="12 7 17 12 12 17 7 12" className="fill-secondary/35 stroke-secondary" />
              <circle cx="12" cy="12" r="1.5" className="fill-primary stroke-none" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
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
