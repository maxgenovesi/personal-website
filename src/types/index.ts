export interface Project {
  slug: string;
  title: string;
  /** Short one-line summary shown on the project page. */
  summary: string;
  /** Longer description / body. Optional for now. */
  description?: string;
  tags?: string[];
  links?: {
    live?: string;
    source?: string;
  };
  year?: number;
}

export interface AboutItem {
  slug: string;
  title: string;
  /** Distinguishes a personal-interest entry from a blog post. */
  kind: "interest" | "post";
  summary: string;
  description?: string;
  /** Publish date for posts, e.g. "2026-06". */
  date?: string;
}
