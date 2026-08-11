import { Link } from "react-router-dom";
import { Mail, Sparkles } from "lucide-react";
import logo from "../assets/AYCM_LOGO.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="footer-logo"
              />

              <div>
                <strong>Are You Critting Me!?</strong>
                <span>A D&amp;D Catastrophe</span>
              </div>
            </Link>

            <p>
              Four questionable adventurers enter the Second Age of Calderon.
              Poor decisions should be expected.
            </p>
          </div>

          <div className="footer-nav-group">
            <p className="footer-heading">Explore</p>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/#story">Story</a>
              <a href="/#episodes">Episodes</a>
              <a href="/#party">The Party</a>
            </nav>
          </div>

          <div className="footer-nav-group">
            <p className="footer-heading">Adventure</p>

            <nav className="footer-links" aria-label="More links">
              <Link to="/watch-and-support">Watch &amp; Support</Link>
              <Link to="/apothecary">Apothecary</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-cta">
            <div className="footer-cta-icon">
              <Sparkles size={20} aria-hidden="true" />
            </div>

            <p className="footer-heading">Messages From Calderon</p>

            <p>
              Episode announcements, campaign news, and questionable
              correspondence from the Second Age.
            </p>

            <Link
              className="footer-join-button"
              to="/watch-and-support#updates"
            >
              <Mail size={16} aria-hidden="true" />
              Join the Party
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Are You Critting Me!?
          </p>

          <p className="footer-signoff">
            Broadcasting questionable decisions from Calderon.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;