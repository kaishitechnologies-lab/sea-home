import React from "react";
import { ArrowRight, MessageSquareText, SearchCheck } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="cta-wrap">
      {/* Using agents-container to match the width of the sections above */}
      <div className="container agents-container">
        <div className="footer-cta">
          <div className="cta-content">
            <span className="cta-pill">YOUR PARADISE RELOCATION DESK</span>
            <h2>Your new home in paradise awaits you</h2>
            <p>
              Let SeaHome Lands guide you to the perfect verified rental home
              across Sri Lanka. Experience hassle-free viewings, airport
              pickups, and peace of mind.
            </p>
            <div className="cta-buttons">
              <button type="button" className="btn-white">
                Browse All Properties <ArrowRight size={20} />
              </button>
              <button type="button" className="btn-glass">
                <MessageSquareText size={20} /> Speak with Relocation Specialist
              </button>
            </div>
          </div>

          <div className="cta-box">
            <div className="cta-box-icon">
              <SearchCheck size={38} />
            </div>
            <h3>Need Bespoke Search?</h3>
            <p>
              Tell us your budget and lease duration. We will scout unlisted
              off-market villas for your arrival.
            </p>
            <button type="button">Submit Relocation Request</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;