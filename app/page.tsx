import Image from "next/image";
import type { ReactNode } from "react";

const AUDIT_BOOKING_BASE_URL = "https://calendar.genilabs.co.za/genilabs/lead-leak-audit";
const AUDIT_BOOKING_URL = `${AUDIT_BOOKING_BASE_URL}?utm_source=genilabs_site&utm_medium=website_cta&utm_campaign=lead_leak_audit&utm_content=primary_booking_cta`;
const APP_LOGIN_URL = "https://app.genilabs.co.za";

const navItems = [
  { label: "AgentFlow AI", href: "#agentflow-preview" },
  { label: "How it works", href: "#infrastructure-flow" },
  { label: "Proof", href: "#proof-ladder" },
  { label: "Lead Leak Audit", href: "#lead-leak-audit" },
];

const leakageCards = [
  {
    marker: "Source drift",
    title: "The lead arrives with context — then the context starts leaking.",
    body: "Portals, WhatsApp, referrals and website enquiries create separate trails. If the source and intent are not captured cleanly, every handoff starts weaker than it should.",
  },
  {
    marker: "Ownership gap",
    title: "Everyone can see the enquiry. No one clearly owns the next move.",
    body: "Real-estate teams lose momentum when qualification, follow-up and viewing coordination depend on memory instead of visible ownership.",
  },
  {
    marker: "Invisible follow-up",
    title: "The principal cannot govern what the operation cannot see.",
    body: "Without a ledger of status, tasks, approvals and routing evidence, the business cannot tell whether opportunity is progressing or quietly stalling.",
  },
];

const journeyStages = [
  {
    number: "01",
    label: "Lead received",
    detail: "Source, contact, listing interest and arrival time stay attached.",
    signal: "Captured",
  },
  {
    number: "02",
    label: "Qualification",
    detail: "Intent, urgency, missing fields and context are surfaced for review.",
    signal: "Context visible",
  },
  {
    number: "03",
    label: "Viewing requested",
    detail: "Viewing intent becomes a trackable operational signal, not a buried message.",
    signal: "Intent detected",
  },
  {
    number: "04",
    label: "Viewing booked",
    detail: "The next action is owned and visible; booking claims remain evidence-bound.",
    signal: "Owner assigned",
  },
  {
    number: "05",
    label: "Offer",
    detail: "Sensitive movement stays governed by human review and approval evidence.",
    signal: "Approval gated",
  },
  {
    number: "06",
    label: "Closed",
    detail: "The journey leaves an audit trail of what moved, stalled or needs attention next.",
    signal: "Ledger recorded",
  },
];

const capabilityRows = [
  ["Lead record", "Source, contact, status, notes, tasks and event history stay attached to the opportunity.", "Core surface"],
  ["Hot Lead signal", "Urgency is framed through observable lead and conversation context, not mystery scoring.", "Evidence-framed"],
  ["Viewing Ready signal", "Viewing intent becomes visible enough for an operator to act, verify and own.", "Evidence-framed"],
  ["Approval evidence", "Risky outbound movement remains human-reviewed before it affects client communication.", "Governance pattern"],
  ["Routing audit trail", "Ownership changes and next actions remain explainable to operators and principals.", "Trust feature"],
];

const proofSteps = [
  ["Production proof", "AgentFlow exists as a secure app with governed lead-operation surfaces."],
  ["Activation proof", "A founding real estate deployment is being activated privately."],
  ["Operational proof", "Lead capture and routing evidence will be shared only when validated."],
  ["Outcome proof", "Viewing or revenue outcomes require measured evidence."],
  ["Public proof", "Public evidence is shared only after validation and explicit approval."],
];

const auditItems = [
  "Lead sources and handoff points",
  "CRM and follow-up workflow",
  "Agent ownership gaps",
  "Visibility into next actions",
  "Governance and approval needs",
  "Deployment readiness",
];

const doctrineItems = [
  "Truth over theatre",
  "Governance over uncontrolled automation",
  "Evidence before outcome claims",
  "Human approval where risk is real",
];

function Button({
  href,
  children,
  variant = "primary",
  umamiEvent,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  umamiEvent?: string;
}) {
  const styles = {
    primary:
      "border-primary/50 bg-primary text-black shadow-[0_0_34px_rgba(11,255,153,0.24)] hover:bg-primary/90 hover:shadow-[0_0_48px_rgba(11,255,153,0.34)]",
    secondary:
      "border-primary/25 bg-primary/[0.055] text-white hover:border-primary/55 hover:bg-primary/[0.11]",
    ghost:
      "border-white/10 bg-white/[0.035] text-white/72 hover:border-primary/35 hover:text-white",
  };

  return (
    <a
      href={href}
      data-umami-event={umamiEvent}
      className={`group inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] ${styles[variant]}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">↗</span>
    </a>
  );
}

function Pill({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "purple" | "red" | "neutral" | "white" }) {
  const styles = {
    mint: "border-primary/24 bg-primary/[0.075] text-primary",
    purple: "border-secondary/25 bg-secondary-soft text-[#B8B5FF]",
    red: "border-danger/25 bg-danger-soft text-[#FF87A3]",
    neutral: "border-white/10 bg-white/[0.045] text-white/55",
    white: "border-white/15 bg-white/[0.06] text-white/78",
  };

  return (
    <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${styles[tone]}`}>
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, body, align = "center" }: { eyebrow: string; title: string; body?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Pill>{eyebrow}</Pill>
      <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-5xl lg:text-6xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">{body}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050508]/82 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <a href="#top" className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508]" aria-label="Gen I Labs home">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-primary/22 bg-primary/[0.065]">
            <span className="absolute inset-x-2 top-1/2 h-px bg-primary/45" />
            <span className="font-heading text-sm font-black text-primary">GI</span>
          </span>
          <span>
            <span className="block font-heading text-sm font-bold uppercase tracking-[0.22em] text-white">Gen I Labs</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/35">AgentFlow AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={APP_LOGIN_URL} data-umami-event="outbound_click_app_login" className="hidden rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-white/45 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508] sm:inline-flex">
            Access App
          </a>
          <Button href={AUDIT_BOOKING_URL} umamiEvent="cta_click_lead_leak_audit_nav">Book Audit</Button>
        </div>
      </div>
    </header>
  );
}

function HeroSystem() {
  return (
    <div className="cinematic-panel route-panel relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#06070A]/88 p-4 shadow-[0_0_90px_rgba(11,255,153,0.12)] backdrop-blur-xl lg:mx-0">
      <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-primary/18 blur-[95px]" />
      <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-secondary/12 blur-[110px]" />
      <div className="relative rounded-[1.45rem] border border-white/[0.08] bg-[#030406]">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
          <div className="flex items-center gap-3">
            <Image src="/brand/agentflow-logo.svg" alt="AgentFlow AI" width={40} height={40} className="h-10 w-10" priority />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">AgentFlow AI</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Demonstrative operating-layer view</p>
            </div>
          </div>
          <Pill tone="white">Preview</Pill>
        </div>

        <div className="px-5 py-5">
          <div className="rounded-[1.35rem] border border-primary/15 bg-primary/[0.045] p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Live signal trace</p>
              <span className="node-pulse h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">Lead received → governed action</h3>
            <p className="mt-3 text-sm leading-6 text-white/58">Illustrative data only. The interface concept shows how lead context, ownership, readiness and approval evidence should resolve.</p>
          </div>

          <ol className="signal-stack mt-5 space-y-3" aria-label="AgentFlow operational signal progression">
            {journeyStages.slice(0, 5).map((stage) => (
              <li key={stage.number} className="signal-row grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.028] px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/22 bg-primary/[0.07] text-[10px] font-black text-primary">{stage.number}</span>
                <span>
                  <span className="block text-sm font-bold text-white">{stage.label}</span>
                  <span className="block text-xs text-white/42">{stage.detail}</span>
                </span>
                <span className="hidden rounded-full border border-primary/15 bg-primary/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary sm:inline-flex">{stage.signal}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t border-white/[0.07] bg-white/[0.025] px-5 py-4">
          <p className="text-xs leading-6 text-white/48">No private client records are shown. Product visuals are demonstrative unless explicitly labelled as production evidence.</p>
        </div>
      </div>
    </div>
  );
}

function CtaStrip() {
  return (
    <div className="section-shell mt-14 rounded-[1.5rem] border border-primary/15 bg-primary/[0.045] p-4 shadow-[0_0_60px_rgba(11,255,153,0.08)]">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Pipeline protection starts with visibility</p>
          <p className="mt-2 text-sm text-white/65">Map the lead leaks before adding more tools or traffic.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={AUDIT_BOOKING_URL}>Book a Lead Leak Audit</Button>
          <Button href="#agentflow-preview" variant="ghost" umamiEvent="cta_click_see_agentflow">See AgentFlow AI</Button>
        </div>
      </div>
    </div>
  );
}

function JourneyGraph() {
  return (
    <ol className="journey-grid mt-12 grid gap-4 lg:grid-cols-6" aria-label="Real estate lead journey from received to closed">
      {journeyStages.map((stage) => (
        <li key={stage.number} className="journey-card relative rounded-[1.5rem] border border-white/[0.08] bg-white/[0.032] p-5">
          <span className="route-node mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/24 bg-primary/[0.07] font-black text-primary">{stage.number}</span>
          <h3 className="text-xl font-black tracking-[-0.04em] text-white">{stage.label}</h3>
          <p className="mt-3 text-sm leading-6 text-white/55">{stage.detail}</p>
          <p className="mt-4 w-fit rounded-full border border-primary/15 bg-primary/[0.055] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{stage.signal}</p>
        </li>
      ))}
    </ol>
  );
}

function SystemPreview() {
  return (
    <div className="relative rounded-[2rem] border border-white/[0.1] bg-[#07080C]/90 p-4 shadow-[0_0_90px_rgba(11,255,153,0.1)]">
      <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#030406]">
        <div className="flex flex-col gap-4 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Proof Mode / Demonstrative UI</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-white">Lead intelligence surface</h3>
          </div>
          <Pill tone="neutral">Not client evidence</Pill>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.25rem] border border-primary/16 bg-primary/[0.045] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Lead state</p>
            <h4 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">Viewing Ready</h4>
            <p className="mt-3 text-sm leading-6 text-white/58">A visible signal for an operator to verify, own and move forward.</p>
            <div className="mt-5 grid gap-2 text-xs text-white/58">
              <span className="flex justify-between rounded-xl bg-white/[0.04] px-3 py-2"><span>Source</span><strong className="text-white">Portal enquiry</strong></span>
              <span className="flex justify-between rounded-xl bg-white/[0.04] px-3 py-2"><span>Owner</span><strong className="text-white">Assigned</strong></span>
              <span className="flex justify-between rounded-xl bg-white/[0.04] px-3 py-2"><span>Approval</span><strong className="text-primary">Required</strong></span>
            </div>
          </div>

          <div className="space-y-3">
            {capabilityRows.map(([label, effect, status]) => (
              <div key={label} className="grid gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.028] p-4 sm:grid-cols-[0.8fr_1.4fr_auto] sm:items-center">
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs leading-6 text-white/52">{effect}</p>
                <span className="w-fit rounded-full border border-primary/15 bg-primary/[0.055] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="cinematic-field pointer-events-none fixed inset-0 -z-10" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[620px] w-[860px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-[-10rem] right-[-7rem] -z-10 h-[520px] w-[620px] rounded-full bg-secondary/10 blur-[140px]" />

      <Header />

      <main id="top">
        <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1fr_0.92fr] lg:py-24">
          <div>
            <Pill>Command Mode // AgentFlow AI</Pill>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.075em] text-white md:text-7xl xl:text-8xl">
              Your leads are moving. <span className="text-primary">Your operation should know where.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
              AgentFlow AI is an AI operating layer for real-estate lead operations — designed to keep enquiries, qualification, ownership, approvals and audit evidence visible from first contact to next action.
            </p>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/82">
              A CRM stores leads. AgentFlow governs what happens after the lead arrives.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={AUDIT_BOOKING_URL} umamiEvent="cta_click_lead_leak_audit_hero">Book a Lead Leak Audit</Button>
              <Button href="#agentflow-preview" variant="secondary" umamiEvent="cta_click_see_agentflow">Trace the system</Button>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                "Inbound-first visibility",
                "Human approval by design",
                "Audit-ready lead movement",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white/58">{item}</div>
              ))}
            </div>
          </div>
          <HeroSystem />
        </section>

        <section className="section-pad" id="lead-leakage">
          <div className="section-shell">
            <SectionHeader
              eyebrow="The invisible leak"
              title="The leak happens after the enquiry arrives."
              body="More traffic does not fix a broken lead operation. The risk is usually hidden in scattered context, slow ownership, unverified follow-up and missing visibility into the next action."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {leakageCards.map((card) => (
                <article key={card.title} className="rounded-[1.65rem] border border-danger/18 bg-danger/[0.05] p-6 shadow-[0_0_48px_rgba(255,42,95,0.055)]">
                  <Pill tone="red">{card.marker}</Pill>
                  <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.04em] text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
          <CtaStrip />
        </section>

        <section className="section-pad" id="operating-layer">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              align="left"
              eyebrow="Intelligence Mode // CRM versus operating layer"
              title="A record is not the same as governed movement."
              body="A CRM is useful. It stores the pipeline. AgentFlow is designed for the operating layer around that pipeline: capturing context, surfacing readiness, routing ownership, holding approvals and leaving evidence behind."
            />
            <div className="grid gap-4">
              {[
                ["CRM", "Stores contacts, notes and pipeline records.", "Record system"],
                ["Chatbot", "Responds inside a conversation, often without wider operational context.", "Conversation tool"],
                ["AgentFlow", "Connects lead context, ownership, approval and auditability around serious enquiries.", "Operating layer"],
              ].map(([title, body, label]) => (
                <article key={title} className={`rounded-[1.5rem] border p-6 ${title === "AgentFlow" ? "border-primary/28 bg-primary/[0.065] shadow-[0_0_55px_rgba(11,255,153,0.09)]" : "border-white/[0.08] bg-white/[0.032]"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black tracking-[-0.045em] text-white">{title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">{label}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="infrastructure-flow">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Signal grammar"
              title="Lead received → qualification → viewing → offer → close."
              body="The page shows the governing narrative as an operational route. Each stage should produce context, ownership, a next action or evidence — not just another status label."
            />
            <JourneyGraph />
          </div>
        </section>

        <section className="section-pad" id="agentflow-preview">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SystemPreview />
            <div>
              <Pill>Proof Mode // Product surface</Pill>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">Intelligence you can question.</h2>
              <p className="mt-6 text-base leading-8 text-text-secondary">No mystery scores. No vanity dashboard. AgentFlow should show what happened, why a lead looks urgent, who owns the next move, and what evidence supports the action.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Traceable lead records",
                  "Qualification context",
                  "Hot Lead evidence",
                  "Viewing Ready evidence",
                  "Human approval queue",
                  "Routing audit trail",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-primary/15 bg-primary/[0.035] px-4 py-3 text-sm font-semibold text-white/76">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="real-estate-wedge">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Wedge 01 // Real estate lead operations"
              title="Built first for property teams where every enquiry carries commercial weight."
              body="Real estate lead operations are high-context, high-value and time-sensitive. AgentFlow starts here because property teams need more than lead storage: they need visibility, ownership, governed next actions and a way to stop context from disappearing across handoffs."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {[
                "Portal and WhatsApp context",
                "Operator ownership",
                "Follow-up visibility",
                "Approval-first communication",
                "Principal-level auditability",
              ].map((item) => (
                <div key={item} className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.032] p-5 text-center text-sm font-bold leading-6 text-white/76">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="proof-ladder">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Proof without theatre"
              title="Production truth first. Public proof only when it is earned."
              body="Gen I Labs will not manufacture traction claims. Public proof moves through a clear ladder: product truth, private activation, validated operations, measured outcomes and approved evidence."
            />
            <div className="mt-12 grid gap-4">
              {proofSteps.map(([title, body], index) => (
                <article key={title} className="grid gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.032] p-5 md:grid-cols-[80px_1fr] md:items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] font-bold text-primary">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.035em] text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/60">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <CtaStrip />
        </section>

        <section className="section-pad" id="gen-i-labs">
          <div className="section-shell overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-8 md:p-12">
            <Pill tone="purple">Built by Gen I Labs</Pill>
            <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">We build AI operating systems for work that matters.</h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary">Gen I Labs builds AI-powered business infrastructure for teams that need leverage without losing accountability. AgentFlow AI is the first flagship system: a governed operating layer for lead operations, built from real deployment pressure and designed around trust, visibility and operator control.</p>
              </div>
              <div className="grid gap-3">
                {doctrineItems.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-bg/70 p-4 text-sm font-semibold text-white/72">
                    <span className="text-primary">0{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="lead-leak-audit">
          <div className="section-shell">
            <div className="gradient-border-wrap">
              <div className="bg-[#06070A] p-8 md:p-12">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <Pill>Founder-led diagnostic</Pill>
                    <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">Find where opportunity falls out of the system.</h2>
                    <p className="mt-6 text-base leading-8 text-text-secondary">Map where your real estate leads enter, where handoffs become unclear, where follow-up stalls, and whether AgentFlow AI is the right infrastructure layer for your team.</p>
                    <p className="mt-5 text-sm leading-7 text-white/55">Founding agency deployments are open. Implementation pricing depends on team size, channels, workflow complexity and support needs.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href={AUDIT_BOOKING_URL}>Book a Lead Leak Audit</Button>
                      <Button href="#agentflow-preview" variant="secondary" umamiEvent="cta_click_see_agentflow">See AgentFlow AI</Button>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {auditItems.map((item) => (
                      <div key={item} className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-4 text-sm font-semibold text-white/75">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="section-shell rounded-[2rem] border border-primary/15 bg-primary/[0.045] p-8 text-center md:p-12">
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">Ready to see where your pipeline is leaking?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary">Start with the audit. If AgentFlow is a fit, Gen I Labs will map the operating layer your team needs next.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={AUDIT_BOOKING_URL} umamiEvent="cta_click_lead_leak_audit_final">Book a Lead Leak Audit</Button>
              <Button href="#agentflow-preview" variant="secondary" umamiEvent="cta_click_see_agentflow">See AgentFlow AI</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-10">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-white">Gen I Labs</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">Gen I Labs builds AI-powered business infrastructure. AgentFlow AI is the flagship lead operations layer for real estate teams.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            <a href="#agentflow-preview" className="rounded-full hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508]">AgentFlow AI</a>
            <a href={AUDIT_BOOKING_URL} className="rounded-full hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508]">Lead Leak Audit</a>
            <a href={APP_LOGIN_URL} data-umami-event="outbound_click_app_login" className="rounded-full hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#050508]">App Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
