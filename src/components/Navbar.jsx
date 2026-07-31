import logo from '../assets/AYCM_LOGO.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <Link
        className="brand"
        to="/"
        aria-label="Are You Critting Me home"
      >
        <img
          className="brand-logo"
          src={logo}
          alt=""
          aria-hidden="true"
        />

        <span>ARE YOU CRITTING ME!?</span>
      </Link>

      <nav aria-label="Main navigation">
        <a href="/#story">The Story</a>
        <a href="/#episodes">Episodes</a>
        <a href="/#party">The Party</a>
        <a href="/#listen">Listen</a>
        <Link to="/watch-and-support">Watch</Link>
      </nav>
    </header>
  )
}

export default Navbar