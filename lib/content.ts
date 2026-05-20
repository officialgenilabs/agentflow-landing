/* ─── Site Config ─── */
export const siteConfig = {
  name: "Gen I Labs",
  product: "AgentFlow AI",
  url: "genilabs.co.za",
  email: "hello@genilabs.co.za",
  calendlyUrl: "https://calendly.com/officialgenilabs/agentflowstrategy",
};

/* ─── Navigation ─── */
export const nav = {
  brand: "GEN I LABS",
  badge: "AgentFlow AI",
  ctaText: "Book Inbound Operations Diagnostic",
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── Hero ─── */
export const hero = {
  badge: "🇿🇦 Infrastructure-Grade Inbound Operational Intelligence · Powered by Gen I Labs",
  headlineTop: "Stop losing inbound opportunities",
  headlineBottom: "after first contact.",
  subheadline:
    "Boutique real estate firms lose revenue every single day due to delayed replies, fragmented WhatsApp threads, missing customer history, and operational overload. AgentFlow AI acts as a governed operational layer to capture, qualify, route, and schedule inbound leads in under 60 seconds—without creating risk.",
  primaryCta: "Book Inbound Operations Diagnostic",
  primaryCtaNote: "Pilot Capacity Limited",
  secondaryCta: "See the Operational Layer",
  trustIndicators: [
    "Controlled 30-day pilot",
    "Governed runtime",
    "Human-in-the-loop oversight",
    "Zero lock-in contracts",
  ],
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── WhatsApp Mockup & Dashboard Logs ─── */
export type ChatMessage = {
  sender: "lead" | "kai" | "system" | "kai-outbound";
  name: string;
  text: string;
  typing?: boolean;
  hasLink?: boolean;
};

export const whatsappInbound: { tabLabel: string; tabDescription: string; messages: ChatMessage[] } = {
  tabLabel: "Inbound Capture & Route",
  tabDescription: "WhatsApp intake, qualification, and routing",
  messages: [
    { sender: "lead", name: "Buyer Lead", text: "Hi, enquired about the R4.2M listing in Camps Bay. Still available?" },
    { sender: "kai", name: "AgentFlow Engine", text: "Hi! This is Kai from the agency operational layer. Yes, it's available. To route you to the correct agent immediately, are you buying cash/bond, and is this your primary residence?", typing: true },
    { sender: "lead", name: "Buyer Lead", text: "Buying via bond pre-approval, primary residence." },
    { sender: "system", name: "System Orchestrator", text: "🎯 Lead qualified [A-Grade] · CRM Sync Complete · Routing to Principal Agent" },
    { sender: "kai", name: "AgentFlow Engine", text: "Excellent. I have synced your profile with our CRM and successfully routed your query to our principal agent. Let's lock in a viewing slot for you tomorrow:", typing: true, hasLink: true },
  ],
};

export const whatsappProactive: { tabLabel: string; tabDescription: string; messages: ChatMessage[] } = {
  tabLabel: "Portal Ingress Trigger",
  tabDescription: "Property24 intake & instant outreach",
  messages: [
    { sender: "system", name: "Evolution Ingress", text: "📩 New Property24 enquiry: Sipho M. · 083-987-6543 · camps-bay-listing-4" },
    { sender: "kai", name: "Evolution API Agent", text: "Initiating governed intake channel...", typing: true },
    { sender: "kai-outbound", name: "Kai (AgentFlow)", text: "Hi Sipho! I'm Kai, an AI assistant with the agency's operational layer. I saw your enquiry on Property24 for the Camps Bay home. I've pulled the listing details—would you like me to send them via WhatsApp now?", typing: true },
    { sender: "lead", name: "Sipho M.", text: "Yes please, that would be great" },
    { sender: "system", name: "Memory Engine", text: "🧠 History verified · Client profile initialized · Document dispatch triggered" },
    { sender: "kai-outbound", name: "Kai (AgentFlow)", text: "Sent! I've also matched this with a similar off-market listing in the area. Here is a secure slot to schedule a call with our specialist agent:", typing: true, hasLink: true },
  ],
};

/* ─── The Real Pain ─── */
export const problem = {
  headline: "Silent operational leakage is draining your agency's revenue.",
  stats: [
    { value: 4, display: "4-6", suffix: "hrs", description: "Average response time for South African real estate leads" },
    { value: 72, display: "72", suffix: "%", description: "Of buyers sign with the first agency that responds successfully" },
    { value: 45, display: "45", suffix: "sec", description: "AgentFlow response time. Capture and route, 24/7/365." },
  ],
  bottomLine: "Every minute a lead sits untouched in an inbox, the probability of booking a viewing drops. By the time your agent manually spots that Property24 notification, AgentFlow AI has already captured, qualified, and routed the buyer.",
};

/* ─── The Operational Layer ─── */
export const howItWorks = {
  headline: "An invisible operational layer that replaces lead chaos with strict governance.",
  inbound: {
    title: "Inbound Operational Routing",
    icon: "⚙️",
    steps: [
      "Inbound WhatsApp lead lands on agency number",
      "AgentFlow immediately intercepts and greets in 45 seconds",
      "Qualifies lead parameters: budget, area, timeline, financing",
      "Syncs profile context with CRM database automatically",
      "Routes qualified profile directly to the designated agent",
      "Invokes human governance for final appointment confirmation",
    ],
  },
  proactive: {
    title: "Portal Lead Ingress Protocol",
    icon: "🛡️",
    steps: [
      "Lead arrives from Property24 / Private Property portals",
      "Evolution Ingress extracts buyer metadata and phone details",
      "AgentFlow triggers instant, outbound WhatsApp engagement",
      "Qualifies intent and matches top active agency listings",
      "Inserts booking link directly into agent's calendar",
      "Delivers full lead diagnostic brief directly to team chat",
    ],
  },
};

/* ─── Before / After ─── */
export const beforeAfter = {
  headline: "Operational Chaos vs. Guided Infrastructure",
  before: {
    label: "BEFORE (OPERATIONAL CHAOS)",
    items: [
      "Property24 notifications sit unread in inboxes over the weekend",
      "Agents wake up Monday morning to 35 unorganized email notifications",
      "Leads have already phoned 3 competitors who replied first",
      "Fragmented, unmonitored WhatsApp messages with no CRM history",
      "Principals have zero visibility into leakages and lost commission",
    ],
  },
  after: {
    label: "AFTER (AGENTFLOW INFRASTRUCTURE)",
    items: [
      "Property24 notifications intercept instantly and trigger WhatsApp follow-up",
      "Kai contacts all 35 leads within 60 seconds, scoring and qualifying each",
      "12 viewings are already booked and placed in agent calendars by Monday",
      "Clean, centralized customer history synced with enterprise CRM logs",
      "Principals experience total operational visibility and peace of mind",
    ],
  },
};

/* ─── Governance, Pilot, Real Estate First, Future Vision ─── */
export const governanceCopy = {
  label: "GOVERNED OPERATIONS",
  headline: "AI should assist operations, not create operational risk.",
  subheadline: "We build governed systems. No rogue replies, no autonomous promises, and zero operational liability.",
  pillars: [
    {
      title: "Inbound-First Safety",
      description: "Our system is heavily structured around inbound qualification and safe, predefined conversational pathways.",
    },
    {
      title: "Human-Reviewed Outbound",
      description: "Any scheduling, transaction agreements, or client-facing updates are verified by human agents before dispatch.",
    },
    {
      title: "Monitored Runtime Logs",
      description: "Every message, qualifying parameter, and routing step is tracked inside an immutable Supabase database layer.",
    },
  ],
};

export const realEstateFirstCopy = {
  label: "THE STRATEGIC WEDGE",
  headline: "Why Real Estate First?",
  description: "Real estate boutiques deal with highly time-sensitive, WhatsApp-heavy transactions. The commission is high, the lead response window is narrow, and operations are severely fragmented. We built AgentFlow AI here because this is where leakage is most expensive.",
  points: [
    { title: "High Inbound Urgency", text: "Leads are hot for minutes, not hours. Delay equals immediate defection to competitors." },
    { title: "WhatsApp Overload", text: "Individual agents manage hundreds of fragmented chat threads, with zero oversight for principals." },
    { title: "High Transaction Cost", text: "A single missed Property24 lead can represent hundreds of thousands in lost commission." },
  ],
};

export const pilotCopy = {
  label: "GOVERNED BURN-IN",
  headline: "The Controlled 30-Day Pilot",
  description: "This is not a generic software trial. This is a founder-supervised, production-grade infrastructure deployment.",
  steps: [
    { phase: "Week 1: Mapping", title: "Operational Audit", text: "We analyze your incoming Property24 channels, agent capacity, and current response bottlenecks." },
    { phase: "Week 2: Sandbox", title: "Inbound Burn-In", text: "We deploy AgentFlow on a designated staging sandbox. We validate qualifying rules and routing tables." },
    { phase: "Week 3: Live Run", title: "Governed Ingress", text: "System goes live. AgentFlow captures and qualifies inbound enquiries, routing summaries to agents." },
    { phase: "Week 4: Review", title: "Operational Scorecard", text: "We review captured lead metrics, response delays, and booked viewings to calculate ROI." },
  ],
};

export const futureVisionCopy = {
  label: "THE NEXT ERA",
  headline: "Future Vision: Enterprise Operational Memory",
  description: "AgentFlow AI is our first operational wedge. Gen I Labs is building AI-native operational infrastructure for business operations.",
  items: [
    { title: "Conversational Infrastructure", text: "Robust ingestion systems that serve as the main nervous system for client communication." },
    { title: "Multi-Agent Coordination", text: "Deploying secure, specialized operational agents to handle marketing, routing, legal, and scheduling." },
    { title: "Enterprise Memory Nodes", text: "A persistent intelligence database that tracks every interaction, preference, and deal state for decades." },
  ],
};

/* ─── Beta Offer Card ─── */
export const betaOffer = {
  label: "EXCLUSIVELY FOUNDER-LED · 5 SPOTS ONLY",
  headline: "Deploy guided AI operational infrastructure in your agency.",
  subheadline:
    "We are hand-selecting 5 principal-led boutique real estate firms in South Africa to pilot AgentFlow AI. Get a fully governed, production-grade system custom-fit to your agency's routing logic.",
  features: [
    "Full AgentFlow AI runtime custom-fit to your brand guidelines",
    "Automatic Property24 + Private Property ingress channels",
    "Evolution WhatsApp API setup and staging configuration",
    "Dynamic diagnostic lead routing mapped to your active agents",
    "7-day trial burn-in validation before production billing",
    "Lifetime founder pricing locked in permanently",
  ],
  guarantee:
    "If our operational layer doesn't capture, qualify, and route at least 10 high-value leads in your first 7 days, the setup is 100% free.",
  ctaText: "Book Inbound Operations Diagnostic",
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── Beta Pricing Comparison ─── */
export const betaPricing = [
  {
    id: "standard",
    name: "Standard Agency Plan",
    badge: null,
    setup: "R35,000",
    monthly: "R6,500/month",
    highlight: false,
    features: [] as string[],
    cta: null as string | null,
    strikethrough: true,
  },
  {
    id: "beta",
    name: "Beta Pilot Partner",
    badge: "⚡ RECOMMENDED",
    setup: "R15,000",
    monthly: "R4,500/month",
    highlight: true,
    features: ["Limited to 5 principal-led firms", "Direct founder-led deployment"],
    cta: "Secure Pilot Spot",
    strikethrough: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Multi-Office",
    badge: null,
    setup: "R85,000",
    monthly: "R12,000/month",
    highlight: false,
    features: [] as string[],
    cta: "Enquire Now",
    strikethrough: true,
  },
];

/* ─── Standard Pricing (post-beta) ─── */
export const standardPricing = {
  headline: "Standard deployment pricing",
  note: "Pilot pricing is reserved exclusively for the 5 selected beta partner agencies. Standard rates apply after pilot slots are filled.",
  tiers: [
    {
      id: "starter",
      name: "Boutique Ingress",
      description: "For principal-led teams",
      setup: "R25,000",
      monthly: "R4,500/mo",
      features: [
        "1 Governed WhatsApp line",
        "Inbound lead capture & score",
        "Basic calendar scheduling",
        "Weekly performance brief",
        "Evolution API setup",
      ],
    },
    {
      id: "agency",
      name: "Operational Core",
      description: "For teams of 5-25 agents",
      setup: "R35,000",
      monthly: "R6,500/mo",
      features: [
        "Up to 3 WhatsApp lines",
        "Property24 portal ingress",
        "Advanced qualifying nodes",
        "Dynamic agent routing",
        "CRM database sync",
        "Priority runtime support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Grid",
      description: "For multi-region operations",
      setup: "R85,000",
      monthly: "R12,000/mo",
      features: [
        "Unlimited WhatsApp lines",
        "Full portal suite ingress",
        "Custom routing orchestrations",
        "SLA runtime guarantee",
        "Persistent memory database",
        "Dedicated system architect",
      ],
    },
  ],
};

/* ─── About ─── */
export const about = {
  headline: "Gen I Labs is building AI-native operational infrastructure.",
  description:
    "We design, build, and deploy controlled operational intelligence systems for transaction-heavy service industries. We do not build chatbots, automation gimmicks, or template-based solutions. We construct stable, enterprise-ready conversational infrastructure that secures revenue, eliminates leakage, and returns operational calm to business founders.",
  product:
    "AgentFlow AI is our primary operational wedge—purpose-built to solve inbound lead leakage for South African real estate firms.",
  founder: "Founded by Kaylyn Govender",
  email: siteConfig.email,
  website: siteConfig.url,
};

/* ─── Footer ─── */
export const footer = {
  brand: "GEN I LABS",
  copyright: "© 2026 Gen I Labs. AgentFlow AI is a registered product of Gen I Labs (Pty) Ltd. All rights reserved.",
  email: "hello@genilabs.co.za",
};
