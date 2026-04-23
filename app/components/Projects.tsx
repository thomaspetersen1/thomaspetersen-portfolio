import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" label="/ PROJECTS">
      <div className="flex flex-col gap-4">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
