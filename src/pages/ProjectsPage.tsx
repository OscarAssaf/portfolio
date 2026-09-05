import { clsx } from "clsx";
import { useMemo, useState } from "react";

import type { ProjectCategory } from "../data/projects";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "web", label: "Web development" },
  { id: "mobile", label: "Mobile apps" },
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Gallery</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Every project in one place. Filter by platform, then open a case study
        for a larger look at the screenshots.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              filter === item.id
                ? "bg-sky-500 text-white"
                : "border border-white/15 bg-white/5 text-slate-200 hover:border-sky-300/50",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
