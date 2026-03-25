import { installItems } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function InstallsSection() {
  return (
    <section id="what-gets-installed" className="section-pad pt-2">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What Gets Installed"
          title="A more concrete operating system, not a vague promise."
          description="AgentFlow is built around visible operational modules so buyers can understand exactly what gets installed and why it changes the day-to-day workflow."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {installItems.map((item, index) => (
            <article
              key={item.title}
              className="panel group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-emerald-300/20"
            >
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
