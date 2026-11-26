
import React, { useState, useMemo, useRef, useEffect } from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";
import "../rental.css";
import * as rentalsModule from "../../locations/data/rentalsData";

// Safely grab the array regardless of how it's exported
const ALL = (() => {
  if (Array.isArray(rentalsModule.default)) return rentalsModule.default;
  if (Array.isArray(rentalsModule.rentalsData)) return rentalsModule.rentalsData;
  if (Array.isArray(rentalsModule.rentals)) return rentalsModule.rentals;
  if (Array.isArray(rentalsModule.properties)) return rentalsModule.properties;

  const firstArray = Object.values(rentalsModule).find(Array.isArray);
  return firstArray || [];
})();

const PER_PAGE = 6;

// Show only 2 sliding page numbers
const pageList = (current, total) => {
  if (total <= 0) return [];

  const start = Math.min(current, Math.max(1, total - 1));

  return Array.from(
    { length: Math.min(2, total) },
    (_, i) => start + i
  );
};

const PropertyGrid = ({ properties = ALL }) => {
  const [page, setPage] = useState(1);

  const gridTopRef = useRef(null);
  const userNavigated = useRef(false);

  const totalPages = Math.max(
    1,
    Math.ceil(properties.length / PER_PAGE)
  );

  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;

  const visibleProperties = useMemo(
    () => properties.slice(start, start + PER_PAGE),
    [properties, start]
  );

  // Scroll to the top of listings after changing pages
  useEffect(() => {
    if (!userNavigated.current) return;

    userNavigated.current = false;

    gridTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [safePage]);

  // Navigate between pages
  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages && p !== safePage) {
      userNavigated.current = true;
      setPage(p);
    }
  };

  return (
    <div
      className="pg-root"
      ref={gridTopRef}
      style={{ scrollMarginTop: 120 }}
    >
      {/* Empty state */}
      {properties.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#3f4a5e",
          }}
        >
          <p>No properties found. Check your data file.</p>
        </div>
      )}

      {/* Property grid */}
      <div className="pg-grid">
        {visibleProperties.map((property, index) => (
          <PropertyCard
            key={property.id || index}
            property={property}
          />
        ))}
      </div>

      {/* Pagination */}
      {properties.length > 0 && (
        <div className="pg-row">
          <span className="pg-text">
            Showing {start + 1} -{" "}
            {Math.min(start + PER_PAGE, properties.length)} of{" "}
            {properties.length} properties
          </span>

          <div className="pg-controls">
            {/* Previous button */}
            <button
              type="button"
              className="pg-btn pg-prev"
              disabled={safePage === 1}
              onClick={() => goToPage(safePage - 1)}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Only 2 page numbers */}
            {pageList(safePage, totalPages).map((n) => (
              <button
                key={n}
                type="button"
                className={`pg-btn ${
                  n === safePage ? "active" : ""
                }`}
                onClick={() => goToPage(n)}
                aria-current={
                  n === safePage ? "page" : undefined
                }
              >
                {n}
              </button>
            ))}

            {/* Next button */}
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
