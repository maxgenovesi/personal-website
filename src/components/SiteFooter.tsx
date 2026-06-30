import { siteConfig } from "@/lib/config";

// Persistent footer, mirroring the masthead: location at the bottom-left and a
// short bio at the bottom-right, in the same small uppercase mono.
export default function SiteFooter() {
  return (
    <footer className="reveal mt-auto flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pt-20 font-columns text-xs uppercase tracking-[0.18em] text-white sm:text-sm">
      <p className="flex flex-col gap-1">
        {siteConfig.location.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
      <p className="flex flex-col items-start gap-1 text-left">
        {siteConfig.bio.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </footer>
  );
}
