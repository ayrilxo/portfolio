import ProjectGallery from "@/components/ProjectGallery";
import { ArrowUpRight } from "@/components/ui/Icons";
import Section from "@/components/ui/Section";
import { projects, socials } from "@/data/profile";

// This stays a server component. Only the gallery (filters and pointer
// highlight) runs in the browser.
export default function Projects() {
  const github = socials.find((social) => social.label === "GitHub");

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work."
    >
      <ProjectGallery projects={projects} />

      {github && (
        <a
          href={github.url}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <span className="link">More on GitHub</span>
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </Section>
  );
}
