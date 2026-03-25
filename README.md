# AgentFlow Landing Page

Premium one-page landing page for AgentFlow by Gen I Labs, built to convert real estate agents and small real estate teams into booked install calls or overview requests.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React 19

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Content Notes

Core landing-page copy and CTA configuration live in `lib/content.ts`.

Before making major messaging changes, review:
- `BRAND_BRIEF.md`
- `OFFER.md`
- `COPY_NOTES.md`
- `AGENTS.md`

## Current CTA Wiring

Qualified visitors go through:
1. Guided fit check
2. Embedded intake form
3. Strategy-call booking

Live links currently configured:
- Intake form: Tally
- Booking: Calendly

## Deployment Notes

This project is frontend-only.
There is no backend, auth, database, CMS, or custom integration layer in this repo.
