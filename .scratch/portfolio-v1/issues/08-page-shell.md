# 08: Page shell: Navbar, Sections and metadata

**What to build:** The home page has a sticky, solid Navbar (64px, bottom border) with links to About, Projects and Contact, and the three Sections exist with headings and matching ids. Clicking a Navbar link lands on the Section with its heading visible below the Navbar. No smooth scroll. On Mobile the Owner's name is hidden in the Navbar. The page title is "<Owner name> — Frontend Developer", the description is the tagline (both Placeholders for now), and the Vercel favicon is removed. The scaffold's default page content is gone.

**Blocked by:** 02 (Test harness), 07 (Tag, Card, Container and GitHub icon)

**Status:** ready-for-agent

- [ ] Section Base component: id, level-2 heading styled with the `h1` Token, standard vertical spacing, scroll margin equal to Navbar height
- [ ] Navbar Base component: Server Component, no hamburger, links in one row at `small` size
- [ ] Seam A test: exactly three Sections (About, Projects, Contact), each with a level-2 heading and an id matching a Navbar link
- [ ] Seam A test: Navbar has no link to the Hero
- [ ] Metadata title/description set from Placeholders; favicon removed with a Placeholder noted
- [ ] Unused scaffold assets in the public folder are removed
- [ ] Layout works at 360px wide
- [ ] `npm run lint`, `npm test` and `npm run build` pass
- [ ] Explanation (in Thai): layout vs page, composing Base components, anchor links
