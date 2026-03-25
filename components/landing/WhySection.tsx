import Image from "next/image";
import { reasons } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function WhySection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why Gen I Labs"
              title="A premium parent brand with practical systems discipline."
              description="Gen I Labs sits behind AgentFlow as the builder of the install. The pitch is simple: premium presentation, real operational structure, and a cleaner path from chaos to control."
            />

            <div className="panel mt-8 rounded-[2rem] p-4 md:p-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/brand/geni-labs-logo.png"
                  alt="Gen I Labs"
                  width={768}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="panel rounded-[1.75rem] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                  {reason.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                  {reason.text}
                </p>
              </article>
            ))}

            <div className="rounded-[1.75rem] border border-emerald-400/15 bg-emerald-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                CTA
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                If the operation is costing speed, visibility, or follow-up discipline, use the guided path and see whether AgentFlow fits.
              </p>
              <a
                href="#fit-check"
                className="mt-5 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start Your Fit Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
