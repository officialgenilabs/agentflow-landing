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
