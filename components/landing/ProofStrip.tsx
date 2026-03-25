import { proofStrip } from "@/lib/content";

export function ProofStrip() {
  return (
    <section className="pb-6">
      <div className="section-shell">
        <div className="panel rounded-[1.75rem] p-4 md:p-5">
          <div className="grid gap-3 md:grid-cols-5">
            {proofStrip.map((item) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
