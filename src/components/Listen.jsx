import listenArtwork from '../assets/AYCM_HERO.png'

function Listen() {
  function preventPlaceholderLink(event) {
    event.preventDefault()
  }

  return (
    <section className="listen section" id="listen">
      <p className="section-kicker">Join the adventure</p>

      <img
        className="listen-artwork"
        src={listenArtwork}
        alt="Are You Critting Me podcast artwork"
      />

      <h2>Roll initiative. Press play.</h2>

      <p>
        Add your Spotify, Apple Podcasts, YouTube or podcast-host links once
        the show is published.
      </p>

      <div className="listen-links">
        <a href="#" onClick={preventPlaceholderLink}>
          Spotify
        </a>

        <a href="#" onClick={preventPlaceholderLink}>
          Apple Podcasts
        </a>

        <a href="#" onClick={preventPlaceholderLink}>
          YouTube
        </a>
      </div>
    </section>
  )
}

export default Listen