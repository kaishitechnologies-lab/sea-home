import React, { useState, useMemo } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
// We use ../ to go up one folder from 'components' to 'rentals'
import "../rental.css"; 
// FIXED: Pointing to the locations/data folder
import * as rentalsModule from '../../locations/data/rentalsData';


// 1. Safely grab the array regardless of how it's exported (default or named)
const ALL = (() => {
  if (Array.isArray(rentalsModule.default)) return rentalsModule.default;
  if (Array.isArray(rentalsModule.rentalsData)) return rentalsModule.rentalsData;
  if (Array.isArray(rentalsModule.rentals)) return rentalsModule.rentals;
  if (Array.isArray(rentalsModule.properties)) return rentalsModule.properties;
  
  // Fallback: find the first array inside the module
  const firstArray = Object.values(rentalsModule).find(Array.isArray);
  return firstArray || [];
})();

const PER_PAGE = 6;

// 2. Pagination list builder (e.g., 1 2 3 … 12)
const pageList = (current, total) => {
  if (total <= 1) return [1];
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, '…', total];
  if (current >= total - 2) return [1, '…', total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
};

const PropertyGrid = ({ properties = ALL }) => {
  const [page, setPage] = useState(1);

  // 3. Calculate total pages based on the actual data length (min 1 page)
  const totalPages = Math.max(1, Math.ceil(properties.length / PER_PAGE));
  
  // Ensure the current page never exceeds the total pages
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;

  // 4. Slice the array to get exactly 6 items for the current page
  const visibleProperties = useMemo(() => {
    return properties.slice(start, start + PER_PAGE);
  }, [properties, start]);

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages && p !== safePage) {
      setPage(p);
      // Optional: scroll smoothly to the top of the grid when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pg-root">
      {/* If there is no data, show a friendly message */}
      {properties.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#3f4a5e' }}>
          <p>No properties found. Check your data file.</p>
        </div>
      )}

      {/* Property Cards Grid */}
      <div className="pg-grid">
        {visibleProperties.map((property, index) => (
          <PropertyCard key={property.id || index} property={property} />
        ))}
      </div>

      {/* Pagination Controls (only show if we have data) */}
      {properties.length > 0 && (
        <div className="pg-row">
          <span className="pg-text">
            Showing {start + 1} - {Math.min(start + PER_PAGE, properties.length)} of {properties.length} properties
          </span>

          <div className="pg-controls">
            {/* Previous Button */}
            <button
              type="button"
              className="pg-btn pg-prev"
              disabled={safePage === 1}
              onClick={() => goToPage(safePage - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page Numbers */}
            {pageList(safePage, totalPages).map((n, i) =>
              n === '…' ? (
                <span key={`e${i}`} className="pg-dots">…</span>
              ) : (
                <button
                  key={n}
                  type="button"
                  className={`pg-btn ${n === safePage ? 'active' : ''}`}
                  onClick={() => goToPage(n)}
                >
                  {n}
                </button>
              )
            )}

            {/* Next Page Button */}
            <button
              type="button"
              className="pg-next"
              disabled={safePage === totalPages}
              onClick={() => goToPage(safePage + 1)}
            >
              Next Page <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;