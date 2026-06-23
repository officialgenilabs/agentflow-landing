# Website W2 Homepage Preview QA

**Date:** 2026-06-23  
**Repo:** `/opt/agentflow_memory/nova/agentflow-landing`  
**Branch:** `w2/homepage-lead-gen-machine`  
**Implementation commit reviewed:** `d30bfe8` — `Implement W2 lead operations homepage`  
**Production deploy status:** Not deployed  
**Safety boundary:** No production deploy, DNS, analytics, n8n, Twenty CRM, Lead Leak Audit form, or additional pages were created/connected.

## 1. Preview Method Used

- Built the app locally with `npm run build`.
- Started a production-mode local preview only:
  - Command: `PORT=3107 npm run start -- -H 127.0.0.1`
  - Local URL: `http://127.0.0.1:3107/`
- Confirmed homepage HTTP load with `curl`:
  - Status: `HTTP/1.1 200 OK`
  - Response size: `81651` bytes
- Screenshot capture was attempted with Playwright, but host browser dependencies are missing. See `Operations/Public_Website_Consolidation/SCREENSHOT_ATTEMPT_2026-06-23.md`.

## 2. Local Preview URL / Instructions

Current local preview command:

```bash
cd /opt/agentflow_memory/nova/agentflow-landing
npm run build
PORT=3107 npm run start -- -H 127.0.0.1
```

Open locally:

```text
http://127.0.0.1:3107/
http://127.0.0.1:3107/#lead-leak-audit
```

If viewing from another workstation, tunnel the port first:

```bash
ssh -L 3107:127.0.0.1:3107 <user>@<host>
```

Then open `http://127.0.0.1:3107/` in the workstation browser.

## 3. Desktop QA Findings

**Status:** Pass for founder visual review, pending live browser screenshot review.

- First impression is strong: dark infrastructure canvas, neon/mint CTA language, subtle grid, and system-card hero establish a premium technical feel quickly.
- Visual hierarchy is clear: headline → safe positioning paragraph → CRM contrast line → primary/secondary CTA → proof pills → system preview.
- Split hero layout is implemented with large type on the left and a demo-safe AgentFlow system preview card on the right.
- Product preview quality is good and avoids realistic private lead details; rows use generic labels like `Portal enquiry`, `Assigned operator`, and `Qualification review`.
- Section rhythm is clean: hero, leak problem, operating-layer contrast, infrastructure flow, product preview, real-estate wedge, proof ladder, Gen I Labs trust, Lead Leak Audit, final CTA, footer.
- Desktop nav is intentionally minimal and hidden below `lg`; this avoids cramped mobile nav but leaves mobile with CTA-only header.
- Brand consistency is directionally aligned with the approved staging screenshot review: black canvas, mint primary signals, purple secondary governance accent, rounded SaaS cards, large typography, and proof/offer modules.
- CTA hierarchy remains visible throughout without a sticky bottom CTA; repeated CTA strips are present but not excessive.

## 4. Mobile QA Findings

**Status:** Source/responsive-class review passed for founder preview; full mobile screenshot/browser validation still recommended.

- Hero readability: `text-5xl` mobile headline is bold and likely readable, but founder should confirm it does not feel too large on 390px devices.
- Nav usability: mobile header hides the full nav and keeps brand + `Book Audit`; this is simple and avoids hamburger complexity.
- CTA visibility: primary CTA appears in header and hero. Hero CTA stack uses `flex-col` on mobile, giving clean vertical tap targets.
- Section stacking: key grids collapse to single-column by default and expand at `md`, `sm`, or `lg`; source review shows no obvious horizontal overflow pattern.
- Product preview readability: preview rows collapse from multi-column to stacked rows on small screens; labels, values, and badges should remain scannable.
- Card spacing: mobile section padding reduces from `6rem` to `4rem`; card gaps are consistent.
- Proof ladder layout: proof rows collapse from two-column to stacked, preserving reading order.
- Lead Leak Audit offer container: two-column layout only activates at `lg`, so mobile should stack the offer text above audit checklist items.
- Footer links: footer uses `flex-wrap`; tap targets are text links with adequate spacing but could be more generously padded before production.
- Sticky/repeated CTA behavior: no sticky mobile bottom CTA present; lower risk of content obstruction.
- Dark-mode contrast: white and mint text are strong; low-opacity gray microcopy (`text-white/35`, `text-white/45`, `text-white/50`) should be checked on real mobile OLED screens.
- Tap target size: buttons use `px-5 py-3`, generally acceptable; footer links are smaller and should be reviewed manually.
- Scroll fatigue: page is long but section breaks are strong. Mobile founder review should confirm whether the repeated CTA strips feel energizing or tiring.

## 5. Visual Alignment Score

**Score:** `8.6 / 10` for founder preview readiness.

Rationale:

- Strong match to the approved dark/neon infrastructure direction.
- Premium SaaS/infrastructure feel is present without leaning into unsupported live automation claims.
- Product preview is demo-safe and consistent with AgentFlow’s app direction.
- Main deductions: no fresh screenshots captured in this environment, mobile needs real-device/browser confirmation, and footer policy links currently point to pages that are not part of this W2 scope.

## 6. Copy / Truthfulness Findings

**Status:** Pass for founder preview.

Confirmed no homepage claim of:

- live WhatsApp success
- live inbound success
- automated replies
- outbound messaging as an active public system
- client results
- booked viewings
- revenue metrics
- client names/logos/quotes
- public case study
- guaranteed conversions/sales
- private founding pricing

Safe claims present:

- Gen I Labs builds AI-powered business infrastructure.
- AgentFlow AI is the lead operations layer for real estate teams.
- A production app / secure app exists.
- Governance, approvals, auditability, and human verification are core principles.
- Product previews use anonymized/demo-safe data.
- Founding real estate deployment is referenced anonymously as private activation-stage proof.

Watchlist copy, still acceptable but founder should approve tone:

- `Production app live` — allowed, but should stay tied to app existence rather than operational outcomes.
- `Governed inbound threads` — safe as product-surface language, but avoid pairing it with live inbound success until certified.
- `Viewing-readiness signals` — safe as a signal/readiness concept, but not an outcome claim.
- `Founding agency deployments are open` — safe as availability language; no fixed/private pricing is exposed.

## 7. CTA Hierarchy Findings

- Primary CTA: `Book a Lead Leak Audit` / `Book Audit`.
- Secondary CTA: `See AgentFlow AI`.
- Utility CTA: `Access App` / `App Login`.
- CTA hierarchy is clean and repeated at useful conversion points.
- The `Book a Lead Leak Audit` CTA currently self-links to the Lead Leak Audit section because the form is intentionally not built yet.
- Before production, founder must decide whether the CTA should route to a form, calendar, email, private intake workflow, or remain waitlisted.

## 8. Responsive Issues Found

No code-level responsive blockers found.

Potential issues requiring screenshot/manual confirmation:

1. Mobile hero headline may feel intense at `text-5xl` depending on device width.
2. Low-opacity nav/microcopy may be too faint on some mobile displays.
3. Footer links are small and text-only; may need larger tap padding.
4. Desktop/mid-width header could become dense around the `lg` breakpoint.
5. The page is long on mobile; founder should confirm scroll fatigue and CTA frequency.
6. `Privacy` and `Terms` footer links point to routes not included in the current implementation scope.

## 9. Recommended Refinements Before Preview Deployment

1. Capture the six requested screenshots from a browser-capable environment:
   - desktop full page
   - mobile full page
   - desktop hero
   - mobile hero
   - desktop Lead Leak Audit section
   - mobile Lead Leak Audit section
2. Founder review of mobile hero scale and scroll fatigue.
3. Founder decision on whether `Access App` should remain visible on the public homepage before launch.
4. Increase footer-link tap padding before production if mobile screenshots show cramped touch targets.
5. Consider slightly increasing opacity for the faintest microcopy (`text-white/35` / `text-white/45`) if screenshots show weak contrast.
6. Keep Lead Leak Audit as a section-only CTA until the form/intake path is explicitly approved.

## 10. Production Blockers

These block production launch, not founder visual review:

1. Founder visual approval is still required.
2. Browser/mobile screenshot validation is still required because local screenshot tooling could not run.
3. Lead Leak Audit CTA has no real intake destination yet by instruction.
4. `Privacy` and `Terms` footer routes are linked but not implemented in this W2 homepage scope.
5. Analytics, n8n, and Twenty CRM are intentionally disconnected and must remain disconnected until separately approved.
6. Final production deployment/DNS decision is explicitly not approved.

## 11. Non-Blocking Improvements

- Add screenshot evidence after dependencies are available or from founder/manual capture.
- Consider a small mobile-only CTA refinement after visual review.
- Consider replacing `Access App` with softer wording if founder wants the public page to stay acquisition-first.
- Later, once approved, wire the Lead Leak Audit CTA to the chosen intake mechanism.
- Later, add privacy/terms pages or temporarily remove those footer links before production.

## 12. Founder Decisions Required

1. Approve or adjust the dark/neon infrastructure visual direction.
2. Approve mobile hero scale after real mobile screenshot/device review.
3. Decide whether `Book a Lead Leak Audit` is the final primary CTA phrase.
4. Decide whether `Access App` / `App Login` should appear on the public homepage before wider launch.
5. Decide the eventual Lead Leak Audit intake path: form, calendar, email, private workflow, or manual outreach.
6. Decide whether `Founding agency deployments are open` is acceptable public phrasing.
7. Approve whether footer `Privacy` / `Terms` links should stay before those pages exist.

## Validation Results

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build` | PASS | Next.js 15.2.8 production build completed successfully. |
| `npx tsc --noEmit` | PASS | Initial parallel run raced with build cleanup and failed on missing `.next/types`; rerun after build passed with no output. |
| `git diff --check` | PASS | No whitespace errors. |
| Homepage HTTP load | PASS | `HTTP/1.1 200 OK`, `81651` bytes. |
| Secret scan | PASS | No secret patterns found in changed implementation files/reports. |
| Private/client data scan | PASS | No private client names/logos/quotes/results found. |
| Unsafe-claim scan | PASS with expected QA-report vocabulary | Implementation files contain no unsafe claims. Report contains denied-claim terms only as QA checklist/findings. |
| Screenshot capture | BLOCKED/NON-FATAL | Playwright available, but host Chromium cannot load `libatk-1.0.so.0`. Manual screenshot instructions provided. |

## Screenshot Capture Status

No screenshots were captured in this environment.

Attempted command family:

```bash
npm exec --yes playwright -- screenshot --browser=chromium ...
```

Blocking dependency:

```text
libatk-1.0.so.0: cannot open shared object file: No such file or directory
```

Manual instructions are documented in:

```text
Operations/Public_Website_Consolidation/SCREENSHOT_ATTEMPT_2026-06-23.md
```

## Decision

**Website W2 homepage is ready for founder visual review via local preview/manual browser capture.**

It is **not ready for production deployment** until founder approval, screenshot/mobile validation, real CTA destination decisions, and footer policy route decisions are complete.
