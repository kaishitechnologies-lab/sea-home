import React from "react";
import "../home.css"; // Points to the CSS file you provided

const large = [
  {
    name: "Colombo Metropolis",
    price: "Avg $550/mo",
    info: "482 Homes • International Schools • High-Speed Fiber",
    image:
      "/clmb.jpg",
  },
  {
    name: "Galle & Southern Coast",
    price: "Avg $700/mo",
    info: "312 Homes • Expat Cafes • Historic Fortresses",
    image:
      "/images.jpeg",
  },
];

const small = [
  {
    name: "Galle Fort",
    info: "240 Homes • Golden Sands & Dining",
    image: "/galle.jpeg", // Ensure this exists in your /public folder
  },
  {
    name: "Kandy Hill Capital",
    info: "194 Homes • Cool Climate • Tea Estates",
    image:
      "/kandy.jpg",
  },
  {
    name: "Negombo",
    info: "165 Homes • 20 Min from Airport",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
  },
];

const Destinations = () => {
  return (
    <section className="destinations-section">
      <div className="container">
        <div className="destinations-head">
          <span className="eyebrow">DESTINATIONS</span>
          <h2 className="section-title">Explore Prime Sri Lankan Regions</h2>
          <p>
            Whether seeking metropolitan convenience, UNESCO heritage coastal
            living, or breezy tea plantation sanctuaries.
          </p>
        </div>

        <div className="dest-grid-large">
          {large.map((d) => (
            <div className="dest-card large" key={d.name}>
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-price">{d.price}</div>
              <div className="dest-info">
                <h3>{d.name}</h3>
                <p>{d.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dest-grid-small">
          {small.map((d) => (
            <div className="dest-card small" key={d.name}>
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-info">
                <h3>{d.name}</h3>
                <p>{d.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;