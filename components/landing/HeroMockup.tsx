"use client";

export function HeroMockup() {
  return (
    <div className="w-full max-w-sm mx-auto relative group">
      {/* Soft elegant outer halo */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-xl opacity-70 pointer-events-none" />

      {/* Phone container */}
      <div className="rounded-[2.25rem] border border-border bg-[#0A0A0A] overflow-hidden shadow-2xl transition duration-500 hover:border-primary/20">
        
        {/* Mockup Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-surface/80 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-[0.65rem] font-bold text-black font-heading">
              K
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-wide font-heading">Kai — AgentFlow</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[0.55rem] text-primary font-bold uppercase tracking-widest">Active Intake</span>
              </div>
            </div>
          </div>
          <span className="text-[0.55rem] bg-secondary-soft text-secondary border border-secondary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            Governed
          </span>
        </div>

        {/* Conversation Preview */}
        <div className="flex flex-col gap-3 p-5 min-h-[260px] bg-gradient-to-b from-background to-surface/30">
          
          {/* Message 1 */}
          <div className="chat-bubble chat-bubble-lead text-left self-start max-w-[85%] p-3 rounded-2xl rounded-bl-sm border border-border bg-surface text-xs leading-relaxed text-white/90">
            <span className="block text-[0.55rem] font-bold uppercase text-muted/70 tracking-wider mb-1">Lead</span>
            Is the Camps Bay property still available? I'd like to view it this week.
          </div>

          {/* Message 2 */}
          <div className="chat-bubble chat-bubble-kai text-left self-end max-w-[85%] p-3 rounded-2xl rounded-br-sm border border-primary/20 bg-primary-soft/30 text-xs leading-relaxed text-white/95">
            <span className="block text-[0.55rem] font-bold uppercase text-primary tracking-wider mb-1">Kai (AgentFlow)</span>
            Yes, it is! To ensure I route you to the correct specialist agent immediately, are you buying via bond pre-approval or cash?
          </div>

          {/* System status node */}
          <div className="self-center my-1 py-1 px-3.5 rounded-full bg-secondary-soft border border-secondary/15 text-[0.6rem] font-extrabold uppercase tracking-widest text-secondary text-center">
            🎯 Profile Synced with CRM
          </div>
        </div>
      </div>
    </div>
  );
}
