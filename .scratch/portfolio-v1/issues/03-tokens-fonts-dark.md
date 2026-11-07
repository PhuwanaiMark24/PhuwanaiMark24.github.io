# 03: Tokens, fonts and dark theme

**What to build:** Every Token from DESIGN.md is defined once in the global stylesheet's `@theme`, and Tailwind generates classes only for those Tokens. The page is dark-only, using Inter and JetBrains Mono self-hosted at build time. The scaffold's Geist fonts, the light/dark media query and the Arial body font are removed.

**Blocked by:** 01 (Static export config)

**Status:** ready-for-agent

- [ ] Color, spacing, text size (including `display-sm`), radius, shadow and `container-page` Tokens are defined with DESIGN.md names verbatim
- [ ] Tailwind defaults are reset for color, spacing (including the base multiplier), text size, radius and shadow; breakpoints are not reset
- [ ] Verified that an off-token class (for example `w-5` or `text-xl`) is not generated and an on-token class (for example `p-4`, `text-h1`, `bg-surface`) is
- [ ] Body uses `bg` background, `text` color and Inter; mono utilities use JetBrains Mono, both loaded via the framework's Google font loader
- [ ] No light theme remains
- [ ] `npm run lint` and `npm run build` pass
- [ ] Explanation (in Thai) of `@theme`, namespace resets and how a Token becomes a class
