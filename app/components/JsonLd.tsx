const SITE_URL = "https://rancopar.com";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RanCoPar",
        alternateName: "Ran Coding Partner",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.svg`,
          width: 100,
          height: 120,
        },
        description:
          "RanCoPar is a web development partnership based in Kerala, India. We build web applications, admin systems, and digital products with care and craft.",
        foundingDate: "2026",
        foundingLocation: { "@type": "Place", name: "Kerala, India" },
        areaServed: [{ "@type": "Country", name: "India" }],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "rancopar@gmail.com",
          contactType: "customer service",
          availableLanguage: ["English", "Malayalam"],
        },
        sameAs: ["https://github.com/rancopar"],
        founders: [
          { "@type": "Person", name: "Raihana", jobTitle: "Design Lead" },
          { "@type": "Person", name: "Adhil", jobTitle: "Engineering Lead" },
          { "@type": "Person", name: "Nisamudheen", jobTitle: "Strategy" },
        ],
        knowsAbout: [
          "Web Application Development", "Next.js", "React", "TypeScript",
          "Firebase", "Firestore", "Tailwind CSS", "Admin Systems", "SEO Optimization",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "RanCoPar",
        description: "Web development partnership based in Kerala, India.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/work?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function HomePageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "RanCoPar — Ran Coding Partner | Web Development Kerala",
    description: "RanCoPar builds web applications, admin systems, and digital products from Kerala, India. Small team, high craft.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WorkListingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/work#webpage`,
    url: `${SITE_URL}/work`,
    name: "Work — RanCoPar",
    description: "Every project RanCoPar has shipped. Real products, real users.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ProjectJsonLd({
  slug, title, tagline, summary, year, technologies,
}: {
  slug: string; title: string; tagline: string;
  summary: string; year: string; technologies: { label: string }[];
}) {
  const url = `${SITE_URL}/work/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${title} — RanCoPar`,
        description: tagline,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: title,
        description: summary,
        url,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        dateCreated: year,
        creator: { "@id": `${SITE_URL}/#organization` },
        keywords: technologies.map((t) => t.label).join(", "),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
