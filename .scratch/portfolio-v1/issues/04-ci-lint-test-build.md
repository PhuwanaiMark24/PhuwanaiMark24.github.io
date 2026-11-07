# 04: CI: lint, test and build on every push

**What to build:** Every push (and pull request) runs a GitHub Actions workflow that installs with a clean install, then runs lint, test and build. This workflow must stay green on every ticket from here on. It does not deploy and does not run the build-output checks; those come in the final ticket.

**Blocked by:** 02 (Test harness), 03 (Tokens, fonts and dark theme)

**Status:** resolved

- [x] Workflow runs on push and pull request
- [x] Steps run in order: clean install → lint → test → build; any failure fails the workflow
- [x] Uses a Node.js version supported by the installed Next.js
- [x] The workflow passes on the current `main`
- [x] Explanation (in Thai) of how to read the workflow file and where to see results on GitHub

## Comments

- 2026-11-07: Resolved in 07d509f. CI run 42389291646 passed on `main`. Open question for ticket 13: the spec asks for one workflow, so decide between adding the deploy job to `ci.yml` (running only on `main`) and a second workflow (needs a spec change).
