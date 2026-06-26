# Website UTM Shortlink Map

**Status:** implementation patch prepared; production deploy not approved yet.  
**Website:** https://www.genilabs.co.za  
**Analytics:** https://analytics.genilabs.co.za  
**Scope:** Gen I Labs public website shortlinks only. No AgentFlow app, Umami service, Cal.com, n8n, Twenty CRM, Evolution/WhatsApp, or DNS changes.

## Strategic Rules

- Public links stay clean and human-postable.
- Long UTM attribution lives behind temporary website redirects.
- Redirects stay temporary `307` via Next.js `permanent: false`.
- Cal.com is now the approved primary public booking destination. Calendly remains an internal fallback for 7 days after migration.
- Do not put names, emails, phone numbers, private lead details, Zoom links, credentials, or private company data in UTM values.

## Standard UTM Vocabulary

### `utm_campaign`

- `agentflow_launch`
- `lead_leak_audit`
- `weekend_content`
- `partner_outreach`
- `website_qualification_agent`

### `utm_source`

- `linkedin`
- `linkedin_dm`
- `instagram`
- `instagram_story`
- `whatsapp`
- `email`
- `partner`
- `chatgpt`
- `direct`
- `shortlink` — used only when the branded shortlink itself is the measurable source rather than a social platform

### `utm_medium`

- `organic`
- `dm`
- `story`
- `bio`
- `direct`
- `referral`
- `ai_referral`

### `utm_content`

Use lowercase snake_case values that describe the asset/message, for example:

- `founder_post_01`
- `lead_leak_carousel_01`
- `crm_vs_agentflow_01`
- `real_estate_owner_v1`
- `partner_faith_v1`
- `website_qualifier_teaser_01`
- `leak_shortlink`
- `audit_shortlink`

## Approved Shortlink Map After Patch

| Public shortlink | Purpose | Redirect target | Production status |
| --- | --- | --- | --- |
| `/launch` | Founder/company launch traffic | `/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01` | Patch prepared; deploy required |
| `/ig` | Instagram bio traffic | `/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio` | Patch prepared; deploy required |
| `/leak` | Lead Leak Audit general campaign | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink` | Patch prepared; deploy required |
| `/dm` | LinkedIn DM / outbound conversation traffic | `/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1` | Patch prepared; deploy required |
| `/agentflow` | Product interest / AgentFlow preview | `/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview` | Patch prepared; deploy required |
| `/audit` | Direct booking intent | `https://calendar.genilabs.co.za/genilabs/lead-leak-audit?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink` | Cal migration patch prepared/deployed after validation |
| `/story` | Instagram story traffic | `/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01` | New; deploy required |
| `/partner` | Partner/referral conversations | `/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1` | New; deploy required |
| `/ai` | ChatGPT / AI referral experiment | `/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01` | New; deploy required |
| `/wa` | WhatsApp direct traffic | `/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01` | New; deploy required |

## Weekend Content Guidance

Safe after approved deployment:

- `https://www.genilabs.co.za/leak` — primary public Lead Leak Audit link.
- `https://www.genilabs.co.za/ig` — Instagram bio.
- `https://www.genilabs.co.za/story` — Instagram story.
- `https://www.genilabs.co.za/dm` — LinkedIn DM / outbound conversations.
- `https://www.genilabs.co.za/audit` — direct booking intent; Cal is now the target.

Do not use yet until deployment is approved and live validation passes:

- All branded shortlinks above, because production currently returns `404` for the audited shortlinks.
- `/partner`, `/ai`, and `/wa`, because they are new and not live until deploy.

## Umami Interpretation

For same-site redirects (`/leak`, `/ig`, `/story`, `/agentflow`, `/launch`, `/dm`, `/partner`, `/ai`, `/wa`):

- Umami should record the final homepage path with the attached query string/campaign attribution.
- Use the UTM filters in Umami to read `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content`.
- The original shortlink path itself may not appear as a normal pageview if the browser is redirected before the page loads. Treat the UTM content value (for example `leak_shortlink`) as the canonical shortlink attribution key.

For `/audit`:

- The redirect exits directly to the self-hosted Cal Lead Leak Audit page.
- Umami on the Gen I Labs website may not record a landing pageview for `/audit` because no Gen I Labs page loads before redirect.
- Cal receives the UTM query parameters. Treat `/audit` as direct booking-intent routing, not as a full onsite behavior trail.
- Calendly fallback is retained internally for 7 days after migration: `https://calendly.com/officialgenilabs/agentflowstrategy`.

## Source of Truth

The redirect implementation source of truth is `next.config.ts` in the Gen I Labs public website repo. Production requires a deploy from the branch containing this file.
