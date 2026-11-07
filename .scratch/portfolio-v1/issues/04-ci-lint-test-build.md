# 04: CI: lint, test and build on every push

**What to build:** Every push (and pull request) runs a GitHub Actions workflow that installs with a clean install, then runs lint, test and build. This workflow must stay green on every ticket from here on. It does not deploy and does not run the build-output checks; those come in the final ticket.

**Blocked by:** 02 (Test harness), 03 (Tokens, fonts and dark theme)

**Status:** ready-for-agent

- [ ] Workflow runs on push and pull request
- [ ] Steps run in order: clean install → lint → test → build; any failure fails the workflow
- [ ] Uses a Node.js version supported by the installed Next.js
- [ ] The workflow passes on the current `main`
- [ ] Explanation (in Thai) of how to read the workflow file and where to see results on GitHub
