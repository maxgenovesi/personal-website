import Link from "next/link";

// A column whose items stay hidden until the header is hovered, then expand
// downward smoothly and collapse again as soon as the pointer leaves — even if
// a sub-item was clicked. The expanding panel is absolutely positioned
// so it never affects the header's layout — columns stay evenly spaced and the
// name in the masthead doesn't shift when a column opens. Everything is white.
export default function Column({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const headerClass =
    "font-columns text-2xl font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80 sm:text-3xl";

  return (
    <section className="group relative">
      {href ? (
        <Link href={href} className={headerClass}>
          {label}
        </Link>
      ) : (
        <h2 className={headerClass}>{label}</h2>
      )}

      {/* Absolutely positioned so it overlays rather than pushing layout.
          grid-rows 0fr → 1fr gives a smooth auto-height expand on hover. */}
      <div className="absolute left-0 top-full grid min-w-max grid-rows-[0fr] transition-[grid-template-rows] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="flex flex-col items-start gap-1.5 pt-5 font-columns text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
