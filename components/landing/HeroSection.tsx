import Image from "next/image";
import { audienceCards, featuredStory, hero } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-6 md:pb-28">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="grid-fade" />
      <div className="section-shell">
        <div className="flex items-center justify-between gap-6 py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <Image
                src="/brand/agentflow-logo.png"
                alt="AgentFlow by Gen I Labs"
                width={52}
                height={52}
                className="h-10 w-10 rounded-xl object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Gen I Labs
              </p>
              <p className="text-sm text-slate-300">Premium real estate systems</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#what-agentflow-is"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              {hero.secondaryCta}
            </a>
            <a
              href="#fit-check"
              className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300/40 hover:bg-emerald-300/15"
            >
              {hero.primaryCta}
            </a>
          </div>
        </div>

        <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="hero-title mt-6 max-w-5xl text-5xl text-white md:text-7xl xl:text-[5.6rem]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#fit-check"
                className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#what-agentflow-is"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                {hero.secondaryCta}
              </a>
              <a
                href="#install-path"
                className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5"
              >
                {hero.tertiaryCta}
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Three quick questions. Guided intake. Then the strategy call.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {hero.trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {audienceCards.map((item) => (
                <article key={item.title} className="panel rounded-[1.5rem] px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-100">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative space-y-5">
            <div className="panel spotlight-card rounded-[2rem] p-4 shadow-glow md:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                      Built to tighten the backend
                    </p>
                    <h2 className="mt-3 max-w-sm text-2xl font-semibold text-white md:text-3xl">
                      A cleaner pipeline, sharper follow-up, and less admin drag around every lead.
                    </h2>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-2">
                    <Image
                      src="/brand/geni-labs-logo.png"
                      alt="Gen I Labs"
                      width={72}
                      height={72}
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {hero.metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/70">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-emerald-400/15 bg-emerald-400/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    Outcome
                  </p>
                  <p className="mt-2 text-base leading-7 text-white">
                    Replace reactive lead handling with a cleaner operating system your team can actually run every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel rounded-[1.75rem] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                {featuredStory.title}
              </p>
              <div className="mt-4 grid gap-3">
                {featuredStory.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
