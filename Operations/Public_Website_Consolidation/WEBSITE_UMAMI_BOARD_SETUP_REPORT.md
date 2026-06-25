# Gen I Labs Umami Board Setup Report

**Date:** 2026-06-25  
**Analytics URL:** https://analytics.genilabs.co.za  
**Production website:** https://www.genilabs.co.za  
**Scope:** Umami configuration only. No production website, AgentFlow app, Evolution, WhatsApp, n8n, or Twenty CRM changes were made.

## 1. Umami Version

Installed Umami version:

```text
3.2.0
```

Validation source:

- Checked the running Umami container package metadata.
- Confirmed `/api/heartbeat` returns healthy.

## 2. Whether Board Creation Is Supported

Supported.

The installed Umami version exposes native board API routes:

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/[boardId]`
- `POST /api/boards/[boardId]`
- `DELETE /api/boards/[boardId]`
- `GET /api/teams/[teamId]/boards`

The board create route accepts:

- board type
- name
- description
- website-scoped parameters

The API accepts passthrough board parameters, but the installed bundle did not expose a clean, stable widget-construction contract from server inspection. To avoid creating malformed board JSON, I created the native board shell through the supported API and documented the widget placement steps for the founder to complete in the Umami UI.

## 3. Creation Method Used

Creation method:

```text
Authenticated Umami API: POST /api/boards
```

No direct database mutation was used.

Database access was used only for aggregate validation reads after creation:

- confirm the named board exists
- confirm aggregate website events exist

No visitor-level personal data was queried or exported.

## 4. Board Created

Board name:

```text
Gen I Labs Launch Command Board
```

Board purpose:

```text
Track website launch traction, source quality, CTA performance, and Lead Leak Audit conversion interest.
```

Board type:

```text
website
```

Website scoped:

```text
www.genilabs.co.za
```

Board URL:

```text
https://analytics.genilabs.co.za/boards/fb9257a5-74b7-4d6c-ab22-13e5c380dbbb
```

## 5. Widgets / Views Created

Created by API:

1. Native Umami board shell.
2. Website scope for `www.genilabs.co.za`.
3. Board description and launch-tracking metadata.
4. Recommended conversion/event categories stored in board parameters:
   - primary conversion
   - secondary conversion group
   - product interest group
   - trust interest group
   - utility/app interest group
   - recommended launch date range

## 6. Widgets / Views Unavailable Through Safe API

The following requested widgets were not created automatically because the installed Umami 3.2.0 route inspection did not expose a safe, stable widget JSON contract:

1. Traffic Overview widget group
2. Source Quality widget group
3. Lead Leak Audit Conversion widget group
4. Product Interest widget group
5. Trust / Positioning Interest widget group
6. App Login Interest widget group
7. Device / Mobile Review widget group
8. Launch Campaign Review widget group

Reason:

- Board shell creation is supported through the API.
- Widget layout appears to live in board parameters, but the precise UI component schema was not safe to infer from minified bundles.
- Direct Postgres mutation was explicitly avoided.
- A malformed widget payload could make the board confusing or unstable in the UI.

## 7. Manual Steps Needed In Umami UI

The founder should complete widget placement manually inside Umami.

### Open The Board

1. Go to https://analytics.genilabs.co.za
2. Log in.
3. Click **Boards**.
4. Open **Gen I Labs Launch Command Board**.
5. Use date range: **Last 7 days** during launch week.
6. Use **Today** for daily standup review.

### Section 1 — Traffic Overview

Add or review widgets for:

- visitors
- pageviews
- visits
- bounce rate, if available
- average visit duration, if available

Daily question:

```text
Is launch traffic growing and staying long enough to understand the offer?
```

### Section 2 — Source Quality

Add or review widgets/filters for:

- top referrers
- UTM source
- UTM campaign
- UTM content

Recommended filters:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

Daily question:

```text
Which channel is sending the highest-quality traffic, not just the most traffic?
```

### Section 3 — Lead Leak Audit Conversion

Add event widgets or saved event filters for:

- `outbound_click_calendly`
- `cta_click_lead_leak_audit_hero`
- `cta_click_lead_leak_audit_nav`
- `cta_click_lead_leak_audit_final`

Interpretation:

- `outbound_click_calendly` = strongest booking intent currently available.
- CTA clicks = offer interest before Calendly exit.

Daily question:

```text
Are visitors moving from interest into booking intent?
```

### Section 4 — Product Interest

Add event widgets or saved filters for:

- `section_view_agentflow_preview`
- `cta_click_see_agentflow`

Daily question:

```text
Are visitors trying to understand AgentFlow AI before booking?
```

### Section 5 — Trust / Positioning Interest

Add event widgets or saved filters for:

- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`

Daily question:

```text
Are visitors engaging with the category explanation and proof layer?
```

### Section 6 — App Login Interest

Add event widget or saved filter for:

- `outbound_click_app_login`

Daily question:

```text
Are visitors curious about the production app surface?
```

Note: Do not optimize primarily for app login clicks yet. The public site should optimize for audit bookings.

### Section 7 — Device / Mobile Review

Add or review widgets for:

- device breakdown
- browser breakdown
- mobile vs desktop, if available

Daily question:

```text
Is mobile traffic converting, or is the booking path too heavy on mobile?
```

### Section 8 — Launch Campaign Review

Create saved filters or recurring manual checks for:

- LinkedIn
- Instagram
- WhatsApp direct outreach
- email
- team outreach
- partner referral

Use UTM filters:

- `utm_source=linkedin`
- `utm_source=instagram`
- `utm_source=whatsapp`
- `utm_source=email`
- `utm_medium=team_outreach`
- `utm_medium=partner_referral`

Daily question:

```text
Which launch channel deserves tomorrow's attention?
```

## 8. Manual Review Still Required

Until widgets are manually placed in the UI, review these in Umami Events/Filters:

### Primary Conversion

```text
outbound_click_calendly
```

### Secondary Conversions

```text
cta_click_lead_leak_audit_hero
cta_click_lead_leak_audit_nav
cta_click_lead_leak_audit_final
```

### Product Interest

```text
section_view_agentflow_preview
cta_click_see_agentflow
```

### Trust Interest

```text
section_view_crm_vs_agentflow
section_view_proof_ladder
```

### Utility / App Interest

```text
outbound_click_app_login
```

### Source Quality

Review UTM dimensions:

```text
utm_source
utm_medium
utm_campaign
utm_content
```

## 9. Risks

1. Widget API schema risk: automatic widget creation was intentionally skipped because the route contract for widgets was not safely confirmed.
2. Board shell exists, but final dashboard usefulness depends on manual UI widget placement.
3. `outbound_click_calendly` shows booking intent, not completed bookings.
4. Current tracking remains aggregate public website analytics only.
5. No private app analytics or CRM attribution has been implemented.

## 10. Validation Results

| Check | Result | Notes |
| --- | --- | --- |
| Umami version inspected | PASS | Running version is `3.2.0`. |
| Native board API exists | PASS | `/api/boards` and `/api/boards/[boardId]` routes found. |
| Board created through supported API | PASS | Board shell created via authenticated `POST /api/boards`. |
| Board appears via API | PASS | `GET /api/boards/[boardId]` returned the created board. |
| Board exists in storage | PASS | Aggregate validation found one board with the requested name. |
| Umami still loads | PASS | `/api/heartbeat` returned healthy. |
| Tracking script still loads | PASS | `/script.js` returned HTTP 200. |
| Website still contains tracking script | PASS | Production homepage contains Umami script. |
| Events visible | PASS | Aggregate event counts exist for the tracked website. |
| No direct DB mutation | PASS | Only API creation and aggregate DB reads were used. |
| No production website change | PASS | Website repo had no code changes before report creation. |
| No external integrations touched | PASS | AgentFlow app, Evolution, WhatsApp, n8n, and Twenty CRM were not modified. |
| Sensitive values printed | PASS | No sensitive authentication material was printed in the report. |

Aggregate events observed during validation:

- `outbound_click_calendly`
- `cta_click_lead_leak_audit_hero`
- `cta_click_see_agentflow`
- `outbound_click_app_login`
- `section_view_crm_vs_agentflow`
- `section_view_lead_leak_audit`
- `section_view_lead_leakage_problem`
- pageview

## 11. Next Recommended Action

Founder should open the board in Umami and manually add the requested widgets using the sections above.

Recommended first review flow:

1. Open **Gen I Labs Launch Command Board**.
2. Set date range to **Today**.
3. Check Traffic Overview.
4. Check `outbound_click_calendly`.
5. Check lead leak audit CTA events.
6. Check UTM source/campaign quality.
7. Decide the next launch action: repeat, rewrite, or pause the campaign angle.

## 12. Privacy / Safety Boundary

This board is for aggregate public website launch analytics only.

Do not use it to track:

- private app behavior
- visitor identity
- private lead data
- messaging contents
- sensitive authentication material
- internal client data

Future CRM/automation integrations require separate founder approval.
