import { standardPricing } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function StandardPricing() {
  return (
    <section className="section-pad" id="pricing">
      <div className="section-shell">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-5xl font-heading">
            {standardPricing.headline}
          </h2>
          <p className="mt-4 text-center text-sm text-muted max-w-xl mx-auto">
            {standardPricing.note}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {standardPricing.tiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i + 1}>
              <div className="glass-card p-6 h-full flex flex-col transition hover:-translate-y-1 hover:border-border/60 opacity-80">
                <p className="text-lg font-bold text-white font-heading">{tier.name}</p>
                <p className="text-xs text-muted mt-1">{tier.description}</p>
                <p className="mt-5 text-3xl font-bold text-white">{tier.setup}</p>
                <p className="text-xs text-muted">setup</p>
                <p className="mt-1 text-lg font-semibold text-muted">{tier.monthly}</p>

                <div className="mt-6 pt-5 border-t border-border space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
