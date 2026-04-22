export default function Contact() {
  return (
    <div className="contact" id="contact">
      <span className="caption">Get in touch</span>
      <h2 className="serif-heading contact-head">
        Let's build<br /><em>something.</em>
      </h2>

      <a href="mailto:rancopar@gmail.com" className="contact-email">
        rancopar@gmail.com
      </a>

      <div className="contact-status">
        <span className="status-dot" />
        Available for new projects — 2026
      </div>

      <div className="contact-socials">
        <a href="https://github.com/rancopar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:rancopar@gmail.com">Email</a>
      </div>
    </div>
  );
}
