# 13: Build-output checks and deploy to GitHub Pages

**What to build:** On every push to `main`, after lint, test and build pass, the workflow checks the built output and then deploys it to GitHub Pages using the official Pages actions (upload Pages artifact, then deploy Pages). The deploy is blocked if any check fails:
- any `[[TODO` appears anywhere in the build output
- the Resume PDF is missing from the build output
- the home page HTML contains a noindex directive
- the Styleguide HTML lacks a noindex directive

Accepted consequence: deploys stay blocked until the Owner fills every Placeholder. Pull requests still run lint, test and build only (ticket 04).

**Blocked by:** 04 (CI), 05 (Styleguide page), 09 (Hero), 10 (About), 11 (Projects), 12 (Contact and Footer)

**Status:** ready-for-agent

- [ ] Each of the four checks fails the workflow with a clear message naming the problem
- [ ] Each check is verified to fail on bad input (for example a temporary `[[TODO` or a missing Resume) and pass on good input
- [ ] Deploy runs only on `main` and only after all checks pass
- [ ] The workflow has the permissions the Pages actions need
- [ ] Manual step documented for the Owner: set the repo's Pages source to "GitHub Actions"
- [ ] `npm run lint`, `npm test` and `npm run build` pass locally
- [ ] Explanation (in Thai) of each check and how to read a failed run
