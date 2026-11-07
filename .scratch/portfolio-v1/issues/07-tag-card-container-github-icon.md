# 07: Tag, Card, Container and GitHub icon

**What to build:** The remaining small Base components, each shown on the Styleguide:
- **Tag**: mono, `caption`, `surface-2`, radius `sm`
- **Card**: `surface`, `border`, radius `lg`, padding `6`, no hover state
- **Container**: max width `container-page`, horizontal padding `4` on Mobile and `6` on Large screen
- **GitHub icon**: the official GitHub mark as inline SVG with `currentColor` fill and a `size` prop matching `lucide-react`. It is the only icon not from `lucide-react`.

**Blocked by:** 06 (Button)

**Status:** ready-for-agent

- [ ] Each component matches DESIGN.md §5, §6, §8 and §9 and uses only Tokens
- [ ] Card has no hover styles
- [ ] GitHub icon is decorative by default and can take an accessible label when used alone
- [ ] Styleguide shows each component
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): `children` prop for Card/Container, and why the GitHub icon is an exception
