import Link from "next/link";
import { siteConfig } from "@/lib/config";

// Small uppercase mono nav link, matching the reference masthead. On hover the
// colors invert: black text on a white background box.
const navLink =
  "w-fit px-1.5 py-0.5 font-semibold text-white transition-colors duration-150 hover:bg-white hover:text-black";

// Persistent masthead shown on every page, modeled on a compact studio header:
// the name at the far left, two stacked link groups in the middle, and a
// right-aligned Resume/CV link at the far edge. No dropdowns — every label is a
// plain link.
export default function SiteHeader() {
  return (
    <header className="reveal flex flex-wrap items-start justify-between gap-x-8 gap-y-8 font-columns text-xs uppercase tracking-[0.18em] sm:text-sm">
      <Link
        href="/"
        className="rainbow-hover font-name text-[2.4rem] font-bold normal-case leading-none tracking-[-0.02em] text-white sm:text-5xl"
      >
        {siteConfig.name}
      </Link>

      {/* Contact / Projects */}
      <div className="flex flex-col gap-1">
        <Link href="/contact" className={navLink}>
          Contact
        </Link>
        <Link href="/projects" className={navLink}>
          Projects
        </Link>
      </div>

      {/* About / Now */}
      <div className="flex flex-col gap-1">
        <Link href="/about" className={navLink}>
          About
        </Link>
        <Link href="/now" className={navLink}>
          Now
        </Link>
      </div>

      {/* Resume / CV — two right-aligned lines, matching the column height */}
      <a
        href={siteConfig.resume}
        target="_blank"
        rel="noopener noreferrer"
        className={`${navLink} flex flex-col items-start gap-1 text-left`}
      >
        <span>Click here to view</span>
        <span>my Resume/CV ↗</span>
      </a>
    </header>
  );
}
