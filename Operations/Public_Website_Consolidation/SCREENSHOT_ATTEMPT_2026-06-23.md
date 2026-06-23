# Screenshot Attempt — W2 Homepage Preview QA

**Date:** 2026-06-23
**Local preview URL:** `http://127.0.0.1:3107/`
**Method attempted:** `npm exec --yes playwright -- screenshot --browser=chromium ...`

## Result

Screenshot capture was attempted but blocked by missing headless Chromium system dependencies on the host:

```text
error while loading shared libraries: libatk-1.0.so.0: cannot open shared object file: No such file or directory
```

No screenshot files were produced.

## Manual founder capture instructions

1. On the host, run:
   ```bash
   cd /opt/agentflow_memory/nova/agentflow-landing
   npm run build
   PORT=3107 npm run start -- -H 127.0.0.1
   ```
2. From a workstation browser, create an SSH tunnel if needed:
   ```bash
   ssh -L 3107:127.0.0.1:3107 <user>@<host>
   ```
3. Open:
   - Desktop: `http://127.0.0.1:3107/`
   - Lead Leak Audit anchor: `http://127.0.0.1:3107/#lead-leak-audit`
4. Capture the requested frames:
   - desktop full page
   - mobile full page using responsive mode, 390 × 844 or equivalent
   - desktop hero viewport
   - mobile hero viewport
   - desktop Lead Leak Audit viewport
   - mobile Lead Leak Audit viewport

Do not use production deployment for screenshot capture.
