import React, { useState } from 'react';

const SORTS = [
  'Recommended for Expats',
  'Fastest Fiber Internet',
  'Price: Low to High',
  'Highest Expat Review',
];

const RentalSortBar = ({ total = 342 }) => {
  const [sort, setSort] = useState(SORTS[0]);
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="sort-section">
      <h2 className="sort-title">{total} Verified Properties Available</h2>

      <div className="sort-badge">Live Availability</div>

      <div className="sort-right">
        <span className="sort-label">Sort by:</span>
        {SORTS.map((s) => (
          <button
            key={s}
            className={`sort-btn ${sort === s ? 'active' : ''}`}
            onClick={() => setSort(s)}
          >
            {s}
          </button>
        ))}

        <div className="currency-toggle">
          <button className={currency === 'USD' ? 'active' : ''} onClick={() => setCurrency('USD')}>
            USD ($)
          </button>
          <button className={currency === 'LKR' ? 'active' : ''} onClick={() => setCurrency('LKR')}>
            LKR (Rs)
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalSortBar;