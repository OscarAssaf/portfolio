import { motion } from "framer-motion";

import profileImage from "../assets/profileImage.png";
import { site } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="bg-surface-soft px-4 py-20 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.img
          src={profileImage}
          alt={site.name}
          className="h-[420px] w-full rounded-3xl object-cover object-top ring-1 ring-white/10 shadow-2xl"
          variants={fadeUpItem}
        />
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            variants={fadeUpItem}
          >
            Hey there, I&apos;m{" "}
            <span className="text-sky-300">{site.firstName}</span>
          </motion.h2>
          <motion.p
            className="mt-5 w-fit rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase"
            variants={fadeUpItem}
          >
            {site.role}
          </motion.p>
          {site.intro.map((paragraph) => (
            <motion.p
              key={paragraph}
              className="mt-4 text-base leading-relaxed text-slate-100/85 sm:text-lg"
              variants={fadeUpItem}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
