import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aboutItems, getAboutItem } from "@/data/about";

export function generateStaticParams() {
  return aboutItems.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getAboutItem(slug);
  return { title: entry?.title ?? "About" };
}

export default async function AboutItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getAboutItem(slug);
  if (!entry) notFound();

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-4">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          {entry.kind === "post" ? "Writing" : "Interest"}
          {entry.date ? ` — ${entry.date}` : ""}
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          {entry.title}
        </h1>
        <p className="text-lg leading-relaxed text-ink-soft">{entry.summary}</p>
      </header>
      <p className="leading-relaxed text-ink-soft">
        {entry.description ??
          "This is a placeholder page. Add the full content here later."}
      </p>
    </article>
  );
}
