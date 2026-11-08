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
  const categories = [...new Set(projects.map((project) => project.category))];
  const showFilters = categories.length > 1;

  const visibleProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      {showFilters && (
        <div className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
          {["All", ...categories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm transition duration-200 active:scale-[0.97] ${
                  isActive ? "bg-ink text-white" : "text-muted hover:bg-subtle hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />
        ))}
      </div>
    </div>
  );
}
