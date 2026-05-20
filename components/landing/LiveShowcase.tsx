"use client";

import { ScrollReveal } from "./ScrollReveal";
import { WhatsAppMockup } from "./WhatsAppMockup";

export function LiveShowcase() {
  return (
    <section className="relative section-pad bg-[#0A0A0A]" id="showcase">
      {/* Refrained system grid details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1c1c22_1px,transparent_1px)] bg-[size:5rem] opacity-[0.08] pointer-events-none" />

      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-primary-soft border border-primary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Live Showcase
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              The workflow in active motion.
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
              Observe how AgentFlow AI intercepts portal triggers, qualifed leads organically over WhatsApp, and updates internal databases instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* Cinematic cockpit showcase render */}
        <ScrollReveal>
          <div className="relative mt-8">
            <WhatsAppMockup />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
