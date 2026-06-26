# Website Booking CTA Cal Migration Report

**Status:** patch prepared; validation/deployment evidence to be appended.
**Production website:** https://www.genilabs.co.za
**Previous booking destination:** https://calendly.com/officialgenilabs/agentflowstrategy
**New booking destination:** https://calendar.genilabs.co.za/genilabs/lead-leak-audit

## 1. Scope

Migrated the Gen I Labs public website booking CTA from Calendly to the self-hosted Cal.com Lead Leak Audit page.

This is a website booking-link migration only.

## 2. Files Changed

- `app/page.tsx`
- `app/analytics-events.tsx`
- `next.config.ts`
- `Operations/Scheduling/CAL_PUBLIC_CTA_MIGRATION_READINESS.md`
- `Operations/Public_Website_Consolidation/WEBSITE_BOOKING_CTA_CAL_MIGRATION_REPORT.md`
- `Operations/Public_Website_Consolidation/WEBSITE_UTM_SHORTLINK_MAP.md`

## 3. CTA Locations Changed

The public booking URL is centralized in `app/page.tsx` via `AUDIT_BOOKING_URL`. Updating it changes:

- CTA strip: `Book a Lead Leak Audit`
- Header/nav: `Book Audit`
- Hero CTA: `Book a Lead Leak Audit`
- Lead Leak Audit section CTA
- Final CTA: `Book a Lead Leak Audit`
- Footer: `Lead Leak Audit`

## 4. Redirect Change

`/audit` is updated from Calendly to Cal:

```text
https://calendar.genilabs.co.za/genilabs/lead-leak-audit?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink
```

## 5. `/leak` Status

`/leak` remains unchanged and continues to route to the educational/campaign homepage path:

```text
/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink
```

## 6. Analytics Tracking

Existing Umami event names are preserved.

The event name `outbound_click_calendly` remains in use for continuity, but detection now includes the Cal booking URL. This avoids breaking current Umami launch dashboards.

Recommendation: rename or supplement this event later with `outbound_click_booking` only after founder approval and dashboard migration.

## 7. Calendly Fallback Status

Calendly fallback — keep for 7 days after Cal migration:

```text
https://calendly.com/officialgenilabs/agentflowstrategy
```

This fallback is internal documentation only and is not displayed as a public second booking option.

## 8. Manual Availability Operating Rule

Direct calendar conflict sync is not active.

Founder must manually manage and narrow Cal availability windows until full calendar-provider sync is solved.

Do not claim Cal prevents every calendar conflict or that scheduling can run without founder availability oversight.

## 9. Rollback Plan

If the Cal booking page fails, email delivery breaks, or public CTA routing fails:

1. Roll back website production to the prior Calendly CTA deployment.
2. Restore `/audit` to the Calendly destination.
3. Report the failed route/reason.
4. Do not attempt unrelated Cal, email-delivery, DNS, n8n, CRM, or app fixes without founder approval.

## 10. Untouched Systems Confirmation

- AgentFlow app: untouched
- Umami service/config: untouched
- Cal.com configuration: untouched
- n8n: untouched
- Twenty CRM: untouched
- Evolution/WhatsApp: untouched
- DNS: untouched
- Website copy/design: untouched
- Analytics event names: untouched

## 11. Pre-Deploy Validation Results

Executed before production deployment:

| Check | Result |
| --- | --- |
| `npm run build` | PASS |
| `npx tsc --noEmit` | PASS |
| `git diff --check` | PASS |
| Route/redirect manifest validation | PASS: `/audit` points to Cal, `/leak` unchanged, all approved shortlinks compile to `307` |
| Secret scan | PASS |
| Unsafe claim scan | PASS |
| Source check: primary CTAs | PASS: public website CTA constant points to Cal |
| Source check: `/audit` | PASS: redirect points to Cal |
| Source check: Calendly primary CTA removal | PASS: Calendly no longer appears in `app/page.tsx` or `next.config.ts` |
| Source check: analytics event names | PASS: existing event name preserved |
| Cal page check | PASS: Cal Lead Leak Audit page returns `200` with campaign query params |
| AgentFlow app changes | PASS: no AgentFlow app files changed |
| Umami service/config changes | PASS: no Umami service/config files changed |
| Cal configuration changes | PASS: no Cal configuration changes made |
| DNS changes | PASS: no DNS changes made |

Deployment approval condition from founder prompt is satisfied: changes are booking URL/redirect-related, validation passed, `/leak` remains unchanged in the redirect manifest, `/audit` points to Cal, the Cal booking page loads, and no other systems were touched.

## 12. Production Deployment Results

**Deployment timestamp:** 2026-06-26 14:10 UTC
**Deployment commit:** `2db1811` (`Migrate website booking CTA to Cal`)
**Production URL:** https://www.genilabs.co.za
**Vercel deployment URL:** https://agentflow-landing-kggvtiwdb-officialgenilabs-projects.vercel.app

Production deployment completed successfully and was aliased to `https://www.genilabs.co.za`.

## 13. Post-Deploy Live Validation

| Check | Result |
| --- | --- |
| Homepage loads | PASS: `200` |
| Primary booking CTA points to Cal | PASS: live homepage contains Cal Lead Leak Audit URL |
| Public Calendly CTA removed | PASS: live homepage no longer contains the Calendly URL |
| `/audit` redirect | PASS: `307` to Cal Lead Leak Audit page with UTM params |
| `/leak` redirect | PASS: `307`, unchanged campaign/education path |
| `/agentflow` redirect | PASS: `307`, hash destination preserved |
| `/ig` | PASS: `307` |
| `/story` | PASS: `307` |
| `/dm` | PASS: `307` |
| `/partner` | PASS: `307` |
| `/ai` | PASS: `307` |
| `/wa` | PASS: `307` |
| Cal booking page | PASS: `200` |
| Umami script | PASS: present on live homepage |
| AgentFlow app login | PASS: `https://app.genilabs.co.za` redirects to `/login`, then returns `200` |
| Layout break smoke | PASS: homepage HTML loads expected core markers |

## 14. Live Shortlink Results

| Shortlink | Live status | Destination |
| --- | --- | --- |
| `/launch` | `307` | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` |
| `/ig` | `307` | `/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio` |
| `/leak` | `307` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink` |
| `/dm` | `307` | `/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` |
| `/agentflow` | `307` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview` |
| `/audit` | `307` | `https://calendar.genilabs.co.za/genilabs/lead-leak-audit?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink` |
| `/story` | `307` | `/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01` |
| `/partner` | `307` | `/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1` |
| `/ai` | `307` | `/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01` |
| `/wa` | `307` | `/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01` |

## 15. Umami Tracking Result

A controlled booking CTA test event was sent to Umami after deployment and verified in the Umami database.

| Field | Value |
| --- | --- |
| `created_at` | `2026-06-26 14:11:58.142+00` |
| `hostname` | `www.genilabs.co.za` |
| `utm_source` | `genilabs_site` |
| `utm_medium` | `website_cta` |
| `utm_campaign` | `lead_leak_audit` |
| `utm_content` | `primary_booking_cta` |
| `event_name` | `outbound_click_calendly` |

Tracking result: PASS.

Note: event name remains `outbound_click_calendly` for dashboard continuity even though the destination is now Cal. Recommend renaming to a neutral booking event later only after founder approval.

## 16. Deployment Status

Cal public CTA migration is deployed and live.

Rollback required: no.

## 17. Next Recommended Action

Founder should manually narrow/manage Cal availability windows while direct calendar conflict sync is not active. Use `/audit` and the public website CTAs for Cal booking, while keeping Calendly as an internal fallback for 7 days.
