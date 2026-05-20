import { hero } from "@/lib/content";
import { HeroMockup } from "./HeroMockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Precision grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c22_1px,transparent_1px),linear-gradient(to_bottom,#1c1c22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      {/* Elegant, restrained ambient glow nodes */}
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-primary/8 blur-[130px] pointer-events-none" />
      <div className="absolute -right-32 top-20 w-80 h-80 rounded-full bg-secondary/8 blur-[110px] pointer-events-none" />

      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: Copy Grid */}
          <div className="flex flex-col items-start text-left">
            {/* Premium Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {hero.badge}
            </span>

            {/* Headline with cinematic spacing */}
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4.75rem] font-heading">
              {hero.headlineTop}
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {hero.headlineBottom}
              </span>
            </h1>

            {/* Subheadline with high-legibility body text */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#E5E5E5] md:text-lg">
              {hero.subheadline}
            </p>

            {/* Premium Call to Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
              <a
                href={hero.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-pulse rounded-full bg-primary px-8 py-4.5 text-center text-xs font-extrabold uppercase tracking-widest text-[#0A0A0A] transition-all duration-300 hover:bg-white hover:scale-[1.02]"
              >
                {hero.primaryCta}
                <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-[0.65rem] font-bold">
                  {hero.primaryCtaNote}
                </span>
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 backdrop-blur-md px-7 py-4.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:border-secondary/30 hover:bg-secondary-soft"
              >
                <svg 
                  className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                </svg>
                {hero.secondaryCta}
              </a>
            </div>

            {/* Restrained trust elements */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {hero.trustIndicators.map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-xs font-semibold tracking-wide text-muted uppercase">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp Mockup / Visual Operations Scene */}
          <div className="relative w-full">
            <div className="absolute -inset-10 rounded-full bg-primary/3 blur-[80px] pointer-events-none" />
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
