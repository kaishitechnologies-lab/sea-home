import { useState } from "react";
import {
  Send,
  Search,
  Banknote,
  Compass,
  ChevronDown,
  SlidersHorizontal,
  LayoutGrid,
  Map as MapIcon,
} from "lucide-react";
import { featured, cities } from "./data/cities";
import { FeaturedDestination, CityCard } from "./components/LocationCards";
import ProvinceBrowser from "./components/ProvinceBrowser";
import WhyChoose from "./components/WhyChoose";
import RelocationBanner from "./components/RelocationBanner";
import "./locations.css";

const regions = [
  "All Regions (18)",
  "Western Province & Colombo",
  "Southern Coast & Galle",
  "Central Highlands (Kandy)",
  "Western Coast (Negombo)",
];

const budgets = [
  "LKR 90k - 300k / mo",
  "LKR 50k - 90k / mo",
  "LKR 300k - 600k / mo",
  "LKR 600k+ / mo",
];

const vibes = ["Digital Nomad", "Family", "Retiree", "Beach Lover", "Investor"];

export default function LocationsPage() {
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState(budgets[0]);
  const [vibe, setVibe] = useState(vibes[0]);
  const [region, setRegion] = useState(regions[0]);
  const [view, setView] = useState("grid");

  const handleFilter = () => {
    console.log({ search, budget, vibe, region });
  };

  const visibleCities = cities.filter((c) => {
    const matchesRegion = region === regions[0] || c.group === region;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.region.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="loc">
      {/* 1. Hero Section - Centered & Light Blue Background */}
      <section className="loc__hero">
        <div className="loc__hero-badge">
          <Send size={14} /> Your Journey to a New Home Starts Here
        </div>
        <h1>EXPLORE POPULAR LOCATIONS IN SRI LANKA</h1>
        <p>
          Discover top expat-friendly cities, coastal sanctuaries, and cultural
          highlands with verified rental listings, fiber internet speeds, and
          foreigner-tailored leases.
        </p>
      </section>

      {/* 2. Search & Filter Bar - Floating Card Style */}
      <div className="loc__search-container">
        <div className="loc__search-bar">
          <label className="loc__input-group loc__input-group--search">
            <Search size={20} className="loc__icon" />
            <input
              type="text"
              placeholder="Search city, beach town, district, or landmark..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <div className="loc__input-group">
            <Banknote size={20} className="loc__icon" />
            <div className="loc__select-wrapper">
              <small>Monthly Budget</small>
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <ChevronDown size={16} className="loc__chev" />
          </div>

          <div className="loc__input-group">
            <Compass size={20} className="loc__icon" />
            <div className="loc__select-wrapper">
              <small>Lifestyle Vibe</small>
              <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
                {vibes.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <ChevronDown size={16} className="loc__chev" />
          </div>

          <button className="loc__filter-btn" onClick={handleFilter}>
            <SlidersHorizontal size={18} /> Filter
          </button>
        </div>
      </div>

      {/* 3. Region Chips & View Toggle */}
      <div className="loc__controls-row">
        <div className="loc__chips">
          {regions.map((r) => (
            <button
              key={r}
              className={`loc__chip ${region === r ? "active" : ""}`}
              onClick={() => setRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="loc__view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={16} /> Grid View
          </button>
          <button
            className={view === "map" ? "active" : ""}
            onClick={() => setView("map")}
          >
            <MapIcon size={16} /> Map View
          </button>
        </div>
      </div>

      {/* 4. Content Sections */}
      <FeaturedDestination data={featured} />

      <section className="cities">
        <div className="cities__head">
          <div>
            <span className="feat__tag">Curated Rental Havens</span>
            <h2>Top Sri Lankan Cities &amp; Living Hubs</h2>
          </div>
          <p>
            Every location offers verified lease agreements, deposit security,
            and certified English-speaking landlords.
          </p>
        </div>

        {visibleCities.length > 0 ? (
          <div className="cities__grid">
            {visibleCities.map((c) => (
              <CityCard key={c.id} city={c} />
            ))}
          </div>
        ) : (
          <p className="cities__empty">No locations match your search.</p>
        )}
      </section>

      <ProvinceBrowser />
      <WhyChoose />
      <RelocationBanner />
    </div>
  );
}