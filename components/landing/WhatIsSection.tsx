import { SectionHeading } from "./SectionHeading";
import { WorkspacePreview } from "./WorkspacePreview";
import { whatIsCards } from "@/lib/content";

export function WhatIsSection() {
  return (
    <section id="what-agentflow-is" className="section-pad">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow="What AgentFlow Is"
              title="A premium real-estate operating system install, not another generic tool."
              description="AgentFlow gives agents and small teams a cleaner way to run lead handling, follow-up, listing admin, and day-to-day pipeline control inside one tailored workspace."
            />

            <div className="mt-8 grid gap-4">
              {whatIsCards.map((item) => (
                <article key={item.title} className="panel rounded-[1.5rem] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/70">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}
