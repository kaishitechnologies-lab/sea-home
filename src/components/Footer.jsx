import { Link } from "react-router-dom";
import { MapPin, Building2 } from "lucide-react";
import "./Footer.css";

const columns = [
  {
    title: "PROPERTIES",
    links: [
      { label: "Colombo Condominiums", to: "/properties" },
      { label: "Galle Beachfront Villas", to: "/properties" },
      { label: "Kandy Hill Country Houses", to: "/properties" },
      { label: "Nomad Surf Bungalows", to: "/properties" },
      { label: "Commercial & Coworking", to: "/properties" },
    ],
  },
  {
    title: "EXPAT GUIDES",
    links: [
      { label: "Sri Lanka Foreign Lease Law", to: "/faq" },
      { label: "Digital Nomad Visa Guide", to: "/faq" },
      { label: "Escrow Deposit System", to: "/faq" },
      { label: "Banking & Remittances", to: "/faq" },
      { label: "Tokyo Desk Japanese FAQ", to: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
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
                  <Link to={l.to}>{l.label}</Link>
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
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms of Escrow</Link>
          <Link to="/contact">Legal Due Diligence</Link>
        </div>
      </div>
    </footer>
  );
}