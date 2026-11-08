// Seam A with fixture data: the real content has no Finished Project yet.
import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Projects from "@/components/Projects";
import type { Project } from "@/content/projects";

const fixture: Project[] = [
  {
    name: "Unfinished work",
    description: "Fixture.",
    type: "Code/Web",
    stack: [],
    status: "In progress",
    links: { code: "https://example.com/unfinished" },
  },
  {
    name: "Finished work",
    description: "Fixture.",
    type: "Design",
    stack: [],
    links: { demo: "https://example.com/finished" },
  },
];

function cardFor(name: string) {
  const heading = screen.getByRole("heading", { level: 3, name });
  return screen
    .getAllByRole("article")
    .find((card) => card.contains(heading))!;
}

test("an In progress Project shows a status label; a Finished Project shows none", () => {
  render(<Projects projects={fixture} />);

  expect(within(cardFor("Unfinished work")).queryByText("In progress")).not.toBeNull();
  expect(within(cardFor("Finished work")).queryByText("In progress")).toBeNull();
});
