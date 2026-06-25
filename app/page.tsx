const AUDIT_BOOKING_URL = "https://calendly.com/officialgenilabs/agentflowstrategy";
const APP_LOGIN_URL = "https://app.genilabs.co.za";

const navItems = [
  { label: "AgentFlow AI", href: "#agentflow-preview" },
  { label: "How it works", href: "#infrastructure-flow" },
  { label: "Proof", href: "#proof-ladder" },
  { label: "Lead Leak Audit", href: "#lead-leak-audit" },
];

const leakageCards = [
  {
    title: "Scattered sources",
    body: "Portals, messaging channels, referrals, and websites all create separate context streams.",
  },
  {
    title: "Unclear ownership",
    body: "If no one owns the next action, the lead is already drifting.",
  },
  {
    title: "Invisible follow-up",
    body: "Without a ledger, teams cannot see what happened, what stalled, or what needs approval.",
  },
];

const flowSteps = [
  ["01", "Capture", "Keep source and context attached to the lead."],
  ["02", "Qualify", "Surface the information operators need to understand intent and urgency."],
  ["03", "Route", "Assign ownership and keep handoffs visible."],
  ["04", "Govern", "Keep sensitive outbound action behind human approval and policy controls."],
  ["05", "Audit", "Maintain a record of what happened, what changed, and what needs attention next."],
];

const previewRows = [
  ["Source", "Portal enquiry", "Verified"],
  ["Owner", "Assigned operator", "Active"],
  ["Status", "Qualification review", "Governed"],
  ["Next action", "Human approval queue", "Pending"],
  ["Audit", "Traceable event ledger", "Recorded"],
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

function Button({
  href,
  children,
  variant = "primary",
  umamiEvent,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  umamiEvent?: string;
}) {
  const styles = {
    primary: "bg-primary text-black shadow-[0_0_32px_rgba(11,255,153,0.26)] hover:bg-primary/90",
    secondary: "border border-secondary/35 bg-secondary-soft text-white hover:border-secondary/60 hover:bg-secondary/20",
    ghost: "border border-white/10 bg-white/[0.03] text-white/75 hover:border-primary/30 hover:text-white",
  };

  return (
    <a
      href={href}
      data-umami-event={umamiEvent}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function Pill({ children, tone = "mint" }: { children: React.ReactNode; tone?: "mint" | "purple" | "red" | "neutral" }) {
  const styles = {
    mint: "border-primary/20 bg-primary-soft text-primary",
    purple: "border-secondary/25 bg-secondary-soft text-[#A29EFF]",
    red: "border-danger/25 bg-danger-soft text-[#FF7A99]",
    neutral: "border-white/10 bg-white/[0.04] text-white/55",
  };

  return <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${styles[tone]}`}>{children}</span>;
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Pill>{eyebrow}</Pill>
      <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">{body}</p> : null}
    </div>
  );
}

function SystemPreview() {
  return (
    <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-[#0A0A10]/85 p-4 shadow-[0_0_90px_rgba(11,255,153,0.12)] backdrop-blur-xl lg:mx-0">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-secondary/15 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#050508]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-3">
            <img src="/brand/agentflow-logo.svg" alt="AgentFlow AI" className="h-9 w-9" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">AgentFlow AI</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Demo-safe operating layer preview</p>
            </div>
          </div>
          <Pill tone="purple">Governed</Pill>
        </div>

        <div className="grid gap-3 p-5">
          {previewRows.map(([label, value, state]) => (
            <div key={label} className="grid gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 sm:grid-cols-[0.8fr_1.3fr_auto] sm:items-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{label}</p>
              <p className="text-sm font-semibold text-white">{value}</p>
              <span className="w-fit rounded-full border border-primary/15 bg-primary/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{state}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-4">
          <p className="text-xs leading-6 text-white/50">Product previews use anonymized or demo-safe data. No private client records are shown.</p>
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[420px] w-[520px] rounded-full bg-secondary/10 blur-[120px]" />

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-bg/78 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-5">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06]">
              <span className="font-heading text-sm font-black text-primary">GI</span>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-white">Gen I Labs</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">AI business infrastructure</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={APP_LOGIN_URL} data-umami-event="outbound_click_app_login" className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-white/45 transition hover:text-white sm:inline-flex">
              Access App
            </a>
            <Button href={AUDIT_BOOKING_URL} umamiEvent="cta_click_lead_leak_audit_nav">Book Audit</Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div>
            <Pill>Gen I Labs // AgentFlow AI</Pill>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.065em] text-white md:text-7xl xl:text-8xl">
              Seal the leaks. <span className="text-primary">Protect the pipeline.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
              AgentFlow AI is the lead operations layer for real estate teams that need every lead captured, qualified, routed, governed, and moved forward.
            </p>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/80">
              A CRM stores leads. AgentFlow governs what happens after the lead arrives.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={AUDIT_BOOKING_URL} umamiEvent="cta_click_lead_leak_audit_hero">Book a Lead Leak Audit</Button>
              <Button href="#agentflow-preview" variant="secondary" umamiEvent="cta_click_see_agentflow">See AgentFlow AI</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill tone="neutral">Production app exists</Pill>
              <Pill tone="neutral">Human approval by design</Pill>
              <Pill tone="neutral">Audit-ready operations</Pill>
            </div>
          </div>
          <SystemPreview />
        </section>

        <section className="section-pad" id="lead-leakage">
          <div className="section-shell">
            <SectionHeader
              eyebrow="The leak is not always lead volume"
              title="Leads disappear in the gaps between tools, people, and follow-up."
              body="Real estate teams often have enough demand entering the business. The problem is what happens next: source context gets lost, ownership is unclear, follow-up depends on memory, and no one can see the next action."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {leakageCards.map((card) => (
                <div key={card.title} className="rounded-[1.5rem] border border-danger/20 bg-danger/[0.055] p-6 shadow-[0_0_48px_rgba(255,42,95,0.06)]">
                  <Pill tone="red">Leak point</Pill>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
          <CtaStrip />
        </section>

        <section className="section-pad" id="operating-layer">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Pill tone="purple">Not another CRM</Pill>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">A CRM stores leads. AgentFlow governs what happens after the lead arrives.</h2>
              <p className="mt-6 text-base leading-8 text-text-secondary">CRMs are useful records. AgentFlow is designed for the operational layer around those records: capture, qualification context, routing, approvals, follow-up visibility, and auditability.</p>
            </div>
            <div className="grid gap-4">
              {[
                ["CRM", "Stores contacts and pipeline records.", "neutral"],
                ["Chatbot", "Replies inside a conversation.", "neutral"],
                ["AgentFlow", "Governs the lead operation around every serious enquiry.", "mint"],
              ].map(([title, body, tone]) => (
                <div key={title} className={`rounded-[1.5rem] border p-6 ${tone === "mint" ? "border-primary/25 bg-primary/[0.06]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="infrastructure-flow">
          <div className="section-shell">
            <SectionHeader eyebrow="Infrastructure flow" title="From scattered enquiry to governed next action." />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {flowSteps.map(([number, title, body]) => (
                <div key={number} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5">
                  <span className="text-xs font-black text-primary">{number}</span>
                  <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="agentflow-preview">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <SystemPreview />
            <div>
              <Pill>Product preview</Pill>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">A product surface built around operational truth.</h2>
              <p className="mt-6 text-base leading-8 text-text-secondary">AgentFlow’s workspace is designed to make lead operations visible: traceable leads, governed inbound threads, approval queues, routing evidence, and next-action visibility.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Traceable lead records', 'Governed inbound threads', 'Human approval queue', 'Routing audit trail', 'Viewing-readiness signals', 'Anonymized previews only'].map((item) => (
                  <div key={item} className="rounded-2xl border border-primary/15 bg-primary/[0.035] px-4 py-3 text-sm font-semibold text-white/75">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="real-estate-wedge">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Wedge 01 // Real estate lead operations"
              title="Built first for property teams where every enquiry matters."
              body="Real estate lead operations are high-context, high-value, and time-sensitive. AgentFlow starts here because property teams need more than lead storage: they need visibility, ownership, governed next actions, and a way to stop context from disappearing across handoffs."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {['Multi-source lead context', 'Operator ownership', 'Follow-up visibility', 'Approval-first communication', 'Audit-ready workflow'].map((item) => (
                <div key={item} className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] p-5 text-center text-sm font-bold text-white/75">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="proof-ladder">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Proof without theatre"
              title="Production truth first. Public proof only when it is earned."
              body="Gen I Labs will not manufacture traction claims. Public proof moves through a clear ladder: production product truth, private activation, validated operations, measured outcomes, and only then approved public evidence."
            />
            <div className="mt-12 grid gap-4">
              {proofSteps.map(([title, body], index) => (
                <div key={title} className="grid gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5 md:grid-cols-[80px_1fr] md:items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] font-bold text-primary">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/60">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CtaStrip />
        </section>

        <section className="section-pad" id="gen-i-labs">
          <div className="section-shell rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-8 md:p-12">
            <Pill tone="purple">Built by Gen I Labs</Pill>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">Infrastructure first, hype last.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary">Gen I Labs builds AI-powered business infrastructure for teams that need leverage without losing accountability. AgentFlow AI is the first flagship system: a governed operating layer for lead operations, built from real deployment pressure and designed around trust, visibility, and operator control.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {['Founder-led execution', 'South African operating context', 'Human approval and auditability', 'Product truth over demo theatre'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-bg/70 p-4 text-sm font-semibold text-white/70">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="lead-leak-audit">
          <div className="section-shell">
            <div className="gradient-border-wrap">
              <div className="bg-[#08080D] p-8 md:p-12">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <Pill>Founder-led diagnostic</Pill>
                    <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">Book a Lead Leak Audit.</h2>
                    <p className="mt-6 text-base leading-8 text-text-secondary">Map where your real estate leads enter, where handoffs become unclear, where follow-up stalls, and whether AgentFlow AI is the right infrastructure layer for your team.</p>
                    <p className="mt-5 text-sm leading-7 text-white/55">Founding agency deployments are open. Implementation pricing depends on team size, channels, workflow complexity, and support needs.</p>
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
            <h2 className="text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">Ready to see where your pipeline is leaking?</h2>
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
            <a href="#agentflow-preview" className="hover:text-white">AgentFlow AI</a>
            <a href={AUDIT_BOOKING_URL} className="hover:text-white">Lead Leak Audit</a>
            <a href={APP_LOGIN_URL} data-umami-event="outbound_click_app_login" className="hover:text-white">App Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
