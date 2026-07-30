import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Episodes from './components/Episodes'

const party = [
  {
    role: 'The Storyteller',
    name: 'Dungeon Master',
    detail: 'Keeper of Calderon, chaos and consequences.',
  },
  {
    role: 'The Wild Card',
    name: 'Adventurer One',
    detail: 'A hero with excellent instincts and terrible timing.',
  },
  {
    role: 'The Schemer',
    name: 'Adventurer Two',
    detail: 'Always has a plan. The plan is usually the problem.',
  },
  {
    role: 'The Disaster',
    name: 'Adventurer Three',
    detail:
      'Armed with charm, courage and no sense of self-preservation.',
  },
  {
    role: 'The Voice of Reason',
    name: 'Adventurer Four',
    detail: 'Doing their best under increasingly unreasonable conditions.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />

        <section className="story section" id="story">
          <div>
            <p className="section-kicker">Calderon: Dawn of Chaos</p>
            <h2>The gods are gone. The jokes are not.</h2>
          </div>

          <div className="story-copy">
            <p>
              Welcome to the Second Age of Calderon. Years after the
              thousand-year war known as the Recreance—a conflict between the
              Gods and the Demon Lords—the Rift remains.
            </p>

            <p>
              Four unexpected strangers become bound together and set out to
              learn why the light of the four towers is dimming, while whispers
              of chaos spread across the land.
            </p>
          </div>
        </section>

        <Episodes />

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
                <div
                  className="portrait-placeholder"
                  aria-hidden="true"
                >
                  ✦
                </div>

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
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Spotify
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Apple Podcasts
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              YouTube
            </a>
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