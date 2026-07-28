"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const opportunitySignals = [
  {
    label: "Lead captured",
    detail: "Portal enquiry · 14:08",
    className: "villa-scene__signal--captured",
  },
  {
    label: "Owner assigned",
    detail: "Operator queue · visible",
    className: "villa-scene__signal--owner",
  },
  {
    label: "Viewing Ready",
    detail: "Intent evidence · review",
    className: "villa-scene__signal--ready",
  },
];

export function VillaOpportunity() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        scene.dataset.visible = entry.isIntersecting ? "true" : "false";
      },
      { threshold: 0.28 },
    );

    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sceneRef}
      className="villa-scene"
      data-visible="false"
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--villa-x", `${x * 14}px`);
        event.currentTarget.style.setProperty("--villa-y", `${y * 8}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--villa-x");
        event.currentTarget.style.removeProperty("--villa-y");
      }}
    >
      <div className="villa-scene__blueprint" aria-hidden="true" />
      <div className="villa-scene__horizon" aria-hidden="true" />

      <div className="villa-scene__property">
        <Image
          src="/cinematic/villa.webp"
          alt="Modern luxury villa representing a high-value real estate opportunity"
          fill
          sizes="(max-width: 900px) 110vw, 1240px"
        />
      </div>

      <svg
        className="villa-scene__route"
        viewBox="0 0 1200 650"
        aria-hidden="true"
      >
        <path
          className="villa-scene__route-base"
          d="M44 490 C 214 490, 238 402, 388 402 S 576 474, 724 474 S 892 336, 1156 336"
        />
        <path
          className="villa-scene__route-live"
          d="M44 490 C 214 490, 238 402, 388 402 S 576 474, 724 474 S 892 336, 1156 336"
        />
      </svg>

      {opportunitySignals.map((signal, index) => (
        <div
          key={signal.label}
          className={`villa-scene__signal ${signal.className}`}
          style={{ "--signal-delay": `${index * 260}ms` } as React.CSSProperties}
        >
          <i aria-hidden="true" />
          <span>{signal.label}</span>
          <strong>{signal.detail}</strong>
        </div>
      ))}

      <div className="villa-scene__caption">
        <span>Opportunity // Property 0247</span>
        <strong>The asset is visible. Now the operation is too.</strong>
      </div>
    </div>
  );
}
