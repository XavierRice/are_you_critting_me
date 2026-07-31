import { Mail, Sparkles } from 'lucide-react'
import hero from '../assets/AYCM_HERO.png'

function SignupSection() {
  return (
    <section className="signup-section" id="updates">
      <div className="signup-card">
        <div className="signup-copy">
          <div className="signup-logo">
            <img
              src={hero}
              alt="Are You Critting Me party artwork"
            />
          </div>

          <p className="section-kicker">Messages From Calderon</p>

          <h2>Join the Adventuring Party</h2>

          <p>
            Get new episode announcements, behind-the-scenes updates,
            live-show news, and other questionable messages from the Second Age.
          </p>

          <div className="signup-benefits">
            <span>
              <Sparkles size={17} aria-hidden="true" />
              New episode alerts
            </span>

            <span>
              <Mail size={17} aria-hidden="true" />
              Occasional campaign news
            </span>
          </div>
        </div>

        <form
          className="signup-form"
          name="calderon-updates"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input
            type="hidden"
            name="form-name"
            value="calderon-updates"
          />

          <p className="hidden-field">
            <label>
              Do not fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="signup-name">Your name</label>
          <input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Gary OnyxElm"
          />

          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="adventurer@example.com"
            required
          />

          <button type="submit">
            Join the Party
            <Mail size={18} aria-hidden="true" />
          </button>

          <p className="signup-note">
            No spam. No sending stones at dawn. Unsubscribe whenever you like.
          </p>
        </form>
      </div>
    </section>
  )
}

export default SignupSection