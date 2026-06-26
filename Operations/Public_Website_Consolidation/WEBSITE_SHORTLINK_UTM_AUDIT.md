# Website Shortlink + UTM Audit

**Audit timestamp:** 2026-06-26 09:20 UTC  
**Website:** https://www.genilabs.co.za  
**Analytics:** https://analytics.genilabs.co.za  
**Repo audited:** `/opt/agentflow_memory/nova/agentflow-landing`  
**Branch audited:** `w2/homepage-lead-gen-machine`  
**Production deploy:** not performed

## Executive Finding

Production shortlinks are not currently working. Live `HEAD` checks against `https://www.genilabs.co.za` returned `404` for:

- `/launch`
- `/ig`
- `/leak`
- `/dm`
- `/agentflow`
- `/audit`

The current branch already had Next.js redirect definitions, but production appears to be serving a build/branch without those redirects. The repository `main` branch has an empty `nextConfig`, while the audited working branch contains redirect rules.

**Conclusion:** `/leak` is not live-working on production yet. The approximately 5 reported clicks likely refer to Umami/traffic signals around content or prior link attempts, but the public shortlink itself currently returns `404` from the production website.

## Current Code Redirect Map Before Fix Patch

| Shortlink | Existing destination in code | Status |
| --- | --- | --- |
| `/launch` | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` | Reasonable |
| `/ig` | `/?utm_source=instagram&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=instagram_profile_or_story` | Weak: bio/story mixed; campaign too broad |
| `/leak` | `/?utm_source=direct&utm_medium=shortlink&utm_campaign=lead_leak_audit&utm_content=clean_shortlink` | Weak: source/medium inverted against requested standard |
| `/dm` | `/?utm_source=linkedin_dm&utm_medium=outbound&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` | Weak: `outbound` not in approved medium list |
| `/agentflow` | `/?utm_source=direct&utm_medium=shortlink&utm_campaign=agentflow_interest&utm_content=agentflow_shortlink#agentflow-preview` | Weak: campaign not in approved campaign list |
| `/audit` | Calendly booking URL with `utm_source=genilabs_site&utm_medium=shortlink...` | Works strategically, but UTM naming is inconsistent |

All were configured with `permanent: false`, which compiles to temporary `307` redirects in Next.js.

## Live Production Validation Before Fix Patch

Command shape used: `curl -I -L --max-redirs 0 https://www.genilabs.co.za/<shortlink>`.

| Shortlink | Live result | Expected |
| --- | --- | --- |
| `/launch` | `404` | `307` |
| `/ig` | `404` | `307` |
| `/leak` | `404` | `307` |
| `/dm` | `404` | `307` |
| `/agentflow` | `404` | `307` |
| `/audit` | `404` | `307` |
| `/story` | `404` | not previously created |
| `/partner` | `404` | not previously created |
| `/ai` | `404` | not previously created |

## UTM Preservation / Analytics Notes

- Next.js static redirect rules attach the configured destination query string before the destination page loads.
- Existing arbitrary visitor query parameters should not be relied on for campaign attribution. Use one canonical shortlink per campaign/channel instead.
- For same-site shortlinks, Umami should capture the destination page with the UTM parameters after the redirect.
- Umami may not capture the original shortlink path as a pageview because the browser receives a redirect before the homepage loads.
- To interpret shortlink traffic cleanly, treat `utm_content` values like `leak_shortlink`, `instagram_bio`, and `instagram_story_01` as the canonical shortlink labels.
- `/audit` redirects directly offsite to Calendly. The website will likely not record a Gen I Labs pageview for `/audit`; Calendly receives UTMs for booking-context attribution if Calendly preserves them.

## Recommended Standard UTM System

### Campaigns

- `agentflow_launch`
- `lead_leak_audit`
- `weekend_content`
- `partner_outreach`
- `website_qualification_agent`

### Sources

- `linkedin`
- `linkedin_dm`
- `instagram`
- `instagram_story`
- `whatsapp`
- `email`
- `partner`
- `chatgpt`
- `direct`
- `shortlink` for branded shortlink self-attribution only

### Mediums

- `organic`
- `dm`
- `story`
- `bio`
- `direct`
- `referral`
- `ai_referral`

### Content Naming

- lowercase snake_case
- no private prospect/customer details
- no personal contact data
- no sensitive values or meeting URLs
- one content value per public asset/message

## Fixed / Approved Shortlink Map Prepared

| Shortlink | Purpose | Fixed destination |
| --- | --- | --- |
| `/launch` | Founder/company launch traffic | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` |
| `/ig` | Instagram bio | `/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio` |
| `/leak` | Lead Leak Audit general campaign | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink` |
| `/dm` | LinkedIn DM/outbound conversations | `/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` |
| `/agentflow` | Product interest | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview` |
| `/audit` | Direct booking intent | Current Calendly booking URL with `utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink` |
| `/story` | Instagram story traffic | `/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01` |
| `/partner` | Partner/referral conversations | `/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1` |
| `/ai` | ChatGPT / AI referral test | `/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01` |
| `/wa` | WhatsApp direct traffic | `/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01` |

## New Links Recommended

- `/story` — yes, add for Instagram story traffic.
- `/partner` — yes, add for Faith/partner conversations and future collaborators.
- `/ai` — yes, add for ChatGPT / AI discovery testing.
- `/wa` — yes, add for WhatsApp direct outreach. This keeps WhatsApp attribution separate from LinkedIn DM.

## Safe for Weekend Content

After approved production deploy and live validation:

- `/leak` for Lead Leak Audit posts/outreach.
- `/ig` for Instagram bio.
- `/story` for Instagram stories.
- `/dm` for LinkedIn DM/outbound conversations.
- `/audit` for direct booking intent.
- `/partner` for partner/referral conversations.
- `/ai` for experimental AI referral testing.
- `/wa` for WhatsApp direct.

Not safe before deployment:

- Any branded shortlink, because production currently returns `404`.

## Whether `/leak` Tracking Is Working

- **Production route behavior:** not working; `/leak` returns `404` instead of `307`.
- **Code behavior after patch:** prepared to redirect `/leak` to homepage with `utm_source=shortlink`, `utm_medium=direct`, `utm_campaign=lead_leak_audit`, `utm_content=leak_shortlink`.
- **Umami interpretation after deploy:** filter pageviews/sessions by `utm_campaign=lead_leak_audit` and `utm_content=leak_shortlink`. That is the cleanest way to attribute `/leak` shortlink traffic.

## Production Deploy Requirement

Yes. A production deploy is required for the redirects to work publicly. Do not deploy until founder approves.

## Risks

1. **Production branch mismatch:** production appears not to contain the redirect rules from the working branch.
2. **Direct offsite `/audit`:** website Umami may not record onsite behavior for visitors who start at `/audit` because the redirect leaves the site immediately.
3. **Original shortlink path visibility:** Umami may not show `/leak` as a page path; use UTM content labels for attribution.
4. **Fragment target:** `/agentflow` uses `#agentflow-preview`; browser scroll behavior should be checked after deploy on mobile and desktop.
5. **Calendly dependency:** booking completion still belongs to Calendly; website Umami captures intent/exit, not completed bookings.

## Next Recommended Action

Approve a production deployment from the branch containing the redirect patch, then immediately run live route validation for every shortlink and confirm Umami receives at least one controlled test hit for `/leak`.
