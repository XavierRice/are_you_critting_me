const episodes = [
  {
    number: '01',
    title: 'The Light Begins to Dim',
    description:
      'Four strangers awaken to a world where ancient protections are failing and chaos is beginning to whisper.',
  },
  {
    number: '02',
    title: 'Bondage, Bad Decisions & Breakfast',
    description:
      'The party attempts cooperation, discovers consequences, and proves that heroism is rarely dignified.',
  },
  {
    number: '03',
    title: 'A Terrible Plan, Beautifully Executed',
    description:
      'Calderon grows stranger as the group follows its first clue toward the darkening towers.',
  },
]

const party = [
  { role: 'The Storyteller', name: 'Dungeon Master', detail: 'Keeper of Calderon, chaos and consequences.' },
  { role: 'The Wild Card', name: 'Adventurer One', detail: 'A hero with excellent instincts and terrible timing.' },
  { role: 'The Schemer', name: 'Adventurer Two', detail: 'Always has a plan. The plan is usually the problem.' },
  { role: 'The Disaster', name: 'Adventurer Three', detail: 'Armed with charm, courage and no sense of self-preservation.' },
  { role: 'The Voice of Reason', name: 'Adventurer Four', detail: 'Doing their best under increasingly unreasonable conditions.' },
]

function App() {
  return (
    <div className="site-shell">
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

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="eyebrow">A D&amp;D Catastrophe</div>
          <h1>
            Are You
            <span>Critting Me!?</span>
          </h1>
          <p className="hero-copy">
            Four actors, storytellers and comedians enter the Second Age of
            Calderon. The towers are dimming. Chaos is whispering. Absolutely
            no one is behaving responsibly.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#listen">Roll for listening</a>
            <a className="button secondary" href="#story">Enter Calderon</a>
          </div>
          <p className="domain">areyoucrittingme.com</p>
        </section>

        <section className="story section" id="story">
          <div>
            <p className="section-kicker">Calderon: Dawn of Chaos</p>
            <h2>The gods are gone. The jokes are not.</h2>
          </div>
          <div className="story-copy">
            <p>
              Welcome to the Second Age of Calderon. Years after the thousand-year
              war known as the Recreance—a conflict between the Gods and the Demon
              Lords—the Rift remains.
            </p>
            <p>
              Four unexpected strangers become bound together and set out to learn
              why the light of the four towers is dimming, while whispers of chaos
              spread across the land.
            </p>
          </div>
        </section>

        <section className="section episodes" id="episodes">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Begin the campaign</p>
              <h2>Latest misadventures</h2>
            </div>
            <p>Replace these sample episodes with your real titles and links.</p>
          </div>
          <div className="episode-grid">
            {episodes.map((episode) => (
              <article className="episode-card" key={episode.number}>
                <span className="episode-number">Episode {episode.number}</span>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <a href="#listen">Listen to episode <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section party" id="party">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Meet the party</p>
              <h2>Heroes, allegedly</h2>
            </div>
            <p>Add cast photos, character names, classes and bios here.</p>
          </div>
          <div className="party-grid">
            {party.map((member) => (
              <article className="party-card" key={member.role}>
                <div className="portrait-placeholder" aria-hidden="true">✦</div>
                <p>{member.role}</p>
                <h3>{member.name}</h3>
                <span>{member.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="listen section" id="listen">
          <p className="section-kicker">Join the adventure</p>
          <h2>Roll initiative. Press play.</h2>
          <p>
            Add your Spotify, Apple Podcasts, YouTube or podcast-host links once
            the show is published.
          </p>
          <div className="listen-links">
            <a href="#" onClick={(event) => event.preventDefault()}>Spotify</a>
            <a href="#" onClick={(event) => event.preventDefault()}>Apple Podcasts</a>
            <a href="#" onClick={(event) => event.preventDefault()}>YouTube</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Are You Critting Me!?</p>
        <p>A D&amp;D catastrophe from the world of Calderon.</p>
      </footer>
    </div>
  )
}

export default App
