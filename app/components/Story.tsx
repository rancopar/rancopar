import { RanMark } from "./RanMark";

export default function Story() {
  return (
    <section className="page-section" id="story">
      <div className="story-grid">
        <div>
          <div className="story-mark-wrap">
            <RanMark width={120} height={144} label="RanCoPar mark" />
            <span className="story-corner caption">R · A · N</span>
          </div>
        </div>

        <div className="story-body">
          <h2 className="story-heading">
            Three people.<br /><em>One standard.</em>
          </h2>
          <p className="story-p">
            RanCoPar was built by three people who share a belief: that software built with care outlasts software built fast. The name carries all three — R, A, N — a constant reminder of what the work is for.
          </p>
          <p className="story-p">
            We are based in Kerala and work with clients across India. We keep the team small on purpose. Small means accountable, focused, and genuinely invested in every project we take on.
          </p>
        </div>
      </div>
    </section>
  );
}
