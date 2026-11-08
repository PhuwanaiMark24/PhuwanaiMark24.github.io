// Seam B: the project content module.
import { expect, test } from "vitest";
import { projects, type Project } from "@/content/projects";

test("every Project has at least one of a demo or code link", () => {
  for (const project of projects) {
    expect(Boolean(project.links.demo || project.links.code)).toBe(true);
  }
});

test("every Project type is an allowed value", () => {
  // Written out here (not imported) so the test is an independent check.
  const allowedTypes = ["Code/Web", "AI/Agent", "Design"];
  for (const project of projects) {
    expect(allowedTypes).toContain(project.type);
  }
});

// Type-level check, enforced by `tsc` (and `next build`), not by Vitest:
// if an unknown type ever stops being an error, @ts-expect-error itself fails.
export const unknownType: Project = {
  name: "Example",
  description: "Example",
  // @ts-expect-error "Blog" is not a Project type.
  type: "Blog",
  stack: [],
  links: { code: "https://example.com" },
};
