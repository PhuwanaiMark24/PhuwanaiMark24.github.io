# 02: Test harness

**What to build:** The Owner can run `npm test` and get a one-shot test run that renders the home page, the starting point of Seam A (render the home page; see spec Testing Decisions). Use Vitest with React Testing Library and jsdom.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] Before installing anything, ask the Owner for permission and list every package (with its purpose) to be installed
- [ ] `npm test` runs `vitest run` (single run, not watch mode) and exits
- [ ] One passing test renders the home page component without errors (a smoke test for Seam A)
- [ ] Path aliases used by the app resolve in tests
- [ ] `npm run lint` and `npm run build` still pass
- [ ] Explanation (in Thai) of what each tool does and how to read a test
