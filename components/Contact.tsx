import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import Section from "@/components/ui/Section";
import { site } from "@/content/site";

// Contact Section: email (opens the Visitor's mail app), GitHub and Resume.
export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-wrap gap-4">
        <Button href="/resume.pdf" download>
          Download resume
        </Button>
        <Button variant="secondary" href={`mailto:${site.email}`}>
          {site.email}
        </Button>
        <Button variant="ghost" href={site.githubUrl}>
          {/* Decorative: the visible text "GitHub" names the link. */}
          <GithubIcon size={16} />
          GitHub
        </Button>
      </div>
    </Section>
  );
}
