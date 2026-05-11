"use client";

import { useEffect, useRef, useState } from "react";
import { problem } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function ProblemSection() {
  return (
    <section className="section-pad" id="problem">
      <div className="section-shell">
        <ScrollReveal>
          <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-6xl font-heading">
            {problem.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problem.stats.map((stat, i) => (
            <ScrollReveal key={stat.description} delay={i + 1}>
              <div className="glass-card p-8 text-center transition hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <CountUpStat display={stat.display} suffix={stat.suffix} isLast={i === 2} />
                <p className="mt-4 text-sm leading-6 text-muted">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-12 text-center text-lg font-medium text-white md:text-xl max-w-3xl mx-auto leading-8">
            {problem.bottomLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CountUpStat({
  display,
  suffix,
  isLast,
}: {
  display: string;
  suffix: string;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Parse out numeric value for animation
  const numericTarget = parseInt(display.replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * numericTarget);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [visible, numericTarget]);

  // Handle "4-6" display format
  const isRange = display.includes("-");

  return (
    <div ref={ref}>
      <p className={`text-5xl font-bold tracking-tight md:text-6xl ${isLast ? "text-primary" : "text-white"}`}>
        {isRange ? (visible ? display : "0") : count}
        <span className={`ml-1 text-2xl ${isLast ? "text-primary/70" : "text-muted"}`}>
          {suffix}
        </span>
      </p>
    </div>
  );
}
