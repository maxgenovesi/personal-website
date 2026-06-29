import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { projects } from "@/data/projects";
import { aboutItems } from "@/data/about";
import { now } from "@/data/now";

const label =
  "mb-5 inline-block font-mono text-[0.8rem] uppercase tracking-[0.18em] text-ink-faint";
const item =
  "link-wipe inline-block py-1 text-[1.4rem] leading-snug text-ink";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col px-7 py-12 sm:px-12 sm:py-16 lg:px-20">
      {/* ── Masthead ─────────────────────────────────────────────── */}
      <header className="reveal" style={{ animationDelay: "60ms" }}>
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-ink-soft">
          {siteConfig.tagline}
        </p>
      </header>

      {/* ── Lower block: columns + colophon, lifted off the bottom ── */}
      <div className="mt-auto mb-[8vh] sm:mb-[12vh]">
        <div className="grid max-w-6xl grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4 md:gap-x-14">
          {/* Contact */}
          <section className="reveal" style={{ animationDelay: "260ms" }}>
            <p className={label}>Contact</p>
            <div className="flex flex-col">
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
            </div>
          </section>

          {/* Projects */}
          <section className="reveal" style={{ animationDelay: "340ms" }}>
            <Link href="/projects" className={`${label} hover:text-accent`}>
              Projects
            </Link>
            <div className="flex flex-col">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={item}
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="reveal" style={{ animationDelay: "420ms" }}>
            <Link href="/about" className={`${label} hover:text-accent`}>
              About
            </Link>
            <div className="flex flex-col">
              {aboutItems.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/about/${entry.slug}`}
                  className={item}
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          </section>

          {/* Now */}
          <section className="reveal" style={{ animationDelay: "500ms" }}>
            <Link href="/now" className={`${label} hover:text-accent`}>
              Now
            </Link>
            <div className="flex flex-col gap-1.5">
              {now.items.map((line) => (
                <p key={line} className="text-[1.4rem] leading-snug text-ink">
                  {line}
                </p>
              ))}
              <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-faint">
                Updated {now.updated}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
