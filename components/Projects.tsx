import Section from "@/components/Section";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/profile";

// This stays a server component. Only the gallery (which has filter buttons)
// needs to run in the browser, so only that part is a client component.
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ProjectGallery projects={projects} />
    </Section>
  );
}
