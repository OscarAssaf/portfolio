import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router";

import { GalleryLightbox } from "../components/GalleryLightbox";
import { PrimaryLink, SecondaryLink, Tag } from "../components/ui";
import { getProjectBySlug } from "../data/projects";

//To add more images : src/data/projects.ts under gallery section

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = useMemo(() => project?.gallery ?? [], [project]);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Link to="/#projects" className="text-sm font-semibold text-sky-200">
        ← Back to projects
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
          {project.status === "in-progress" ? "In progress" : "Completed"}
        </span>
      </div>
      <p className="mt-4 max-w-3xl whitespace-pre-line text-lg text-slate-300">
        {project.description}
      </p>
      {project.outcome ? (
        <p className="mt-3 text-sky-200">{project.outcome}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.github ? (
          <SecondaryLink href={project.github}>GitHub</SecondaryLink>
        ) : null}
        {project.live ? <PrimaryLink href={project.live}>Live site</PrimaryLink> : null}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="aspect-[16/10] h-full w-full object-cover object-top"
            />
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Click an image to open the gallery.
      </p> 


      {activeIndex !== null ? (
        <GalleryLightbox
          images={images}
          index={activeIndex}
          title={project.title}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((current) =>
              current === null
                ? 0
                : (current - 1 + images.length) % images.length,
            )
          }
          onNext={() =>
            setActiveIndex((current) =>
              current === null ? 0 : (current + 1) % images.length,
            )
          }
        />
      ) : null}
    </article>
  );
}
