"use client";

import { useState, useEffect, useCallback } from "react";
import type { ChatMessage } from "@/lib/content";
import { whatsappInbound, whatsappProactive } from "@/lib/content";

const TABS = [whatsappInbound, whatsappProactive] as const;
const MSG_DELAY = 1800;
const TYPING_DELAY = 1200;
const PAUSE_AFTER = 3000;

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
    // Resume autoplay after showing all messages
    setTimeout(() => setAutoPlay(true), currentMessages.length * MSG_DELAY + PAUSE_AFTER);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-2xl shadow-purple/5">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-background/60 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple to-teal flex items-center justify-center text-xs font-bold text-white">
              K
            </div>
            <div>
              <p className="text-sm font-semibold text-white font-heading">Kai</p>
              <p className="text-[0.65rem] text-teal">AgentFlow AI</p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-[0.65rem] text-muted">online</span>
          </div>
        </div>

        {/* Tab toggle */}
        <div className="flex border-b border-border">
          {TABS.map((tab, i) => (
            <button
              key={tab.tabLabel}
              type="button"
              onClick={() => handleTabClick(i)}
              className={`flex-1 py-2.5 text-xs font-semibold transition-all ${
                activeTab === i
                  ? "text-purple border-b-2 border-purple bg-purple-soft"
                  : "text-muted hover:text-white"
              }`}
            >
              <span className="block">{tab.tabLabel}</span>
              <span className="block text-[0.6rem] font-normal mt-0.5 opacity-70">
                {tab.tabDescription}
              </span>
            </button>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex flex-col gap-3 p-4 min-h-[340px] bg-gradient-to-b from-background to-card/50">
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
    <div className={`chat-bubble ${bubbleClass}`}>
      {message.sender !== "system" && (
        <p className="text-[0.65rem] font-semibold mb-1 opacity-60">{message.name}</p>
      )}
      <p className="text-white/90">{message.text}</p>
      {message.hasLink && (
        <span className="inline-block mt-1.5 text-[0.75rem] text-teal underline underline-offset-2">
          📅 calendly.com/booking-link
        </span>
      )}
    </div>
  );
}
