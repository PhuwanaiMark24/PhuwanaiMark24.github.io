import Container from "@/components/ui/Container";
import GithubIcon from "@/components/ui/GithubIcon";
import { site } from "@/content/site";

// Bottom strip with the copyright line (GLOSSARY "Footer"). Not a Section.
export default function Footer() {
  // The page is a static export, so this runs once at build time:
  // the year in the HTML is the build year (spec: user story 49).
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex h-16 items-center justify-between text-small text-text-muted">
          <p>
            © {year} {site.name}
          </p>
          {/* Icon-only link: the label lives on the <a>, the icon stays hidden. */}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-150 ease-out hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
