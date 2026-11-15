import { useState } from "react";

const FOREIGN = [
  ["freehold", "100% Foreign Freehold Eligible", true],
  ["bim", "Bim Saviya Clean Deed", true],
  ["roi", "Projected Net ROI >8%", true],
  ["mgmt", "Bespoke Management Active", false],
  ["visa", "Golden Paradise Visa Qualified ($100k+)", true],
];

export default function FilterPanel() {
  const [checks, setChecks] = useState(
    Object.fromEntries(FOREIGN.map(([k, , v]) => [k, v]))
  );

  return (
    <section className="buy-filter-wrap">
      <div className="buy-filter">
        <div className="buy-filter-row">
          <div className="buy-field">
            <label>INVESTMENT HUB</label>
            <select><option>All Investment Hubs</option></select>
          </div>
          <div className="buy-field">
            <label>OWNERSHIP LEGAL ROUTE</label>
            <select><option>All Ownership Types</option></select>
          </div>
          <div className="buy-field">
            <label>PROPERTY TYPOLOGY</label>
            <select><option>All Typologies</option></select>
          </div>
          <div className="buy-price">
            <div className="buy-price-top">
              <label>PRICE RANGE (USD)</label>
              <b>$150k – $2.5M+</b>
            </div>
            <div className="buy-price-bottom">
              <span>≈ LKR 45,000,000</span>
              <span>≈ LKR 750,000,000+</span>
            </div>
          </div>
        </div>

        <div className="buy-foreign">
          <div className="buy-foreign-chips">
            <span className="buy-foreign-label">FOREIGN FILTERS:</span>
            {FOREIGN.map(([k, label]) => (
              <label key={k} className="buy-check">
                <input
                  type="checkbox"
                  checked={checks[k]}
                  onChange={() => setChecks({ ...checks, [k]: !checks[k] })}
                />
                <span className="box" />
                {label}
              </label>
            ))}
          </div>
          <div className="buy-foreign-actions">
            <button className="buy-reset">Reset</button>
            <button className="buy-apply">Apply Filters (184 Available)</button>
          </div>
        </div>
      </div>
    </section>
  );
}