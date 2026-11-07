# Portfolio

A single-page personal portfolio for a Frontend Developer, read by recruiters and freelance clients.

## Language

### Page

**Section**:
One of the named, anchor-linked parts of the single page (Hero, About, Projects, Contact). The Footer is not a Section.
_Avoid_: Block, page, panel

**Styleguide**:
The unlinked, non-indexed page that shows every Token and Base component for visual checking.
_Avoid_: Design page, demo page, storybook

### Content

**Project**:
A real piece of work shown as a card in the Projects Section. Every Project links to at least one demo or code location. Projects are never invented to fill space.
_Avoid_: Work, item, case study, portfolio piece

**Project type**:
The single kind of work a Project is: Code/Web, AI/Agent or Design.
_Avoid_: Category, kind, tag

**Stack**:
The tools and technologies a Project was built with.
_Avoid_: Tech, skills, tags

**Placeholder**:
A `[[TODO: ...]]` marker for real content the owner has not supplied yet. A Placeholder must never reach the live site.
_Avoid_: Dummy text, lorem ipsum, sample data

### Design system

**Token**:
A named design value (color, type size, spacing, radius, shadow, container width) defined in DESIGN.md. Only Tokens may be used for these values.
_Avoid_: Variable, theme value, style constant

**Base component**:
A small reusable building block (Button, Card, Tag, Navbar, Section, Container) made only from Tokens. Sections are composed from Base components.
_Avoid_: Primitive, atom, UI kit

**Large screen**:
Viewport width of 768px or more. Anything narrower is **Mobile**.
_Avoid_: Desktop, tablet
