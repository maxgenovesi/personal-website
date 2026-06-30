import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { projects } from "@/data/projects";
import { aboutItems } from "@/data/about";
import { now } from "@/data/now";
import Column from "@/components/Column";

const item =
  "w-fit text-[1.05rem] leading-relaxed text-white transition-opacity duration-200 hover:opacity-70";

// Persistent masthead shown on every page. The name links home; each column
// title reveals its sub-items on hover.
export default function SiteHeader() {
  return (
    <header className="reveal flex flex-wrap items-center justify-between gap-x-10 gap-y-12">
      <Link
        href="/"
        className="font-name text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-white transition-opacity duration-200 hover:opacity-80 sm:text-6xl lg:text-5xl"
      >
        {siteConfig.name}
      </Link>

      {/* Hover a title to reveal its subsection */}
      <div className="flex flex-1 items-start justify-end gap-x-16 pr-16 sm:gap-x-24 sm:pr-32 lg:pr-56">
        {/* Contact */}
        <Column label="Contact">
          <a href={siteConfig.contact.phoneHref} className={item}>
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className={item}>
            {siteConfig.contact.email}
          </a>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={item}
          >
            LinkedIn ↗
          </a>
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={item}
          >
            GitHub ↗
          </a>
        </Column>

        {/* Projects */}
        <Column label="Projects" href="/projects">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className={item}>
              {project.title}
            </Link>
          ))}
        </Column>

        {/* About */}
        <Column label="About" href="/about">
          {aboutItems.map((entry) => (
            <Link key={entry.slug} href={`/about/${entry.slug}`} className={item}>
              {entry.title}
            </Link>
          ))}
        </Column>

        {/* Now */}
        <Column label="Now" href="/now">
          {now.items.map((line) => (
            <p key={line} className="text-[1.05rem] leading-relaxed text-white">
              {line}
            </p>
          ))}
          <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white opacity-70">
            Updated {now.updated}
          </p>
        </Column>
      </div>
    </header>
  );
}
