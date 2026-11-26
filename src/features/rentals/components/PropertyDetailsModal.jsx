import React, { useEffect } from "react";
import {
  X,
  MapPin,
  Star,
  BedDouble,
  Bath,
  Square,
  Check,
} from "lucide-react";

const PropertyDetailsModal = ({ property, onClose, onBook }) => {
  useEffect(() => {
    if (!property) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [property, onClose]);

  if (!property) return null;

  const amenities = property.amenities ?? property.features ?? [];

  return (
    <div className="rm-overlay" onClick={onClose}>
      <div
        className="rm-dialog rm-dialog--details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pd-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="rm-close"
          aria-label="Close details"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="pd-hero">
          <img src={property.image} alt={property.title} />
          <div className="pd-badges">
            {property.badges?.map((b, i) => (
              <span
                key={i}
                className={`pd-badge ${b.tone === "light" ? "pd-badge--light" : ""}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pd-body">
          <div className="pd-loc">
            <MapPin size={14} /> {property.location}
          </div>
          <h2 id="pd-title" className="pd-title">
            {property.title}
          </h2>
          <div className="pd-rating">
            <Star size={14} fill="currentColor" />
            {property.rating} ({property.reviews} reviews)
          </div>

          <div className="pd-price-row">
            <div className="pd-price">
              ${property.price} <small>/mo</small>
            </div>
            <div className="pd-lkr">{property.lkr}</div>
          </div>

          <div className="pd-specs">
            <div className="pd-spec">
              <BedDouble size={16} /> {property.beds} Beds
            </div>
            <div className="pd-spec">
              <Bath size={16} /> {property.baths} Baths
            </div>
            <div className="pd-spec">
              <Square size={15} /> {property.area}
            </div>
          </div>

          <h3 className="pd-section-title">About this property</h3>
          <p className="pd-desc">{property.description}</p>

          {amenities.length > 0 && (
            <>
              <h3 className="pd-section-title">Amenities</h3>
              <ul className="pd-amenities">
                {amenities.map((a) => (
                  <li key={a}>
                    <Check size={12} /> {a}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="pd-footer">
          <button type="button" className="rm-btn rm-btn--ghost" onClick={onClose}>
            Close
          </button>
          <button
            type="button"
            className="rm-btn rm-btn--primary"
            onClick={() => onBook(property)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;