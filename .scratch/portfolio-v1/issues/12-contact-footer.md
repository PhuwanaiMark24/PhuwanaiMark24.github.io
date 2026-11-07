# 12: Contact and Footer

**What to build:** The Contact Section gives the Visitor an email link that opens their mail app (address is a Placeholder), a link to `https://github.com/PhuwanaiMark24` with the GitHub icon, and "Download resume" as the `primary` action. Below the Sections, the Footer shows "© <build year> <Owner name>" (name is a Placeholder, year computed at build time) and a GitHub link. Icon-only links carry an accessible label.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** ready-for-agent

- [ ] Seam A test: Contact contains at least one `mailto:` link
- [ ] Seam A test: every Resume link on the page (Hero and Contact) is an anchor to the Resume PDF with `download`
- [ ] Seam A test: every external link has `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Seam A test: every link without visible text has an accessible name
- [ ] Footer is not a Section and is not linked from the Navbar
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): `mailto:` links, accessible labels, computing values at build time
