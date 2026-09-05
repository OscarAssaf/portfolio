import { clsx } from "clsx";
import { Link } from "react-router";

import type { Project } from "../data/projects";
import { PrimaryLink, SecondaryLink, Tag } from "./ui";

export function ProjectCard({
  project,
  spotlight = false,
  compact = false,
}: {
  project: Project;
  spotlight?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111c32]/90 p-4 shadow-[0_18px_45px_-35px_rgba(3,7,18,0.85)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_-40px_rgba(14,165,233,0.35)]",
        spotlight &&
          "rounded-3xl border-sky-300/30 bg-gradient-to-br from-[#111c32] via-[#121d38] to-[#0d1934] p-5",
        compact && "min-w-[260px] snap-start sm:min-w-[320px]",
      )}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={clsx(
          "relative overflow-hidden rounded-xl bg-black/30",
          spotlight ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        {spotlight ? (
          <span className="absolute top-3 left-3 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-semibold text-white">
            Spotlight
          </span>
        ) : null}
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {project.summary}
        </p>
        {spotlight && project.outcome ? (
          <p className="mt-3 text-sm text-sky-200">{project.outcome}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, spotlight ? 5 : 3).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.github ? (
            <SecondaryLink href={project.github}>GitHub</SecondaryLink>
          ) : null}
          {project.live ? <PrimaryLink href={project.live}>Live</PrimaryLink> : null}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-sky-300/60"
          >
            {spotlight ? "Case study" : "Details"}
          </Link>
        </div>
      </div>
    </article>
  );
}
