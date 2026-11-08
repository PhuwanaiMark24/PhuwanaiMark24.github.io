// Seam A: render the home page and check what a Visitor can see and use.
import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

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
