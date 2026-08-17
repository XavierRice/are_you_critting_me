import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Play,
  Mail,
} from "lucide-react";

import logo from "../assets/AYCM_LOGO.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-shell">
        <Link
          className="navbar-brand"
          to="/"
          aria-label="Are You Critting Me home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
          />

          <span className="navbar-brand-copy">
            <strong>Are You Critting Me!?</strong>
            <small>A D&amp;D Catastrophe</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label="Main navigation"
        >
          <a href="/#story" onClick={closeMenu}>
            Story
          </a>

          <a href="/#episodes" onClick={closeMenu}>
            Episodes
          </a>

          <a href="/#party" onClick={closeMenu}>
            Party
          </a>

          <Link
            className="nav-feature-link"
            to="/watch-and-support"
            onClick={closeMenu}
          >
            <Play size={15} aria-hidden="true" />
            Watch
          </Link>

          <Link to="/apothecary">Apothecary</Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
          
          <Link
            className="nav-join-link"
            //  to="/watch-and-support#updates"
            to="/calderon-generator"
            onClick={closeMenu}
            >

            <Mail size={15} aria-hidden="true" />
            Join the Party
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;