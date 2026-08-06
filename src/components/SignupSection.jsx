import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import hero from "../assets/AYCM_HERO.png";

const initialForm = {
  name: "",
  email: "",
  company: "",
};

function SignupSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    state: "idle",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      state: "submitting",
      message: "Joining the party…",
    });

    try {
      const response = await fetch(
        "/.netlify/functions/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We could not complete your signup."
        );
      }

      setForm(initialForm);

      setStatus({
        state: "success",
        message: "Welcome to the adventuring party!",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

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

          <p className="section-kicker">
            Messages From Calderon
          </p>

          <h2>Join the Adventuring Party</h2>

          <p>
            Get new episode announcements, behind-the-scenes
            updates, live-show news, and other questionable
            messages from the Second Age.
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
          onSubmit={handleSubmit}
        >
          <label htmlFor="signup-name">
            Your name
          </label>

          <input
            id="signup-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Gary OnyxElm"
            autoComplete="name"
            maxLength={100}
          />

          <label htmlFor="signup-email">
            Email address
          </label>

          <input
            id="signup-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="adventurer@example.com"
            autoComplete="email"
            maxLength={254}
            required
          />

          <label
            className="hidden-field"
            aria-hidden="true"
          >
            Company
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Joining…" : "Join the Party"}
            <Mail size={18} aria-hidden="true" />
          </button>

          <p
            className={`signup-status signup-status--${status.state}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>

          <p className="signup-note">
            By joining, you agree to receive occasional show
            announcements and promotional messages. No spam.
            Unsubscribe whenever you like.
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignupSection;