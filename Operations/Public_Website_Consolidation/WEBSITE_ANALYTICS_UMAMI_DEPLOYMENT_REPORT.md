# Gen I Labs Website Analytics — Umami Deployment Report

**Date:** 2026-06-25  
**Scope:** Self-hosted Umami analytics for the public Gen I Labs website only.  
**Production website:** https://www.genilabs.co.za  
**Analytics URL:** https://analytics.genilabs.co.za  
**Website repo:** `/opt/agentflow_memory/nova/agentflow-landing`  
**Website analytics commit deployed:** `cd8e3cb` (`Add Umami analytics tracking`)  

## 1. Installation Method

Umami was installed self-hosted on the Gen I Labs server using Docker Compose with a dedicated PostgreSQL container.

- Compose project: `genilabs-umami`
- Stack directory: `/opt/agentflow_memory/nova/internal-analytics/umami`
- Compose wrapper: `/opt/agentflow_memory/nova/internal-analytics/umami/compose.sh`
- App image: `ghcr.io/umami-software/umami:postgresql-latest` pinned by digest in Compose
- Database image: `postgres:16-alpine`
- Public exposure pattern: nginx reverse proxy to localhost-only Umami binding

## 2. Service Location

Services created:

- `genilabs-umami-db-1` — PostgreSQL database
- `genilabs-umami-umami-1` — Umami application
- Docker volume: `genilabs_umami_postgres_data`
- Docker network: `genilabs_umami_internal`

Network exposure:

- Umami app binds only to `127.0.0.1:3031` on the host.
- PostgreSQL is internal to the Docker network and has no host-published port.
- Public access is via nginx for `analytics.genilabs.co.za` only.

## 3. URL

Analytics UI and tracking endpoint:

```text
https://analytics.genilabs.co.za
```

Tracking script:

```text
https://analytics.genilabs.co.za/script.js
```

## 4. Website Tracking Implemented

The public Gen I Labs website now includes the Umami script in `app/layout.tsx`:

- Script source: `https://analytics.genilabs.co.za/script.js`
- Website ID: public Umami website ID for `www.genilabs.co.za`
- Scope: public website only

A lightweight client component was added at `app/analytics-events.tsx` for:

- outbound Calendly click tracking
- once-per-page section view tracking via `IntersectionObserver`

No analytics was added to `app.genilabs.co.za`.

## 5. Events Implemented

CTA / outbound events implemented:

- `cta_click_lead_leak_audit_hero`
- `cta_click_lead_leak_audit_nav`
- `cta_click_lead_leak_audit_final`
- `cta_click_see_agentflow`
- `outbound_click_calendly`
- `outbound_click_app_login`

Section view events implemented:

- `section_view_agentflow_preview`
- `section_view_lead_leakage_problem`
- `section_view_crm_vs_agentflow`
- `section_view_proof_ladder`
- `section_view_lead_leak_audit`

## 6. Events Deferred

None.

Browser screenshot/manual event-click validation is still recommended after launch, but the implementation and ingestion path are live.

## 7. Privacy Notes

Tracking is limited to the public website.

The implementation does **not** collect:

- private client data
- lead message content
- names
- phone numbers
- emails
- form content
- WhatsApp content
- tenant IDs
- auth tokens
- QR/session data
- private app activity

No analytics script was added to the AgentFlow production app.

## 8. Credentials Handling

Credentials were generated and stored in the existing local credential convention:

```text
/home/genilabs/.openclaw/credentials/umami-genilabs.env
```

The file is permissioned `0600`. Secrets and passwords are intentionally not included in this report.

The default Umami admin password was rotated immediately after initialization. Default login was verified rejected; rotated login was verified accepted without printing tokens.

## 9. Validation Results

Infrastructure validation:

| Check | Result | Notes |
| --- | --- | --- |
| DNS resolution | PASS | `analytics.genilabs.co.za` resolves to Gen I Labs server IP. |
| Umami service health | PASS | Local `/api/heartbeat` returned `{"ok":true}`. |
| Database health | PASS | `pg_isready` accepted connections. |
| Docker exposure | PASS | Umami binds `127.0.0.1:3031`; Postgres has no host-published port. |
| nginx proxy | PASS | `analytics.genilabs.co.za` proxies to Umami. |
| nginx config test | PASS | `nginx -t` successful. |
| SSL | PASS | Certbot issued HTTPS cert for `analytics.genilabs.co.za`; expires 2026-09-23. |
| Tracking script endpoint | PASS | `https://analytics.genilabs.co.za/script.js` returns `200`. |

Website validation:

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build` | PASS | Next.js production build completed. |
| `npx tsc --noEmit` | PASS | TypeScript passed. |
| `git diff --check` | PASS | No whitespace errors. |
| Secret scan | PASS | No secrets found in public website source. |
| Private data scan | PASS | No private/client data found in public website source. |
| Unsafe claim scan | PASS | No prohibited launch claims found. |
| Production website smoke | PASS | `https://www.genilabs.co.za` loads analytics-enabled homepage. |
| Umami script present | PASS | Live production HTML includes Umami script and website ID. |
| CTA event attributes | PASS | Required CTA event attributes present in production HTML. |
| Event ingestion | PASS | Browser-UA test event reached Umami and created a `website_event` row. |

Validated ingestion event:

```text
cta_click_lead_leak_audit_hero
```

## 10. Risks

- Umami admin UI is publicly reachable at the analytics subdomain and protected by Umami login. This is acceptable for the current launch, but optional extra hardening could add route-level protection if it can be done without breaking `/script.js` and `/api/send`.
- Section view tracking is source/build validated and should work in browsers via `IntersectionObserver`; full browser click/scroll testing is recommended from a real browser.
- Umami bot filtering correctly ignored a curl-style test request; validation used a normal browser user-agent.

## 11. Next Recommended Analytics Improvements

1. Create a simple launch dashboard inside Umami for pageviews, CTA clicks, Calendly exits, and App Login exits.
2. Add weekly export/review cadence for public website conversion signals.
3. Consider route-level protection for the Umami admin UI while keeping public tracking endpoints open.
4. Later, separately design privacy-safe app analytics for `app.genilabs.co.za` after founder approval.
5. Add uptime/health monitoring for `analytics.genilabs.co.za` and the Umami Docker services.
