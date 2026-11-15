import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "James Carter",
    flag: "🇬🇧",
    country: "United Kingdom",
    type: "Colombo 03 Penthouse Lease",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Relocating my tech work from London to Sri Lanka was effortless with SeaHome. Verified lease, fiber connection tested on day one, and no shady broker markups. An absolute 10/10 service.",
    stay: "Stayed 14 months",
  },
  {
    name: "Maria Fernandez",
    flag: "🇪🇸",
    country: "Spain",
    type: "Galle Coastal Villa Lease",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "As an expat surfing and running my design agency, dealing with local legal leases was intimidating. SeaHome's bilingual contracts and escrow payment handled everything cleanly.",
    stay: "Stayed 8 months",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container agents-container">
        
        {/* Header contains ONLY the title now */}
        <div className="testimonials-head">
          <div className="testimonials-title-wrap">
            <span className="eyebrow">CLIENT STORIES</span>
            <h2 className="section-title">Trusted by 600+ Global Residents</h2>
          </div>
        </div>

        <div className="testimonials-grid">
          {/* Left Column: First Card */}
          <div className="left-column">
            {reviews.slice(0, 1).map((r) => (
              <div className="testimonial-card" key={r.name}>
                <div className="reviewer">
                  <img className="reviewer-avatar" src={r.image} alt={r.name} loading="lazy" />
                  <div>
                    <h4 className="reviewer-name">
                      {r.name}
                      <span>{r.flag} {r.country}</span>
                    </h4>
                    <p className="reviewer-type">{r.type}</p>
                  </div>
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-footer">
                  <span>Verified Tenant</span>
                  <span>{r.stay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Second Card + Rating Line below it */}
          <div className="right-column">
            {reviews.slice(1, 2).map((r) => (
              <div className="testimonial-card" key={r.name}>
                <div className="reviewer">
                  <img className="reviewer-avatar" src={r.image} alt={r.name} loading="lazy" />
                  <div>
                    <h4 className="reviewer-name">
                      {r.name}
                      <span>{r.flag} {r.country}</span>
                    </h4>
                    <p className="reviewer-type">{r.type}</p>
                  </div>
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-footer">
                  <span>Verified Tenant</span>
                  <span>{r.stay}</span>
                </div>
              </div>
            ))}

            {/* Rating Line aligned to the right, below the second card */}
            <div className="rating-line-bottom">
              <span>4.9 / 5.0 Average Rating</span>
              <span className="stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;