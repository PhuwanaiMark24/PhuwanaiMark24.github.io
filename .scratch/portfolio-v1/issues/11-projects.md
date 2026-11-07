# 11: Projects

**What to build:** The Projects Section shows one Card per Project from the project content module, in file order. Each card shows the name (level-3 heading), description, Project type, Stack as Tags, a status Tag only when In progress, and demo/code links that open in a new tab. The content module starts with exactly one Project, this portfolio: type Code/Web, In progress, Stack Next.js / TypeScript / Tailwind CSS, demo `https://phuwanaimark24.github.io`, code `https://github.com/PhuwanaiMark24/PhuwanaiMark24.github.io`. No second Project and no Placeholder Project. The layout looks complete with one card.

Project shape (agreed in spec): `name`, `description`, `type` (`"Code/Web" | "AI/Agent" | "Design"`), `stack` (string list), optional `status` (`"In progress"`, absent = Finished), `links` with optional `demo` and `code`.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** ready-for-agent

- [ ] Seam B test: every Project has at least one of demo or code
- [ ] Seam B test: every Project type is an allowed value
- [ ] Seam A test: one card per Project, in content order
- [ ] Seam A test: an In progress Project shows a status label; a Finished Project shows none (test with fixture data if needed)
- [ ] Seam A test: every external link on the page has `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Unknown Project type is a type error
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): TypeScript types for data, union types, optional fields, mapping data to components
