import { useState } from 'react'
import { RotateCw } from 'lucide-react'

function PartyCard({
  actor,
  role,
  name,
  detail,
  image,
  actorImage,
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleCard = () => {
    setIsFlipped((current) => !current)
  }

  return (
    <article className="party-card">
      <button
        className="party-flip-button"
        type="button"
        onClick={toggleCard}
        aria-pressed={isFlipped}
        aria-label={
          isFlipped
            ? `Show ${name}, played by ${actor}`
            : `Show actor ${actor}, who plays ${name}`
        }
      >
        <span
          className={`party-flip-inner ${
            isFlipped ? 'is-flipped' : ''
          }`}
        >
          <span className="party-flip-face party-flip-front">
            <img
              className="party-image"
              src={image}
              alt={`${name}, played by ${actor}`}
            />

            <span className="flip-hint">
              <RotateCw size={10} aria-hidden="true" />
               Actor
            </span>
          </span>

          <span className="party-flip-face party-flip-back">
            <img
              className="party-image"
              src={actorImage}
              alt={actor}
            />

            <span className="flip-hint">
              <RotateCw size={12} aria-hidden="true" />
              Character
            </span>
          </span>
        </span>
      </button>

      <p>{role}</p>
      <h3>{name}</h3>
      <span className="cast-name">Played by {actor}</span>
      <span>{detail}</span>
    </article>
  )
}

export default PartyCard
