// C:\sea-home\src\features\home\components\FeaturedListings.jsx
import React, { useEffect, useState } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  ArrowRight,
  ChevronRight,
  X,
  Check,
} from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "OCEANFRONT",
    badgeClass: "badge-oceanfront",
    location: "Colombo 05, Havelock City",
    address: "Havelock City Tower B, Colombo 05, Sri Lanka",
    title: "Modern 2-Bedroom Panorama",
    beds: 2,
    baths: 2,
    sqft: "980",
    price: 390,
    lkr: "120,000",
    description:
      "A bright, modern apartment on a high floor with floor-to-ceiling windows and sweeping ocean views. The open-plan living area flows onto a private balcony.",
    features: [
      "Ocean view balcony",
      "Air conditioning in all rooms",
      "24-hour security",
      "Rooftop swimming pool",
      "Fully furnished",
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "HILL COUNTRY",
    badgeClass: "badge-hill",
    location: "Kandy Hills, Anniewatte",
    address: "Anniewatte Road, Kandy Hills, Kandy, Sri Lanka",
    title: "Colonial 3-Bedroom Veranda House",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    price: 310,
    lkr: "95,000",
    description:
      "A restored colonial-style house surrounded by hills and gardens. Wide verandas and original timber floors give it character.",
    features: [
      "Wraparound veranda",
      "Mountain and garden views",
      "Original timber flooring",
      "Large private garden",
      "Backup water tank",
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    badge: "SEA BREEZE",
    badgeClass: "badge-sea",
    location: "Mount Lavinia Beachside",
    address: "Beach Road, Mount Lavinia, Colombo, Sri Lanka",
    title: "Sea View 2-Bed Luxury Condo",
    beds: 2,
    baths: 2,
    sqft: "1,000",
    price: 420,
    lkr: "130,000",
    description:
      "A luxury condominium a short walk from the beach, with sea breezes through every room and a spacious master suite.",
    features: [
      "Direct sea view",
      "Master suite with walk-in wardrobe",
      "Gym and wellness centre",
      "Backup generator",
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "PRIVATE POOL",
    badgeClass: "badge-pool",
    location: "Negombo Coastal Strip",
    address: "Coastal Road, Negombo, Western Province, Sri Lanka",
    title: "Modern 3-Bedroom Beach Villa",
    beds: 3,
    baths: 3,
    sqft: "1,400",
    price: 420,
    lkr: "130,000",
    description:
      "A contemporary beach villa with a private pool and landscaped garden, just steps from the coastline.",
    features: [
      "Private swimming pool",
      "Landscaped garden",
      "Outdoor dining terrace",
      "Solar water heating",
      "Beach access",
    ],
  },
];

// Extra mock listings shown when "Explore all" is clicked
const moreProperties = [
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    badge: "CITY LIVING",
    badgeClass: "badge-oceanfront",
    location: "Colombo 07, Cinnamon Gardens",
    address: "Rosmead Place, Colombo 07, Sri Lanka",
    title: "Elegant 4-Bedroom Townhouse",
    beds: 4,
    baths: 3,
    sqft: "2,100",
    price: 540,
    lkr: "165,000",
    description:
      "A spacious townhouse on a quiet tree-lined street close to embassies and cafés. Two levels of living space with a rooftop terrace.",
    features: ["Rooftop terrace", "Two-car garage", "Home office", "Garden"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    badge: "SEA BREEZE",
    badgeClass: "badge-sea",
    location: "Bentota Riverside",
    address: "Galle Road, Bentota, Galle District, Sri Lanka",
    title: "Riverside 1-Bed Retreat",
    beds: 1,
    baths: 1,
    sqft: "650",
    price: 260,
    lkr: "80,000",
    description:
      "A calm, compact apartment overlooking the river with easy access to the beach. Ideal for couples or a relaxed weekend base.",
    features: ["River view", "Balcony", "Air conditioning", "Parking"],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    badge: "HILL COUNTRY",
    badgeClass: "badge-hill",
    location: "Ella, Badulla",
    address: "Main Street, Ella, Badulla District, Sri Lanka",
    title: "Mountain View Cottage",
    beds: 2,
    baths: 2,
    sqft: "1,150",
    price: 280,
    lkr: "86,000",
    description:
      "A cozy stone cottage with panoramic views of the valley and tea estates. Walking trails begin just outside the front gate.",
    features: ["Valley views", "Fireplace", "Hiking access", "Fibre internet"],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    badge: "PRIVATE POOL",
    badgeClass: "badge-pool",
    location: "Galle Fort Heritage",
    address: "Church Street, Galle Fort, Galle, Sri Lanka",
    title: "Heritage 2-Bed Courtyard Home",
    beds: 2,
    baths: 2,
    sqft: "1,300",
    price: 360,
    lkr: "110,000",
    description:
      "A restored Dutch-era home inside Galle Fort, with a private courtyard pool and original stone walls. Steps from the ramparts.",
    features: ["Private courtyard pool", "Original stonework", "Rooftop lounge", "Security"],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    badge: "OCEANFRONT",
    badgeClass: "badge-oceanfront",
    location: "Unawatuna Bay",
    address: "Beach Road, Unawatuna, Galle, Sri Lanka",
    title: "Bayview 3-Bed Modern Villa",
    beds: 3,
    baths: 3,
    sqft: "1,750",
    price: 480,
    lkr: "145,000",
    description:
      "A modern villa a few minutes from Unawatuna beach, with an infinity pool and a sunset deck overlooking the bay.",
    features: ["Infinity pool", "Sunset deck", "Chef's kitchen", "Staff quarters"],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    badge: "CITY LIVING",
    badgeClass: "badge-sea",
    location: "Colombo 03, Kollupitiya",
    address: "Galle Road, Colombo 03, Sri Lanka",
    title: "Luxury 3-Bed Sky Apartment",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    price: 450,
    lkr: "135,000",
    description:
      "A high-rise apartment with floor-to-ceiling glass and views across the city skyline. Includes access to a gym and lounge.",
    features: ["City skyline view", "Gym access", "Lounge", "Concierge"],
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    badge: "SEA BREEZE",
    badgeClass: "badge-sea",
    location: "Wadduwa Beachfront",
    address: "Coast Road, Wadduwa, Kalutara, Sri Lanka",
    title: "Beachfront Studio Loft",
    beds: 1,
    baths: 1,
    sqft: "520",
    price: 210,
    lkr: "65,000",
    description:
      "A bright open-plan loft steps from the sand, ideal for a short-term stay or a compact holiday home.",
    features: ["Beach access", "Open-plan layout", "Sea breeze", "Fully furnished"],
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    badge: "HILL COUNTRY",
    badgeClass: "badge-hill",
    location: "Nuwara Eliya, Hill Club Road",
    address: "Hill Club Road, Nuwara Eliya, Sri Lanka",
    title: "Cool-Climate 4-Bed Manor",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    price: 390,
    lkr: "120,000",
    description:
      "A spacious manor set in landscaped grounds, with a fireplace in every main room and cool mountain air year-round.",
    features: ["Fireplaces", "Landscaped grounds", "Large kitchen", "Double garage"],
  },
];

const PropertyModal = ({ property, onClose }) => {
  useEffect(() => {
    if (!property) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close details"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="modal-image">
          <img src={property.image} alt={property.title} />
          <span className={`property-badge ${property.badgeClass}`}>
            {property.badge}
          </span>
        </div>

        <div className="modal-body">
          <div className="property-location">
            <MapPin size={16} /> {property.location}
          </div>
          <h2 className="modal-title">{property.title}</h2>
          <p className="modal-address">{property.address}</p>

          <div className="modal-price-row">
            <div className="price">
              ${property.price} <span>/ mo</span>
            </div>
            <div className="price-lkr">LKR {property.lkr}</div>
          </div>

          <div className="modal-specs">
            <div>
              <BedDouble size={18} />
              <span>{property.beds} Beds</span>
            </div>
            <div>
              <Bath size={18} />
              <span>{property.baths} Baths</span>
            </div>
            <div>
              <Ruler size={18} />
              <span>{property.sqft} sq.ft</span>
            </div>
          </div>

          <h3 className="modal-section-title">About this property</h3>
          <p className="modal-description">{property.description}</p>

          <h3 className="modal-section-title">Features</h3>
          <ul className="modal-features">
            {property.features.map((feature) => (
              <li key={feature}>
                <Check size={16} /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeaturedListings = () => {
  const [liked, setLiked] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const allProperties = showAll ? [...properties, ...moreProperties] : properties;

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const closeModal = () => setSelectedProperty(null);

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
          <button
            type="button"
            className="link-strong explore-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show fewer listings" : "Explore all 1,420+ listings"}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="listings-grid">
          {allProperties.map((p, index) => (
            <article
              className={
                "property-card" + (index >= properties.length ? " fade-in" : "")
              }
              key={p.id}
            >
              <div className="property-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className={`property-badge ${p.badgeClass}`}>
                  {p.badge}
                </span>
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
                  <button
                    type="button"
                    className="details-link"
                    onClick={() => setSelectedProperty(p)}
                  >
                    Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAll && (
          <div className="show-less-wrap">
            <button
              type="button"
              className="show-less-btn"
              onClick={() => setShowAll(false)}
            >
              Show fewer listings
            </button>
          </div>
        )}
      </div>

      <PropertyModal property={selectedProperty} onClose={closeModal} />
    </section>
  );
};

export default FeaturedListings;