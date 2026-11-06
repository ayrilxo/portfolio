"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/profile";

type ProjectGalleryProps = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Build the filter list from the data: ["All", "Web", "Mobile", ...]
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-lg px-4 py-2 transition duration-200 active:scale-[0.97] ${
                isActive ? "bg-ink text-page" : "bg-surface text-ink hover:bg-surface-dark"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          // The key changes with the filter, so cards replay their entrance animation.
          <ProjectCard key={`${activeCategory}-${project.title}`} project={project} />
        ))}
      </div>
    </div>
  );
}
