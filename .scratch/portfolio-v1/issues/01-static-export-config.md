# 01: Static export config

**What to build:** The site builds as a fully static export that a static host like GitHub Pages can serve. Today `next build` fails with `Invariant: PPR cannot be enabled in export mode` once `output: 'export'` is set, because Cache Components and Partial Prefetching are enabled (see ADR 0001). Remove both flags, enable static export with unoptimized images, and keep the existing Turbopack CSS rule for Tailwind.

**Blocked by:** None (can start immediately)

**Status:** resolved

- [x] Cache Components and Partial Prefetching are no longer enabled
- [x] Static export and unoptimized images are enabled; `trailingSlash` stays at its default; no `basePath`
- [x] `npm run build` succeeds and produces an `out/` folder containing the home page HTML
- [x] `npm run lint` passes
- [x] Explanation (in Thai) of what changed and why, linking ADR 0001

## Comments

- 2026-11-07: Resolved in 90b6ee1 (+ cc71720 comment fix).
