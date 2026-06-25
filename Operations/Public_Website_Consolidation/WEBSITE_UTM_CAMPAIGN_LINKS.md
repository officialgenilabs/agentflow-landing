# Gen I Labs Website UTM Campaign Links

**Status:** final UTM link set for founder/team launch distribution.
**Base URL:** https://www.genilabs.co.za
**Scope:** public website links only.

## 1. UTM Rules

Use this structure consistently:

- `utm_source`: platform, person, or referral source
- `utm_medium`: distribution method
- `utm_campaign`: strategic campaign
- `utm_content`: specific post/message/asset/person

Approved campaigns:

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

Naming rules:

- lowercase
- use underscores
- no spaces
- do not include private lead data
- do not include names of private prospects or companies in UTM values
- keep each link tied to one campaign angle

## 2. Final Trackable Links

### 1. LinkedIn Founder Launch Post

Purpose: launch announcement + category thesis.

```text
https://www.genilabs.co.za/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=agentflow_launch&utm_content=founder_launch_post
```

Expected events:

- `section_view_lead_leakage_problem`
- `cta_click_lead_leak_audit_hero`
- `outbound_click_calendly`

### 2. LinkedIn Founder Educational Post

Purpose: explain CRM vs operating layer.

```text
https://www.genilabs.co.za/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=real_estate_pipeline_protection&utm_content=founder_educational_crm_vs_operating_layer
```

Expected events:

- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`
- `cta_click_see_agentflow`

### 3. LinkedIn DM Outreach

Purpose: direct invite to real estate decision-makers.

```text
https://www.genilabs.co.za/?utm_source=linkedin&utm_medium=direct_message&utm_campaign=lead_leak_audit&utm_content=founder_dm_outreach
```

Expected events:

- `cta_click_lead_leak_audit_hero`
- `outbound_click_calendly`

### 4. Instagram Carousel

Purpose: visual education around lead leakage.

```text
https://www.genilabs.co.za/?utm_source=instagram&utm_medium=organic_social&utm_campaign=lead_leak_audit&utm_content=lead_leakage_carousel
```

Expected events:

- `section_view_lead_leakage_problem`
- `section_view_lead_leak_audit`
- `outbound_click_calendly`

### 5. Instagram Story

Purpose: short-form launch traffic and audit CTA.

```text
https://www.genilabs.co.za/?utm_source=instagram&utm_medium=story&utm_campaign=agentflow_launch&utm_content=launch_story_cta
```

Expected events:

- `cta_click_lead_leak_audit_hero`
- `outbound_click_calendly`

### 6. WhatsApp Direct Outreach

Purpose: warm direct outreach to known business contacts without storing message contents in analytics.

```text
https://www.genilabs.co.za/?utm_source=whatsapp&utm_medium=direct_message&utm_campaign=lead_leak_audit&utm_content=warm_direct_outreach
```

Expected events:

- `cta_click_lead_leak_audit_hero`
- `outbound_click_calendly`

### 7. Email Outreach

Purpose: founder/manual email traffic.

```text
https://www.genilabs.co.za/?utm_source=email&utm_medium=email&utm_campaign=founding_agency_deployments&utm_content=founder_email_outreach
```

Expected events:

- `section_view_agentflow_preview`
- `section_view_lead_leak_audit`
- `outbound_click_calendly`

### 8. Shruti / Partner Referral

Purpose: partner/referral traffic while keeping visitor and lead details out of URLs.

```text
https://www.genilabs.co.za/?utm_source=shruti&utm_medium=partner_referral&utm_campaign=founding_agency_deployments&utm_content=partner_referral_launch
```

Expected events:

- `section_view_proof_ladder`
- `cta_click_lead_leak_audit_final`
- `outbound_click_calendly`

### 9. Team Outreach by Tarryn

Purpose: team-driven real estate outreach.

```text
https://www.genilabs.co.za/?utm_source=tarryn&utm_medium=team_outreach&utm_campaign=lead_leak_audit&utm_content=team_outreach_real_estate_owners
```

Expected events:

- `cta_click_lead_leak_audit_hero`
- `outbound_click_calendly`

### 10. Team Outreach by Indrani

Purpose: team-driven real estate operations outreach.

```text
https://www.genilabs.co.za/?utm_source=indrani&utm_medium=team_outreach&utm_campaign=real_estate_pipeline_protection&utm_content=team_outreach_operations_managers
```

Expected events:

- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`
- `outbound_click_calendly`

### 11. Team Outreach by Jordon

Purpose: team-driven boutique agency outreach.

```text
https://www.genilabs.co.za/?utm_source=jordon&utm_medium=team_outreach&utm_campaign=founding_agency_deployments&utm_content=team_outreach_boutique_agencies
```

Expected events:

- `section_view_agentflow_preview`
- `section_view_lead_leak_audit`
- `outbound_click_calendly`

## 3. Campaign-to-Offer Map

| Campaign | Best Use | Primary Audience | Primary Event |
| --- | --- | --- | --- |
| `agentflow_launch` | Category launch and awareness | founders, owners, operators | `cta_click_lead_leak_audit_hero` |
| `lead_leak_audit` | Direct conversion push | agency owners and principals | `outbound_click_calendly` |
| `founding_agency_deployments` | early adopter recruitment | boutique agencies and property firms | `cta_click_lead_leak_audit_final` |
| `real_estate_pipeline_protection` | educational content | operations managers and principals | `section_view_crm_vs_agentflow` |

## 4. Daily UTM Hygiene Checklist

Before publishing a link:

- Confirm the URL starts with `https://www.genilabs.co.za/`.
- Confirm all four UTM fields are present.
- Confirm no prospect name, email, phone, or private data is in the URL.
- Use one link per channel/post so performance remains clean.
- Do not reuse DM links for public posts.
- Do not use these links for the private AgentFlow app.

## 5. Founder Decision Required

Decide whether team member names should remain in `utm_source` or move to `utm_content` with a generic source such as `team`.

Recommendation: keep the current structure for launch week because it makes daily team-source attribution simple and does not include private prospect data.
