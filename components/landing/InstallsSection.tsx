import { installItems } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function InstallsSection() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What AgentFlow Installs"
          title="The core systems that make the business easier to run."
          description="Each piece is there to improve speed-to-lead, tighten follow-up, reduce admin drag, and give the team a cleaner operating rhythm."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {installItems.map((item, index) => (
            <article key={item.title} className="panel group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-emerald-300/20">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-200">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
