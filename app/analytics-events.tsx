"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: {
      track?: (eventName: string) => void;
    };
  }
}

const SECTION_EVENTS: Record<string, string> = {
  "agentflow-preview": "section_view_agentflow_preview",
  "lead-leakage": "section_view_lead_leakage_problem",
  "operating-layer": "section_view_crm_vs_agentflow",
  "proof-ladder": "section_view_proof_ladder",
  "lead-leak-audit": "section_view_lead_leak_audit",
};

function trackEvent(eventName: string, retries = 8) {
  if (typeof window === "undefined") return;

  if (window.umami?.track) {
    window.umami.track(eventName);
    return;
  }

  if (retries > 0) {
    window.setTimeout(() => trackEvent(eventName, retries - 1), 250);
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;

      if (!link) return;

      if (
        link.href.startsWith("https://calendar.genilabs.co.za/genilabs/lead-leak-audit") ||
        link.href.startsWith("https://calendly.com/officialgenilabs/agentflowstrategy")
      ) {
        trackEvent("outbound_click_calendly");
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          const eventName = SECTION_EVENTS[id];

          if (!eventName || seen.has(eventName)) return;

          seen.add(eventName);
          trackEvent(eventName);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );

    Object.keys(SECTION_EVENTS).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      observer.disconnect();
    };
  }, []);

  return null;
}
