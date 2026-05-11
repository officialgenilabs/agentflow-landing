import { betaOffer, betaPricing, siteConfig } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function BetaOffer() {
  return (
    <section className="section-pad" id="beta">
      <div className="section-shell">
        {/* Animated gradient border wrapper */}
        <div className="gradient-border-wrap">
          <div className="bg-background p-6 md:p-12">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-block rounded-full bg-primary-soft border border-primary/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {betaOffer.label}
                </span>

                <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl font-heading max-w-4xl mx-auto">
                  {betaOffer.headline}
                </h2>

                <p className="mt-5 text-lg text-muted max-w-2xl mx-auto leading-8">
                  {betaOffer.subheadline}
                </p>
              </div>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                {betaOffer.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-white/90">{feature}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Pricing comparison */}
            <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {betaPricing.map((tier, i) => (
                <ScrollReveal key={tier.id} delay={i + 1}>
                  <div
                    className={`rounded-2xl p-6 text-center transition hover:-translate-y-1 ${
                      tier.highlight
                        ? "pricing-highlight scale-105"
                        : "border border-border bg-surface opacity-60"
                    }`}
                  >
                    {tier.badge && (
                      <span className="inline-block rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary mb-4">
                        {tier.badge}
                      </span>
                    )}
                    <p className={`text-lg font-bold font-heading ${tier.highlight ? "text-white" : "text-muted"}`}>
                      {tier.name}
                    </p>
                    <p className={`mt-3 text-3xl font-bold ${tier.strikethrough ? "line-through text-muted/50" : "text-white"}`}>
                      {tier.setup}
                    </p>
                    <p className={`text-sm ${tier.strikethrough ? "line-through text-muted/50" : "text-muted"}`}>
                      setup
                    </p>
                    <p className={`mt-2 text-xl font-semibold ${tier.strikethrough ? "line-through text-muted/50" : "text-white"}`}>
                      {tier.monthly}
                    </p>
                    {tier.features.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {tier.features.map((f) => (
                          <p key={f} className="text-sm text-secondary font-medium">{f}</p>
                        ))}
                      </div>
                    )}
                    {tier.cta && (
                      <a
                        href={tier.id === "enterprise" ? `mailto:${siteConfig.email}` : siteConfig.calendlyUrl}
                        target={tier.id === "enterprise" ? undefined : "_blank"}
                        rel={tier.id === "enterprise" ? undefined : "noreferrer"}
                        className={`mt-6 inline-block rounded-full px-6 py-3 text-sm font-bold transition ${
                          tier.highlight
                            ? "bg-primary text-white hover:bg-primary/90 cta-pulse"
                            : "border border-border text-muted hover:text-white hover:border-primary/30"
                        }`}
                      >
                        {tier.cta}
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Guarantee */}
            <ScrollReveal>
              <div className="mt-10 rounded-2xl border border-secondary/20 bg-secondary-soft p-6 max-w-3xl mx-auto text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  The 7-day guarantee
                </p>
                <p className="text-base text-white/90 leading-7">
                  {betaOffer.guarantee}
                </p>
              </div>
            </ScrollReveal>

            {/* Main CTA */}
            <ScrollReveal>
              <div className="mt-10 text-center">
                <a
                  href={betaOffer.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse inline-block rounded-full bg-primary px-10 py-4 text-lg font-bold text-white transition hover:bg-primary/90"
                >
                  {betaOffer.ctaText}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
