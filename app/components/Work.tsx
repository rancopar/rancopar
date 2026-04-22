import Link from "next/link";
import { projects } from "../lib/projects";

export default function Work() {
  return (
    <section className="page-section" id="work">
      <div className="section-header">
        <h2 className="serif-heading" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          Selected <em>work</em>.
        </h2>
        <p className="section-sub">
          Real products, real users. Every project ships with intention — no throwaway demos.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((p) => (
          <Link key={p.slug} className="work-item" href={`/work/${p.slug}`}>
            <div className="work-num">{p.num}</div>
            <div className="work-body">
              <div className="work-title">
                {p.title} <em>{p.titleEm}</em>
              </div>
              <div className="work-meta">
                <span>{p.category}</span>
                <span className="dot" />
                <span>{p.year}</span>
                <span className="dot" />
                <span className={`work-status work-status--${p.status === "Live" ? "live" : p.status === "In Progress" ? "wip" : "archived"}`}>
                  {p.status}
                </span>
              </div>
              <p className="work-tagline">{p.tagline}</p>
            </div>
            <div className="work-chevron">→</div>
          </Link>
        ))}
      </div>

      <div className="work-footer">
        <Link href="/work" className="btn btn-ghost">
          View all work <span className="arr">→</span>
        </Link>
      </div>
    </section>
  );
}
