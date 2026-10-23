export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  altTagline: string;
  mission: string;
  description: string;
  url: string;
  navItems: NavItem[];
  cta: {
    label: string;
    href: string;
  };
  contact: {
    email: string; // Configurable official contact
    location: string;
    inquiryTypes: { value: string; label: string }[];
  };
}

export const siteConfig: SiteConfig = {
  name: "HackerSpace Technologies",
  shortName: "HST",
  tagline: "Building Technology. Creating Possibilities.",
  altTagline: "Building What's Next.",
  mission: "HackerSpace Technologies builds ambitious digital products, platforms, and technology-driven ventures designed to solve meaningful problems and create lasting value.",
  description: "Official digital headquarters of HackerSpace Technologies (HST) — an independent technology company building digital products, intelligent software, infrastructure, and technology-driven businesses.",
  url: "https://hackerspace-technologies.pages.dev",
  navItems: [
    { label: "About", href: "/about" },
    { label: "Ventures", href: "/ventures" },
    { label: "Innovation", href: "/innovation" },
    { label: "Founder", href: "/founder" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Explore HST",
    href: "/ventures",
  },
  contact: {
    email: "contact@hackerspace.technologies", // Editable placeholder
    location: "India / Global Operations",
    inquiryTypes: [
      { value: "partnership", label: "Strategic Partnership" },
      { value: "venture", label: "Venture Collaboration" },
      { value: "product", label: "Product & Technology Inquiry" },
      { value: "media", label: "Media & Speaking" },
      { value: "general", label: "General Inquiry" },
    ]
  }
};
