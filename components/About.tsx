import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { aboutParagraphs, skills } from "@/content/about";

// About Section: intro paragraphs, then Skills as Tags (no percentage bars).
export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex max-w-prose flex-col gap-4">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 id="skills-heading" className="mt-8 text-h3">
        Skills
      </h3>
      <ul aria-labelledby="skills-heading" className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </Section>
  );
}
