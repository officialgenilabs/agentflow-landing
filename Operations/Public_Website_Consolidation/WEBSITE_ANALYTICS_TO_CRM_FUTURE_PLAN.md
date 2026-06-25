# Gen I Labs Website Analytics to CRM Future Plan

**Status:** future automation plan only.
**Current implementation:** Umami public website analytics only.
**Not implemented in this phase:** Calendly integration, Twenty CRM integration, n8n workflows, outbound messaging, daily alerts.

## 1. Purpose

This plan defines when and how Gen I Labs should connect public website analytics, Calendly bookings, and CRM attribution later, without compromising privacy or production safety.

Current tracking answers:

- Who visited by aggregate source/campaign?
- Which messages drove CTA clicks?
- Which visitors clicked out to Calendly?
- Which site sections showed product/trust interest?

It does not yet answer:

- Who booked?
- Which booked meeting came from which UTM link?
- Which outreach source produced qualified pipeline?
- Which meeting became a sales opportunity?

## 2. Current Boundary

Implemented now:

- public website Umami tracking
- CTA and section events
- UTM campaign link structure
- manual founder daily scorecard

Not yet implemented:

- Calendly to Twenty CRM
- Umami event streaming to n8n
- Twenty source labeling automation
- booked meeting tracking
- outbound reply capture
- founder daily automated alerts
- app/product analytics

## 3. When to Connect Calendly to Twenty CRM

Connect Calendly to Twenty CRM after one of these thresholds is met:

1. At least 3 qualified Calendly bookings arrive from the website.
2. Founder is manually spending more than 15 minutes per day copying meeting/source notes.
3. Team outreach starts producing enough responses that attribution is becoming unclear.
4. Founder approves CRM automation for RevenueOps.

Recommended trigger:

- Use Calendly booked event as the first real CRM conversion, not Umami outbound click.

Minimum fields to write to CRM later:

- meeting date/time
- invitee name and email if provided by Calendly
- source URL/UTM if available
- campaign
- medium
- source
- content
- booking page
- meeting status
- notes from booking form if founder approves storing them

Privacy requirement:

- Store only data provided by the booker or required for sales follow-up.
- Do not infer private identity from Umami.

## 4. When to Connect Umami Events to n8n

Do not connect Umami events to n8n during launch week unless there is a specific founder-approved alert use case.

Connect later if:

1. Daily manual analytics review becomes repetitive.
2. UTM campaigns produce enough traffic to need automated summaries.
3. Founder wants daily/weekly source quality reports.
4. A safe read-only reporting path is designed.

Recommended first n8n automation later:

- Daily summary at a fixed time:
  - visitors
  - visits
  - top sources
  - top campaigns
  - `outbound_click_calendly`
  - audit CTA clicks
  - product/trust interest events
  - recommended action for tomorrow

Avoid initially:

- real-time visitor alerts
- visitor-level identity attempts
- automatic outbound messages
- writing raw web analytics rows into CRM

## 5. How to Track Booked Meetings

Preferred path:

1. Keep Umami as aggregate website analytics.
2. Use Calendly webhook/API for booked meetings.
3. Capture UTM parameters on booking if Calendly supports passing them through.
4. Create/update Twenty CRM contact and opportunity only when a meeting is booked.
5. Store source/campaign fields on the CRM opportunity.
6. Link meeting record to opportunity.

Conversion stages:

| Stage | System | Signal |
| --- | --- | --- |
| Website visit | Umami | visit/pageview |
| Website intent | Umami | CTA/event |
| Booking intent | Umami | `outbound_click_calendly` |
| Booked meeting | Calendly | booking event |
| Sales opportunity | Twenty CRM | qualified opportunity |
| Revenue outcome | CRM/manual finance | won/lost/deployed |

## 6. How to Label Traffic Source in CRM

Future Twenty CRM fields recommended:

- `Lead source`
- `UTM source`
- `UTM medium`
- `UTM campaign`
- `UTM content`
- `First touch URL`
- `Booking source`
- `Campaign angle`
- `Attribution confidence`

Attribution confidence levels:

- **High:** Calendly booking includes UTM parameters.
- **Medium:** founder/team manually knows source and chooses matching UTM/campaign.
- **Low:** no UTM, only self-reported source.
- **Unknown:** no source data.

Recommended campaign angle labels:

- `crm_vs_operating_layer`
- `lead_leakage`
- `pipeline_protection`
- `founding_agency_deployment`
- `founder_visibility`
- `audit_offer`

## 7. How to Connect Outbound Replies into Twenty CRM Later

Do not implement now.

Future safe path:

1. Keep outreach manual during launch week.
2. If replies increase, define approved channels for capture.
3. Store only business-relevant reply summaries in CRM.
4. Do not ingest full private chat histories by default.
5. Require founder approval before connecting any messaging provider.
6. Never store provider setup artifacts or private messaging contents in analytics.

Recommended initial manual process:

- Founder/team logs qualified replies manually in Twenty.
- CRM record includes source link/UTM used.
- Opportunity notes summarize business context only.

Future automated process after approval:

- Channel reply detected.
- Internal classifier labels intent.
- CRM task created for founder follow-up.
- No outbound auto-response without separate founder approval.

## 8. How to Create Daily Founder Alerts Later

Recommended first alert:

```text
Daily Website Launch Pulse
```

Delivery cadence:

- once daily during launch week
- same time each day
- no real-time noise unless there is a booked meeting

Suggested alert fields:

- visitors
- visits
- top source
- top campaign
- audit CTA clicks
- Calendly outbound clicks
- product interest events
- trust interest events
- campaign winner
- action recommendation

Example alert logic:

- If `outbound_click_calendly` > 0: alert founder to check Calendly and CRM.
- If CTA clicks > 0 but Calendly outbound = 0: review booking friction.
- If product interest high: post product walkthrough angle next.
- If trust interest high: post proof/operating-layer angle next.
- If one UTM source outperforms others: double down within 24 hours.

## 9. Data Model Recommendation Later

Keep three layers separate:

1. **Analytics layer:** aggregate public website behavior in Umami.
2. **Booking layer:** Calendly booking records and meeting status.
3. **CRM layer:** qualified people/companies/opportunities in Twenty.

Do not push all analytics rows into CRM. CRM should receive source/campaign summaries linked to actual leads or booked meetings.

## 10. Security / Privacy Requirements for Future Automation

Before implementation:

- document exact fields collected
- document data retention
- confirm which systems receive data
- use stored credentials only; never print them
- test in a safe workflow first
- avoid public webhook endpoints without header authentication
- do not capture private app analytics without explicit approval
- do not capture messaging contents without explicit approval

## 11. Founder Decisions Required Before Implementation

1. Should Calendly booked meetings create Twenty people automatically or founder-review first?
2. Which CRM pipeline/stage should website bookings enter?
3. Should booking form notes be stored in CRM?
4. Should team outreach replies remain manual for the first two weeks?
5. What daily alert time should founder receive website pulse summaries?
6. Should Umami analytics remain aggregate-only indefinitely, or later feed campaign summaries into CRM?
7. Should the private AgentFlow app have separate analytics later? Recommendation: not until privacy/security design is approved.

## 12. Recommended Implementation Sequence Later

### Phase 1 — Manual Launch Week

- Use Umami dashboard and daily founder scorecard.
- Use UTM links exactly as documented.
- Manually record qualified bookings/replies.

### Phase 2 — Calendly to CRM

- Connect Calendly booked meetings.
- Add UTM/source fields to Twenty opportunities.
- Create founder task for each booked audit.

### Phase 3 — Daily Analytics Digest

- Add read-only Umami summary workflow.
- Send daily founder pulse.
- No raw private visitor data.

### Phase 4 — Source Quality Reporting

- Compare campaigns against booked meetings and opportunity outcomes.
- Use CRM revenue outcomes to decide which campaigns scale.

### Phase 5 — Controlled Reply Capture

- Only after founder approval.
- Capture summaries, not private histories.
- No automated outbound messages unless separately approved.

## 13. Not Yet Implemented

- No n8n workflow was created.
- No Twenty CRM connection was created.
- No Calendly integration was created.
- No messaging integration was created.
- No automated alerts were created.
- No website redeploy occurred for this plan.

## 14. Privacy / Safety Boundary

Keep public analytics, bookings, CRM, and messaging separated until each integration is approved. Do not merge systems just because it is technically possible.
