import EpisodeCard from './EpisodeCard'
import { episodes } from '../data/episodes'

function Episodes() {
  return (
    <section className="section episodes" id="episodes">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Begin the campaign</p>
          <h2>Latest misadventures</h2>
        </div>

        <p>To Replace with episodes titles and links.</p>
      </div>

      <div className="episode-grid">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.number}
            number={episode.number}
            title={episode.title}
            description={episode.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Episodes