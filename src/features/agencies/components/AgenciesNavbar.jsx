import { useState } from "react";
import { Home, ChevronDown } from "lucide-react";

const links = ["Home", "Rentals", "Buy", "Invest", "Countries", "Agencies", "Locations", "About Us"];

export default function AgenciesNavbar() {
  const [currency, setCurrency] = useState("USD");
  return (
    <header className="ag-nav">
      <div className="ag-nav__inner">
        <a href="/" className="ag-brand">
          <span className="ag-brand__icon"><Home size={18} /></span>
          <span>
            <strong className="ag-brand__name">SeaHome Net</strong>
            <small className="ag-brand__sub">GLOBAL REAL ESTATE</small>
          </span>
        </a>

        <nav className="ag-nav__links">
          {links.map((l) => (
            <a key={l} href="#" className={`ag-nav__link ${l === "Agencies" ? "is-active" : ""}`}>
              {l}
              {l === "Countries" && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <div className="ag-currency">
          {["USD", "LKR"].map((c) => (
            <button key={c} className={currency === c ? "is-active" : ""} onClick={() => setCurrency(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}