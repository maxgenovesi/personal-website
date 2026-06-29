import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          Project{project.year ? ` — ${project.year}` : ""}
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-ink-soft">{project.summary}</p>
      </header>

      {project.tags && project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <p className="leading-relaxed text-ink-soft">
        {project.description ??
          "This is a placeholder project page. Add the details here later."}
      </p>

      {(project.links?.live || project.links?.source) && (
        <div className="flex gap-6 font-mono text-[0.8rem] uppercase tracking-[0.1em]">
          {project.links.live && (
            <a href={project.links.live} className="link-wipe text-ink">
              Live ↗
            </a>
          )}
          {project.links.source && (
            <a href={project.links.source} className="link-wipe text-ink">
              Source ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
