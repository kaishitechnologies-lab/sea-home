import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, SearchCheck } from "lucide-react";

export default function RelocationBanner() {
  return (
    <section className="reloc">
      <div className="reloc__left">
        <span className="reloc__tag">Your Paradise Relocation Desk</span>
        <h2>
          Your New Home in Paradise Awaits <br /> You
        </h2>
        <p>
          Let SeaHome Lands guide you to the perfect verified rental home across
          Sri Lanka. Experience hassle-free viewings, airport pickups, and
          peace of mind.
        </p>

        <div className="reloc__btns">
          <Link to="/properties" className="reloc__btn reloc__btn--white">
            Browse All Properties <ArrowRight size={13} />
          </Link>
          <Link to="/contact" className="reloc__btn reloc__btn--ghost">
            <MessageSquare size={13} /> Speak with Relocation Specialist
          </Link>
        </div>
      </div>

      <div className="reloc__card">
        <span className="reloc__card-icon">
          <SearchCheck size={20} />
        </span>
        <h3>Need Bespoke Search?</h3>
        <p>
          Tell us your budget and lease duration. We will scout unlisted
          off-market villas for your arrival.
        </p>
        <button type="button">Submit Relocation Request</button>
      </div>
    </section>
  );
}
