import { useState } from "react";

const FILTERS = [
  "BOI Section 17 Qualifying ($250k+)",
  "Port City Colombo SEZ",
  "Golden Paradise 10-Yr Visa",
  "Direct Beach / Oceanfront",
];
const DEFAULT = [true, true, false, true];

export default function Screener() {
  const [on, setOn] = useState(DEFAULT);

  return (
    <section className="inv-screener">
      <div className="inv-screener-head">
        <h3>Institutional Screener</h3>
        <div className="inv-pipeline">
          Active Pipeline: <span>6 Available Assets</span>
        </div>
      </div>

      <div className="inv-screener-row">
        <div className="inv-sfield">
          <label>Investment Focus</label>
          <select><option>All Sectors &amp; Typologies</option></select>
        </div>
        <div className="inv-sfield">
          <label>Target Region</label>
          <select><option>All Island Territories</option></select>
        </div>
        <div className="inv-sfield">
          <label>
            Capital Ticket Size <b>$500k - $3M USD</b>
          </label>
          <select><option>$500k - $2.5M USD (~LKR 150M - 750M)</option></select>
        </div>
        <div className="inv-sfield">
          <label>Projected Net Yield</label>
          <select><option>10%+ Net Annualized</option></select>
        </div>
      </div>

      <div className="inv-incentives">
        <span className="inv-inc-label">INCENTIVE FILTERS:</span>
        <div className="inv-inc-pills">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={on[i] ? "on" : ""}
              onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="inv-reset">
        <button onClick={() => setOn(DEFAULT)}>Reset Filters</button>
      </div>
    </section>
  );
}