export function CtaBand() {
  return (
    <section id="cta-band" className="section-pad pt-2">
      <div className="section-shell">
        <div className="panel overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                Guided next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                If the backend is the bottleneck, start the fit check now.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                The page qualifies intent first, then routes relevant buyers into the intake and booking flow without making the CTA feel heavy.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#fit-check"
                className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start Your Fit Check
              </a>
              <a
                href="#included-scope"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Review Install Scope
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
