import { includedNow, notIncluded } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

function ScopeList({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "positive" | "neutral";
}) {
  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${
            tone === "positive"
              ? "bg-emerald-400/15 text-emerald-200"
              : "bg-white/5 text-slate-300"
          }`}
        >
          {tone === "positive" ? "Included" : "Not included"}
        </span>
      </div>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-[1.25rem] border px-4 py-4 text-sm ${
              tone === "positive"
                ? "border-emerald-400/15 bg-emerald-400/10 text-slate-100"
                : "border-white/10 bg-white/5 text-slate-300"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InclusionSection() {
  return (
    <section id="included-scope" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Included vs Not Included"
          title="Clear scope makes the buying decision easier."
          description="AgentFlow stays intentionally focused so buyers can quickly understand what gets installed now, what does not, and where the offer begins."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ScopeList title="Included now" items={includedNow} tone="positive" />
          <ScopeList title="Not included by default" items={notIncluded} tone="neutral" />
        </div>
      </div>
    </section>
  );
}
