import logo from '../assets/AYCM_LOGO.png'

function Navbar() {
  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        aria-label="Are You Critting Me home"
      >
        <img
          className="brand-logo"
          src={logo}
          alt=""
          aria-hidden="true"
        />

        <span>ARE YOU CRITTING ME!?</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#story">The Story</a>
        <a href="#episodes">Episodes</a>
        <a href="#party">The Party</a>
        <a href="#listen">Listen</a>
      </nav>
    </header>
  )
}

export default Navbar