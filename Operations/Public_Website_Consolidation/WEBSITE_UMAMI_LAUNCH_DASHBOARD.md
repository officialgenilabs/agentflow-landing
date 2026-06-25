# Gen I Labs Website Umami Launch Dashboard

**Status:** recommended launch analytics board/checklist for daily use inside Umami.
**Production website:** https://www.genilabs.co.za
**Analytics URL:** https://analytics.genilabs.co.za
**Scope:** public website analytics only.

## 1. Implemented Analytics

Umami tracking is live on the public website only.

### Conversion / CTA Events

- `cta_click_lead_leak_audit_hero`
- `cta_click_lead_leak_audit_nav`
- `cta_click_lead_leak_audit_final`
- `cta_click_see_agentflow`
- `outbound_click_calendly`
- `outbound_click_app_login`

### Section View Events

- `section_view_agentflow_preview`
- `section_view_lead_leakage_problem`
- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`
- `section_view_lead_leak_audit`

## 2. Recommended Umami Board Setup

Create a saved daily view/dashboard in Umami named:

```text
Gen I Labs Website Launch Board
```

Use these time windows:

- Today
- Last 7 days
- Last 30 days
- Campaign-specific view by UTM campaign

Use these filters often:

- Domain: `www.genilabs.co.za`
- Campaign: selected `utm_campaign`
- Source: selected `utm_source`
- Event: selected CTA/conversion event

## 3. Core Traffic Metrics

Track daily:

1. Visitors
2. Visits
3. Pageviews
4. Bounce rate
5. Average visit duration
6. Top referrers
7. Top countries/regions
8. Devices: desktop/mobile/tablet
9. Browsers
10. Top UTM campaigns

**Commercial meaning:** traffic metrics show whether launch distribution is working and whether the right audience is reaching the site.

## 4. Core Conversion Metrics

Primary conversion:

- `outbound_click_calendly`

Secondary conversion:

- `cta_click_lead_leak_audit_hero`
- `cta_click_lead_leak_audit_nav`
- `cta_click_lead_leak_audit_final`

Daily formulas:

- **CTA click rate** = lead leak audit CTA clicks / visits
- **Calendly outbound rate** = `outbound_click_calendly` / visits
- **CTA-to-Calendly continuation rate** = `outbound_click_calendly` / total lead leak audit CTA clicks

**Commercial meaning:** CTA clicks show offer intent; Calendly outbound clicks show booking intent. A high CTA rate but low Calendly rate suggests friction after the CTA or Calendly load/offer mismatch.

## 5. Product Interest Metrics

Track:

- `section_view_agentflow_preview`
- `cta_click_see_agentflow`

Daily formulas:

- **Product curiosity rate** = `cta_click_see_agentflow` / visits
- **Product preview reach** = `section_view_agentflow_preview` / visits

**Commercial meaning:** product interest shows whether visitors want to understand AgentFlow AI beyond the audit offer.

## 6. Trust Interest Metrics

Track:

- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`

Daily formulas:

- **Trust exploration rate** = (`section_view_crm_vs_agentflow` + `section_view_proof_ladder`) / visits
- **Proof reach rate** = `section_view_proof_ladder` / visits

**Commercial meaning:** trust events show whether visitors are moving into the explanation/proof layer rather than leaving after the hero.

## 7. Source Quality Metrics

Evaluate each source by:

1. Visits
2. Bounce rate
3. Time on site
4. Product interest events
5. Trust interest events
6. Lead leak audit CTA clicks
7. Calendly outbound clicks
8. CTA-to-Calendly continuation rate

Source quality tiers:

- **Tier A:** produces Calendly outbound clicks or high CTA-to-Calendly continuation.
- **Tier B:** produces strong product/trust events but few Calendly exits.
- **Tier C:** produces visits but weak scroll depth and weak CTA activity.
- **Tier D:** produces low-quality bounces; pause or rewrite messaging.

## 8. UTM Campaign Structure

Use these dimensions consistently:

- `utm_source`: platform/person/channel source
- `utm_medium`: distribution method
- `utm_campaign`: strategic campaign
- `utm_content`: individual post/message/asset/person

Approved launch campaigns:

- `agentflow_launch`
- `lead_leak_audit`
- `founding_agency_deployments`
- `real_estate_pipeline_protection`

Recommended mediums:

- `organic_social`
- `direct_message`
- `story`
- `email`
- `partner_referral`
- `team_outreach`

## 9. Daily Founder Scorecard

Complete once per day during launch week.

| Question | Metric/Event | Founder Action |
| --- | --- | --- |
| Did launch traffic grow? | Visitors, visits, pageviews | If flat, increase distribution volume or repost strongest angle. |
| Are people clicking the audit offer? | Audit CTA clicks | If low, tighten CTA copy and above-the-fold value clarity. |
| Are people reaching Calendly? | `outbound_click_calendly` | If low after CTA clicks, inspect Calendly friction and offer clarity. |
| Are people exploring product? | `cta_click_see_agentflow`, `section_view_agentflow_preview` | If strong, create more product walkthrough content. |
| Are people reading trust/proof sections? | CRM-vs-AgentFlow and proof events | If weak, move trust/proof higher or summarize earlier. |
| Which channel is highest quality? | UTM source/campaign/event path | Double down on the best source/angle within 24 hours. |
| Which message failed? | High visits, weak events | Rewrite or pause the angle. |

## 10. Weekly Optimization Review

Run every 7 days.

1. Rank sources by Calendly outbound rate.
2. Rank campaigns by lead leak audit CTA rate.
3. Compare hero CTA vs nav CTA vs final CTA.
4. Compare product curiosity against booking intent.
5. Identify sources with high trust interest but low bookings.
6. Decide one homepage improvement.
7. Decide one campaign angle to double down on.
8. Decide one source/angle to pause.
9. Decide whether new tracking is needed.
10. Document one learning for the next week.

## 11. What Events Mean Commercially

| Event | Commercial Interpretation |
| --- | --- |
| `outbound_click_calendly` | Strongest booking intent currently available before Calendly integration. |
| `cta_click_lead_leak_audit_hero` | Hero offer is clear enough to trigger immediate interest. |
| `cta_click_lead_leak_audit_nav` | Returning or high-intent visitor used persistent CTA. |
| `cta_click_lead_leak_audit_final` | Long-scroll visitor reached enough context to act. |
| `cta_click_see_agentflow` | Visitor wants product clarity before booking. |
| `outbound_click_app_login` | Visitor is curious about the production app/login surface; monitor but do not optimize for this yet. |
| `section_view_agentflow_preview` | Product preview is being reached. |
| `section_view_lead_leakage_problem` | Lead leakage pain resonates enough for scroll depth. |
| `section_view_crm_vs_agentflow` | Visitor is comparing category logic, likely needs education. |
| `section_view_proof_ladder` | Visitor is trust/proof oriented. |
| `section_view_lead_leak_audit` | Visitor reached the conversion offer section. |

## 12. Data That Should Trigger Action

Immediate actions:

- **High visits + low CTA clicks:** improve above-the-fold clarity and CTA value.
- **High CTA clicks + low Calendly outbound:** reduce booking friction or clarify what happens after clicking.
- **High product interest + low audit clicks:** product story is stronger than offer; add product-to-audit bridge copy.
- **High trust/proof views + low bookings:** add trust elements near CTA and clarify low-risk first step.
- **Mobile traffic high + low conversion:** prioritize mobile CTA visibility and Calendly path.
- **One UTM source drives most events:** double distribution in that source within 24 hours.
- **A campaign drives bounce-heavy traffic:** pause or rewrite the campaign angle.

## 13. Founder Daily Action

Daily rhythm:

1. Open Umami launch board.
2. Set date range to Today.
3. Check visitors, visits, source, campaign.
4. Check primary conversion: `outbound_click_calendly`.
5. Check secondary conversion: audit CTA clicks.
6. Check product and trust interest events.
7. Write one sentence: what worked, what failed, what changes tomorrow.
8. Repost, DM, or publish the next experiment using the matching UTM link.

## 14. Future Automation

Not yet implemented:

- Calendly to CRM attribution
- Umami to n8n event alerts
- Twenty CRM source labeling
- booked-meeting conversion tracking
- daily founder alert digest
- visitor-level identification

These should remain planned only until founder approval.

## 15. Privacy / Safety Boundary

Do not use Umami for private app tracking yet.

Do not collect:

- visitor personal information
- lead content
- private client data
- sensitive authentication material
- WhatsApp contents
- QR/session payloads
- AgentFlow app behavior

Use aggregate public website analytics only.
