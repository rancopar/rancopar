import Link from "next/link";
import type { Metadata } from "next";
import { RanMark } from "../components/RanMark";
import { projects } from "../lib/projects";
import { OrganizationJsonLd, WorkListingJsonLd } from "../components/JsonLd";

const SITE_URL = "https://rancopar.com";

export const metadata: Metadata = {
  title: "Work — Our Projects",
  description: "Every project RanCoPar has shipped. Web applications, admin systems, and digital products built for real users in India. See our full portfolio.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    url: `${SITE_URL}/work`,
    title: "Work — RanCoPar | Web Development Projects Kerala",
    description: "Every project RanCoPar has shipped. Real products, real users. Web applications and admin systems built from Kerala.",
  },
};

export default function WorkPage() {
  return (
    <>
      <OrganizationJsonLd />
      <WorkListingJsonLd />
      <nav className="topbar">
        <Link href="/" className="nav-brand">
          <RanMark width={16} height={19} />
          <span className="nav-name">Ran<span className="dim">CoPar</span></span>
        </Link>
        <div className="nav-links">
          <Link href="/#work" className="nav-text-link">Work</Link>
          <Link href="/#story" className="nav-text-link">About</Link>
          <Link href="/#contact" className="cta">Contact</Link>
        </div>
      </nav>

      <header className="work-page-header">
        <div className="work-page-header-inner">
          <Link href="/" className="back-link caption">← Home</Link>
          <span className="caption work-page-eyebrow">All Projects</span>
          <h1 className="serif-heading work-page-title">The <em>work</em>.</h1>
          <p className="work-page-sub">Every project we have shipped. Built with intention, maintained with care.</p>
        </div>
      </header>

      <main className="work-page-list">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="wl-item">
            <div className="wl-num">{p.num}</div>
            <div className="wl-body">
              <div className="wl-title">{p.title} <em>{p.titleEm}</em></div>
              <div className="wl-meta">
                <span>{p.category}</span>
                <span className="dot" />
                <span>{p.year}</span>
                <span className="dot" />
                <span className={`work-status work-status--${p.status === "Live" ? "live" : p.status === "In Progress" ? "wip" : "archived"}`}>{p.status}</span>
              </div>
              <p className="wl-tagline">{p.tagline}</p>
              <div className="wl-tech-row">
                {p.technologies.map((t) => (
                  <span key={t.label} className="wl-tech-tag">{t.label}</span>
                ))}
              </div>
            </div>
            <div className="wl-chevron">→</div>
          </Link>
        ))}
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
