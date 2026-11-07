# 09: Hero

**What to build:** At the top of the page, above the Sections, the Hero shows the Owner's name as the only top-level heading (`display-sm`, `display` on Large screen), the role "Frontend Developer" and the tagline. Two actions follow: "Download resume" (`primary`, downloads the Resume) and "View projects" (`secondary`, jumps to the Projects Section). The name and tagline are Placeholders. The Hero is not a Section.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** ready-for-agent

- [ ] Seam A test: exactly one level-1 heading on the page, in the Hero
- [ ] Seam A test: the Hero's Resume link is an anchor to the Resume PDF with `download`
- [ ] Seam A test: "View projects" links to the Projects Section id
- [ ] Name and tagline are Placeholders (`[[TODO: ...]]`), not invented text
- [ ] No load animation
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): what the Hero composes and how responsive classes work
