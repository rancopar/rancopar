import { RanMark } from "./RanMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-foot">
      <div className="foot-left">
        <RanMark width={14} height={17} />
        <span className="caption">RanCoPar</span>
      </div>
      <span className="caption">© {year} — Ran Coding Partner, Kerala</span>
      <div className="foot-right">
        <a href="https://github.com/rancopar" target="_blank" rel="noopener noreferrer" className="caption foot-link">GitHub</a>
        <a href="mailto:rancopar@gmail.com" className="caption foot-link">Email</a>
      </div>
    </footer>
  );
}
