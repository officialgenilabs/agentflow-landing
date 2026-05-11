import { about } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section className="section-pad" id="about">
      <div className="section-shell">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                GEN{" "}
                <span className="text-primary">I</span>{" "}
                LABS
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl font-heading">
              {about.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-6 text-lg text-muted leading-8">
              {about.description}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-4 text-lg text-white/90 leading-8 font-medium">
              {about.product}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold text-white">{about.founder}</p>
              <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted">
                <a
                  href={`mailto:${about.email}`}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {about.email}
                </a>
                <span className="hidden sm:inline text-border">·</span>
                <a
                  href={`https://${about.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  {about.website}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
