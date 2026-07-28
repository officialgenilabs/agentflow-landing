export type JourneyStage = {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  signal: string;
  summary: string;
  action: string;
  evidence: string[];
};

export const journeyStages: JourneyStage[] = [
  {
    id: "received",
    number: "01",
    label: "Lead received",
    shortLabel: "Received",
    signal: "Captured",
    summary:
      "The enquiry enters with its source, contact, property interest and arrival time still attached.",
    action: "Create a traceable lead record",
    evidence: ["Portal source recorded", "Listing interest attached", "Arrival time visible"],
  },
  {
    id: "qualification",
    number: "02",
    label: "Qualification",
    shortLabel: "Qualified",
    signal: "Context visible",
    summary:
      "Intent, urgency and missing information are surfaced so an operator can understand the opportunity.",
    action: "Review context and close the gaps",
    evidence: ["Intent surfaced", "Missing fields visible", "Conversation context retained"],
  },
  {
    id: "viewing-requested",
    number: "03",
    label: "Viewing requested",
    shortLabel: "Requested",
    signal: "Intent detected",
    summary:
      "Viewing intent becomes an operational signal instead of disappearing inside a conversation thread.",
    action: "Verify viewing readiness",
    evidence: ["Viewing language detected", "Property match retained", "Operator review requested"],
  },
  {
    id: "viewing-booked",
    number: "04",
    label: "Viewing booked",
    shortLabel: "Booked",
    signal: "Owner assigned",
    summary:
      "The next action has an owner, a visible status and enough evidence for the team to coordinate.",
    action: "Coordinate the governed next step",
    evidence: ["Operator assigned", "Status visible", "Follow-up responsibility clear"],
  },
  {
    id: "offer",
    number: "05",
    label: "Offer",
    shortLabel: "Offer",
    signal: "Approval gated",
    summary:
      "Sensitive movement stays behind human review, with the supporting context visible before action.",
    action: "Review and approve sensitive movement",
    evidence: ["Approval required", "Decision context attached", "Outbound action governed"],
  },
  {
    id: "closed",
    number: "06",
    label: "Closed",
    shortLabel: "Closed",
    signal: "Ledger recorded",
    summary:
      "The completed journey leaves an audit trail of what moved, what changed and who owned each step.",
    action: "Retain the operational record",
    evidence: ["Journey history retained", "Ownership changes visible", "Final state recorded"],
  },
];
