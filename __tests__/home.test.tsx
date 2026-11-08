// Seam A: render the home page and check what a Visitor can see and use.
import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";
import { skills } from "@/content/about";
import { site } from "@/content/site";

const sectionNames = ["About", "Projects", "Contact"];

test("home page renders its main content", () => {
  render(<Home />);
  expect(screen.getByRole("main")).toBeTruthy();
});

test("page has exactly the About, Projects and Contact Sections, in order", () => {
  render(<Home />);

  // A <section> with an accessible name has the "region" role.
  const sections = screen.getAllByRole("region");
  expect(sections).toHaveLength(3);

  sections.forEach((section, index) => {
    const heading = within(section).getByRole("heading", { level: 2 });
    expect(heading.textContent).toBe(sectionNames[index]);
  });
});

test("Navbar links to each Section by id and to nothing else (not the Hero)", () => {
  render(<Home />);

  const nav = screen.getByRole("navigation", { name: "Main" });
  const links = within(nav).getAllByRole("link");
  // getAttribute gives the href as written; .href would be an absolute URL.
  expect(links.map((link) => link.getAttribute("href"))).toEqual([
    "#about",
    "#projects",
    "#contact",
  ]);
  expect(links.map((link) => link.textContent)).toEqual(sectionNames);

  // Every link target is a real Section on the page.
  const sectionIds = screen
    .getAllByRole("region")
    .map((section) => `#${section.id}`);
  for (const link of links) {
    expect(sectionIds).toContain(link.getAttribute("href"));
  }
});

test("page has exactly one level-1 heading: the Owner's name in the Hero", () => {
  render(<Home />);

  const headings = screen.getAllByRole("heading", { level: 1 });
  expect(headings).toHaveLength(1);
  expect(headings[0].textContent).toBe(site.name);
});

// True when `a` comes before `b` in reading order.
function isBefore(a: Element, b: Element) {
  return Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
}

test("Hero has a Download resume link: an anchor to the Resume PDF with download", () => {
  render(<Home />);

  const resumeLinks = screen.getAllByRole("link", { name: "Download resume" });
  for (const link of resumeLinks) {
    expect(link.getAttribute("href")).toBe("/resume.pdf");
    expect(link.hasAttribute("download")).toBe(true);
  }

  // The Hero is everything above the first Section.
  const firstSection = screen.getAllByRole("region")[0];
  expect(resumeLinks.some((link) => isBefore(link, firstSection))).toBe(true);
});

test("Hero's View projects link jumps to the Projects Section", () => {
  render(<Home />);

  const viewProjects = screen.getByRole("link", { name: "View projects" });
  const projects = screen.getByRole("region", { name: "Projects" });
  expect(viewProjects.getAttribute("href")).toBe(`#${projects.id}`);

  const firstSection = screen.getAllByRole("region")[0];
  expect(isBefore(viewProjects, firstSection)).toBe(true);
});

test("About shows one Tag per Skill, in the listed order", () => {
  render(<Home />);

  const about = screen.getByRole("region", { name: "About" });
  const skillList = within(about).getByRole("list", { name: "Skills" });
  const items = within(skillList).getAllByRole("listitem");
  expect(items.map((item) => item.textContent)).toEqual(skills);
});
