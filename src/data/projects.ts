import type { Project } from "@/types";

// Four placeholder projects. Replace these with your real work later —
// each entry automatically gets its own page at /projects/<slug>.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "A short, one-line description of this project.",
    tags: ["TypeScript"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "A short, one-line description of this project.",
    tags: ["React"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary: "A short, one-line description of this project.",
    tags: ["Node.js"],
  },
  {
    slug: "project-four",
    title: "Project Four",
    summary: "A short, one-line description of this project.",
    tags: ["Next.js"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
