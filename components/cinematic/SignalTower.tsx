"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";
import { journeyStages } from "./journey-data";

function setTowerTilt(
  element: HTMLDivElement,
  event: ReactPointerEvent<HTMLDivElement>,
) {
  if (event.pointerType === "touch") return;

  const bounds = element.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  element.style.setProperty("--tower-rotate-y", `${x * 5}deg`);
  element.style.setProperty("--tower-rotate-x", `${y * -3}deg`);
  element.style.setProperty("--tower-shift-x", `${x * 10}px`);
  element.style.setProperty("--tower-shift-y", `${y * 7}px`);
}

export function SignalTower() {
  return (
    <div
      className="signal-tower"
      role="img"
      aria-label="A six-layer AgentFlow signal tower showing a real estate lead moving from received to closed"
      onPointerMove={(event) => setTowerTilt(event.currentTarget, event)}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--tower-rotate-y");
        event.currentTarget.style.removeProperty("--tower-rotate-x");
        event.currentTarget.style.removeProperty("--tower-shift-x");
        event.currentTarget.style.removeProperty("--tower-shift-y");
      }}
    >
      <div className="signal-tower__halo" aria-hidden="true" />
      <div className="signal-tower__grid" aria-hidden="true" />

      <svg
        className="signal-tower__route"
        viewBox="0 0 720 660"
        aria-hidden="true"
      >
        <path
          className="signal-tower__route-base"
          d="M16 542 C 138 542, 152 448, 236 448 S 316 382, 360 382"
        />
        <path
          className="signal-tower__route-live"
          d="M16 542 C 138 542, 152 448, 236 448 S 316 382, 360 382"
        />
        <path
          className="signal-tower__route-base"
          d="M466 164 C 550 164, 548 100, 704 100"
        />
        <path
          className="signal-tower__route-live signal-tower__route-live--out"
          d="M466 164 C 550 164, 548 100, 704 100"
        />
      </svg>

      <div className="signal-tower__architecture">
        <div className="signal-tower__asset">
          <Image
            src="/cinematic/tower.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 86vw, 520px"
          />
        </div>

        <div className="signal-tower__scan" aria-hidden="true" />

        <div className="signal-tower__levels" aria-hidden="true">
          {journeyStages.map((stage, index) => (
            <span
              key={stage.id}
              className="signal-tower__level"
              style={{ "--level-index": index } as React.CSSProperties}
            >
              <i />
            </span>
          ))}
        </div>

        <span className="signal-tower__beacon" aria-hidden="true">
          <i />
        </span>
      </div>

      <div className="signal-tower__legend">
        {journeyStages.map((stage) => (
          <span key={stage.id}>
            <i aria-hidden="true" />
            <b>{stage.number}</b>
            {stage.shortLabel}
          </span>
        ))}
      </div>

      <div className="signal-tower__status signal-tower__status--in">
        <span>Inbound signal</span>
        <strong>Context attached</strong>
      </div>
      <div className="signal-tower__status signal-tower__status--out">
        <span>Governed action</span>
        <strong>Owner visible</strong>
      </div>
    </div>
  );
}
