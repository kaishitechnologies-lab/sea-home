import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Locations", to: "/locations" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Why Us", to: "/why-us" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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
          <span className="navbar__brand">
            <strong>
              SeaHome<span>Lands</span>
            </strong>
            <small>Global Real Estate Agency for Foreigners</small>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

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
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}