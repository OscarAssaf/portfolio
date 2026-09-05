import { motion } from "framer-motion";
import { Link } from "react-router";

import {
  getFeaturedProjects,
  getGalleryProjects,
} from "../data/projects";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui";

export function Projects() {
  const featured = getFeaturedProjects();
  const spotlight = featured.find((project) => project.spotlight) ?? featured[0];
  const restFeatured = featured.filter((project) => project.id !== spotlight?.id);
  const gallery = getGalleryProjects();

  if (!spotlight) {
    return null;
  }

  return (
    <motion.section
      id="projects"
      className="bg-surface-soft px-4 py-24 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading>Projects</SectionHeading>
          <Link
            to="/projects"
            className="text-sm font-semibold text-sky-200 hover:text-sky-100"
          >
            View full gallery →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <motion.div className="lg:row-span-2" variants={fadeUpItem}>
            <ProjectCard project={spotlight} spotlight />
          </motion.div>
          {restFeatured.map((project) => (
            <motion.div key={project.id} variants={fadeUpItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white">More projects</h3>
          <p className="mt-2 text-slate-400">
            A horizontal gallery for the rest of the work.
          </p>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {gallery.map((project) => (
              <div key={project.id} className="w-[300px] shrink-0 sm:w-[340px]">
                <ProjectCard project={project} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
