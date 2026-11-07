# Portfolio

A single-page personal portfolio for a Frontend Developer, read by recruiters and freelance clients.

## Language

### People

**Owner**:
The person this portfolio presents.
_Avoid_: Author, user, me

**Visitor**:
Anyone who views the site. A Visitor is either a Recruiter or a Client.
_Avoid_: User, audience, reader

**Recruiter**:
A Visitor evaluating the Owner for employment.
_Avoid_: HR, company, employer

**Client**:
A Visitor considering hiring the Owner for freelance work.
_Avoid_: Customer, freelance client

### Page

**Hero**:
The top of the page that introduces the Owner by name. The Hero is not a Section.
_Avoid_: Header, banner, intro section

**Section**:
One of the titled, navbar-linked parts of the page: About, Projects or Contact. The Hero and the Footer are not Sections.
_Avoid_: Block, page, panel

**Footer**:
The bottom strip of the page with the copyright line. The Footer is not a Section.
_Avoid_: Bottom bar

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

**Project status**:
Whether a Project is In progress or Finished. Finished is the default and is not shown.
_Avoid_: State, stage

**Stack**:
The tools and technologies one Project was built with.
_Avoid_: Tech, skills, tags

**Skill**:
Something the Owner can do or use, listed in the About Section. Skills are kept separately from any Project's Stack.
_Avoid_: Tech, tools, expertise

**Resume**:
The Owner's summary document that a Visitor can download.
_Avoid_: CV

**Placeholder**:
A `[[TODO: ...]]` marker for real content the Owner has not supplied yet. A Placeholder must never reach the live site.
_Avoid_: Dummy text, lorem ipsum, sample data

### Design system

**Token**:
A named design value (color, type size, spacing, radius, shadow, container width) defined in DESIGN.md. Only Tokens may be used for these values.
_Avoid_: Variable, theme value, style constant

**Base component**:
A small reusable building block (Button, Card, Tag, Navbar, Section, Container) made only from Tokens. The Hero, the Sections and the Footer are composed from Base components.
_Avoid_: Primitive, atom, UI kit

**Large screen**:
Viewport width of 768px or more. Anything narrower is **Mobile**.
_Avoid_: Desktop, tablet
