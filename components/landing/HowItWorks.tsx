import { howItWorks } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function HowItWorks() {
  return (
    <section className="section-pad" id="how-it-works">
      <div className="section-shell">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl font-heading">
            {howItWorks.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Inbound flow */}
          <ScrollReveal delay={1}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-soft text-lg">
                  {howItWorks.inbound.icon}
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {howItWorks.inbound.title}
                </h3>
              </div>
              <div className="space-y-0">
                {howItWorks.inbound.steps.map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < howItWorks.inbound.steps.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent my-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted pb-5 pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Proactive flow */}
          <ScrollReveal delay={2}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-soft text-lg">
                  {howItWorks.proactive.icon}
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {howItWorks.proactive.title}
                </h3>
              </div>
              <div className="space-y-0">
                {howItWorks.proactive.steps.map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < howItWorks.proactive.steps.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-secondary/40 to-transparent my-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted pb-5 pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
