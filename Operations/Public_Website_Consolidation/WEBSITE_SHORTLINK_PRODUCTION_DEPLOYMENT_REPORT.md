# Website Shortlink Production Deployment Report

**Deployment timestamp:** 2026-06-26 13:10 UTC  
**Production website:** https://www.genilabs.co.za  
**Vercel production deployment URL:** https://agentflow-landing-byo3mwspk-officialgenilabs-projects.vercel.app  
**Deployment commit:** `6c62658` (`Fix website shortlink UTM redirects`)  
**Branch deployed from:** `w2/homepage-lead-gen-machine`  
**Scope:** shortlink/UTM redirect patch in `next.config.ts` only, plus Operations documentation.

## 1. Deployment Status

Production deployment completed successfully with Vercel CLI.

- Production alias applied: `https://www.genilabs.co.za`
- Rollback required: no
- Critical issue observed: no

## 2. Pre-Deploy Validation

| Check | Result |
| --- | --- |
| `npm run build` | PASS |
| `npx tsc --noEmit` | PASS |
| `git diff --check` | PASS |
| Redirect manifest validation | PASS: all approved shortlinks compiled to `307` temporary redirects |
| Secret scan | PASS |
| Unsafe claim scan | PASS |
| `/audit` booking target | PASS: Calendly URL retained |
| Cal.com migration check | PASS: no Cal.com migration in redirect config |
| Copy/design/event-name changes | PASS: no website copy, design, or analytics event-name changes were made |

## 3. Live Shortlink Validation

Validated with `curl -I -L --max-redirs 0 https://www.genilabs.co.za/<path>` immediately after production deploy.

| Shortlink | Live status | Location header / destination | Result |
| --- | --- | --- | --- |
| `/launch` | `307` | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` | PASS |
| `/ig` | `307` | `/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio` | PASS |
| `/leak` | `307` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink` | PASS |
| `/dm` | `307` | `/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` | PASS |
| `/agentflow` | `307` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview` | PASS |
| `/audit` | `307` | `https://calendly.com/officialgenilabs/agentflowstrategy?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink` | PASS |
| `/story` | `307` | `/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01` | PASS |
| `/partner` | `307` | `/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1` | PASS |
| `/ai` | `307` | `/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01` | PASS |
| `/wa` | `307` | `/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01` | PASS |

## 4. `/leak` Result

`https://www.genilabs.co.za/leak` now works.

- Live status: `307`
- Previous production status: `404`
- Final page after one redirect: homepage `/`
- UTM fields preserved:
  - `utm_source=shortlink`
  - `utm_medium=direct`
  - `utm_campaign=lead_leak_audit`
  - `utm_content=leak_shortlink`

## 5. `/audit` Result

`https://www.genilabs.co.za/audit` now works.

- Live status: `307`
- Destination: current approved Calendly booking URL
- Calendly remained primary: yes
- Cal.com migration: no
- Calendly destination returned `200` during follow-up validation.

## 6. UTM Preservation

UTM parameters are present in all same-site redirect `Location` headers and in the direct Calendly `/audit` destination.

`/agentflow` also preserves the intended hash destination:

```text
#agentflow-preview
```

The homepage contains the `agentflow-preview` anchor, so the hash target is present in production HTML.

## 7. Umami Controlled `/leak` Test

A controlled `/leak` analytics test was sent after deployment using the production Umami collection endpoint and the public website ID already present in the live homepage script tag.

DB verification in Umami confirmed one matching `website_event` row:

| Field | Value |
| --- | --- |
| `created_at` | `2026-06-26 13:11:32.901+00` |
| `hostname` | `www.genilabs.co.za` |
| `url_path` | `/` |
| `utm_source` | `shortlink` |
| `utm_medium` | `direct` |
| `utm_campaign` | `lead_leak_audit` |
| `utm_content` | `leak_shortlink` |
| `referrer_path` | `/leak` |
| `event_name` | `pageview` |

Result: Umami receives `/leak` campaign attribution correctly.

## 8. Production Homepage / Core Path Health

| Check | Result |
| --- | --- |
| Homepage `https://www.genilabs.co.za` | PASS: `200` |
| Umami script present in live homepage | PASS |
| Calendly CTA URL present in live homepage | PASS |
| App Login URL present in live homepage | PASS |
| `#agentflow-preview` anchor present in live homepage | PASS |
| `https://app.genilabs.co.za` | PASS: redirects to `/login`, then returns `200` |
| Calendly booking destination | PASS: `/audit` redirects to Calendly and Calendly returns `200` |

## 9. Untouched Systems Confirmation

| System | Status |
| --- | --- |
| AgentFlow app | Untouched; no app code or deployment changes made |
| Umami service | Untouched; no service/config changes made. Only one controlled analytics test event was sent and read back. |
| Cal.com | Untouched; no migration performed |
| Calendly | Configuration untouched; remains public booking target |
| n8n | Untouched |
| Twenty CRM | Untouched |
| Evolution/WhatsApp | Untouched |
| DNS | Untouched |
| Website copy/design | Untouched |
| Analytics event names | Untouched |

## 10. Rollback Status

Rollback was not required.

If rollback becomes necessary, revert production to the prior Vercel deployment before `6c62658` and re-check all shortlinks. Do not attempt unrelated fixes without founder approval.

## 11. Next Recommended Action

Use `https://www.genilabs.co.za/leak` for weekend Lead Leak Audit content immediately.

For campaign review in Umami, filter by:

- `utm_campaign=lead_leak_audit`
- `utm_content=leak_shortlink`

Recommended operational follow-up: after the weekend content push, compare `/leak`, `/ig`, `/story`, `/dm`, and `/wa` by visits, CTA clicks, and Calendly outbound clicks.
