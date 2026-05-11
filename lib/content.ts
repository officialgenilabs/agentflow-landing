/* ─── Site Config ─── */
export const siteConfig = {
  name: "Gen I Labs",
  product: "AgentFlow AI",
  url: "genilabs.co.za",
  email: "kaylyn@genilabs.co.za",
  calendlyUrl: "https://calendly.com/officialgenilabs/agentflowstrategy",
};

/* ─── Navigation ─── */
export const nav = {
  brand: "GEN I LABS",
  badge: "AgentFlow AI",
  ctaText: "Claim Your Beta Spot",
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── Hero ─── */
export const hero = {
  badge: "🇿🇦 Built for South African Real Estate · Powered by Gen I Labs",
  headlineTop: "Your leads don't wait.",
  headlineBottom: "Neither does Kai.",
  subheadline:
    "AgentFlow AI responds to every WhatsApp enquiry and every Property24 lead email in under 60 seconds — qualifying, matching listings, and booking viewings before your competitor even wakes up.",
  primaryCta: "Claim Your Beta Spot",
  primaryCtaNote: "5 left",
  secondaryCta: "Watch How It Works",
  trustIndicators: [
    "7-day free trial",
    "Live in 48 hours",
    "No lock-in contracts",
    "5 beta spots only",
  ],
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── WhatsApp Mockup Conversations ─── */
export type ChatMessage = {
  sender: "lead" | "kai" | "system" | "kai-outbound";
  name: string;
  text: string;
  typing?: boolean;
  hasLink?: boolean;
};

export const whatsappInbound: { tabLabel: string; tabDescription: string; messages: ChatMessage[] } = {
  tabLabel: "Inbound",
  tabDescription: "Lead messages first",
  messages: [
    { sender: "lead", name: "Lead", text: "Hi I saw a listing in Sandton R2.8M 3 bed — still available?" },
    { sender: "kai", name: "Kai", text: "Hi! I'm Kai 👋 Great timing — that one just came back available. To match you perfectly: are you buying or renting, and what's your move-in timeline?", typing: true },
    { sender: "lead", name: "Lead", text: "Buying, within 2 months" },
    { sender: "kai", name: "Kai", text: "Perfect — you're a hot buyer 🔥 I've found 3 Sandton properties in your range. I'm booking you a viewing now:", typing: true, hasLink: true },
  ],
};

export const whatsappProactive: { tabLabel: string; tabDescription: string; messages: ChatMessage[] } = {
  tabLabel: "Proactive",
  tabDescription: "Property24 email triggers outreach",
  messages: [
    { sender: "system", name: "System", text: "New Property24 lead received — Thabo M, 0821234567, interested in 3 bed Sandton" },
    { sender: "kai", name: "Kai", text: "Reaching out to Thabo now...", typing: true },
    { sender: "kai-outbound", name: "Kai → Thabo", text: "Hi Thabo! I'm Kai from your Agency 🏠 I saw you enquired about a property in Sandton on Property24. I have 3 perfect matches for you — want me to send them through?", typing: true },
    { sender: "lead", name: "Thabo", text: "Yes please" },
    { sender: "kai-outbound", name: "Kai", text: "Sending now... and I've reserved a viewing slot for you tomorrow at 10am. Here's the confirmation:", typing: true, hasLink: true },
  ],
};

/* ─── Problem Section ─── */
export const problem = {
  headline: "The hidden cost of slow follow-up",
  stats: [
    { value: 4, display: "4-6", suffix: "hours", description: "Average SA agent response time to a new lead" },
    { value: 67, display: "67", suffix: "%", description: "Leads who contact multiple agencies simultaneously" },
    { value: 47, display: "47", suffix: "sec", description: "How fast Kai responds. Every time." },
  ],
  bottomLine: "By the time your agent sees that Property24 notification, Kai has already booked the viewing.",
};

/* ─── How It Works ─── */
export const howItWorks = {
  headline: "Two channels. One AI. Zero missed deals.",
  inbound: {
    title: "Inbound WhatsApp",
    icon: "📱",
    steps: [
      "Lead messages agency WhatsApp",
      "Kai responds in 47 seconds",
      "Qualifies: budget, area, timeline, intent",
      "Matches top 3 listings from database",
      "Books viewing via Calendly",
      "Agent gets hot lead summary on WhatsApp",
    ],
  },
  proactive: {
    title: "Property24 Email Trigger",
    icon: "📧",
    steps: [
      "Property24 sends lead email to agency",
      "AgentFlow intercepts and extracts lead details",
      "Kai proactively WhatsApps the lead first",
      "Qualifies and matches listings",
      "Books viewing",
      "Agent gets notified — deal in progress",
    ],
  },
};

/* ─── Before / After ─── */
export const beforeAfter = {
  headline: "What your Monday morning looks like",
  before: {
    label: "BEFORE",
    items: [
      "47 Property24 leads arrived over the weekend",
      "Agents saw them Monday morning",
      "31 leads already called competitors",
      "12 viewings that never happened",
      "Estimated R180,000 in lost commission",
    ],
  },
  after: {
    label: "AFTER",
    items: [
      "47 Property24 leads arrived over the weekend",
      "Kai contacted all 47 within 60 seconds each",
      "31 leads qualified and scored automatically",
      "14 viewings booked before Monday morning",
      "Agents arrive to a full diary",
    ],
  },
};

/* ─── Beta Offer ─── */
export const betaOffer = {
  label: "LIMITED BETA · 5 SPOTS ONLY",
  headline: "Be one of 5 agencies that shape the future of SA real estate",
  subheadline:
    "We are hand-selecting 5 South African real estate agencies for our founding beta. You get our full platform at founder pricing — and your feedback shapes the product.",
  features: [
    "Full AgentFlow AI deployment on your WhatsApp number",
    "Property24 + Private Property email integration",
    "7-day free trial — no payment until you see results",
    "Live in 48 hours",
    "Direct access to the Gen I Labs founding team",
    "Founder pricing locked in for life",
  ],
  guarantee:
    "If Kai doesn't qualify at least 10 leads and book at least 2 viewings in 7 days — you owe nothing.",
  ctaText: "Claim Your Beta Spot — 5 Remaining",
  calendlyUrl: siteConfig.calendlyUrl,
};

/* ─── Beta Pricing Comparison ─── */
export const betaPricing = [
  {
    id: "standard",
    name: "Agency Plan",
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
    name: "Beta Founder",
    badge: "🏆 RECOMMENDED",
    setup: "R15,000",
    monthly: "R4,500/month",
    highlight: true,
    features: ["7-day free trial", "5 spots only"],
    cta: "Claim Your Spot",
    strikethrough: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: null,
    setup: "R85,000",
    monthly: "R12,000/month",
    highlight: false,
    features: [] as string[],
    cta: "Contact Us",
    strikethrough: true,
  },
];

/* ─── Standard Pricing (post-beta) ─── */
export const standardPricing = {
  headline: "Full pricing after beta closes",
  note: "Beta pricing is only available for the next 5 agencies. After that, standard rates apply.",
  tiers: [
    {
      id: "starter",
      name: "Starter",
      description: "For solo agents",
      setup: "R25,000",
      monthly: "R4,500/mo",
      features: [
        "1 WhatsApp number",
        "Inbound lead qualification",
        "Basic listing matching",
        "Calendly integration",
        "Email support",
      ],
    },
    {
      id: "agency",
      name: "Agency",
      description: "For established teams",
      setup: "R35,000",
      monthly: "R6,500/mo",
      features: [
        "Up to 3 WhatsApp numbers",
        "Inbound + Property24 integration",
        "Advanced lead scoring",
        "Multi-agent routing",
        "Priority support",
        "Custom templates",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large operations",
      setup: "R85,000",
      monthly: "R12,000/mo",
      features: [
        "Unlimited WhatsApp numbers",
        "All portal integrations",
        "Custom AI training",
        "Dedicated account manager",
        "SLA guarantee",
        "API access",
      ],
    },
  ],
};

/* ─── About ─── */
export const about = {
  headline: "Built by Gen I Labs",
  description:
    "Gen I Labs is a South African AI infrastructure company. We build automation systems that give service businesses the operational power of a team — at a fraction of the cost.",
  product:
    "AgentFlow AI is our flagship product — purpose-built for the South African real estate market.",
  founder: "Founded by Kaylyn Govender",
  email: siteConfig.email,
  website: siteConfig.url,
};

/* ─── Footer ─── */
export const footer = {
  brand: "GEN I LABS",
  copyright: "© 2026 Gen I Labs. AgentFlow AI. All rights reserved.",
  email: "hello@genilabs.co.za",
};
