import Button from "@/components/ui/Button";
import { site } from "@/content/site";

// Top of the page that introduces the Owner (GLOSSARY "Hero").
// Not a Section: no id, not linked from the Navbar. Holds the page's only <h1>.
export default function Hero() {
  return (
    <div className="pt-12 md:pt-24">
      <h1 className="text-display-sm md:text-display">{site.name}</h1>
      <p className="mt-2 text-h3">{site.role}</p>
      <p className="mt-4 max-w-prose text-body text-text-muted">
        {site.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/resume.pdf" download>
          Download resume
        </Button>
        <Button variant="secondary" href="#projects">
          View projects
        </Button>
      </div>
    </div>
  );
}
