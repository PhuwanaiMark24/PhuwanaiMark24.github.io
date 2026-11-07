# Static export without Cache Components

The Next.js 16 scaffold enables `cacheComponents` and `partialPrefetching` by default, but we deploy to GitHub Pages with `output: 'export'`, which has no server. `cacheComponents` turns on Partial Prerendering, and `next build` fails with `Invariant: PPR cannot be enabled in export mode` (verified on Next.js 16.4.5). `partialPrefetching` requires `cacheComponents`, so we removed both. The site is fully static, so nothing is lost.

## Consequences

- `"use cache"`, `cacheLife` and `cacheTag` are not available. Do not add them.
- Do not re-enable these flags unless the deploy target changes to one with a server.
