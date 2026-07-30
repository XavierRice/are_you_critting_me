function EpisodeCard({ number, title, description }) {
  return (
    <article className="episode-card">
      <span className="episode-number">Episode {number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href="#listen">
        Listen to episode <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default EpisodeCard