"use client";

import { useEffect, useState } from "react";
import styles from "./voice-beta.module.css";

type VoiceConfig = {
  scriptUrl: string;
  apiEndpoint: string;
  embedToken: string;
};

declare global {
  interface Window {
    DograhWidget?: {
      stop: () => void;
      onStatusChange: (
        callback: (status: string, text?: string, subtext?: string) => void,
      ) => void;
    };
  }
}

export function VoiceBetaExperience() {
  const [status, setStatus] = useState("Preparing founder beta…");
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let script: HTMLScriptElement | null = null;

    async function loadVoiceBeta() {
      try {
        const response = await fetch("/voice-beta/config", {
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!response.ok) throw new Error(`Configuration unavailable (${response.status})`);

        const config = (await response.json()) as VoiceConfig;
        if (!active) return;

        script = document.createElement("script");
        script.id = "agentflow-voice-beta-widget";
        script.src = `${config.scriptUrl}?token=${encodeURIComponent(config.embedToken)}&environment=production&apiEndpoint=${encodeURIComponent(config.apiEndpoint)}`;
        script.setAttribute(
          "data-dograh-context",
          JSON.stringify({
            surface: "founder_controlled_website_beta",
            page_path: "/voice-beta",
          }),
        );
        script.async = true;
        script.onload = () => {
          if (!active) return;
          setStatus("Ready for a founder-controlled test");
          window.DograhWidget?.onStatusChange((nextStatus) => {
            setStatus(
              {
                idle: "Ready for a founder-controlled test",
                connecting: "Connecting securely…",
                connected: "Live AI voice session",
                failed: "Connection needs attention",
              }[nextStatus] ?? "Voice beta ready",
            );
          });
        };
        script.onerror = () => {
          if (!active) return;
          setLoadFailed(true);
          setStatus("Voice service is unavailable");
        };
        document.body.appendChild(script);
      } catch {
        if (!active) return;
        setLoadFailed(true);
        setStatus("Voice service is unavailable");
      }
    }

    void loadVoiceBeta();

    return () => {
      active = false;
      window.DograhWidget?.stop();
      script?.remove();
    };
  }, []);

  return (
    <main className={styles.shell}>
      <section className={styles.hero} aria-labelledby="voice-beta-title">
        <div className={styles.eyebrow}>Founder-controlled beta · limited access</div>
        <h1 id="voice-beta-title">Talk to AgentFlow</h1>
        <p className={styles.lead}>
          Meet the public-safe Gen I Labs AI receptionist in a live browser voice session.
        </p>
        <div className={styles.status} role="status" aria-live="polite">
          <span className={loadFailed ? styles.statusError : styles.statusDot} />
          {status}
        </div>
      </section>

      <section className={styles.voiceCard} aria-label="AgentFlow Voice controls">
        <div id="agentflow-voice-beta-container" className={styles.voiceContainer}>
          <p>Loading secure voice controls…</p>
        </div>
      </section>

      <section className={styles.disclosures} aria-label="AI and privacy disclosure">
        <article>
          <h2>AI disclosure</h2>
          <p>
            You are speaking with an AI system, not a human. It answers only from an
            approved public Gen I Labs knowledge pack and cannot take actions, access
            business systems, or replace a CRM.
          </p>
        </article>
        <article>
          <h2>Privacy boundary</h2>
          <p>
            This beta does not retain raw audio or conversation transcripts. Only bounded,
            content-free operational status and timing metadata may be retained. Do not
            share passwords, identity numbers, banking details, health data, or confidential
            client information.
          </p>
        </article>
        <article>
          <h2>Microphone control</h2>
          <p>
            Audio is processed live only after you grant microphone permission. End the call
            at any time; your browser microphone is released when the session stops.
          </p>
        </article>
      </section>

      <div className={styles.footerActions}>
        <a href="/" className={styles.backLink}>Back to Gen I Labs</a>
        <form action="/voice-beta/logout" method="post">
          <button type="submit" className={styles.logoutButton}>End founder access</button>
        </form>
      </div>
    </main>
  );
}
