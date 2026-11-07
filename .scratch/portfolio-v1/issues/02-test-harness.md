# 02: Test harness

**What to build:** The Owner can run `npm test` and get a one-shot test run that renders the home page, the starting point of Seam A (render the home page; see spec Testing Decisions). Use Vitest with React Testing Library and jsdom.

**Blocked by:** None (can start immediately)

**Status:** resolved

- [x] Before installing anything, ask the Owner for permission and list every package (with its purpose) to be installed
- [x] `npm test` runs `vitest run` (single run, not watch mode) and exits
- [x] One passing test renders the home page component without errors (a smoke test for Seam A)
- [x] Path aliases used by the app resolve in tests
- [x] `npm run lint` and `npm run build` still pass
- [x] Explanation (in Thai) of what each tool does and how to read a test

## Comments

- 2026-11-07: Resolved in 8e1e8dd. vite-tsconfig-paths replaced by Vite `resolve.tsconfigPaths`; @types/node bumped to ^24; .gitattributes added.
