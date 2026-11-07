# 06: Button

**What to build:** A Button Base component with `primary`, `secondary` and `ghost` variants in one size (`md`). Given a destination, it renders a plain anchor (not the framework's client-side link). Otherwise it renders a `<button>`. It supports `download`, and for external destinations sets `target="_blank"` and `rel="noopener noreferrer"`. Every variant shows a 2px `accent` outline with a 2px offset on keyboard focus (outline, not ring). All variants appear on the Styleguide as both link and button.

**Blocked by:** 05 (Styleguide page (Tokens))

**Status:** ready-for-agent

- [ ] Three variants match DESIGN.md §8 and use only Tokens
- [ ] With a destination it renders an anchor; without one it renders a button
- [ ] `download` and external-link attributes are supported as described
- [ ] Keyboard focus shows the outline; no ring utilities are used
- [ ] Color transitions are 150ms ease-out and respect reduced motion
- [ ] Styleguide shows every variant as link and as button
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): props, variants and conditional rendering (anchor vs button). Behavior is tested through Seam A in later tickets.
