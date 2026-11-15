import React, { useState } from "react";
import {
  ShieldCheck,
  PenLine,
  Wifi,
  Search,
  Building2,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const tabs = ["Rent Property", "Buy Property", "Short Nomad Stay"];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          SRI LANKA’S #1 EXPAT &amp; FOREIGNER VERIFIED REAL ESTATE
          <BadgeCheck size={18} />
        </div>

        <h1>
          Find Your Sanctuary
          <br />
          In Tropical Sri Lanka
        </h1>

        <p className="hero-lead">
          Premium villas, oceanfront condos, and tranquil hill country estates
          with 100% legal title diligence, escrow safety, and dedicated
          bilingual advisors.
        </p>

        <div className="hero-features">
          <div className="hero-feature">
            <ShieldCheck size={18} /> 100% Verified Deeds
          </div>
          <div className="hero-feature">
            <PenLine size={18} /> Bilingual Leases (EN/JA)
          </div>
          <div className="hero-feature">
            <Wifi size={18} /> Fiber Optic 300Mbps Ready
          </div>
        </div>
      </div>

      <div className="search-widget">
        <div className="search-tabs">
          {tabs.map((t, i) => (
            <button
              key={t}
              type="button"
              className={"search-tab" + (i === activeTab ? " active" : "")}
              onClick={() => setActiveTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="search-row">
          <div className="field f-dest">
            <label>Destination</label>
            <textarea rows={2} defaultValue="Colombo, Galle or Weligama" />
          </div>

          <div className="field f-type">
            <label>
              <Building2 size={14} /> Property Type
            </label>
            <select defaultValue="Luxury Beach Villa">
              <option>Luxury Beach Villa</option>
              <option>Apartment</option>
              <option>Hill Country Estate</option>
            </select>
          </div>

          <div className="field f-budget">
            <label>
              <Wallet size={14} /> Monthly Budget
            </label>
            <input type="text" defaultValue="$600 - $1,500 USD / mo" />
          </div>

          <button type="button" className="search-btn">
            <Search size={20} /> Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;