import type { ReactNode } from "react";

// Small mono label for Stack, Skills and Project status (DESIGN.md §8).
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-surface-2 px-2 py-1 font-mono text-caption text-text-muted">
      {children}
    </span>
  );
}
