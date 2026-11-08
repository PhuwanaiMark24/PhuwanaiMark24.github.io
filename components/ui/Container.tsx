import type { ReactNode } from "react";

// Centers content at max width container-page with side padding (DESIGN.md §4).
export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-page px-4 md:px-6">{children}</div>;
}
