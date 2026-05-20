"use client";

import { ScrollReveal } from "./ScrollReveal";
import { pilotCopy } from "@/lib/content";

export function PilotSection() {
  return (
    <section className="relative section-pad border-y border-border/30 bg-[#0A0A0A]" id="pilot">
      {/* Dynamic line vector styling in the background */}
      <div className="absolute left-[10%] lg:left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-40 pointer-events-none" />

      <div className="section-shell">
        <ScrollReveal>
          <div className="text-left max-w-3xl mb-16">
            <span className="inline-block rounded-full bg-primary-soft border border-primary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              {pilotCopy.label}
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              {pilotCopy.headline}
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl leading-relaxed">
              {pilotCopy.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline Phase List */}
        <div className="space-y-12 max-w-4xl">
          {pilotCopy.steps.map((step, idx) => (
            <ScrollReveal key={step.phase} delay={idx + 1}>
              <div className="relative grid gap-4 lg:grid-cols-[180px_1fr] items-start pl-8 lg:pl-0">
                {/* Timeline node circle */}
                <div className="absolute left-0 lg:left-[170px] top-1.5 -translate-x-1/2 z-10 w-4 h-4 rounded-full border border-primary bg-background shadow-[0_0_10px_rgba(0,229,153,0.3)] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Left column: Phase tag */}
                <div className="text-left pr-4">
                  <span className="text-xs font-extrabold text-primary font-heading tracking-widest uppercase">
                    {step.phase}
                  </span>
                </div>

                {/* Right column: Content card */}
                <div className="glass-card p-6.5 border-border bg-surface/10 hover:border-primary/10 transition duration-300">
                  <h3 className="text-md font-bold text-white font-heading tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-muted font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
