import { Link } from "react-router-dom";
import { Share2, Camera, Briefcase, Play, Globe } from "lucide-react";
import "./Footer.css";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About SeaHome", to: "/why-us" },
      { label: "Our Legal Team", to: "/why-us" },
      { label: "Foreign Ownership Law", to: "/faq" },
      { label: "Careers & Partners", to: "/contact" },
      { label: "Press & Media", to: "/contact" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "Beachfront Villas", to: "/properties" },
      { label: "Colombo Luxury Condos", to: "/properties" },
      { label: "Tea Estate Bungalows", to: "/properties" },
      { label: "Development Land", to: "/properties" },
      { label: "Commercial Leases", to: "/properties" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Galle & South Coast", to: "/locations" },
      { label: "Colombo & Greater West", to: "/locations" },
      { label: "Kandy & Central Hills", to: "/locations" },
      { label: "Ahangama & Weligama", to: "/locations" },
      { label: "Trincomalee & East", to: "/locations" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Buyer Guarantee", to: "/faq" },
      { label: "Foreign Remittance FAQ", to: "/faq" },
      { label: "Title Due Diligence", to: "/faq" },
      { label: "Tokyo Advisory Desk", to: "/contact" },
      { label: "Contact Consular Support", to: "/contact" },
    ],
  },
];

const socials = [Share2, Camera, Briefcase, Play];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 4 7 12l8 8"
                stroke="#0a3d91"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 8l-6 4 6 4"
                stroke="#f26b1d"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>SeaHome Lands</span>
          </Link>
          <p>
            Global Real Estate Agency for Foreigners. Premium beach villas, tea
            country retreats, and urban investments across paradise.
          </p>
          <span className="footer__region">
            <Globe size={11} /> Sri Lanka | Japan
          </span>
          <div className="footer__social">
            {socials.map((Icon, i) => (
              <a href="#" key={i} aria-label="social link">
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>

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
      </div>

      <div className="footer__bottom">
        <span>© 2026 kaishi innovations. All rights reserved.</span>
        <div>
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms of Service</Link>
          <Link to="/contact">Investor Compliance</Link>
        </div>
      </div>
    </footer>
  );
}