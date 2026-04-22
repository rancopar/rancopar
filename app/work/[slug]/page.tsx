import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RanMark } from "../../components/RanMark";
import { projects, getProjectBySlug } from "../../lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} ${project.titleEm} — RanCoPar`,
    description: project.tagline,
  };
}

const categoryColor: Record<string, string> = {
  frontend: "var(--ember)",
  backend: "var(--obsidian)",
  database: "var(--graphite)",
  tooling: "var(--graphite)",
  design: "var(--ember)",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <>
      <nav className="topbar">
        <Link href="/" className="nav-brand">
          <RanMark width={16} height={19} />
          <span className="nav-name">
            Ran<span className="dim">CoPar</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/work" className="nav-text-link">Work</Link>
          <Link href="/#story" className="nav-text-link">About</Link>
          <Link href="/#contact" className="cta">Contact</Link>
        </div>
      </nav>

      <main>
        <header className="proj-hero">
          <div className="proj-hero-inner">
            <Link href="/work" className="back-link caption">← All work</Link>
            <div className="proj-num caption">{project.num}</div>
            <h1 className="serif-heading proj-title">
              {project.title} <em>{project.titleEm}</em>
            </h1>
            <p className="proj-tagline">{project.tagline}</p>

            <div className="proj-meta-row">
              <div className="proj-meta-item">
                <span className="caption proj-meta-label">Category</span>
                <span className="proj-meta-value">{project.category}</span>
              </div>
              <div className="proj-meta-item">
                <span className="caption proj-meta-label">Year</span>
                <span className="proj-meta-value">{project.year}</span>
              </div>
              <div className="proj-meta-item">
                <span className="caption proj-meta-label">Status</span>
                <span className={`work-status work-status--${project.status === "Live" ? "live" : project.status === "In Progress" ? "wip" : "archived"}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="proj-links">
                {project.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    {l.label} <span className="arr">→</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        {project.images.length > 0 && (
          <div className="proj-images">
            {project.images.map((img) => (
              <figure key={img.alt} className="proj-image-figure">
                <div className="proj-image-box" aria-label={img.alt}>
                  <span className="proj-image-placeholder caption">{img.alt}</span>
                </div>
                {img.caption && <figcaption className="caption proj-image-caption">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        <div className="proj-body">
          <section className="proj-section">
            <span className="caption proj-section-label">Overview</span>
            <p className="proj-prose">{project.summary}</p>
          </section>

          <section className="proj-section proj-csro">
            <div className="proj-cso-item">
              <span className="caption proj-section-label">The challenge</span>
              <p className="proj-prose">{project.challenge}</p>
            </div>
            <div className="proj-cso-item">
              <span className="caption proj-section-label">Our approach</span>
              <p className="proj-prose">{project.solution}</p>
            </div>
            <div className="proj-cso-item">
              <span className="caption proj-section-label">Outcome</span>
              <p className="proj-prose">{project.outcome}</p>
            </div>
          </section>

          <section className="proj-section">
            <span className="caption proj-section-label">Technology stack</span>
            <div className="proj-stack">
              {(["frontend", "backend", "database", "tooling", "design"] as const).map((cat) => {
                const items = project.technologies.filter((t) => t.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat} className="proj-stack-group">
                    <span className="caption proj-stack-cat" style={{ color: categoryColor[cat] }}>
                      {cat}
                    </span>
                    <div className="proj-stack-tags">
                      {items.map((t) => (
                        <span key={t.label} className="proj-tag">{t.label}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <nav className="proj-nav" aria-label="Project navigation">
          <div className="proj-nav-inner">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="proj-nav-link proj-nav-prev">
                <span className="caption">← Previous</span>
                <span className="proj-nav-title">{prev.title} {prev.titleEm}</span>
              </Link>
            ) : <div />}
            <Link href="/work" className="caption proj-nav-all">All work</Link>
            {next ? (
              <Link href={`/work/${next.slug}`} className="proj-nav-link proj-nav-next">
                <span className="caption">Next →</span>
                <span className="proj-nav-title">{next.title} {next.titleEm}</span>
              </Link>
            ) : <div />}
          </div>
        </nav>
      </main>

      <footer className="page-foot">
        <div className="foot-left">
          <RanMark width={14} height={17} />
          <span className="caption">RanCoPar</span>
        </div>
        <span className="caption">© {new Date().getFullYear()} — Ran Coding Partner, Kerala</span>
        <div className="foot-right">
          <a href="https://github.com/rancopar" target="_blank" rel="noopener noreferrer" className="caption foot-link">GitHub</a>
          <a href="mailto:rancopar@gmail.com" className="caption foot-link">Email</a>
        </div>
      </footer>
    </>
  );
}
