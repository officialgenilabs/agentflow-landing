"use client";

import { useState } from "react";
import {
  conversion,
  conversionQuestions,
  conversionSteps
} from "@/lib/content";

type Answers = Record<string, string>;
type SelectedOption = (typeof conversionQuestions)[number]["options"][number];

export function FinalCtaSection() {
  const [answers, setAnswers] = useState<Answers>({});

  const answeredCount = conversionQuestions.filter((question) => answers[question.id]).length;
  const currentQuestion =
    conversionQuestions.find((question) => !answers[question.id]) ?? null;
  const isComplete = answeredCount === conversionQuestions.length;

  const selectedOptions = conversionQuestions
    .map((question) =>
      question.options.find((option) => option.value === answers[question.id])
    )
    .filter((option): option is SelectedOption => Boolean(option));

  const isQualified = isComplete
    ? selectedOptions.every((option) => option.qualifies)
    : false;

  const progress = `${(answeredCount / conversionQuestions.length) * 100}%`;
  const bookingHref = conversion.bookingUrl || conversion.bookingFallbackHref;

  function handleSelect(questionId: string, value: string) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
  }

  function handleBack() {
    const lastAnswered = [...conversionQuestions]
      .reverse()
      .find((question) => answers[question.id]);

    if (!lastAnswered) {
      return;
    }

    setAnswers((current) => {
      const next = { ...current };
      delete next[lastAnswered.id];
      return next;
    });
  }

  function handleReset() {
    setAnswers({});
  }

  return (
    <section id="fit-check" className="section-pad pb-28 md:pb-36">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <div>
            <span className="eyebrow">{conversion.eyebrow}</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {conversion.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {conversion.description}
            </p>

            <div className="mt-8 grid gap-4">
              {conversionSteps.map((item, index) => {
                const isActive =
                  index === 0 ||
                  (index === 1 && isComplete && isQualified) ||
                  (index === 2 && isComplete && isQualified);

                return (
                  <article
                    key={item.step}
                    className={`rounded-[1.5rem] border px-5 py-5 ${
                      isActive
                        ? "border-emerald-400/20 bg-emerald-400/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      {item.step}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </article>
                );
              })}
            </div>

            {selectedOptions.length > 0 ? (
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                  Current fit summary
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {selectedOptions.map((option) => (
                    <span
                      key={`${option.value}-${option.label}`}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200"
                    >
                      {option.label}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_38%)]" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                    Guided fit check
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {answeredCount} of {conversionQuestions.length} answered
                  </p>
                </div>

                <div className="flex gap-2">
                  {answeredCount > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                    >
                      Back
                    </button>
                  ) : null}
                  {answeredCount > 0 ? (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                    >
                      Restart
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 h-2 rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                  style={{ width: progress }}
                />
              </div>

              {!isComplete && currentQuestion ? (
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    Question {answeredCount + 1}
                  </p>
                  <h3 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                    {currentQuestion.prompt}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    {currentQuestion.helper}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelect(currentQuestion.id, option.value)}
                        className="rounded-[1.35rem] border border-white/10 bg-white/5 px-5 py-5 text-left transition hover:border-emerald-300/25 hover:bg-white/10"
                      >
                        <span className="block text-base font-semibold text-white">
                          {option.label}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-slate-300">
                          {option.detail}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {isComplete && isQualified ? (
                <div className="mt-8 space-y-6">
                  <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      Qualified path
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {conversion.qualifiedTitle}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                      {conversion.qualifiedDescription}
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-4 md:p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                      {conversion.intakeTitle}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      {conversion.intakeDescription}
                    </p>

                    <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
                      {conversion.formEmbedUrl ? (
                        <iframe
                          src={conversion.formEmbedUrl}
                          title="AgentFlow guided intake"
                          className="min-h-[640px] w-full bg-slate-950"
                        />
                      ) : (
                        <div className="flex min-h-[320px] flex-col justify-center px-6 py-8 text-center">
                          <p className="text-lg font-semibold text-white">
                            Your embedded intake will appear here.
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                            Add the live form URL to <code>conversion.formEmbedUrl</code> in <code>lib/content.ts</code> and this panel will become the inline Teleform or Typeform-style step.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">
                      {conversion.bookingTitle}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      {conversion.bookingDescription}
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={bookingHref}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                      >
                        Book Your AgentFlow Strategy Call
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
              ) : null}

              {isComplete && !isQualified ? (
                <div className="mt-8 space-y-6">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                      Lighter next step
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {conversion.unqualifiedTitle}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      {conversion.unqualifiedDescription}
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={conversion.overviewHref}
                        className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                      >
                        Get the AgentFlow Overview
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
