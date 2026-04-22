export default function Manifesto() {
  return (
    <div className="manifesto">
      <span className="manifesto-tick caption">§ Craft</span>
      <div className="manifesto-inner">
        <span className="caption">Our position</span>
        <h2 className="manifesto-head">
          Ship less.<br /><em>Mean more.</em>
        </h2>
        <div className="manifesto-body">
          <p className="manifesto-p">
            We do not chase trends. We build software that holds up — a year later, five years later. The work is only finished when it feels inevitable, not just functional.
          </p>
          <p className="manifesto-p">
            Small teams move fast and stay accountable. Every line of code we write is something we can explain, maintain, and stand behind. That is the RanCoPar standard.
          </p>
        </div>
      </div>
    </div>
  );
}
