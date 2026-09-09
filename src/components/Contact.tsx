import { motion } from "framer-motion";

import { site } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { PrimaryLink, SectionHeading } from "./ui";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-surface-soft px-4 py-24 sm:px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading>Get in touch</SectionHeading>
        <motion.p
          className="mt-5 text-lg text-slate-300"
          variants={fadeUpItem}
        >
          Feel free to reach out for collaboration, questions, or just to say
          hello. I&apos;m always open to new opportunities.
        </motion.p>
        <motion.div className="mt-8" variants={fadeUpItem}>
          <PrimaryLink href={`mailto:${site.email}`} className="px-6 py-3">
            Say hello
          </PrimaryLink>
        </motion.div>
      </div>
    </motion.section>
  );
}
