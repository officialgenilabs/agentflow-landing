import { processSteps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="install-path" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Guided Process"
          title="One clear path from fit check to install."
          description="The process is designed to qualify intent first, gather the right inputs second, and only then move into the strategy call and build conversation."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="panel rounded-[1.75rem] p-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-emerald-200/70">
                {item.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
