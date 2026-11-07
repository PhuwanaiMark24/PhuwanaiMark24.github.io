# 05: Styleguide page (Tokens)

**What to build:** The Owner can open the Styleguide and check every Token by eye: color swatches with names and values, each type size, the spacing scale, radii and the card shadow. The page is exported with the site but is not linked from the Navbar and tells search engines not to index it.

**Blocked by:** 03 (Tokens, fonts and dark theme)

**Status:** ready-for-agent

- [ ] Styleguide shows every color, text size, spacing, radius and shadow Token, labelled with its name
- [ ] Styleguide metadata sets robots to not index; the home page does not
- [ ] The built output contains the Styleguide HTML with a noindex directive
- [ ] Uses only Tokens (no arbitrary values)
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai) of the route file, page metadata and mapping over arrays to render swatches
