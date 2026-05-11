import { hero } from "@/lib/content";
import { WhatsAppMockup } from "./WhatsAppMockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Ambient orbs */}
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 top-40 w-64 h-64 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-medium text-primary/90">
              {hero.badge}
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl xl:text-[5.2rem]">
              {hero.headlineTop}
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {hero.headlineBottom}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted md:text-xl">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={hero.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-pulse rounded-full bg-primary px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-primary/90"
              >
                {hero.primaryCta}{" "}
                <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {hero.primaryCtaNote}
                </span>
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary/30 hover:bg-primary-soft"
              >
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {hero.trustIndicators.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-muted">
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp Mockup */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/5 blur-[60px] pointer-events-none" />
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
