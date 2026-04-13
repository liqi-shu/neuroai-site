import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container footer">
        <div>
          <p className="footer-brand">NeuroAI LLC</p>
          <p className="footer-muted">
            AI-powered software for neurology, healthcare, and research knowledge
            delivery.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/support">Support</Link>
        </div>

        <div>
          <p className="footer-muted">Contact</p>
          <a href="mailto:founder@neuroai.health">founder@neuroai.health</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
