import { RanMark } from "./RanMark";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-corner hero-corner-tl caption">RanCoPar · Est. 2026</div>
      <div className="hero-corner hero-corner-tr caption">Ran Coding Partner</div>
      <div className="hero-corner hero-corner-bl caption">R · A · N</div>
      <div className="hero-corner hero-corner-br caption">Index ↓</div>

      <div className="hero-content">
        <RanMark width={64} height={77} label="RanCoPar" />

        <div className="hero-eyebrow">Developer Partnership</div>

        <h1 className="serif-heading hero-headline">
          Software,<br />built in <em>partnership</em>.
        </h1>

        <p className="hero-sub">
          A small, focused team building web products that last. We work closely with founders and businesses to deliver applications that are fast, clean, and built to grow.
        </p>

        <div className="hero-cta-row">
          <a href="#work" className="btn btn-primary">
            See our work <span className="arr">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
