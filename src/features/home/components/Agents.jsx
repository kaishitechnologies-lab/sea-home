import React from "react";
import {
  Check,
  BadgeCheck,
  MapPin,
  Languages,
  Star,
  Mail,
  ArrowRight,
  Headset,
  ChevronRight,
} from "lucide-react";

const agents = [
  {
    name: "Rohan De Silva",
    role: "Senior Coastal & Villa Specialist",
    rating: "4.9",
    reviews: 48,
    leases: 48,
    listings: 34,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    tags: ["Licensed #LK-882", "Tokyo Liaison"],
    location: "Galle, Weligama, Mirissa",
    languages: "English, Sinhala",
  },
  {
    name: "Chaminda Herath",
    role: "Colombo Relocation Director",
    rating: "5.0",
    reviews: 62,
    leases: 62,
    listings: 28,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    tags: ["Embassy Specialist", "Bilingual Desk"],
    location: "Colombo 03, 07, Port City",
    languages: "日本語, English",
  },
  {
    name: "Ananya Perera",
    role: "Hill Country & Heritage Lead",
    rating: "4.95",
    reviews: 39,
    leases: 39,
    listings: 19,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    tags: ["Tea Estates Lead", "Bim Saviya Title"],
    location: "Kandy, Nuwara Eliya, Ella",
    languages: "English, Sinhala",
  },
  {
    name: "Sarah Jenkins",
    role: "Nomad Hubs & Remote Leases",
    rating: "4.9",
    reviews: 51,
    leases: 51,
    listings: 26,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    tags: ["Surf Hub Concierge", "Remote Leases"],
    location: "Weligama, Ahangama, Hiriketiya",
    languages: "English, Français",
  },
];

const Agents = () => {
  return (
    <section className="agents-section">
      {/* Added custom container class to match destination width */}
      <div className="container agents-container">
        <div className="agents-head">
          <div className="agents-head-top">
            <span className="eyebrow">
              EXPAT SPECIALISTS <span className="dot" />
            </span>
            <h2 className="section-title">Meet Our Dedicated Property Agents</h2>
          </div>
          <div className="agents-head-bottom">
            <p className="section-desc">
              Bilingual licensed professionals specializing in Colombo
              embassies, southern beach villas, and hill country estates with
              verified legal diligence.
            </p>
            <a href="#" className="link-strong">
              All Advisory Agents <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="agents-grid">
          {agents.map((a) => (
            <article className="agent-card" key={a.name}>
              <div className="agent-top">
                <div className="agent-avatar-wrap">
                  <img
                    className="agent-avatar"
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                  />
                  <span className="agent-verified">
                    <Check size={10} strokeWidth={4} />
                  </span>
                </div>
                <div className="agent-rating">
                  <div className="agent-stars">
                    <Star size={14} fill="currentColor" /> {a.rating}{" "}
                    <small>({a.reviews})</small>
                  </div>
                  <div className="agent-leases">{a.leases} Leases Signed</div>
                </div>
              </div>

              <h3 className="agent-name">{a.name}</h3>
              <p className="agent-role">{a.role}</p>

              <div className="agent-tags">
                <span className="agent-tag primary">
                  <BadgeCheck size={13} /> {a.tags[0]}
                </span>
                <span className="agent-tag">{a.tags[1]}</span>
              </div>

              <div className="agent-meta">
                <div>
                  <MapPin size={14} /> {a.location}
                </div>
                <div>
                  <Languages size={14} /> {a.languages}
                </div>
              </div>

              <div className="agent-footer">
                <a href="#" className="view-link">
                  View Listings ({a.listings})
                </a>
                <button type="button" className="contact-btn">
                  <Mail size={13} /> Contact
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="bespoke">
          <div className="bespoke-left">
            <div className="bespoke-icon">
              <Headset size={20} />
            </div>
            <div>
              <h4>Looking for a bespoke agent match?</h4>
              <p>
                We connect digital nomads and expat families with bilingual
                legal conveyancers within 24 hours.
              </p>
            </div>
          </div>
          <a href="#" className="bespoke-btn">
            Connect with Roppongi or Colombo Desk <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agents;