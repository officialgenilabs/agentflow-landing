"use client";

import { useMemo, useState } from "react";

const presets = [
  {
    id: "solo",
    label: "Solo Agent",
    leads: 24,
    commission: 8500,
    delay: 35,
    missed: 28,
    closeRate: 3.2
  },
  {
    id: "team",
    label: "Growing Team",
    leads: 52,
    commission: 11000,
    delay: 48,
    missed: 34,
    closeRate: 3.8
  },
  {
    id: "luxury",
    label: "Premium Desk",
    leads: 18,
    commission: 18000,
    delay: 22,
    missed: 20,
    closeRate: 4.6
  }
] as const;

type Preset = (typeof presets)[number];

type CalculatorState = {
  monthlyLeads: number;
  avgCommission: number;
  responseDelay: number;
  missedFollowUp: number;
  closeRate: number;
};

const defaultPreset = presets[1];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1
});

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function applyPreset(preset: Preset): CalculatorState {
  return {
    monthlyLeads: preset.leads,
    avgCommission: preset.commission,
    responseDelay: preset.delay,
    missedFollowUp: preset.missed,
    closeRate: preset.closeRate
  };
}

export function LeadLeakCalculator() {
  const [activePreset, setActivePreset] = useState<Preset["id"]>(defaultPreset.id);
  const [values, setValues] = useState<CalculatorState>(applyPreset(defaultPreset));

  const responsePenalty = clamp((values.responseDelay - 5) / 115, 0, 1) * 0.28;
  const followUpPenalty = clamp(values.missedFollowUp / 100, 0, 1) * 0.42;
  const modeledLeakShare = clamp(0.08 + responsePenalty + followUpPenalty, 0.12, 0.72);
  const recoverableShare = clamp(0.18 + responsePenalty + followUpPenalty * 0.9, 0.12, 0.68);

  const monthlyLeadsAtRisk = Math.round(values.monthlyLeads * modeledLeakShare);
  const monthlyDealsAtRisk = values.monthlyLeads * (values.closeRate / 100) * recoverableShare;
  const annualDealsAtRisk = monthlyDealsAtRisk * 12;
  const monthlyRevenueLeak = monthlyDealsAtRisk * values.avgCommission;
  const annualRevenueLeak = monthlyRevenueLeak * 12;
  const dailyLeak = annualRevenueLeak / 365;
  const pipelineProtected = 100 - Math.round(modeledLeakShare * 100);
  const leadDriftPerWeek = Math.max(1, Math.round(monthlyLeadsAtRisk / 4));
  const scoreAngle = `${pipelineProtected * 3.6}deg`;

  const leakSummary = useMemo(
    () => [
      {
        label: "Monthly leak",
        value: currencyFormatter.format(monthlyRevenueLeak)
      },
      {
        label: "Pipeline protected",
        value: `${pipelineProtected}%`
      }
    ],
    [monthlyRevenueLeak, pipelineProtected]
  );

  function setField(field: keyof CalculatorState, value: number) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handlePreset(preset: Preset) {
    setActivePreset(preset.id);
    setValues(applyPreset(preset));
  }

  return (
    <section className="section-pad pt-2">
      <div className="section-shell">
        <div className="lead-leak-shell overflow-hidden rounded-[2.25rem] border border-white/10">
          <div className="lead-leak-orb lead-leak-orb-left" />
          <div className="lead-leak-orb lead-leak-orb-right" />
          <div className="relative grid gap-8 px-5 py-6 md:px-8 md:py-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <div>
              <span className="eyebrow">Lead Leak Calculator</span>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Quantify the revenue your follow-up gaps are quietly leaking.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                This sits inside the AgentFlow conversation on purpose. If the backend is slow,
                scattered, or inconsistent, the leak is usually bigger than it feels day to day.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePreset(preset)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activePreset === preset.id
                        ? "bg-white text-slate-950"
                        : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                Adjust the sliders to model the chaos tax in your current workflow.
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <CalculatorField
                  label="Monthly inbound leads"
                  value={values.monthlyLeads}
                  display={`${values.monthlyLeads}`}
                  min={6}
                  max={120}
                  step={1}
                  onChange={(value) => setField("monthlyLeads", value)}
                />
                <CalculatorField
                  label="Average commission per deal"
                  value={values.avgCommission}
                  display={currencyFormatter.format(values.avgCommission)}
                  min={2000}
                  max={30000}
                  step={500}
                  onChange={(value) => setField("avgCommission", value)}
                />
                <CalculatorField
                  label="Average first-response delay"
                  value={values.responseDelay}
                  display={`${values.responseDelay} min`}
                  min={2}
                  max={180}
                  step={1}
                  onChange={(value) => setField("responseDelay", value)}
                />
                <CalculatorField
                  label="Follow-up missed or delayed"
                  value={values.missedFollowUp}
                  display={`${values.missedFollowUp}%`}
                  min={5}
                  max={70}
                  step={1}
                  onChange={(value) => setField("missedFollowUp", value)}
                />
                <div className="sm:col-span-2">
                  <CalculatorField
                    label="Current close rate from inbound"
                    value={values.closeRate}
                    display={`${numberFormatter.format(values.closeRate)}%`}
                    min={1}
                    max={8}
                    step={0.1}
                    onChange={(value) => setField("closeRate", value)}
                  />
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
                Directional model only. It is designed to sharpen the conversation around missed
                follow-up, slow response, and pipeline drag, not to act as a guarantee.
              </p>
            </div>

            <div className="lead-leak-board rounded-[2rem] p-4 md:p-5">
              <div className="space-y-4">
                <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-5 md:p-7">
                  <p className="text-xs uppercase tracking-[0.26em] text-emerald-200/70">
                    Modeled leak per year
                  </p>
                  <p className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
                    {currencyFormatter.format(annualRevenueLeak)}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    Based on your current lead volume, response speed, follow-up leakage, and close
                    rate, this is the revenue AgentFlow is designed to help protect.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {leakSummary.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.35rem] border border-white/10 bg-slate-950/55 px-4 py-4"
                      >
                        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-emerald-200/70">
                          {item.label}
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.85rem] border border-white/10 bg-slate-950/55 p-5 md:p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      Leads at risk per month
                    </p>
                    <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                          {monthlyLeadsAtRisk}
                        </p>
                        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                          Conversations likely to cool off before a confident next step lands.
                        </p>
                      </div>
                      <div className="min-w-[11rem] rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-emerald-200/70">
                          Weekly drift
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">
                          {leadDriftPerWeek} leads
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          On average, this many leads drift each week without tighter follow-up.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <ResultCard
                      label="Deals leaking / year"
                      value={numberFormatter.format(annualDealsAtRisk)}
                      detail="Modeled opportunities that stronger process could help recover."
                    />
                    <ResultCard
                      label="Leak per day"
                      value={currencyFormatter.format(dailyLeak)}
                      detail="A cleaner backend compounds quickly when there is real demand."
                    />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                          Pipeline protection score
                        </p>
                        <p className="mt-2 text-4xl font-semibold text-white">
                          {pipelineProtected}%
                        </p>
                      </div>
                      <div
                        className="lead-score-ring"
                        style={{
                          background: `radial-gradient(circle at center, rgba(5, 8, 18, 1) 0 52%, transparent 53%), conic-gradient(from 180deg, rgba(16,185,129,0.96) 0deg ${scoreAngle}, rgba(255,255,255,0.1) ${scoreAngle} 360deg)`
                        }}
                      >
                        <div className="lead-score-core">{pipelineProtected}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Higher response speed and stronger follow-up discipline push more of the
                      pipeline into the protected zone.
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      Where the leak shows up
                    </p>
                    <div className="mt-4 space-y-4">
                      <LeakBar
                        label="Response delay drag"
                        percentage={Math.round(responsePenalty * 100)}
                        tone="emerald"
                      />
                      <LeakBar
                        label="Missed follow-up drag"
                        percentage={Math.round(followUpPenalty * 100)}
                        tone="slate"
                      />
                      <LeakBar
                        label="Total modeled leak"
                        percentage={Math.round(modeledLeakShare * 100)}
                        tone="mixed"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-emerald-400/15 bg-emerald-400/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    Natural next step
                  </p>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white">
                    If this number feels uncomfortably plausible, run the fit check and we can map
                    where AgentFlow tightens the follow-up system, pipeline, and listing ops.
                  </p>
                  <a
                    href="#fit-check"
                    className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    See How AgentFlow Fits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorField({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <label className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-slate-300">{label}</span>
        <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm font-semibold text-white">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="calculator-range mt-5"
        style={{
          background: `linear-gradient(90deg, rgba(110,231,183,0.95) 0%, rgba(16,185,129,0.95) ${percentage}%, rgba(255,255,255,0.08) ${percentage}%, rgba(255,255,255,0.08) 100%)`
        }}
      />
    </label>
  );
}

function ResultCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/55 p-4 md:p-5">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-emerald-200/70">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
    </div>
  );
}

function LeakBar({
  label,
  percentage,
  tone
}: {
  label: string;
  percentage: number;
  tone: "emerald" | "slate" | "mixed";
}) {
  const background =
    tone === "emerald"
      ? "linear-gradient(90deg, rgba(110,231,183,0.95), rgba(16,185,129,0.95))"
      : tone === "slate"
        ? "linear-gradient(90deg, rgba(148,163,184,0.95), rgba(226,232,240,0.65))"
        : "linear-gradient(90deg, rgba(248,250,252,0.95), rgba(16,185,129,0.9))";

  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
        <span>{label}</span>
        <span className="font-semibold text-white">{percentage}%</span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, background }}
        />
      </div>
    </div>
  );
}
