# Website Shortlink Fix Implementation Report

**Implementation timestamp:** 2026-06-26 09:20 UTC  
**Repo:** `/opt/agentflow_memory/nova/agentflow-landing`  
**Branch:** `w2/homepage-lead-gen-machine`  
**Production deploy:** not performed; founder approval required

## Scope

Implemented a redirect/config-only patch in `next.config.ts` and created the requested Operations reports.

No changes were made to:

- Website copy/design
- Analytics event names
- AgentFlow app
- Umami service
- Cal.com
- Calendly configuration
- n8n
- Twenty CRM
- Evolution/WhatsApp
- DNS
- Secrets or environment variables

## Implementation Summary

Updated public branded shortlinks to use consistent UTM naming and temporary redirects.

### Existing Shortlinks Standardized

- `/launch`
- `/ig`
- `/leak`
- `/dm`
- `/agentflow`
- `/audit`

### New Shortlinks Added

- `/story`
- `/partner`
- `/ai`
- `/wa`

## Redirect Status

All redirects use `permanent: false` in Next.js, which compiles to HTTP `307` temporary redirects.

## Booking URL Rule

`/audit` still points to the current primary Calendly booking URL. No Cal.com migration was made.

## Implemented Map

| Shortlink | Destination |
| --- | --- |
| `/launch` | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` |
| `/ig` | `/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio` |
| `/leak` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink` |
| `/dm` | `/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` |
| `/agentflow` | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview` |
| `/audit` | Calendly booking URL with `utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink` |
| `/story` | `/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01` |
| `/partner` | `/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1` |
| `/ai` | `/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01` |
| `/wa` | `/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01` |

## Required Post-Deploy Validation

After founder-approved production deployment, run:

```bash
for path in /launch /ig /leak /dm /agentflow /audit /story /partner /ai /wa; do
  curl -I -L --max-redirs 0 "https://www.genilabs.co.za${path}"
done
```

Expected result: each path returns `307` with the correct `location` header.

Then run one controlled browser test for `/leak` and confirm Umami can filter by:

- `utm_source=shortlink`
- `utm_medium=direct`
- `utm_campaign=lead_leak_audit`
- `utm_content=leak_shortlink`

## Production Deploy Approval Required

Yes. The patch is local in the website repo and requires production deployment before public shortlinks work.

## Next Action

Founder reviews the audit/map/report and explicitly approves production deployment if the UTM map is accepted.

## Validation Results Before Deployment

Executed locally on 2026-06-26 after the redirect patch:

| Gate | Result |
| --- | --- |
| `npm run build` | Passed |
| `npx tsc --noEmit` | Passed |
| `git diff --check` | Passed |
| Local route/redirect manifest validation | Passed: all expected shortlinks compile to `307` redirects with correct destinations |
| Secret scan over implementation files | Passed: no obvious credential patterns found |
| Unsafe claim scan over implementation files | Passed: no flagged marketing/compliance claims found |
| Production live recheck | Still `404` for `/launch`, `/ig`, `/leak`, `/dm`, `/agentflow`, `/audit`, `/story`, `/partner`, `/ai`, `/wa` because deployment has not been performed |

Production deployment is still required and must not happen without founder approval.

## Production Deployment Update — 2026-06-26 13:10 UTC

Founder approved production deployment of the validated redirect/config patch.

| Field | Value |
| --- | --- |
| Deployment commit | `6c62658` (`Fix website shortlink UTM redirects`) |
| Production URL | `https://www.genilabs.co.za` |
| Vercel deployment URL | `https://agentflow-landing-byo3mwspk-officialgenilabs-projects.vercel.app` |
| Production deploy status | Completed |
| Rollback required | No |

Post-deploy validation passed:

- `/launch`, `/ig`, `/leak`, `/dm`, `/agentflow`, `/audit`, `/story`, `/partner`, `/ai`, and `/wa` all return temporary `307` redirects.
- `/leak` now redirects to the homepage with `utm_source=shortlink`, `utm_medium=direct`, `utm_campaign=lead_leak_audit`, and `utm_content=leak_shortlink`.
- `/audit` still redirects to the approved Calendly booking URL; no Cal.com migration occurred.
- Homepage remains healthy with `200` response.
- App Login URL remains present and `https://app.genilabs.co.za` reaches `/login` successfully.
- Umami script remains present in live homepage HTML.
- A controlled `/leak` test hit was received by Umami with the expected UTM fields.

Detailed deployment evidence is recorded in `Operations/Public_Website_Consolidation/WEBSITE_SHORTLINK_PRODUCTION_DEPLOYMENT_REPORT.md`.
