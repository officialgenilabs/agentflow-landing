import Image from "next/image";
import { proofItems } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ProofSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Before and After"
          title="Make the change in the operation easy to picture."
          description="The strongest proof on this page is clarity: what the business feels like before AgentFlow, what it feels like after, and who should actually take the next step."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel overflow-hidden rounded-[2rem] p-4 md:p-6">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.22),transparent_35%)]" />
              <div className="relative">
                <div className="overflow-hidden rounded-[1.25rem] border border-white/10 opacity-90">
                  <Image
                    src="/brand/agentflow-logo.png"
                    alt="AgentFlow brand visual"
                    width={1365}
                    height={768}
                    className="h-[320px] w-full object-cover blur-[1px] saturate-110"
                  />
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    Transformation framing
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    From missed follow-up and admin drag to a cleaner, more controlled real estate backend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {proofItems.map((item) => (
              <article key={item.title} className="panel rounded-[1.75rem] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}

            <div className="rounded-[1.75rem] border border-emerald-400/15 bg-emerald-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                Next step
              </p>
              <p className="mt-4 text-sm leading-7 text-white">
                If the current operation feels slower or messier than the brand you want to project, take the fit check and move into the intake flow.
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
