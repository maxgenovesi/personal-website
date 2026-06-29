import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          02 — Projects
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          Selected work
        </h1>
      </header>
      <ul className="flex flex-col">
        {projects.map((project, i) => (
          <li key={project.slug} className="border-t border-line last:border-b">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex items-baseline gap-5 py-5 transition-colors"
            >
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </span>
                <span className="text-[0.95rem] text-ink-soft">
                  {project.summary}
                </span>
              </span>
              <span className="font-mono text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
