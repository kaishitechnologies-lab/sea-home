import React from 'react';
import { Clock, Shield, UserCheck, MessageCircle } from 'lucide-react';
import '../rental.css';

const OffMarketBanner = () => {
  return (
    <div className="offmarket-wrapper">
      <div className="offmarket-box">
        {/* Text content */}
        <div className="offmarket-content">
          <span className="offmarket-subtitle">Off-Market Expat Relocation Service</span>
          <h2 className="offmarket-title">Can&apos;t find the exact home or stay duration?</h2>
          <p className="offmarket-desc">
            More than 40% of our premium coastal villas and Colombo ambassadorial estates are kept
            confidential. Our bilingual Tokyo and Colombo relocation directors curate bespoke
            off-market proposals within 24 hours.
          </p>
          <div className="offmarket-features">
            <span><Clock size={16} /> Fast 24h Turnaround</span>
            <span><Shield size={16} /> Non-Disclosure Guaranteed</span>
            <span><UserCheck size={16} /> Dedicated Move-in Manager</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="offmarket-buttons">
          <button className="btn-offmarket-pri">Request Bespoke Rental Search</button>
          <button className="btn-offmarket-sec">
            <MessageCircle size={18} /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffMarketBanner;