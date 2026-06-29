import Link from "next/link";
import { siteConfig } from "@/lib/config";

// Shared chrome for every page except the homepage business card.
export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col px-7 py-12 sm:px-12 sm:py-16 lg:px-20">
      <header className="mb-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          {siteConfig.name}
        </Link>
      </header>
      <main className="reveal max-w-2xl flex-1">{children}</main>
    </div>
  );
}
