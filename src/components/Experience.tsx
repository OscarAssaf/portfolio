import { motion } from "framer-motion";

import { education, experience } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { SectionHeading } from "./ui";

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="bg-[#10182c] px-4 py-24 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <motion.article
              key={`${job.company}-${job.title}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              variants={fadeUpItem}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-sky-200">{job.dates}</p>
              </div>
              <p className="mt-1 font-medium text-slate-300">{job.company}</p>
              <ul className="mt-4 space-y-2 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white">Education</h3>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <motion.article
                key={item.program}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                variants={fadeUpItem}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold text-white">
                    {item.program}
                  </h4>
                  <p className="text-sm text-sky-200">{item.dates}</p>
                </div>
                <p className="mt-1 text-slate-300">{item.school}</p>
                <p className="mt-3 text-slate-400">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
