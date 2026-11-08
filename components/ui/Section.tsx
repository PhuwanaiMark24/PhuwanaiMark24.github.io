import type { ReactNode } from "react";

type SectionProps = {
  // Anchor target for Navbar links, e.g. "about" for href="#about".
  id: string;
  title: string;
  children: ReactNode;
};

// Titled block with standard spacing (DESIGN.md §8). On the home page each one
// is a navbar-linked Section (GLOSSARY); the Styleguide reuses it for layout.
// aria-labelledby names the section after its heading, so it is a landmark.
// scroll-mt-16 keeps the heading below the sticky 64px Navbar on anchor jumps.
export default function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-16 py-12 md:py-24"
    >
      <h2 id={headingId} className="text-h1">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
