"use client";

export function StickyCtaBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="section-shell">
        <div className="pointer-events-auto ml-auto flex w-full max-w-3xl flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/88 px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-emerald-200/70">
              AgentFlow fit path
            </p>
            <p className="mt-1 text-sm text-slate-200 md:text-base">
              Start the fit check, then move into intake and booking if the install fits.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#fit-check"
              className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Start Fit Check
            </a>
            <a
              href="#example-workspace"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              See Example Workspace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
