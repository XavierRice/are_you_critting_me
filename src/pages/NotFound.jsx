import { Link } from "react-router-dom";
import { Home, Map, Sparkles } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow" />

      <section className="not-found-card">
        <p className="section-kicker">404 · Reality Not Found</p>

        <div className="not-found-icon">
          <Sparkles size={30} aria-hidden="true" />
        </div>

        <h1>You Have Fallen Through the Rift.</h1>

        <p className="not-found-copy">
          The path you followed does not appear on any known map of Calderon.
          The Dungeon Master insists this was intentional.
        </p>

        <div className="not-found-actions">
          <Link className="button primary" to="/">
            <Home size={17} aria-hidden="true" />
            Return to Calderon
          </Link>

          <Link className="button secondary" to="/#episodes">
            <Map size={17} aria-hidden="true" />
            Find the Adventures
          </Link>
        </div>

        <p className="not-found-joke">
          Gary has attempted a reboot. It did not help.
        </p>
      </section>
    </main>
  );
}

export default NotFound;