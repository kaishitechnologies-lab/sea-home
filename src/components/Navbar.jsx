import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Using a CSS class to ensure strict sizing
const FlagLK = () => <img src="/Sri_Lanka.svg.webp" alt="" className="country-flag" />;
const FlagJP = () => <img src="/japan.jpeg" alt="" className="country-flag" />;

const links = [
  { label: "Home", to: "/home" },
  { label: "Property", to: "/property" },
  { label: "Agencies", to: "/agencies" },
  { label: "Locations", to: "/locations" },
];

const countries = [
  { id: "srilanka", name: "Sri Lanka", Flag: FlagLK },
  { id: "japan", name: "Japan", Flag: FlagJP },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("srilanka");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const current =
    countries.find((c) => c.id === selectedCountry) || countries[0];

  // Close country dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAuthClick = () => {
    setOpen(false);
    navigate("/auth");
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo Section */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <div className="navbar__logo-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Wrapper for mobile menu */}
        <div className={`navbar__mobile-wrapper ${open ? "is-open" : ""}`}>
          {/* Main Navigation */}
          <nav className="navbar__links">
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

          {/* Right Side Actions */}
          <div className="navbar__actions">
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

            {/* COUNTRY DROPDOWN */}
            <div className="navbar__country-dropdown-wrapper" ref={dropdownRef}>
              <button
                type="button"
                className="navbar__country-trigger"
                onClick={() => setCountryOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={countryOpen}
              >
                <current.Flag />
                <span>{current.name}</span>
                <svg
                  className={`chevron-icon ${countryOpen ? "is-open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {countryOpen && (
                <div className="navbar__country-menu" role="listbox">
                  {countries.map(({ id, name, Flag }) => (
                    <button
                      key={id}
                      type="button"
                      role="option"
                      aria-selected={selectedCountry === id}
                      className={`navbar__country-item ${
                        selectedCountry === id ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCountry(id);
                        setCountryOpen(false);
                      }}
                    >
                      <Flag />
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button className="navbar__logout-btn" onClick={handleAuthClick}>
              LOG OUT
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}