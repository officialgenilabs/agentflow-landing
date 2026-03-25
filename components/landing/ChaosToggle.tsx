"use client";

import { useState } from "react";
import { chaosModes } from "@/lib/content";

export function ChaosToggle() {
  const [activeId, setActiveId] = useState(chaosModes[0]?.id ?? "chaos");
  const active = chaosModes.find((item) => item.id === activeId) ?? chaosModes[0];

  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
        {chaosModes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setActiveId(mode.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeId === mode.id
                ? "bg-emerald-400 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
        <p className="text-sm uppercase tracking-[0.22em] text-emerald-200/70">
          {active.label}
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          {active.headline}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          {active.description}
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {active.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
            >
              {bullet}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
