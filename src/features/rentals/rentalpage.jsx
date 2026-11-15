import React from 'react';
import RentalHero from './components/RentalHero';
import SortSection from './components/SortSection';
import PropertyGrid from './components/PropertyGrid';
import SecurityGuarantee from './components/SecurityGuarantee';
import OffMarketBanner from './components/OffMarketBanner';
import './rental.css';

// NOTE: FilterSection is NOT rendered here. RentalHero renders it inside the blue hero.
const RentalPage = () => {
  return (
    <div className="rentals-page-wrapper">
      <RentalHero />

      <div className="rentals-content">
        <SortSection />
        <PropertyGrid />
      </div>

      <SecurityGuarantee />
      <div className="rentals-content">
        <OffMarketBanner />
      </div>
    </div>
  );
};

export default RentalPage;