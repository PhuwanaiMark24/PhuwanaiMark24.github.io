import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/content/projects";

// One card for one Project. Not a Base component: it knows the Project shape.
function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <Card>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-small text-text-muted">{project.type}</p>
          {/* Finished is the default and shows no label. */}
          {project.status && <Tag>{project.status}</Tag>}
        </div>
        <h3 className="mt-2 text-h2">{project.name}</h3>
        <p className="mt-2 max-w-prose text-text-muted">
          {project.description}
        </p>
        <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <li key={tool}>
              <Tag>{tool}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.demo && (
            <Button variant="secondary" href={project.links.demo}>
              Live demo
            </Button>
          )}
          {project.links.code && (
            <Button variant="ghost" href={project.links.code}>
              Source code
            </Button>
          )}
        </div>
      </Card>
    </article>
  );
}

// Projects Section: one card per Project, in the order given.
// Takes the list as a prop so tests can pass fixture Projects.
export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
