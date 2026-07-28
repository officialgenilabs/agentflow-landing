"use client";

import Image from "next/image";
import { useState } from "react";
import { journeyStages } from "./journey-data";

export function JourneyConsole() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeStage = journeyStages[activeIndex];

  return (
    <div className="journey-console">
      <div className="journey-console__chrome">
        <div className="journey-console__brand">
          <Image
            src="/brand/agentflow-logo.svg"
            alt=""
            width={40}
            height={40}
          />
          <span>
            <strong>AgentFlow AI</strong>
            <small>Demonstrative operating-layer view</small>
          </span>
        </div>
        <div className="journey-console__mode">
          <i aria-hidden="true" />
          Proof mode
        </div>
      </div>

      <div
        className="journey-console__tabs"
        role="tablist"
        aria-label="Lead journey stages"
      >
        {journeyStages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            id={`journey-tab-${stage.id}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="journey-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const direction = event.key === "ArrowRight" ? 1 : -1;
              const nextIndex =
                (activeIndex + direction + journeyStages.length) %
                journeyStages.length;
              setActiveIndex(nextIndex);
              document.getElementById(`journey-tab-${journeyStages[nextIndex].id}`)?.focus();
            }}
          >
            <span>{stage.number}</span>
            <strong>{stage.shortLabel}</strong>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>

      <div
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${activeStage.id}`}
        className="journey-console__body"
      >
        <div className="journey-console__lead">
          <div className="journey-console__lead-topline">
            <span>Lead intelligence</span>
            <strong>{activeStage.signal}</strong>
          </div>
          <p className="journey-console__lead-id">AF · 0247</p>
          <h3>{activeStage.label}</h3>
          <p>{activeStage.summary}</p>

          <div className="journey-console__lead-meta">
            <span>
              <small>Source</small>
              Property portal
            </span>
            <span>
              <small>Owner</small>
              {activeIndex < 3 ? "Review queue" : "Operator assigned"}
            </span>
            <span>
              <small>Property</small>
              Umhlanga · 3 bed
            </span>
          </div>
        </div>

        <div className="journey-console__evidence">
          <span className="journey-console__eyebrow">Evidence layer</span>
          <h3>What supports this signal?</h3>
          <ul>
            {activeStage.evidence.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <i aria-hidden="true">Verified</i>
              </li>
            ))}
          </ul>
        </div>

        <div className="journey-console__action">
          <span className="journey-console__eyebrow">Governed next action</span>
          <h3>{activeStage.action}</h3>
          <p>
            The interface makes the decision boundary visible. Human approval
            remains in control where the action carries risk.
          </p>
          <button type="button" disabled aria-label="Demonstrative approval action">
            Review evidence
            <span aria-hidden="true">↗</span>
          </button>
          <small>Illustrative UI · no client records shown</small>
        </div>
      </div>
    </div>
  );
}
