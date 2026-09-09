import { motion } from "framer-motion";
import COriginalIcon from "@devicon/react/c/original";
import CsharpOriginalIcon from "@devicon/react/csharp/original";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiJira,
  SiKotlin,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiSwift,
  SiTypescript,
  SiXcode,
} from "react-icons/si";
import {
  FaAndroid,
  FaApple,
  FaCloud,
  FaDatabase,
  FaJava,
  FaMicrosoft,
  FaToolbox,
} from "react-icons/fa6";
import {
  IconApi,
  IconBrandAws,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconLayoutDashboard,
  IconTestPipe,
} from "@tabler/icons-react";
import type { ElementType } from "react";

import { skillGroups } from "../data/site";
import { fadeUpItem, staggerContainer, viewportOnce } from "../shared/motion";
import { SectionHeading } from "./ui";

type SkillIcon = ElementType;

const skillIcons: Record<string, SkillIcon> = {
  api: IconApi,
  aws: IconBrandAws,
  azure: FaMicrosoft,
  code: SiCplusplus,
  c: COriginalIcon,
  csharp: CsharpOriginalIcon,
  css3: SiCss,
  database: IconDatabase,
  docker: SiDocker,
  dotnet: SiDotnet,
  express: SiExpress,
  figma: SiFigma,
  firebase: SiFirebase,
  flutter: SiFlutter,
  git: SiGit,
  github: SiGithub,
  githubactions: SiGithubactions,
  html5: SiHtml5,
  ios: FaApple,
  android: FaAndroid,
  androidstudio: FaAndroid,
  java: FaJava,
  javascript: SiJavascript,
  jira: SiJira,
  kotlin: SiKotlin,
  jetpackcompose: SiJetpackcompose,
  layout: IconLayoutDashboard,
  mobile: IconDeviceMobile,
  mysql: SiMysql,
  mongodb: SiMongodb,
  node: SiNodedotjs,
  pipeline: SiGithubactions,
  postgresql: SiPostgresql,
  python: SiPython,
  pytorch: SiPytorch,
  react: SiReact,
  swift: SiSwift,
  swiftui: SiSwift,
  test: IconTestPipe,
  typescript: SiTypescript,
  xcode: SiXcode,
  workflow: FaToolbox,
};

const categoryIcons: Record<string, SkillIcon> = {
  "Backend & databases": FaDatabase,
  "Cloud & platforms": FaCloud,
  "Mobile development": IconDeviceMobile,
  "Programming languages": IconCode,
  "Testing & DevOps": IconTestPipe,
  "Tools & frameworks": FaToolbox,
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
        <p className="mt-4 text-base text-slate-400 sm:text-lg">
          Tools and technologies I&apos;ve worked with.
        </p>
        <div className="mt-12 space-y-14">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="max-w-5xl"
              variants={fadeUpItem}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 p-2.5 text-fuchsia-300">
                  {(() => {
                    const CategoryIcon = categoryIcons[group.title] ?? FaCloud;
                    return <CategoryIcon size={24} color="currentColor" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {group.title}
                  </h3>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex w-fit items-center gap-3 rounded-2xl border px-5 py-3 text-base text-slate-200 transition-colors hover:brightness-110"
                    style={{
                      backgroundColor: `${item.color}1a`,
                      borderColor: `${item.color}66`,
                    }}
                  >
                    {(() => {
                      const SkillIcon = skillIcons[item.icon] ?? IconCode;
                      return <SkillIcon size={24} color={item.color} />;
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
