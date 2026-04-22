import { RanMark } from "./RanMark";

export default function Navbar() {
  return (
    <nav className="topbar">
      <a href="#top" className="nav-brand">
        <RanMark width={16} height={19} />
        <span className="nav-name">
          Ran<span className="dim">CoPar</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-text-link">Work</a>
        <a href="#story" className="nav-text-link">About</a>
        <a href="#contact" className="cta">Contact</a>
      </div>
    </nav>
  );
}
