export type Technology = {
  label: string;
  category: "frontend" | "backend" | "database" | "tooling" | "design";
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  titleEm: string;
  tagline: string;
  category: string;
  year: string;
  status: "Live" | "In Progress" | "Archived";
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: Technology[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: "zaitoon-kitchen",
    num: "01",
    title: "Zaitoon",
    titleEm: "Kitchen",
    tagline: "A full fine-dining experience, client-side.",
    category: "Full-Stack Web App",
    year: "2026",
    status: "Live",
    summary:
      "A fine-dining restaurant platform for a Kozhikode-based fusion restaurant. Built a complete product from scratch — editorial dark-themed landing page, a 48-dish menu across seven categories with real food photography, a fully custom cart system, themed date and guest pickers, delivery and pickup checkout with CGST/SGST breakdown, and a sticky category navigator.",
    challenge:
      "The client needed a premium digital presence that matched the physical restaurant's atmosphere — dark, editorial, and tactile — without relying on any backend or CMS. Every interaction had to feel considered.",
    solution:
      "We designed and built the entire experience as a client-side React application using React Context for cart state. Custom components for every interaction: a date-picker styled to the brand, a guest counter, a sticky category navigator that tracks scroll position, and a full tax-breakdown checkout flow — no third-party UI library involved.",
    outcome:
      "The restaurant launched with a platform that doubled as a marketing page and an ordering system. Load times under 1.2s on mobile. Zero backend costs.",
    technologies: [
      { label: "Next.js 15", category: "frontend" },
      { label: "TypeScript", category: "frontend" },
      { label: "Tailwind CSS", category: "frontend" },
      { label: "React Context", category: "frontend" },
      { label: "Figma", category: "design" },
      { label: "Vercel", category: "tooling" },
    ],
    links: [
      { label: "Live Site", href: "https://zaitoon-kitchen.vercel.app/" },
      { label: "GitHub", href: "https://github.com/rancopar/zaitoon-kitchen" },
    ],
    images: [
      { src: "/images/zaitoon-hero.jpg", alt: "Zaitoon Kitchen landing page", caption: "Dark editorial hero section" },
      { src: "/images/zaitoon-menu.jpg", alt: "Zaitoon menu view", caption: "48-dish menu with sticky category navigator" },
      { src: "/images/zaitoon-cart.jpg", alt: "Zaitoon cart and checkout", caption: "Custom cart with CGST/SGST breakdown" },
    ],
  },
  {
    slug: "madrasa-management",
    num: "02",
    title: "Madrasa",
    titleEm: "Management",
    tagline: "A bilingual admin system built for real institutions.",
    category: "Admin System",
    year: "2025",
    status: "Live",
    summary:
      "A student management system built for Kerala-based Madrasa institutions. Covers student registration, centre-based classification with special handling for specific institutions, results management, and a secure admin panel.",
    challenge:
      "Non-technical staff needed to manage hundreds of student records across multiple centres with no margin for error. The system had to work offline, support bilingual input, and enforce strict role-based access without confusing the people using it daily.",
    solution:
      "We built on Firebase Firestore with structured security rules that enforce per-role read/write permissions at the document level. Centre dropdown logic handles special institution cases without exposing complexity to the user. localStorage caching keeps the interface snappy even on poor connectivity. The UI is deliberately plain — labels, not icons.",
    outcome:
      "Adopted across multiple institutions in Kerala. Staff onboarding takes under 20 minutes. Zero reported data incidents since launch.",
    technologies: [
      { label: "Next.js", category: "frontend" },
      { label: "TypeScript", category: "frontend" },
      { label: "Firebase Auth", category: "backend" },
      { label: "Firestore", category: "database" },
      { label: "localStorage caching", category: "frontend" },
      { label: "Role-based Auth", category: "backend" },
      { label: "Vercel", category: "tooling" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rancopar" },
    ],
    images: [
      { src: "/images/madrasa-dashboard.jpg", alt: "Madrasa admin dashboard", caption: "Main admin dashboard" },
      { src: "/images/madrasa-students.jpg", alt: "Student records view", caption: "Student registration and listing" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
