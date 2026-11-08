"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { ArrowUpRight, GitHub } from "@/components/ui/Icons";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/profile";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function WindowPlaceholder({ title }: { title: string }) {
  return (
    <div aria-hidden className="absolute inset-0 flex flex-col">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface/70 px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 h-2 w-28 rounded-full bg-line" />
      </div>
      <div className="flex flex-1">
        <div className="hidden w-1/4 space-y-3 border-r border-line p-4 sm:block">
          <span className="block h-2 w-3/4 rounded-full bg-line" />
          <span className="block h-2 w-1/2 rounded-full bg-line" />
          <span className="block h-2 w-2/3 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 items-center justify-center p-6">
          <span className="text-4xl font-semibold tracking-tight text-ink/80 transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] md:text-5xl">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <article
      onPointerMove={handlePointerMove}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-2.5 transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_16px_40px_-20px_rgb(15_23_42/0.2)]"
    >
      {/* Pointer highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--x) var(--y), rgb(59 130 246 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-[linear-gradient(180deg,var(--color-subtle),var(--color-page))]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover transition duration-700 ease-out-soft group-hover:scale-[1.03]"
          />
        ) : (
          <WindowPlaceholder title={project.title} />
        )}
      </div>

      <div className="relative grid gap-6 p-4 pt-6 sm:grid-cols-[1fr_auto] sm:items-end md:p-6">
        <div>
          <p className="font-mono text-xs text-faint">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-pretty text-muted">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>

        {(project.liveUrl || project.codeUrl) && (
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-white transition duration-200 hover:-translate-y-px hover:bg-ink-soft"
              >
                View live
                <ArrowUpRight />
                <span className="sr-only">(opens {project.title} in a new tab)</span>
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium transition duration-200 hover:-translate-y-px hover:border-line-strong hover:bg-subtle"
              >
                <GitHub />
                View code
                <span className="sr-only">for {project.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
