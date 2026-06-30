// Central place for site-wide info. Edit these values to personalize the site.
export const siteConfig = {
  name: "Max Genovesi",
  // Small subtext shown under the name on the homepage.
  tagline: "Software Engineer",
  description: "Personal website and portfolio of Max Genovesi.",
  url: "https://genovesi.us",
  // Drop your file in /public and update this path (e.g. "/resume.pdf").
  resume: "/resume.pdf",
  // Footer text, one entry per line.
  location: ["Located in", "NYC, New York"],
  bio: [
    "Full-stack engineer and Northeastern University graduate,",
    "driven to innovate and make the world better.",
  ],
  contact: {
    phone: "+1 (914) 334-8110",
    phoneHref: "tel:+19143348110",
    email: "max@genovesi.us",
    linkedin: "https://www.linkedin.com/in/maxgenovesi",
    github: "https://github.com/maxgenovesi",
  },
} as const;
