function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Are You Critting Me home">
        <span className="die">20</span>
        <span>AYCM!?</span>
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