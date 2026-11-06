import Image from "next/image";
import type { Project } from "@/data/profile";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl bg-surface p-4 transition duration-300 hover:-translate-y-0.5 motion-safe:animate-rise">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-page">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="flex h-full items-center justify-center px-6 text-center text-3xl tracking-tight text-muted transition duration-500 group-hover:scale-[1.03]">
            {project.title}
          </span>
        )}
      </div>

      <div className="px-2 pt-5 pb-2">
        <h3 className="text-2xl tracking-tight">{project.title}</h3>
        <p className="mt-2 text-muted">{project.description}</p>
        <p className="mt-4 text-sm text-muted">{project.tags.join(" · ")}</p>

        {(project.liveUrl || project.codeUrl) && (
          <div className="mt-5 flex gap-6">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link font-medium text-accent">
                View live
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noreferrer" className="link font-medium text-accent">
                View code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
