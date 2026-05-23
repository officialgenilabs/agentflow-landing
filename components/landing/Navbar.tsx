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
              className="w-6 h-9 mr-2.5 transition-transform duration-500 group-hover:scale-105" 
              viewBox="0 0 800 1200" 
              fill="none"
            >
              <defs>
                <linearGradient id="mint-glow-grad-nav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C2FCE5" />
                  <stop offset="50%" stopColor="#00E599" />
                  <stop offset="100%" stopColor="#008A5E" />
                </linearGradient>
              </defs>
              <g transform="translate(100, 150)">
                <path d="M 300,50 C 450,50 550,150 550,300 C 550,450 450,550 300,550 C 150,550 50,450 50,300 C 50,150 150,50 300,50 Z" stroke="url(#mint-glow-grad-nav)" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
                <path d="M 280,100 C 380,100 480,180 510,280 C 520,310 490,330 460,310 C 430,290 370,220 280,220 C 190,220 150,280 150,350 C 150,420 190,480 280,530 C 370,580 480,630 480,750 C 480,870 380,950 280,950 C 180,950 80,870 50,770 C 40,740 70,720 100,740 C 130,760 190,830 280,830 C 370,830 410,770 410,700 C 410,630 370,570 280,520 C 190,470 80,420 80,300 C 80,180 180,100 280,100 Z" fill="url(#mint-glow-grad-nav)" />
                <path d="M 280,450 H 480 C 510,450 530,470 530,500 C 530,530 510,550 480,550 H 280 C 250,550 230,530 230,500 C 230,470 250,450 280,450 Z" fill="url(#mint-glow-grad-nav)" />
                <path d="M 180,250 C 240,190 360,190 420,250 C 440,270 420,300 395,290 C 360,275 300,275 265,290 C 240,300 220,270 180,250 Z" fill="url(#mint-glow-grad-nav)" />
                <path d="M 180,650 C 240,590 360,590 420,650 C 440,670 420,700 395,690 C 360,675 300,675 265,690 C 240,700 220,670 180,650 Z" fill="url(#mint-glow-grad-nav)" />
              </g>
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
