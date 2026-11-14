import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Rentals", to: "/rentals" },
  { label: "Buy", to: "/buy" },
  { label: "Invest", to: "/invest" },
  { label: "Countries", to: "/countries", hasDropdown: true },
  { label: "Agencies", to: "/agencies" },
  { label: "Locations", to: "/locations" },
  { label: "About Us", to: "/about-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo Section */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <div className="navbar__logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="navbar__brand">
            <strong>SeaHome Net</strong>
            <small>GLOBAL REAL ESTATE</small>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Main Navigation */}
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " active" : "")
              }
            >
              {l.label}
              {l.hasDropdown && (
                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className={`navbar__actions ${open ? "is-open" : ""}`}>
          {/* Currency Toggle */}
          <div className="navbar__toggle-group">
            <button className="toggle-btn active">USD</button>
            <button className="toggle-btn">LKR</button>
          </div>

          {/* Language Toggle */}
          <div className="navbar__toggle-group lang-group">
            <button className="toggle-btn active">EN</button>
            <span className="toggle-divider">|</span>
            <button className="toggle-btn text-btn">日本語</button>
          </div>

          {/* Logout Button */}
          <button className="navbar__logout-btn">
            LOG OUT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}