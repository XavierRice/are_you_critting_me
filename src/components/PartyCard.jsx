
function PartyCard({ actor, role, name, detail, image }) {
  return (
    <article className="party-card">
      <img
        className="party-image"
        src={image}
        alt={`${name}, played by ${actor}`}
      />

      <p>{role}</p>
      <h3>{name}</h3>
      <span className="cast-name">Played by {actor}</span>
      <span>{detail}</span>
    </article>
  )
}

export default PartyCard