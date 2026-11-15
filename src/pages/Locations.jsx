import { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  Send,
  Search,
  Banknote,
  Compass,
  ChevronDown,
  SlidersHorizontal,
  LayoutGrid,
  Map,
} from "lucide-react";
import { featured, cities } from "../data/cities";
import { FeaturedDestination, CityCard } from "../components/LocationCards";
import ProvinceBrowser from "../components/ProvinceBrowser";
import WhyChoose from "../components/WhyChoose";
import RelocationBanner from "../components/RelocationBanner";
import "./Locations.css";

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

export default function Locations() {
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
      {/* Breadcrumb */}
      <nav className="loc__crumbs" aria-label="Breadcrumb">
        <Link to="/">
          <House size={11} /> Home
        </Link>
        <span>/</span>
        <Link to="/locations" className="loc__crumb-dark">
          Locations
        </Link>
        <span>/</span>
        <span className="loc__crumb-current">Sri Lanka Destinations</span>
      </nav>

      {/* Hero */}
      <section className="loc__hero">
        <span className="loc__badge">
          <Send size={11} /> Your Journey to a New Home Starts Here
        </span>
        <h1>Explore Popular Locations in Sri Lanka</h1>
        <p>
          Discover top expat-friendly cities, coastal sanctuaries, and cultural
          highlands with verified rental listings, fiber internet speeds, and
          foreigner-tailored leases.
        </p>
      </section>

      {/* Search row */}
      <div className="loc__search">
        <label className="loc__input">
          <Search size={15} />
          <input
            type="text"
            placeholder="Search city, beach town, district, or landmark..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <div className="loc__select">
          <Banknote size={16} />
          <div>
            <small>Monthly Budget</small>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <ChevronDown size={14} className="loc__chev" />
        </div>

        <div className="loc__select loc__select--small">
          <Compass size={16} />
          <div>
            <small>Lifestyle Vibe</small>
            <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
              {vibes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
          <ChevronDown size={14} className="loc__chev" />
        </div>

        <button className="loc__filter" onClick={handleFilter}>
          <SlidersHorizontal size={13} /> Filter
        </button>
      </div>

      {/* Chips + view toggle */}
      <div className="loc__chips-row">
        <div className="loc__chips">
          {regions.map((r) => (
            <button
              key={r}
              className={"loc__chip" + (region === r ? " active" : "")}
              onClick={() => setRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="loc__toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={12} /> Grid View
          </button>
          <button
            className={view === "map" ? "active" : ""}
            onClick={() => setView("map")}
          >
            <Map size={12} /> Map View
          </button>
        </div>
      </div>

      {/* Featured destination */}
      <FeaturedDestination data={featured} />

      {/* Cities grid */}
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

      {/* Browse by province */}
      <ProvinceBrowser />

      {/* Why choose us */}
      <WhyChoose />

      {/* Relocation banner */}
      <RelocationBanner />
    </div>
  );
}