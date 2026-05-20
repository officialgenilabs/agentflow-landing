"use client";

import { ScrollReveal } from "./ScrollReveal";
import { realEstateFirstCopy } from "@/lib/content";

export function RealEstateFirst() {
  return (
    <section className="relative section-pad bg-[#0A0A0A]" id="real-estate-first">
      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-primary-soft border border-primary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              {realEstateFirstCopy.label}
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              {realEstateFirstCopy.headline}
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
              {realEstateFirstCopy.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars of real estate friction */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {realEstateFirstCopy.points.map((pt, i) => (
            <ScrollReveal key={pt.title} delay={i + 1}>
              <div className="p-8 rounded-2xl border border-border bg-surface/10 hover:border-primary/10 transition duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-primary font-heading tracking-widest uppercase">
                    Pillar 0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white font-heading tracking-wide">
                    {pt.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-muted font-medium">
                    {pt.text}
                  </p>
                </div>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/25 to-transparent" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
