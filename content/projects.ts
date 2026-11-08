// Project data. Add or edit Projects here only; components just render this.
// Never invent a Project to fill space (BRIEF.md §6).

// Union type: TypeScript rejects any other string.
export type ProjectType = "Code/Web" | "AI/Agent" | "Design";

export type Project = {
  name: string;
  // One to two lines.
  description: string;
  type: ProjectType;
  stack: string[];
  // Optional: leave it out for a Finished Project (no label is shown).
  status?: "In progress";
  // Both optional, but every Project needs at least one (Seam B test).
  links: {
    demo?: string;
    code?: string;
  };
};

// Shown in this order. Name and description from BRIEF.md §6.
export const projects: Project[] = [
  {
    name: "Personal portfolio",
    description:
      "This site. A static Next.js portfolio built on a token-based design system, planned as a spec and small tickets, and built with Claude Code one reviewed diff at a time.",
    type: "Code/Web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In progress",
    links: {
      demo: "https://phuwanaimark24.github.io",
      code: "https://github.com/PhuwanaiMark24/PhuwanaiMark24.github.io",
    },
  },
];
