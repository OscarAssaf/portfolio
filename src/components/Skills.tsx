import { motion } from "framer-motion";

import { skillGroups, technologies } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { SectionHeading } from "./ui";

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-[#111827] px-4 py-20 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Skills</SectionHeading>
        <p className="mt-3 text-slate-400">
          Tools and technologies I&apos;ve worked with.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              variants={fadeUpItem}
            >
              <h3 className="text-sm font-semibold tracking-wide text-sky-200 uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-slate-200">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-16 overflow-hidden border-y border-white/10 py-6">
        <div className="marquee-track flex w-max gap-3">
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full border border-white/10 bg-[#18253f] px-4 py-2 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
