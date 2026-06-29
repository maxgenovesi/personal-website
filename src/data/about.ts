import type { AboutItem } from "@/types";

export type AboutCollection = AboutItem[];

// Four placeholders mixing personal interests and blog posts.
// Replace later — each entry gets its own page at /about/<slug>.
export const aboutItems: AboutItem[] = [
  {
    slug: "interest-one",
    title: "An Interest of Mine",
    kind: "interest",
    summary: "Something I care about outside of software engineering.",
  },
  {
    slug: "interest-two",
    title: "Another Interest",
    kind: "interest",
    summary: "Another thing I spend my time on.",
  },
  {
    slug: "first-post",
    title: "My First Post",
    kind: "post",
    summary: "A placeholder for a future blog post.",
    date: "2026-06",
  },
  {
    slug: "second-post",
    title: "Another Post",
    kind: "post",
    summary: "A placeholder for a future blog post.",
    date: "2026-06",
  },
];

export function getAboutItem(slug: string): AboutItem | undefined {
  return aboutItems.find((a) => a.slug === slug);
}
