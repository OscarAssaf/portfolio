import { motion } from "framer-motion";

import { site } from "../data/site";
import { fadeUpItem, staggerContainer } from "../shared/motion";

export function Hero() {
  return (
    <motion.section
      className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(100,255,218,0.08),transparent_40%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6">
        <motion.p
          className="text-sm font-semibold tracking-[0.28em] text-sky-200 uppercase"
          variants={fadeUpItem}
        >
          Hello — I&apos;m
        </motion.p>
        <motion.h1
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
          variants={fadeUpItem}
        >
          {site.name}.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-slate-300 sm:text-2xl"
          variants={fadeUpItem}
        >
          {site.role} focused on {site.headline.toLowerCase()}.
        </motion.p>
        <motion.ul
          className="max-w-2xl space-y-2 text-sm text-slate-400 sm:text-base"
          variants={fadeUpItem}
        >
          {site.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
        <motion.div className="flex flex-wrap gap-3" variants={fadeUpItem}>
          <a
            href="#projects"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/60"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
