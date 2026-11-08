import Container from "@/components/ui/Container";
import { site } from "@/content/site";

// Hrefs must match the Section ids in app/page.tsx (checked by Seam A tests).
// The Hero is not a Section, so it has no link here.
const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Sticky, solid top bar (DESIGN.md §8). Server Component: no hamburger,
// no client state. The Owner's name shows from md up; links are always one row.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg">
      <Container>
        <div className="flex h-16 items-center justify-end md:justify-between">
          <span className="hidden md:block">{site.name}</span>
          <nav aria-label="Main">
            <ul className="flex gap-4 text-small">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted transition-colors duration-150 ease-out hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
