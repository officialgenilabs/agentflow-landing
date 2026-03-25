"use client";

import { useState } from "react";
import { workspaceTabs } from "@/lib/content";

export function WorkspacePreview() {
  const [activeId, setActiveId] = useState(workspaceTabs[0]?.id ?? "leads");
  const active = workspaceTabs.find((item) => item.id === activeId) ?? workspaceTabs[0];

  return (
    <div className="panel rounded-[2rem] p-5 md:p-7">
      <div className="flex flex-wrap gap-2">
        {workspaceTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeId === tab.id
                ? "bg-emerald-400 text-slate-950"
                : "border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
              {active.kicker}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{active.title}</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="grid gap-6 p-4 md:grid-cols-[1.05fr_0.95fr] md:p-6">
          <div>
            <p className="text-sm leading-7 text-slate-300">{active.text}</p>
            <div className="mt-5 space-y-3">
              {active.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.8),rgba(5,8,22,0.92))] p-4">
            <div className="grid gap-3">
              {[
                "New lead: valuation request",
                "Follow-up due: price reduction discussion",
                "Listing copy: waiting on final features",
                "Next review: 16:00 daily pipeline check"
              ].map((item, index) => (
                <div
                  key={`${active.id}-${index}`}
                  className={`rounded-[1rem] border px-4 py-3 text-sm ${
                    index === 0
                      ? "border-emerald-400/20 bg-emerald-400/10 text-white"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
