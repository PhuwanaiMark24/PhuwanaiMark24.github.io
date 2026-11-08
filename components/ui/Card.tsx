import type { ReactNode } from "react";

// Surface for a Project (DESIGN.md §6, §8).
// No hover state: the card itself is not clickable, only links inside it are.
export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 shadow-card md:p-6">
      {children}
    </div>
  );
}
