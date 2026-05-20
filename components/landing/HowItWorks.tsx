"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Capture",
      subtitle: "Instant Ingest",
      text: "Every WhatsApp message and Property24 portal lead is captured in under 45 seconds, instantly spinning up an isolated operational container.",
      highlight: "Cyber Ingress",
    },
    {
      num: "02",
      title: "Qualify",
      subtitle: "Dynamic Scoring",
      text: "Our engine qualified buyer intents—inquiring on budget boundaries, move-in timelines, and bond/cash status before handoff.",
      highlight: "High Accuracy",
    },
    {
      num: "03",
      title: "Route",
      subtitle: "Intelligent Hand-off",
      text: "Structured client data is synced with your CRM, and hot opportunities are automatically routed to the correct designated agent.",
      highlight: "Zero Leaks",
    },
    {
      num: "04",
      title: "Schedule",
      subtitle: "Direct Calendar Sync",
      text: "The lead is matched with active listings, and calendar booking interfaces are presented to lock in viewing slots automatically.",
      highlight: "Autopilot Appointments",
    },
    {
      num: "05",
      title: "Govern",
      subtitle: "Human Verification",
      text: "The entire lifecycle runs inside a monitored sandbox. Principals retain final authorization rights over outbound transactional agreements.",
      highlight: "100% Controlled",
    },
  ];

  return (
    <section className="relative section-pad bg-[#0A0A0A]" id="how-it-works">
      {/* Visual routing background graph */}
      <div className="absolute right-0 top-1/4 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,var(--primary-soft)_0%,transparent_70%)] opacity-[0.1] pointer-events-none" />

      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-primary-soft border border-primary/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              The Operational Layer
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              {howItWorks.headline}
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              AgentFlow AI replaces administrative chaos with a predictable, governed sequence that ensures no opportunity disappears.
            </p>
          </div>
        </ScrollReveal>

        {/* Operational Steps Timeline Grid */}
        <div className="mt-16 relative grid gap-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i + 1}>
              <div className="relative group p-6 glass-card h-full flex flex-col justify-between border-border bg-surface/20 transition-all duration-300 hover:border-primary/20 hover:bg-surface/40">
                <div>
                  {/* Visual Node Pin */}
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-extrabold tracking-tight text-[#1C1C22] group-hover:text-primary/20 transition duration-300 font-heading">
                      {step.num}
                    </span>
                    <span className="rounded-full bg-primary-soft/40 border border-primary/10 px-2 py-0.5 text-[0.65rem] font-bold text-primary tracking-wide">
                      {step.highlight}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white font-heading tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.7rem] font-bold text-secondary uppercase tracking-widest">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-xs leading-6 text-muted font-medium">
                    {step.text}
                  </p>
                </div>

                {/* Connection Indicators (Desktop only) */}
                {i < 4 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dynamic Interactive Panel Mockup */}
        <ScrollReveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Column A: Inbound */}
            <div className="glass-card p-8 border-border bg-surface/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-soft text-primary font-bold text-sm">
                  📱
                </span>
                <h4 className="text-md font-bold text-white font-heading tracking-wide">
                  {howItWorks.inbound.title}
                </h4>
              </div>
              <ul className="space-y-4">
                {howItWorks.inbound.steps.map((s, idx) => (
                  <li key={idx} className="flex gap-3 text-xs text-muted leading-relaxed font-medium">
                    <span className="w-5 h-5 rounded-full border border-primary/25 bg-primary-soft/40 flex items-center justify-center text-[0.65rem] font-bold text-primary flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Portal Ingress */}
            <div className="glass-card p-8 border-border bg-surface/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-soft text-secondary font-bold text-sm">
                  🛡️
                </span>
                <h4 className="text-md font-bold text-white font-heading tracking-wide">
                  {howItWorks.proactive.title}
                </h4>
              </div>
              <ul className="space-y-4">
                {howItWorks.proactive.steps.map((s, idx) => (
                  <li key={idx} className="flex gap-3 text-xs text-muted leading-relaxed font-medium">
                    <span className="w-5 h-5 rounded-full border border-secondary/25 bg-secondary-soft/40 flex items-center justify-center text-[0.65rem] font-bold text-secondary flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
