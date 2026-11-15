import { useState } from "react";

const SORTS = ["Recommended for Foreigners", "Highest Net ROI", "Price: Low to High", "Price: High to Low", "Recent"];

export default function ResultsBar() {
  const [sort, setSort] = useState(SORTS[0]);
  const [cur, setCur] = useState("USD ($)");

  return (
    <div className="buy-results">
      <h3>184 Verified Investment<br />Properties</h3>
      <div className="buy-guarantee"><i className="buy-green-dot" />Title Diligence<br />Guaranteed</div>

      <div className="buy-sort">
        <div className="buy-sort-row">
          <span className="buy-sort-label">SORT BY:</span>
          <div className="buy-sort-pills">
            {SORTS.map((s) => (
              <button key={s} className={sort === s ? "active" : ""} onClick={() => setSort(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="buy-cur">
          {["USD ($)", "LKR (Rs)"].map((c) => (
            <button key={c} className={cur === c ? "active" : ""} onClick={() => setCur(c)}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}