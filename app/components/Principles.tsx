const principles = [
  {
    num: "i.",
    title: "Clarity over cleverness",
    body: "Code that reads clearly is code that survives. We write for the next developer, not to impress the current one.",
  },
  {
    num: "ii.",
    title: "Design is not decoration",
    body: "Every spacing decision, type choice, and colour carries intent. We treat design as problem-solving, not dressing.",
  },
  {
    num: "iii.",
    title: "Partnership, not service",
    body: "We work with clients, not for them. That means honest feedback, real conversations, and shared ownership of outcomes.",
  },
];

export default function Principles() {
  return (
    <section className="page-section">
      <div className="section-header">
        <h2 className="serif-heading" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          How we <em>work</em>.
        </h2>
        <p className="section-sub">
          Three principles that guide every decision we make — from architecture to client conversations.
        </p>
      </div>

      <div className="principles-grid">
        {principles.map((p) => (
          <div key={p.num} className="principle">
            <span className="principle-num">{p.num}</span>
            <div className="principle-title">{p.title}</div>
            <p className="principle-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
