# Relay public information pages

These are static information pages, not an agent dashboard or OAuth callback service.
No credentials, Gmail data, private calendar IDs, or AWS connection details belong in this repository.

## Files and routes

- `public/relay/index.html` → `/relay`
- `public/relay/privacy/index.html` → `/relay/privacy`
- `public/relay/relay.css` and `mark.svg` are shared local assets.
- `vercel.json` gives the two clean routes explicit static destinations, with trailing-slash variants.
- `vite.config.ts` mirrors those routes for local development and preview, before Vite's SPA fallback.

Vite copies `public/` into `dist/` during the existing build. The portfolio application, dependencies, and build scripts are unchanged.

## Review before publishing

The copy reflects the setup reported on 23 October 2026: OAuth/API tests, a self-addressed send test, and an app-created calendar; automatic application, reply, scheduling, and follow-up workflows are not enabled.

1. Anant must review the privacy policy against the actual AWS deployment, logs, backups, retention, and any subsequent integrations. It deliberately promises no fixed deletion deadline, zero retention, or Google verification.
2. The permission list must remain consistent with the four granted OAuth scopes. `gmail.readonly` is mailbox-wide; filtering by a label does not narrow Google's grant.
3. Confirm the exact AI provider, account settings, retention, and contractual data-use terms before enabling Google-data processing by a model. Google API data must not be used for generalized model training. The public copy explicitly keeps this workflow disabled until the requirement is met.
4. Update the setup note and policy date when enabled features or data practices change. Do not claim a hardened approval gate before it is implemented and tested.
5. Confirm the deployment is actually served at `anantsinghal.vercel.app`, which is used in canonical URLs. The code is a local draft until explicitly deployed.

This is a factual technical policy draft for owner review, not a guarantee of legal compliance or Google approval.

## Local checks

```sh
npm ci
node scripts/check-relay-pages.mjs
npm run build
npm run preview -- --host 127.0.0.1
```

Review `/relay` and `/relay/privacy` at desktop, 375px portrait, and mobile landscape widths. Check navigation, keyboard focus, long links, policy anchors, and the absence of third-party scripts. Vercel rewrite behavior still requires a deployed check; local preview does not execute Vercel configuration.

## Google Branding after deployment

Only after review and a successful deployment:

- Application homepage: `https://anantsinghal.vercel.app/relay`
- App display name: `Relay Internship Assistant`, to match these pages. Confirm this in Branding rather than assuming the Google Cloud project name is the OAuth app name.
- Privacy policy: `https://anantsinghal.vercel.app/relay/privacy`
- Authorized domain: `anantsinghal.vercel.app` (no scheme, path, or trailing slash), as requested by the console's missing-domain message. If Google requests domain ownership verification, follow that process; do not claim ownership of all `vercel.app`.
- Terms of service: leave blank unless Google specifically requires a real terms page.

Load both pages publicly without signing in before changing publishing status. App publishing and Google verification are separate; personal-use verification exceptions do not guarantee approval or remove the requirements visible in the console.

After switching from Testing, obtain a fresh Google grant rather than assuming the existing Testing-issued refresh token has lost its seven-day expiry. Re-authorize on the private EC2 terminal. Do not paste OAuth callbacks or tokens into chat. Publishing these static pages does not enable Relay's runtime tools or follow-up jobs.
