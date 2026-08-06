import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EpisodeCard from './EpisodeCard'
import { episodes } from '../data/episodes'

function Episodes() {
  const carouselRef = useRef(null)

  function scrollEpisodes(direction) {
    const carousel = carouselRef.current

    if (!carousel) return

    const firstCard = carousel.querySelector('.episode-card')
    const cardWidth = firstCard?.offsetWidth || 320
    const gap = 24

    carousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section className="section episodes" id="episodes">
      <div className="section-heading episode-heading">
        <div>
          <p className="section-kicker">
            Begin the campaign
          </p>

          <h2>Latest misadventures</h2>
        </div>

        <div
          className="episode-controls"
          aria-label="Episode carousel controls"
        >
          <button
            type="button"
            onClick={() => scrollEpisodes(-1)}
            aria-label="Previous episode"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scrollEpisodes(1)}
            aria-label="Next episode"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="episode-carousel"
        ref={carouselRef}
        tabIndex={0}
        aria-label="Episode list"
      >
        {episodes.map((episode) => (
          <EpisodeCard
            key={`${episode.season}-${episode.number}`}
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