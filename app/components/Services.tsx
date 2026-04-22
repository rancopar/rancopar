const services = [
  {
    index: "01",
    title: "Web Applications",
    body: "Full-stack products built with modern frameworks. From landing pages to complex SaaS platforms — we design and develop the complete experience.",
    tools: "Next.js · TypeScript · Tailwind · Firebase",
  },
  {
    index: "02",
    title: "Admin Systems",
    body: "Internal tools, dashboards, and management systems for organisations that need reliability. Clean interfaces built for non-technical users.",
    tools: "React · Firestore · Role-based Auth · Realtime",
  },
  {
    index: "03",
    title: "UI & Design",
    body: "Interfaces that feel intentional. We handle typography, spacing, motion, and visual hierarchy — not just layout.",
    tools: "Figma · CSS · Animation · Responsive",
  },
  {
    index: "04",
    title: "SEO & Performance",
    body: "Programmatic SEO, page speed optimisation, and structured content strategies that help products get found and stay fast.",
    tools: "Core Web Vitals · Metadata · Vercel · Edge",
  },
];

export default function Services() {
  return (
    <section className="page-section" id="services">
      <div className="section-header">
        <h2 className="serif-heading" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          What we <em>build</em>.
        </h2>
        <p className="section-sub">
          We focus on a tight set of disciplines and do them well. No bloat, no buzzwords — just useful software that works exactly as expected.
        </p>
      </div>

      <div className="services">
        {services.map((s) => (
          <div key={s.index} className="service">
            <span className="service-index">{s.index}</span>
            <div className="service-title">{s.title}</div>
            <p className="service-body">{s.body}</p>
            <div className="service-tools">{s.tools}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
