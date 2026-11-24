import { Link } from "react-router-dom";
import { MapPin, Building2 } from "lucide-react";
import "./Footer.css";

const columns = [
  {
    title: "EXPLORE",
    links: [
      { label: "Home", to: "/home" },
      { label: "About Us", to: "/about-us" },
      { label: "Invest", to: "/property?tab=invest" },
      { label: "Rent", to: "/property?tab=rentals" },
    ],
  },
  {
    title: "PROPERTIES",
    links: [
      { label: "Agencies", to: "/agencies" },
      { label: "Locations", to: "/locations" },
      { label: "Rental", to: "/property?tab=rentals" },
      { label: "Buy", to: "/property?tab=buy" },
    ],
  },
];

export default function Footer() {
  
  // Helper function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds a smooth scrolling animation
    });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          {/* Added onClick to Logo as well */}
          <Link to="/" className="footer__logo" onClick={scrollToTop}>
            <div className="footer__logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="footer__brand-text">
              <strong>SeaHome Lands</strong>
              <small>SRI LANKA REAL ESTATE</small>
            </div>
          </Link>
          <p>
            Sri Lanka's dedicated relocation and real estate agency for
            foreigners, expats, and digital nomads. Secure leases, verified
            deeds, and bilingual contracts.
          </p>
          <div className="footer__locations">
            <span>
              <MapPin size={14} /> Colombo 03, Sri Lanka
            </span>
            <span className="dot">•</span>
            <span>
              <Building2 size={14} /> Shibuya, Tokyo, Japan
            </span>
          </div>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {/* Added onClick here to scroll to top */}
                  <Link to={l.to} onClick={scrollToTop}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Column */}
        <div className="footer__newsletter">
          <h4>STAY UPDATED</h4>
          <p>
            Receive vetted new listings and Sri Lankan market reports.
          </p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email..." required />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <span>
          © 2026 Kaishi innovation. All rights reserved. Registered real estate license SL-RE-4921.
        </span>
        <div className="footer__bottom-links">
          <Link to="/contact" onClick={scrollToTop}>Privacy Policy</Link>
          <Link to="/contact" onClick={scrollToTop}>Terms of Escrow</Link>
          <Link to="/contact" onClick={scrollToTop}>Legal Due Diligence</Link>
        </div>
      </div>
    </footer>
  );
}