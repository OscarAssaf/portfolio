import { motion } from "framer-motion";

import { projects } from "../data/projects";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui";

export function Projects() {
  if (projects.length === 0) {
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
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUpItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
