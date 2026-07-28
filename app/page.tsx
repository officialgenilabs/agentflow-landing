import Image from "next/image";
import type { ReactNode } from "react";
import { JourneyConsole } from "@/components/cinematic/JourneyConsole";
import { MobileMenu } from "@/components/cinematic/MobileMenu";
import { SignalTower } from "@/components/cinematic/SignalTower";
import { VillaOpportunity } from "@/components/cinematic/VillaOpportunity";
import { journeyStages } from "@/components/cinematic/journey-data";

const AUDIT_BOOKING_BASE_URL =
  "https://calendar.genilabs.co.za/genilabs/lead-leak-audit";
const AUDIT_BOOKING_URL = `${AUDIT_BOOKING_BASE_URL}?utm_source=genilabs_site&utm_medium=website_cta&utm_campaign=lead_leak_audit&utm_content=primary_booking_cta`;
const APP_LOGIN_URL = "https://app.genilabs.co.za";

const navItems = [
  { label: "AgentFlow AI", href: "#agentflow-preview" },
  { label: "How it works", href: "#infrastructure-flow" },
  { label: "Trust", href: "#proof-ladder" },
  { label: "Lead Leak Audit", href: "#lead-leak-audit" },
];

const leakSignals = [
  {
    marker: "01",
    title: "Context fragments",
    body: "Portal, website, referral and WhatsApp trails stop telling one coherent story.",
  },
  {
    marker: "02",
    title: "Ownership blurs",
    body: "The enquiry is visible, but the next move has no clearly accountable owner.",
  },
  {
    marker: "03",
    title: "Intent disappears",
    body: "Viewing readiness is buried inside conversations instead of becoming an operational signal.",
  },
];

const trustItems = [
  {
    number: "01",
    title: "Human approval",
    body: "Sensitive outbound movement stays behind a visible review boundary.",
    tag: "Operator controlled",
  },
  {
    number: "02",
    title: "Explainable routing",
    body: "Ownership changes and next actions remain clear enough to question.",
    tag: "No black box",
  },
  {
    number: "03",
    title: "Operational ledger",
    body: "Principals can see what moved, what stalled and what needs attention.",
    tag: "Audit ready",
  },
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
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  umamiEvent?: string;
}) {
  return (
    <a
      href={href}
      data-umami-event={umamiEvent}
      className={`button button--${variant}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`eyebrow eyebrow--${tone}`}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="section-shell site-header__inner">
        <a href="#top" className="site-brand" aria-label="Gen I Labs home">
          <Image
            src="/brand/agentflow-logo.svg"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>
            <strong>Gen I Labs</strong>
            <small>AgentFlow AI</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            href={APP_LOGIN_URL}
            data-umami-event="outbound_click_app_login"
            className="app-login"
          >
            Access App
          </a>
          <Button
            href={AUDIT_BOOKING_URL}
            umamiEvent="cta_click_lead_leak_audit_nav"
          >
            Book Audit
          </Button>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ConversionStrip() {
  return (
    <div className="conversion-strip">
      <div>
        <Eyebrow>One operational route</Eyebrow>
        <p>See where serious enquiries lose context, ownership or momentum.</p>
      </div>
      <Button href={AUDIT_BOOKING_URL}>Book a Lead Leak Audit</Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site">
      <Header />

      <main id="top">
        <section className="hero">
          <div className="hero__field" aria-hidden="true" />
          <div className="section-shell hero__inner">
            <div className="hero__copy">
              <Eyebrow>Command mode // AgentFlow AI</Eyebrow>
              <h1>
                Your leads are moving.
                <span>Your operation should know where.</span>
              </h1>
              <p className="hero__lead">
                AgentFlow AI is the operating layer for real-estate lead
                operations—keeping context, ownership, approvals and next actions
                visible from first enquiry onward.
              </p>
              <p className="hero__distinction">
                A CRM stores leads. AgentFlow governs what happens next.
              </p>
              <div className="hero__actions">
                <Button
                  href={AUDIT_BOOKING_URL}
                  umamiEvent="cta_click_lead_leak_audit_hero"
                >
                  Book a Lead Leak Audit
                </Button>
                <Button
                  href="#agentflow-preview"
                  variant="secondary"
                  umamiEvent="cta_click_see_agentflow"
                >
                  Enter AgentFlow
                </Button>
              </div>
              <div className="hero__assurances" aria-label="AgentFlow principles">
                <span>Inbound-first visibility</span>
                <span>Human approval</span>
                <span>Traceable movement</span>
              </div>
            </div>

            <div className="hero__visual">
              <SignalTower />
            </div>
          </div>

          <div className="hero__scroll-cue" aria-hidden="true">
            <span>Follow the signal</span>
            <i />
          </div>
        </section>

        <section className="leak-section" id="lead-leakage">
          <div className="section-shell leak-section__inner">
            <div className="leak-section__copy">
              <SectionIntro
                eyebrow="Act 02 // The invisible leak"
                title="The enquiry arrived. The opportunity still disappeared."
                body="More traffic cannot repair a broken handoff. The leak usually begins after the lead enters—when context fragments, ownership blurs and intent becomes invisible."
              />
              <div className="leak-list">
                {leakSignals.map((item) => (
                  <article key={item.marker}>
                    <span>{item.marker}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="leak-scene" aria-label="A property opportunity with a broken operational signal">
              <div className="leak-scene__grid" aria-hidden="true" />
              <div className="leak-scene__property">
                <Image
                  src="/cinematic/mansion.webp"
                  alt="Modern luxury property representing a high-value enquiry"
                  fill
                  sizes="(max-width: 900px) 92vw, 650px"
                />
              </div>
              <svg viewBox="0 0 700 520" aria-hidden="true">
                <path
                  className="leak-scene__route"
                  d="M24 410 C 128 410, 124 318, 246 318 S 356 262, 420 262"
                />
                <path
                  className="leak-scene__route leak-scene__route--lost"
                  d="M468 262 C 532 262, 540 196, 682 196"
                />
              </svg>
              <span className="leak-scene__node leak-scene__node--one">
                Lead received
              </span>
              <span className="leak-scene__node leak-scene__node--break">
                Signal lost
              </span>
              <div className="leak-scene__metric">
                <small>Operational status</small>
                <strong>Next action unknown</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="intelligence-mode" id="operating-layer">
          <div className="section-shell intelligence-mode__inner">
            <div>
              <Eyebrow tone="light">Intelligence mode</Eyebrow>
              <h2>
                A record tells you
                <span>what exists.</span>
              </h2>
            </div>
            <div className="intelligence-mode__statement">
              <p>
                An operating layer tells your team what deserves attention, who
                owns the next move and what evidence supports the action.
              </p>
              <div className="intelligence-mode__comparison">
                <article>
                  <span>CRM</span>
                  <strong>Stores the pipeline.</strong>
                </article>
                <article>
                  <span>AgentFlow</span>
                  <strong>Governs movement around it.</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="property-section" id="real-estate-wedge">
          <div className="section-shell property-section__intro">
            <SectionIntro
              eyebrow="Act 03 // The opportunity"
              title="The property is only half the picture."
              body="AgentFlow makes the invisible operation around a serious enquiry visible: capture, context, ownership, viewing intent and governed action."
            />
            <div className="property-section__aside">
              <span>Real-estate operating model</span>
              <strong>Opportunity → accountable movement</strong>
            </div>
          </div>
          <div className="section-shell">
            <VillaOpportunity />
          </div>
        </section>

        <section className="journey-section" id="infrastructure-flow">
          <div className="section-shell">
            <SectionIntro
              align="center"
              eyebrow="Act 04 // Enter AgentFlow"
              title="One lead. Six governed states."
              body="Select any stage to see how the operating layer connects signal, evidence, ownership and the next action."
            />

            <div id="agentflow-preview" className="journey-section__console">
              <JourneyConsole />
            </div>

            <div className="journey-rail" aria-label="Lead journey summary">
              {journeyStages.map((stage) => (
                <div key={stage.id}>
                  <span>{stage.number}</span>
                  <strong>{stage.label}</strong>
                </div>
              ))}
            </div>

            <ConversionStrip />
          </div>
        </section>

        <section className="trust-section" id="proof-ladder">
          <div className="section-shell">
            <div className="trust-section__header">
              <SectionIntro
                eyebrow="Trust architecture"
                title="Control is part of the product."
                body="AgentFlow is designed to make AI useful without making the operation opaque. The operator stays in control; the evidence stays visible."
              />
              <p className="trust-section__note">
                Demonstrative product surfaces are labelled. Public outcomes are
                shared only when validated and approved.
              </p>
            </div>

            <div className="trust-grid">
              {trustItems.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <small>{item.tag}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="geni-section" id="gen-i-labs">
          <div className="section-shell geni-section__inner">
            <div className="geni-section__mark" aria-hidden="true">
              GI
            </div>
            <div>
              <Eyebrow>Built by Gen I Labs</Eyebrow>
              <h2>AI infrastructure with operator discipline.</h2>
            </div>
            <p>
              Gen I Labs builds operating systems for businesses that need more
              leverage without losing accountability. AgentFlow AI is the
              flagship lead-operations layer, shaped by real deployment pressure.
            </p>
          </div>
        </section>

        <section className="audit-section" id="lead-leak-audit">
          <div className="section-shell audit-section__frame">
            <div className="audit-section__signal" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="audit-section__copy">
              <Eyebrow>Founder-led diagnostic</Eyebrow>
              <h2>Find where opportunity falls out of the system.</h2>
              <p>
                Map where your real-estate leads enter, where handoffs become
                unclear and whether AgentFlow is the right operating layer for
                your team.
              </p>
              <div className="audit-section__actions">
                <Button
                  href={AUDIT_BOOKING_URL}
                  umamiEvent="cta_click_lead_leak_audit_final"
                >
                  Book a Lead Leak Audit
                </Button>
                <Button
                  href="#agentflow-preview"
                  variant="ghost"
                  umamiEvent="cta_click_see_agentflow"
                >
                  Revisit AgentFlow
                </Button>
              </div>
            </div>

            <div className="audit-section__list">
              <span>We map</span>
              {auditItems.map((item, index) => (
                <p key={item}>
                  <i>0{index + 1}</i>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__inner">
          <div>
            <strong>Gen I Labs</strong>
            <p>
              AgentFlow AI is the lead-operations layer for real-estate teams.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#agentflow-preview">AgentFlow AI</a>
            <a href={AUDIT_BOOKING_URL}>Lead Leak Audit</a>
            <a
              href={APP_LOGIN_URL}
              data-umami-event="outbound_click_app_login"
            >
              App Login
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
