import { processSteps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="install-path" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Conversion to Install"
          title="A guided path from fit check to live system."
          description="The experience is meant to feel premium and direct: qualify intent first, collect the right inputs, then move into a tailored build and review path."
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
