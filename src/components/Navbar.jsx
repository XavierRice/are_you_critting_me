import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/AYCM_LOGO.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
          className="brand"
          to="/"
          aria-label="Are You Critting Me home"
          onClick={closeMenu}
        >
          <img
            className="brand-logo"
            src={logo}
            alt=""
            aria-hidden="true"
          />

          <span>ARE YOU CRITTING ME!?</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="/#story" onClick={closeMenu}>
            The Story
          </a>

          <a href="/#episodes" onClick={closeMenu}>
            Episodes
          </a>

          <a href="/#party" onClick={closeMenu}>
            The Party
          </a>

          <a href="/#listen" onClick={closeMenu}>
            Listen
          </a>

          <Link to="/watch-and-support" onClick={closeMenu}>
            Watch
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar