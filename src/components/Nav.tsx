import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

import { site } from "../data/site";

const links = [
  { label: "About", hash: "about" },
  { label: "Projects", hash: "projects" },
  { label: "Experience", hash: "experience" },
  { label: "Skills", hash: "skills" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-teal-300">
          {site.firstName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: "/", hash: link.hash }}
              className="text-sm font-semibold text-slate-200 transition hover:text-sky-200"
            >
              {link.label}
            </Link>
          ))}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm font-semibold transition hover:text-sky-200 ${isActive ? "text-sky-200" : "text-slate-200"}`
            }
          >
            Gallery
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-slate-300 transition hover:text-white"
          >
            <IconMail size={20} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-300 transition hover:text-white"
          >
            <IconBrandGithub size={20} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 transition hover:text-white"
          >
            <IconBrandLinkedin size={20} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.hash}
                to={{ pathname: "/", hash: link.hash }}
                className="text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <NavLink
              to="/projects"
              className="text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Gallery
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
