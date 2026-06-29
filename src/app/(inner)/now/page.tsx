import type { Metadata } from "next";
import { now } from "@/data/now";

export const metadata: Metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          04 — Now
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          What I&apos;m up to
        </h1>
      </header>
      <ul className="flex flex-col gap-3 text-lg leading-relaxed text-ink-soft">
        {now.items.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="select-none text-accent">—</span>
            {line}
          </li>
        ))}
      </ul>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint">
        Updated {now.updated}
      </p>
    </div>
  );
}
