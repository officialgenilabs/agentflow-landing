"use client";

import { problem } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function ProblemSection() {
  const painPoints = [
    {
      title: "The WhatsApp Black Hole",
      metric: "Buried Threads",
      description:
        "Leads land on individual agent numbers. Message counts explode, conversations are forgotten, and principals have zero operational oversight. Leads slip into history without a response.",
      icon: (
        <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      subVisual: (
        <div className="mt-5 space-y-2 border-t border-border/40 pt-4 text-left">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Enquiry from Property24</span>
            <span className="text-danger font-semibold">Buried 2h ago</span>
          </div>
          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
            <div className="h-full bg-danger w-[80%]" />
          </div>
        </div>
      ),
    },
    {
      title: "The Speed-to-Lead Trap",
      metric: "47-Minute Delay",
      description:
        "Buyers contact multiple agencies simultaneously. When response times drag past 5 minutes, the probability of booking that viewing drops by 391%. By 47 minutes, they've booked with your competitor.",
      icon: (
        <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      subVisual: (
        <div className="mt-5 space-y-2 border-t border-border/40 pt-4 text-left">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted">Agent Assigned</span>
            <span className="text-muted">08:00 AM</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted">First Response</span>
            <span className="text-danger font-semibold">08:47 AM (Lost)</span>
          </div>
        </div>
      ),
    },
    {
      title: "Zero Operational Memory",
      metric: "Fragmented History",
      description:
        "No centralized qualification records. Agents pick up client calls with zero context on their budget, desired areas, or listing preferences. Every conversation is a repetitive restart.",
      icon: (
        <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subVisual: (
        <div className="mt-5 border-t border-border/40 pt-4 text-left flex items-center justify-between text-xs">
          <span className="text-muted">CRM Synchronicity</span>
          <span className="text-danger font-bold uppercase tracking-wider">Disconnected</span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative section-pad border-y border-border/30 bg-[#0A0A0A]" id="problem">
      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-danger/10 border border-danger/25 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-danger">
              Operational Pain
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl font-heading">
              {problem.headline}
            </h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">
              Real estate businesses pay heavily to generate enquiries, only to lose them to silent, post-contact administrative gaps.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Pain Matrix */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i + 1}>
              <div className="glass-card p-8 h-full flex flex-col justify-between border-border/40 bg-surface/30 backdrop-blur-md transition-all duration-300 hover:border-danger/30 hover:shadow-lg hover:shadow-danger/2">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-danger-soft">
                      {point.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-danger">
                      {point.metric}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white font-heading">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {point.description}
                  </p>
                </div>
                {point.subVisual}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stats overlay */}
        <div className="mt-16 pt-12 border-t border-border/40 grid gap-8 sm:grid-cols-3 text-center">
          {problem.stats.map((stat, i) => (
            <ScrollReveal key={stat.description} delay={i + 1}>
              <div className="flex flex-col items-center">
                <span className={`text-4xl md:text-5xl font-extrabold font-heading ${i === 2 ? "text-primary" : "text-white"}`}>
                  {stat.display}
                  <span className="text-lg font-semibold ml-0.5 text-muted">{stat.suffix}</span>
                </span>
                <p className="mt-2 text-xs font-semibold tracking-wide text-muted uppercase max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 rounded-2xl bg-surface/20 border border-border/50 p-8 max-w-3xl mx-auto text-center backdrop-blur-sm">
            <p className="text-sm font-medium leading-8 text-white md:text-base">
              "{problem.bottomLine}"
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
