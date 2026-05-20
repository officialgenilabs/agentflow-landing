"use client";

import { useState, useEffect, useCallback } from "react";
import type { ChatMessage } from "@/lib/content";
import { whatsappInbound, whatsappProactive } from "@/lib/content";

const TABS = [whatsappInbound, whatsappProactive] as const;
const MSG_DELAY = 2200;
const TYPING_DELAY = 1200;
const PAUSE_AFTER = 4000;

export function WhatsAppMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentMessages = TABS[activeTab].messages;

  const resetAndSwitch = useCallback(() => {
    setVisibleCount(0);
    setIsTyping(false);
    setActiveTab((prev) => (prev + 1) % TABS.length);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (visibleCount >= currentMessages.length) {
      const t = setTimeout(resetAndSwitch, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    const next = currentMessages[visibleCount];
    if (next && (next.typing || next.sender === "kai" || next.sender === "kai-outbound")) {
      setIsTyping(true);
      const t1 = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((c) => c + 1);
      }, TYPING_DELAY);
      return () => clearTimeout(t1);
    }

    const t2 = setTimeout(() => setVisibleCount((c) => c + 1), MSG_DELAY);
    return () => clearTimeout(t2);
  }, [visibleCount, activeTab, autoPlay, currentMessages, resetAndSwitch]);

  function handleTabClick(index: number) {
    setAutoPlay(false);
    setActiveTab(index);
    setVisibleCount(0);
    setIsTyping(false);
    // Restart autoplay after some seconds
    const t = setTimeout(() => setAutoPlay(true), 6000);
    return () => clearTimeout(t);
  }

  // Real-time operational logs mapped to chat states
  const getLogsForStep = () => {
    const timeStr = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    if (activeTab === 0) {
      return [
        { time: timeStr, service: "evolution-api", event: "Listening on port 8080...", status: "active" },
        ...(visibleCount >= 1 ? [{ time: timeStr, service: "evolution-api", event: "Received WhatsApp message from Lead", status: "ingress" }] : []),
        ...(visibleCount >= 2 ? [{ time: timeStr, service: "qualify-core", event: "Invoking intent score parameters...", status: "active" }] : []),
        ...(visibleCount >= 3 ? [{ time: timeStr, service: "score-engine", event: "Profile Graded [A-Grade Bond Verified]", status: "success" }] : []),
        ...(visibleCount >= 4 ? [{ time: timeStr, service: "supabase", event: "Lead CRM profile synced successfully", status: "success" }] : []),
        ...(visibleCount >= 5 ? [{ time: timeStr, service: "calendly-node", event: "Dispatched booking payload to Principal Agent", status: "routed" }] : []),
      ];
    } else {
      return [
        { time: timeStr, service: "evolution-api", event: "Evolution API intake listening...", status: "active" },
        ...(visibleCount >= 1 ? [{ time: timeStr, service: "portal-ingress", event: "Property24 lead extracted: Sipho M.", status: "ingress" }] : []),
        ...(visibleCount >= 2 ? [{ time: timeStr, service: "evolution-api", event: "Secure evolution API thread initialized", status: "active" }] : []),
        ...(visibleCount >= 3 ? [{ time: timeStr, service: "outbound-flow", event: "Dispatched WhatsApp greeting via API", status: "active" }] : []),
        ...(visibleCount >= 4 ? [{ time: timeStr, service: "intake-parser", event: "Lead response matched: Document dispatch", status: "success" }] : []),
        ...(visibleCount >= 5 ? [{ time: timeStr, service: "memory-core", event: "Cross-referenced Camps Bay listing catalog", status: "success" }] : []),
        ...(visibleCount >= 6 ? [{ time: timeStr, service: "calendly-node", event: "Routed qualified schedule node to specialist", status: "routed" }] : []),
      ];
    }
  };

  const logs = getLogsForStep();

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] w-full max-w-5xl mx-auto items-stretch">
      {/* LEFT COLUMN: Phone Frame Mockup */}
      <div className="flex flex-col justify-center">
        <div className="relative rounded-[2.25rem] border border-border/80 bg-[#0A0A0A] overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/20">
          {/* Status bar / Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-surface border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-black font-heading">
                A
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-wide font-heading">AgentFlow Engine</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[0.6rem] text-primary font-bold uppercase tracking-wider">Governed Inbound Active</span>
                </div>
              </div>
            </div>
            <span className="text-[0.6rem] bg-secondary-soft text-secondary border border-secondary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Kai-01
            </span>
          </div>

          {/* Chat active tab selectors */}
          <div className="flex border-b border-border bg-surface/50">
            {TABS.map((tab, i) => (
              <button
                key={tab.tabLabel}
                type="button"
                onClick={() => handleTabClick(i)}
                className={`flex-1 py-3 text-center transition-all ${
                  activeTab === i
                    ? "text-primary border-b border-primary bg-primary-soft/30 shadow-[inset_0_-1px_0_rgba(0,229,153,0.3)]"
                    : "text-muted hover:text-white"
                }`}
              >
                <span className="block text-[0.7rem] font-bold uppercase tracking-widest">{tab.tabLabel}</span>
                <span className="block text-[0.55rem] font-medium text-muted mt-0.5 opacity-80">
                  {tab.tabDescription}
                </span>
              </button>
            ))}
          </div>

          {/* Conversational Screen */}
          <div className="flex flex-col gap-3.5 p-5 min-h-[380px] bg-gradient-to-b from-background to-surface/40 overflow-y-auto">
            {currentMessages.slice(0, visibleCount).map((msg, i) => (
              <MessageBubble key={`${activeTab}-${i}`} message={msg} />
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Real-Time Operational Cockpit Logs */}
      <div className="flex flex-col">
        <div className="glass-card flex-1 p-6 border-border bg-surface/20 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <h4 className="text-xs font-bold text-white font-heading tracking-widest uppercase">
                  Runtime Intelligence Cockpit
                </h4>
              </div>
              <span className="text-[0.6rem] font-bold text-muted font-heading uppercase tracking-widest">
                System Active
              </span>
            </div>

            {/* Simulated Live Console logs */}
            <div className="mt-6 space-y-3.5 font-mono text-[0.68rem] leading-relaxed max-h-[290px] overflow-y-auto">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-3 text-left">
                  <span className="text-muted/65 select-none">{log.time}</span>
                  <span className={`font-bold select-none min-w-[75px] uppercase ${
                    log.status === "ingress" ? "text-secondary" :
                    log.status === "success" ? "text-primary" :
                    log.status === "routed" ? "text-primary" : "text-muted"
                  }`}>
                    [{log.service}]
                  </span>
                  <span className={
                    log.status === "success" || log.status === "routed" ? "text-white font-semibold" : "text-muted"
                  }>
                    {log.event}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostics Summary Footer inside Cockpit */}
          <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-wider text-muted">
            <div className="flex gap-2">
              <span className="text-primary font-extrabold">● CRM:</span> Sync Online
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-extrabold">● MEMORY:</span> Node Active
            </div>
            <div className="flex gap-2">
              <span className="text-secondary font-extrabold">● STACK:</span> Evolution API v2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const bubbleClass =
    message.sender === "lead"
      ? "chat-bubble-lead"
      : message.sender === "system"
      ? "chat-bubble-system"
      : message.sender === "kai-outbound"
      ? "chat-bubble-outbound"
      : "chat-bubble-kai";

  return (
    <div className={`chat-bubble ${bubbleClass} text-left`}>
      {message.sender !== "system" && (
        <p className="text-[0.6rem] font-extrabold uppercase tracking-wider mb-1 text-primary opacity-90">{message.name}</p>
      )}
      <p className="text-white/95 text-xs leading-relaxed">{message.text}</p>
      {message.hasLink && (
        <span className="inline-block mt-2 text-[0.7rem] text-primary font-bold underline underline-offset-2 hover:text-white transition">
          📅 Secure Pilot Schedule Lock
        </span>
      )}
    </div>
  );
}
