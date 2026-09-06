import { motion } from "framer-motion";
import {
  IconApi,
  IconBrandAws,
  IconBrandAzure,
  IconBrandDocker,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandKotlin,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSketch,
  IconBrandSwift,
  IconBrandTypescript,
  IconCloud,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconGitBranch,
  IconLayoutDashboard,
  IconTestPipe,
  IconTools,
  type TablerIcon,
} from "@tabler/icons-react";

import { skillGroups } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { SectionHeading } from "./ui";

const skillIcons: Record<string, TablerIcon> = {
  api: IconApi,
  aws: IconBrandAws,
  azure: IconBrandAzure,
  css3: IconCode,
  database: IconDatabase,
  docker: IconBrandDocker,
  firebase: IconBrandFirebase,
  git: IconBrandGit,
  github: IconBrandGithub,
  html5: IconCode,
  javascript: IconBrandJavascript,
  jira: IconBrandSketch,
  kotlin: IconBrandKotlin,
  layout: IconLayoutDashboard,
  mobile: IconDeviceMobile,
  node: IconBrandNodejs,
  pipeline: IconGitBranch,
  react: IconBrandReact,
  swift: IconBrandSwift,
  test: IconTestPipe,
  typescript: IconBrandTypescript,
  workflow: IconTools,
};

const categoryIcons: Record<string, TablerIcon> = {
  "Backend & data": IconDatabase,
  "Cloud & platforms": IconCloud,
  "Mobile development": IconDeviceMobile,
  "Programming languages": IconCode,
  "Testing & DevOps": IconTestPipe,
  "Tools & frameworks": IconTools,
  "Web development": IconCode,
};

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
        <div className="mt-10 space-y-12">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="max-w-5xl"
              variants={fadeUpItem}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 p-2 text-fuchsia-300">
                  {(() => {
                    const CategoryIcon = categoryIcons[group.title] ?? IconCloud;
                    return <CategoryIcon size={20} stroke={1.8} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {group.title}
                  </h3>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/20 bg-transparent px-4 py-2.5 text-sm text-slate-200 transition-colors hover:border-white/40 hover:bg-white/[0.04]"
                  >
                    {(() => {
                      const SkillIcon = skillIcons[item.icon] ?? IconCode;
                      return <SkillIcon size={19} color={item.color} stroke={1.8} />;
                    })()}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
