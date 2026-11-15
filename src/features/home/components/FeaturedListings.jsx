import React, { useState } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "OCEANFRONT",
    badgeClass: "badge-oceanfront",
    location: "Colombo 05, Havelock City",
    title: "Modern 2-Bedroom Panorama",
    beds: 2,
    baths: 2,
    sqft: "980",
    price: 390,
    lkr: "120,000",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "HILL COUNTRY",
    badgeClass: "badge-hill",
    location: "Kandy Hills, Anniewatte",
    title: "Colonial 3-Bedroom Veranda...",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    price: 310,
    lkr: "95,000",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    badge: "SEA BREEZE",
    badgeClass: "badge-sea",
    location: "Mount Lavinia Beachside",
    title: "Sea View 2-Bed Luxury Condo",
    beds: 2,
    baths: 2,
    sqft: "1,000",
    price: 420,
    lkr: "130,000",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "PRIVATE POOL",
    badgeClass: "badge-pool",
    location: "Negombo Coastal Strip",
    title: "Modern 3-Bedroom Beach Villa",
    beds: 3,
    baths: 3,
    sqft: "1,400",
    price: 420,
    lkr: "130,000",
  },
];

const FeaturedListings = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="listings-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">
              Curated Selection <span className="dot" />
            </span>
            <h2 className="section-title">Featured Apartments in Japan</h2>
          </div>
          <a href="#" className="link-strong">
            Explore all 1,420+ listings <ArrowRight size={18} />
          </a>
        </div>

        <div className="listings-grid">
          {properties.map((p) => (
            <article className="property-card" key={p.id}>
              <div className="property-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className={`property-badge ${p.badgeClass}`}>{p.badge}</span>
                <button
                  type="button"
                  aria-label="Save property"
                  className={"heart-btn" + (liked[p.id] ? " liked" : "")}
                  onClick={() => toggleLike(p.id)}
                >
                  <Heart size={20} />
                </button>
              </div>

              <div className="property-body">
                <div className="property-location">
                  <MapPin size={16} /> {p.location}
                </div>
                <h3 className="property-title">{p.title}</h3>

                <div className="property-specs">
                  <span>
                    <BedDouble size={16} /> {p.beds} Beds
                  </span>
                  <span>
                    <Bath size={16} /> {p.baths} Baths
                  </span>
                  <span>
                    <Ruler size={16} /> {p.sqft} sq.ft
                  </span>
                </div>

                <div className="property-footer">
                  <div>
                    <div className="price">
                      ${p.price} <span>/ mo</span>
                    </div>
                    <div className="price-lkr">LKR {p.lkr}</div>
                  </div>
                  <a href="#" className="details-link">
                    Details <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;