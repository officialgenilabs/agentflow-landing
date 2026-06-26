# Cal Public CTA Migration Readiness

**Status:** production deployment approved if validation passes.  
**Website:** https://www.genilabs.co.za  
**Cal booking page:** https://calendar.genilabs.co.za/genilabs/lead-leak-audit  
**Previous primary booking destination:** https://calendly.com/officialgenilabs/agentflowstrategy

## Scope

This migration changes only the Gen I Labs public website booking destination from Calendly to the self-hosted Cal.com Lead Leak Audit booking page.

No changes are approved or required for:

- AgentFlow app
- Umami service/config
- Cal.com configuration
- n8n
- Twenty CRM
- Evolution/WhatsApp
- DNS
- Website copy/design
- Analytics event names

## Cal Booking Page Readiness

Live Cal page check before deployment:

- URL: `https://calendar.genilabs.co.za/genilabs/lead-leak-audit`
- Result: `200 OK`
- Page title observed: `Lead Leak Audit | Kaylyn — Gen I Labs`

## Manual Availability Operating Rule

Direct calendar conflict sync is not active.

Founder must manually manage and narrow Cal availability windows until full calendar-provider sync is solved.

Do not claim:

- Cal prevents every calendar conflict
- scheduling can run without founder availability oversight
- double-booking risk is eliminated

## Booking Link Rules

Primary public booking URL after migration:

```text
https://calendar.genilabs.co.za/genilabs/lead-leak-audit
```

Website CTA URL with campaign attribution:

```text
https://calendar.genilabs.co.za/genilabs/lead-leak-audit?utm_source=genilabs_site&utm_medium=website_cta&utm_campaign=lead_leak_audit&utm_content=primary_booking_cta
```

Shortlink `/audit` destination:

```text
https://calendar.genilabs.co.za/genilabs/lead-leak-audit?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink
```

## Calendly Fallback

Calendly fallback — keep for 7 days after Cal migration:

```text
https://calendly.com/officialgenilabs/agentflowstrategy
```

This fallback is documented internally only and should not be displayed as a second public booking option unless founder approves.

## Analytics Note

The existing Umami outbound booking event is named `outbound_click_calendly`. To avoid breaking launch dashboards, the migration patch keeps this event name and expands detection to the Cal booking URL.

Recommended later cleanup: after the launch window, rename or add a neutral event such as `outbound_click_booking` only with founder approval and dashboard migration.

## Readiness Decision

Ready to deploy if validation passes and the production patch remains limited to booking URL/redirect tracking changes.
