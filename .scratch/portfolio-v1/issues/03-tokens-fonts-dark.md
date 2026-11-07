# 03: Tokens, fonts and dark theme

**What to build:** Every Token from DESIGN.md is defined once in the global stylesheet's `@theme`, and Tailwind generates classes only for those Tokens. The page is dark-only, using Inter and JetBrains Mono self-hosted at build time. The scaffold's Geist fonts, the light/dark media query and the Arial body font are removed.

**Blocked by:** 01 (Static export config)

**Status:** resolved

- [x] Color, spacing, text size (including `display-sm`), radius, shadow and `container-page` Tokens are defined with DESIGN.md names verbatim
- [x] Tailwind defaults are reset for color, spacing (including the base multiplier), text size, radius and shadow; breakpoints are not reset
- [x] Verified that an off-token class (for example `w-5` or `text-xl`) is not generated and an on-token class (for example `p-4`, `text-h1`, `bg-surface`) is
- [x] Body uses `bg` background, `text` color and Inter; mono utilities use JetBrains Mono, both loaded via the framework's Google font loader
- [x] No light theme remains
- [x] `npm run lint` and `npm run build` pass
- [x] Explanation (in Thai) of `@theme`, namespace resets and how a Token becomes a class

## Comments

- 2026-11-07: Resolved in 35ae1b4. Note: built CSS still has one `prefers-color-scheme` rule from the scaffold page's `dark:invert`; tracked as an acceptance criterion in ticket 08.
