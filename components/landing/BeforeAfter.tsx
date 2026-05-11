import { beforeAfter } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function BeforeAfter() {
  return (
    <section className="section-pad" id="before-after">
      <div className="section-shell">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl font-heading">
            {beforeAfter.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* BEFORE */}
          <ScrollReveal delay={1}>
            <div className="rounded-2xl border border-danger/20 bg-danger-soft p-6 md:p-8 h-full">
              <span className="inline-block rounded-full bg-danger/20 border border-danger/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-danger mb-6">
                {beforeAfter.before.label}
              </span>
              <div className="space-y-4">
                {beforeAfter.before.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-sm text-white/80 leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* AFTER */}
          <ScrollReveal delay={2}>
            <div className="rounded-2xl border border-primary/20 bg-primary-soft p-6 md:p-8 h-full">
              <span className="inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                {beforeAfter.after.label}
              </span>
              <div className="space-y-4">
                {beforeAfter.after.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-primary leading-6">{item}</p>
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
