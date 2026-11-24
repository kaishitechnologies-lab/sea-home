import React from "react";
import { useSearchParams } from "react-router-dom";
import "./PropertyPage.css";

import RentalPage from "../rentals/rentalpage";
import BuyPage from "../buy/buyPage";
import InvestPage from "../invest/investPage";

const PropertyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "rentals";

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const tabs = [
    { id: "rentals", label: "Rentals" },
    { id: "buy", label: "Buy" },
    { id: "invest", label: "Invest" },
  ];

  return (
    <div className="property-page">
      {/* Tab Navigation */}
      <div className="property-tabs-container">
        <div className="property-tabs-inner">
          <div className="property-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={currentTab === tab.id}
                className={`tab-btn ${currentTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="property-content">
        {currentTab === "rentals" && <RentalPage />}
        {currentTab === "buy" && <BuyPage />}
        {currentTab === "invest" && <InvestPage />}
      </div>
    </div>
  );
};

export default PropertyPage;