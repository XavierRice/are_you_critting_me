import { Link, useLocation } from "react-router-dom";
import {
  ScrollText,
  Dices,
  Home,
} from "lucide-react";

function NpcSuccess() {
  const location = useLocation();

  const npcName =
    location.state?.npcName ||
    "Your citizen";

  return (
    <main
      id="main-content"
      className="npc-success-page"
    >
      <section className="npc-success-card">

        <div className="npc-success-icon">
          <ScrollText
            size={34}
            aria-hidden="true"
          />
        </div>

        <p className="section-kicker">
          Calderon Census
        </p>

        <h1>Citizen Registered</h1>

        <p className="npc-success-lead">
          The Royal Census Office has
          reluctantly accepted{" "}
          <strong>{npcName}</strong> into
          the official records of Calderon.
        </p>

        <div className="npc-success-status">
          <span>Census Status</span>
          <strong>Submitted for Review</strong>
        </div>

        <p>
          Their file now awaits review.
          Should fate—or the Dungeon
          Master—take an interest, they
          may someday find themselves
          wandering into Cladron. Player enters at their own risk.
        </p>

        <div className="npc-success-actions">

          <Link
            className="button primary"
            to="/npc-generator"
          >
            <Dices
              size={17}
              aria-hidden="true"
            />
            Create Another Citizen
          </Link>

          <Link
            className="button secondary"
            to="/"
          >
            <Home
              size={17}
              aria-hidden="true"
            />
            Return to Calderon
          </Link>

        </div>

      </section>
    </main>
  );
}

export default NpcSuccess;