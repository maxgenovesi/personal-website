import type { Metadata } from "next";
import Link from "next/link";
import { aboutItems, type AboutCollection } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const interests = aboutItems.filter((i) => i.kind === "interest");
  const posts = aboutItems.filter((i) => i.kind === "post");

  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          03 — About
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          Beyond the keyboard
        </h1>
      </header>

      <Section title="Interests" items={interests} />
      <Section title="Writing" items={posts} />
    </div>
  );
}

function Section({ title, items }: { title: string; items: AboutCollection }) {
  if (items.length === 0) return null;
  return (
    <section className="flex flex-col gap-5">
      <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      <ul className="flex flex-col">
        {items.map((entry) => (
          <li key={entry.slug} className="border-t border-line last:border-b">
            <Link
              href={`/about/${entry.slug}`}
              className="group flex flex-col gap-1 py-4"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                  {entry.title}
                </span>
                {entry.date && (
                  <span className="font-mono text-xs text-ink-faint">
                    {entry.date}
                  </span>
                )}
              </span>
              <span className="text-[0.95rem] text-ink-soft">
                {entry.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
