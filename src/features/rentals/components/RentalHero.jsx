import React, { useState } from 'react';
import { ShieldCheck, LayoutGrid, Map as MapIcon } from 'lucide-react';
import FilterSection from './FilterSection';
import '../rental.css';

const RentalHero = () => {
  const [view, setView] = useState('grid');

  return (
    <section className="hero-section">
      <div className="rentals-container">
        {/* Text block + view toggle (toggle is absolutely placed bottom-right) */}
        <div className="hero-top">
          <div className="hero-badges-row">
            <span className="hero-badge blue">
              <span className="hero-dot" />
              LONG-TERM &amp; SHORT-STAY EXPAT HOMES
            </span>
            <span className="hero-badge white">
              <ShieldCheck size={14} color="#0b3b69" /> 100% Deed &amp; Speed Audited
            </span>
          </div>

          <h1 className="hero-title">Luxury Verified Rentals in Sri Lanka</h1>
          <p className="hero-subtitle">
            Discover legally certified villas, beachfront penthouses, and high-altitude tea estate
            sanctuaries with bench-tested 300Mbps+ fiber and bilingual escrow lease structures.
          </p>

          <div className="view-toggle">
            <button
              className={`btn-view-mode ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
            >
              <LayoutGrid size={14} /> Grid View
            </button>
            <button
              className={`btn-view-mode ${view === 'map' ? 'active' : ''}`}
              onClick={() => setView('map')}
            >
              <MapIcon size={14} /> Map Split
            </button>
          </div>
        </div>

        {/* Filter card sits INSIDE the blue hero */}
        <FilterSection />
      </div>
    </section>
  );
};

export default RentalHero;