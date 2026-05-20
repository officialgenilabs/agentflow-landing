"use client";

import { ScrollReveal } from "./ScrollReveal";
import { governanceCopy } from "@/lib/content";

export function GovernanceSection() {
  const pillars = [
    {
      title: "Inbound-First Safety",
      description: "Our system is strictly engineered around inbound qualification. It captures incoming chats safely and answers only using pre-verified listing parameters and operational rules.",
      tag: "Safe Runtime",
    },
    {
      title: "Human-Reviewed Outbound",
      description: "No autonomous outbound calls or rogue transactional promises. Any outbound notifications, scheduling, or contract updates are reviewed by your team before dispatch.",
      tag: "100% Control",
    },
    {
      title: "Monitored Runtime Logs",
      description: "Every single qualifying path, message response, and routing trigger is written to an immutable database registry. Complete operational visibility for principals.",
      tag: "Supabase Audited",
    },
  ];

  return (
    <section className="relative section-pad border-y border-border/30 bg-[#0A0A0A]" id="governance">
      {/* Precision design details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131318_1px,transparent_1px)] bg-[size:6rem] opacity-[0.1] pointer-events-none" />

      <div className="section-shell">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left Column: Heading */}
            <div className="text-left">
              <span className="inline-block rounded-full bg-secondary-soft border border-secondary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
                {governanceCopy.label}
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading leading-tight">
                {governanceCopy.headline}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted font-medium">
                {governanceCopy.subheadline} We believe AI should serve as administrative muscle, not create brand liability or legal risk.
              </p>
            </div>

            {/* Right Column: Governance Pillars Grid */}
            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <ScrollReveal key={pillar.title} delay={idx + 1}>
                  <div className="glass-card p-6.5 border-border bg-surface/20 hover:border-secondary/20 hover:bg-surface/30 transition duration-300 flex flex-col sm:flex-row gap-5 items-start">
                    <span className="rounded-full bg-secondary-soft border border-secondary/15 px-3 py-1 text-[0.6rem] font-bold text-secondary tracking-wide uppercase shrink-0">
                      {pillar.tag}
                    </span>
                    <div>
                      <h3 className="text-md font-bold text-white font-heading tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-muted font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
