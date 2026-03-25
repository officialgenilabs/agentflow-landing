import { workspaceExamples } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ExampleWorkspaceSection() {
  return (
    <section id="example-workspace" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Example Workspace"
          title="See the kind of workspace your install is built from."
          description="These are example AgentFlow template views designed to make the product feel visible and concrete. They are sample/demo screens, not live client-result claims."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {workspaceExamples.map((item) => (
            <article key={item.title} className="panel overflow-hidden rounded-[1.9rem] p-4 md:p-5">
              <div className="rounded-[1.45rem] border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="hidden gap-2 sm:flex">
                    <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/15" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(5,8,22,0.96))]">
                  <div className="grid grid-cols-4 gap-px bg-white/5 text-[0.72rem] text-slate-300">
                    {item.chips.map((chip) => (
                      <div key={`${item.title}-${chip}`} className="bg-slate-950/80 px-3 py-3 font-semibold text-slate-100">
                        {chip}
                      </div>
                    ))}
                    {item.rows.flatMap((row, rowIndex) =>
                      row.map((value, columnIndex) => (
                        <div
                          key={`${item.title}-${rowIndex}-${columnIndex}`}
                          className={`px-3 py-3 ${
                            rowIndex === 0
                              ? "bg-emerald-400/10 text-white"
                              : "bg-slate-950/70"
                          }`}
                        >
                          {value}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3 px-1">
                <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="rounded-[1.15rem] border border-emerald-400/15 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-slate-100">
                  {item.whyItMatters}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
