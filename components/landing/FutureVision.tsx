"use client";

import { ScrollReveal } from "./ScrollReveal";
import { futureVisionCopy } from "@/lib/content";

export function FutureVision() {
  return (
    <section className="relative section-pad bg-[#0A0A0A]" id="future-vision">
      {/* Restrained background visual indicators representing multiple agents */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[radial-gradient(ellipse_at_center,var(--secondary-soft)_0%,transparent_80%)] opacity-[0.06] pointer-events-none" />

      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-secondary-soft border border-secondary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
              {futureVisionCopy.label}
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              {futureVisionCopy.headline}
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
              {futureVisionCopy.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars of future scale */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {futureVisionCopy.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i + 1}>
              <div className="glass-card p-8 border-border bg-surface/10 hover:border-secondary/20 transition duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] font-bold text-secondary tracking-widest uppercase">
                    Core Asset 0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white font-heading tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-muted font-medium">
                    {item.text}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-[0.6rem] font-bold uppercase tracking-widest text-muted">
                  <span>Development Track</span>
                  <span className="text-secondary">● Active Research</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
