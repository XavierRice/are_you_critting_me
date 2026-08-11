import { Link } from "react-router-dom";
import { Mail, Play } from "lucide-react";

function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Quick actions">
      <Link
        className="mobile-cta-primary"
        to="/watch-and-support#updates"
      >
        <Mail size={16} aria-hidden="true" />
        Join the Party
      </Link>

      <a
        className="mobile-cta-secondary"
        href="/#episodes"
      >
        <Play size={15} aria-hidden="true" />
        Episodes
      </a>
    </div>
  );
}

export default MobileCTA;