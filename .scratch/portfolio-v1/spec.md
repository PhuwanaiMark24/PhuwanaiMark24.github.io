# Spec: Portfolio v1

Status: ready-for-agent

## Problem Statement

The Owner is a Frontend Developer who needs a place to send Recruiters and Clients. Right now there is only an untouched Next.js scaffold: the default page, the Vercel favicon, light/dark styles, Geist fonts, and a config that cannot be statically exported (Cache Components is enabled, which breaks `output: 'export'`). A Visitor arriving today learns nothing about who the Owner is, what they have built, or how to reach them. The site itself is also meant to be the Owner's first piece of work, so a messy or inconsistent build would undermine the goal.

## Solution

A single, dark-only, static page deployed to GitHub Pages at the Owner's `<username>.github.io` address. Within ten seconds a Visitor sees, from top to bottom:

- the **Hero**: the Owner's name, role, tagline, and two actions ("Download resume" as the primary action, "View projects" as the secondary one)
- three **Sections** linked from a sticky Navbar: **About** (intro paragraphs and Skills as Tags), **Projects** (one card per real Project), and **Contact** (email, GitHub, Resume)
- a **Footer** with the copyright line and a GitHub link

Everything is built from a small set of Base components that use only Tokens from DESIGN.md. Tailwind is locked down so that values outside the Tokens cannot be generated. An unlinked, non-indexed Styleguide page shows every Token and Base component. A GitHub Actions workflow lints, tests, builds and checks the output on every push to `main`. It deploys only if no Placeholder made it into the build and the Resume file is present.

## User Stories

### Visitor: first impression

1. As a Visitor, I want to see the Owner's name as the most prominent text on the page, so that I know whose site this is immediately.
2. As a Visitor, I want to see the Owner's role ("Frontend Developer") directly under the name, so that I know what they do without scrolling.
3. As a Visitor, I want a one-line tagline in the Hero, so that I get a sense of the Owner's focus.
4. As a Recruiter, I want a clearly visible "Download resume" button in the Hero, so that I can get the Resume without hunting for it.
5. As a Visitor, I want a "View projects" button in the Hero, so that I can jump straight to the work.
6. As a Visitor, I want the page to load with no intro animation, so that the content is readable immediately.

### Visitor: navigation

7. As a Visitor, I want a Navbar that stays at the top while I scroll, so that I can jump to any Section at any time.
8. As a Visitor, I want Navbar links to About, Projects and Contact, so that I can reach each Section in one click.
9. As a Visitor, I want a Section's heading to stay visible (not hidden under the Navbar) after I click its link, so that I know where I landed.
10. As a mobile Visitor, I want the Navbar links to fit on a 360px screen without a hamburger menu, so that navigation takes one tap, not two.
11. As a Visitor on a Large screen, I want to see the Owner's name in the Navbar, so that the site feels identified while I scroll.
12. As a keyboard user, I want a visible focus outline on every link and button, so that I always know where focus is.
13. As a keyboard user, I want to be able to tab through the Navbar, Hero actions, Project links and Contact links in reading order, so that I can use the whole site without a mouse.

### Visitor: About

14. As a Visitor, I want two to three short paragraphs about the Owner, so that I understand their background quickly.
15. As a Recruiter, I want the Owner's Skills listed as Tags, so that I can scan them in seconds.
16. As a Recruiter, I want Skills shown without percentage bars, so that I am not given meaningless self-ratings.

### Visitor: Projects

17. As a Visitor, I want each Project shown as a card with its name and a one-to-two-line description, so that I can judge its relevance quickly.
18. As a Visitor, I want to see each Project's Project type, so that I know whether it is Code/Web, AI/Agent or Design work.
19. As a Visitor, I want to see each Project's Stack as Tags, so that I know what it was built with.
20. As a Client, I want a demo link on a Project when one exists, so that I can see the result running.
21. As a Recruiter, I want a code link on a Project when one exists, so that I can judge code quality.
22. As a Visitor, I want every Project to have at least one link, so that every claim can be checked.
23. As a Visitor, I want to see when a Project is In progress, so that I am not misled about its completeness.
24. As a Visitor, I want Finished Projects to show no status label, so that the cards stay uncluttered.
25. As a Visitor, I want the Projects Section to look complete even with a single Project, so that a small body of work does not look unfinished.
26. As a Visitor, I want a Project card that does not change appearance on hover, so that I am not misled into thinking the whole card is clickable.
27. As a Visitor, I want external Project links to open in a new tab, so that I do not lose my place on the portfolio.

### Visitor: Contact and Footer

28. As a Client, I want an email link that opens my mail app, so that I can reach the Owner directly.
29. As a Visitor, I want a link to the Owner's GitHub profile, so that I can see more of their work.
30. As a Recruiter, I want a "Download resume" button in Contact too, styled as the primary action, so that I can get it at the end of reading.
31. As a Visitor, I want the Resume link to download the PDF, so that I keep a copy.
32. As a Visitor, I want a Footer with the copyright year and the Owner's name, so that the site feels maintained.
33. As a Visitor, I want a GitHub link repeated in the Footer, so that I can find it without scrolling back.

### Visitor: quality

34. As a mobile Visitor, I want the layout to work from 360px wide upwards, so that I can read it on any phone.
35. As a Visitor on a Large screen, I want content limited to a comfortable width and centered, so that lines are easy to read.
36. As a Visitor, I want body text lines no longer than about 70 characters, so that paragraphs are easy to read.
37. As a Visitor with low vision, I want all text to meet WCAG AA contrast, so that I can read it.
38. As a screen-reader user, I want exactly one top-level heading (the Owner's name) and Section headings one level below, so that the page outline makes sense.
39. As a screen-reader user, I want icon-only links to have an accessible label, so that I know where they go.
40. As a Visitor who prefers reduced motion, I want transitions to respect that preference, so that the site is comfortable to use.
41. As a Visitor, I want the site to never show Placeholder text or lorem ipsum, so that it looks finished and professional.
42. As a Visitor, I want a page title of "<Owner name> — Frontend Developer" and a description matching the tagline, so that search results and browser tabs identify the site.

### Owner: content

43. As the Owner, I want to add a Project by editing one content module only, so that I never have to touch components to update my work.
44. As the Owner, I want the Projects to appear in the order I list them, so that I control what Visitors see first.
45. As the Owner, I want a type error if I give a Project an unknown Project type, so that mistakes are caught while I edit.
46. As the Owner, I want a failing test if a Project has neither a demo nor a code link, so that I cannot publish an unverifiable Project.
47. As the Owner, I want missing content marked with Placeholders rather than invented text, so that nothing false is ever published.
48. As the Owner, I want Skills kept separately from any Project's Stack, so that I list only what I want to advertise.
49. As the Owner, I want the copyright year to come from the build date, so that I never have to edit it by hand.

### Owner: design system

50. As the Owner, I want every color, type size, spacing, radius, shadow and container width defined once as a Token, so that the site stays consistent.
51. As the Owner, I want Tailwind to generate no classes for values outside the Tokens, so that off-system values fail visibly instead of silently.
52. As the Owner, I want a Styleguide page that shows every Token and Base component, so that I can check the design system by eye.
53. As the Owner, I want the Styleguide deployed but hidden from search engines and absent from the Navbar, so that it shows my process without cluttering search results.
54. As the Owner, I want Base components (Button, Card, Tag, Navbar, Section, Container, GitHub icon) built only from Tokens, so that the Hero, Sections and Footer stay simple compositions.
55. As the Owner, I want a Button that renders as a plain link when given a destination and as a button otherwise, so that one component covers both uses.
56. As the Owner, I want icons sized with the icon library's size option, so that I do not need spacing classes that the Tokens do not provide.
57. As the Owner, I want the GitHub logo to be the official mark, so that it is recognizable, as the single documented exception to the icon-library rule.
58. As the Owner, I want Inter and JetBrains Mono self-hosted at build time, so that fonts work on a static host with no external requests.

### Owner: deploy and safety

59. As the Owner, I want every push to `main` to lint, test and build the site automatically, so that broken changes never deploy.
60. As the Owner, I want the deploy to fail if any Placeholder appears in the built output, so that unfinished content never reaches Visitors.
61. As the Owner, I want the deploy to fail if the Resume file is missing from the build, so that the main call to action never 404s.
62. As the Owner, I want the deploy to fail if the home page is marked noindex, so that a stray setting can never remove the whole site from search engines.
63. As the Owner, I want the deploy to fail if the Styleguide is not marked noindex, so that it never shows up in search results.
64. As the Owner, I want tests to run once and exit (not watch), so that CI never hangs.
65. As the Owner, I want to keep working locally with the dev server and local builds while the live deploy is blocked by Placeholders, so that unfinished content does not slow down development.

## Implementation Decisions

### Framework configuration

- Remove `cacheComponents` and `partialPrefetching`; set `output: 'export'` and `images: { unoptimized: true }`. Keep the existing Turbopack CSS rule for Tailwind. See ADR 0001: Cache Components enables Partial Prerendering, which fails in export mode on Next.js 16.4.5.
- `trailingSlash` stays at its default (`false`). No `basePath`.
- No `"use cache"`, `cacheLife`, `cacheTag`, Server Actions, route handlers, middleware, ISR, `cookies()` or `headers()`.

### Tokens and Tailwind

- All Tokens live in the global stylesheet's `@theme` block, using DESIGN.md names verbatim (resulting classes such as `bg-bg`, `text-text`, `text-text-muted` are accepted).
- Reset the Tailwind defaults for every namespace DESIGN.md defines (color, spacing including the base multiplier, text size, radius, shadow), then define only the project Tokens. Breakpoints are not reset.
- Verify after implementing that an off-token spacing class (for example `w-5`) is not generated. If resetting the spacing namespace does not also remove the base multiplier, reset the multiplier explicitly.
- New Tokens recorded in DESIGN.md: `display-sm` (36px / 1.1 / 600) and `container-page` (1120px).
- Large screen means the `md` breakpoint (≥768px). Mobile is unprefixed (mobile-first).
- Dark only: remove the light/dark media query and Geist fonts from the scaffold. Load Inter and JetBrains Mono via the framework's Google font loader.
- Arbitrary Tailwind values are not blocked by tooling. Code review catches them.

### Base components

- **Button**: variants `primary`, `secondary`, `ghost`; one size (`md`). With a destination it renders a plain anchor element, not the framework's client-side link component. Without a destination it renders a `<button>`. It passes through `download`, and for external destinations applies `target="_blank"` and `rel="noopener noreferrer"`.
- **Card**: `surface` background, `border`, radius `lg`, padding `6`, **no hover state**.
- **Tag**: mono, `caption` size, `surface-2` background, radius `sm`. Used for Stack, Skills and Project status.
- **Navbar**: sticky, height 64px (`16`), **solid** `bg` background (no transparency, no blur), bottom `border`. Links to About, Projects and Contact in a single row at `small` size. The Owner's name is hidden on Mobile. A Server Component with no hamburger and no client state.
- **Section**: renders an element with an `id`, a heading at the `h2` element level styled with the `h1` Token, standard vertical spacing (`12` Mobile / `24` Large screen), and a scroll margin equal to the Navbar height. No smooth scrolling.
- **Container**: max width `container-page`, horizontal padding `4` Mobile / `6` Large screen.
- **GitHub icon**: inline official GitHub SVG, `currentColor` fill, with a `size` prop matching the icon library's API. This is the only icon not from `lucide-react`.
- Focus indicator for every interactive element: a 2px `accent` **outline** with a 2px offset, shown on keyboard focus. Ring utilities are not allowed because they are implemented as box-shadow (a blue shadow, banned by DESIGN.md §10).
- Icon sizes are set with the icon library's `size` prop, never width/height utility classes.

### Page composition

- Heading hierarchy (Token → element): `display`/`display-sm` → `<h1>` (the Owner's name in the Hero, the only `<h1>`), `h1` → `<h2>` (Section headings), `h2` → `<h3>` (Project names), `h3` → `<h4>`.
- **Hero**: not a Section and not linked from the Navbar. Name (`display-sm`, `display` on Large screen), role, tagline. Actions: "Download resume" (`primary`, downloads the Resume) and "View projects" (`secondary`, anchors to Projects).
- **About**: intro paragraphs plus Skills as Tags. Skills are a Placeholder (`[[TODO: skills]]`) until the Owner provides them.
- **Projects**: one Card per Project in content order. Each card shows the name, description, Project type, Stack Tags, a Project status Tag only when In progress, and demo/code links.
- **Contact**: at least one `mailto:` link, a GitHub profile link, and "Download resume" as `primary`.
- **Footer**: "© <build year> <Owner name>" and a GitHub link. The year is computed at build time.
- Every external link opens in a new tab with `rel="noopener noreferrer"`. Icon-only links carry an accessible label.

### Content model

- The project content module exports an ordered list of Projects with this shape (agreed during grilling):
  - `name`: string
  - `description`: string (one to two lines)
  - `type`: one of `"Code/Web"`, `"AI/Agent"`, `"Design"`
  - `stack`: list of strings
  - `status`: optional, only `"In progress"`; absent means Finished
  - `links`: optional `demo` and optional `code` URLs; at least one is required
- Initial content: one Project, this portfolio: type Code/Web, In progress, demo `https://phuwanaimark24.github.io`, code `https://github.com/PhuwanaiMark24/PhuwanaiMark24.github.io`. The Stack lists the technologies actually used (Next.js, TypeScript, Tailwind CSS). Do not add a second Project or a Placeholder Project.
- GitHub username: `PhuwanaiMark24`. Profile: `https://github.com/PhuwanaiMark24`.
- Still Placeholders until the Owner supplies them: display name, tagline, email, About paragraphs, Skills, favicon, Resume PDF.

### Metadata

- Title: "<Owner name> — Frontend Developer". Description: the tagline.
- Remove the Vercel favicon and leave a favicon Placeholder. No Open Graph image in v1.
- The Styleguide page sets robots to not index. The home page must not.

### Testing tooling

- Vitest with React Testing Library and jsdom. Before installing, ask the Owner for permission and list every package to be installed.
- The `test` script runs Vitest once (`vitest run`), not in watch mode.

### Deploy

- One GitHub Actions workflow on push to `main`, using the official Pages actions (upload Pages artifact, then deploy Pages). The repo's Pages source must be set to "GitHub Actions" (a manual step for the Owner).
- Steps, in order: install with a clean install, lint, test, build, then output checks, then deploy:
  - fail if `[[TODO` appears anywhere in the build output
  - fail if the Resume PDF is missing from the build output
  - fail if the home page HTML contains a noindex directive
  - fail if the Styleguide HTML lacks a noindex directive
- Accepted consequence: deploys stay blocked until every Placeholder is filled.

## Testing Decisions

- Good tests check only external behavior: what a Visitor can see, read or activate (roles, accessible names, link destinations and attributes, text). They never assert Tailwind classes, component internals or DOM structure beyond semantics. Visual correctness is checked by eye on the Styleguide.
- **Seam A: render the home page** (the primary seam). Render the home page component with React Testing Library and assert:
  - exactly one level-1 heading, containing the Owner's name
  - exactly three Sections (About, Projects, Contact), each with a level-2 heading and an `id` that matches a Navbar link
  - the Hero is not linked from the Navbar
  - every Resume link (Hero and Contact) is an anchor to the Resume PDF with the `download` attribute
  - every external link has `target="_blank"` and `rel="noopener noreferrer"`
  - Contact contains at least one `mailto:` link
  - one Project card is rendered per Project in the content module, in order
  - an In progress Project shows a status label; a Finished Project shows none
  Base components are tested through this seam, not individually.
- **Seam B: the project content module.** Import the Project list directly and assert that every Project has at least one of demo or code, and that every Project type is an allowed value.
- **CI output checks** (shell steps in the workflow, not Vitest): no `[[TODO` in the build output; the Resume PDF exists; the home page has no noindex; the Styleguide has noindex.
- Not tested: visual styling and Tailwind classes, the Styleguide page's rendering, and the root layout (font loading does not run reliably in jsdom; metadata is covered by the output checks).
- Prior art: none. This spec introduces the first tests in the repo.

## Out of Scope

- Blog, multiple languages, contact form, light theme or theme toggle, analytics, CMS, LinkedIn link.
- Open Graph image.
- Hamburger or any client-state navigation.
- Smooth scrolling, page-load animations, parallax, scroll animations.
- Whole-card clickable Project cards and card hover states.
- Lint tooling that blocks arbitrary Tailwind values.
- Button sizes other than `md`.
- Cache Components, Partial Prerendering, Partial Prefetching (see ADR 0001).

## Further Notes

- Build order: design system and Styleguide → Hero → About → Projects → Contact (with Footer) → GitHub Actions deploy.
- The Owner is learning React. Each ticket should be a small, readable diff. Every new or changed component comes with a short explanation (in Thai) of what it does, its props, and the React concept it uses.
- Before any ticket is marked done, lint and build must pass locally.
- BRIEF.md still calls the Hero a "section" in §5 and says "4 sections" in §10. GLOSSARY.md is authoritative: the Hero plus three Sections.
- Vocabulary follows GLOSSARY.md. Decisions on tokens, components, links, Navbar and focus are recorded in DESIGN.md §3, §4, §6, §8, §9 and §11.
