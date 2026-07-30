function PartyCard({ actor, role, name, detail }) {
  return (
    <article className="party-card">
      <div className="portrait-placeholder" aria-hidden="true">
        ✦
      </div>

      <p>{role}</p>
      <h3>{name}</h3>
      <span className="cast-name">Played by {actor}</span>
      <span>{detail}</span>
    </article>
  )
}

export default PartyCard