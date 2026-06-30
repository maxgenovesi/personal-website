import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maxgenovesi",
    href: siteConfig.contact.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/maxgenovesi",
    href: siteConfig.contact.github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
          05 — Contact
        </p>
        <h1 className="font-display text-4xl font-medium tracking-[-0.01em] text-ink">
          Get in touch
        </h1>
      </header>
      <dl className="flex flex-col gap-6">
        {links.map((link) => (
          <div key={link.label} className="flex flex-col gap-1">
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint">
              {link.label}
            </dt>
            <dd>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-lg leading-relaxed text-ink-soft transition-colors hover:text-accent"
              >
                {link.value}
                {link.external ? " ↗" : ""}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
