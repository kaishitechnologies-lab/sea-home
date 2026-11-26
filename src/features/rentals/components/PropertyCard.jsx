import React, { useState } from "react";
import { MapPin, BedDouble, Bath, Square, Star, Heart } from "lucide-react";
import PropertyDetailsModal from "./PropertyDetailsModal";
import BookingModal from "./BookingModal";
import "../rental.css";

const PropertyCard = ({ property }) => {
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [bookingProperty, setBookingProperty] = useState(null);

  if (!property) return null;

  return (
    <>
      <div className="pc">
        <div className="pc-img">
          <img src={property.image} alt={property.title} />
          <div className="pc-shade" />

          <div className="pc-badges">
            {property.badges?.map((b, i) => (
              <span key={i} className={`pc-badge ${b.tone || "dark"}`}>
                {b.label}
              </span>
            ))}
          </div>

          <button
            type="button"
            className={`pc-heart ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
            aria-label="Save property"
          >
            <Heart size={16} />
          </button>

          <div className="pc-overlay">
            <div className="pc-pill">{property.available || "Available"}</div>
            <div className="pc-rating">
              <Star size={14} fill="currentColor" />
              {property.rating} ({property.reviews})
            </div>
          </div>
        </div>

        <div className="pc-body">
          <div className="pc-loc">
            <MapPin size={14} />
            {property.location}
          </div>

          <h3 className="pc-title">{property.title}</h3>
          <p className="pc-desc">{property.description}</p>

          <div className="pc-specs">
            <span>
              <BedDouble size={16} /> {property.beds} Beds
            </span>
            <div className="pc-dot" />
            <span>
              <Bath size={16} /> {property.baths} Baths
            </span>
            <div className="pc-dot" />
            <span>
              <Square size={14} /> {property.area}
            </span>
          </div>

          <div className="pc-pricerow">
            <div>
              <div className="pc-price">
                ${property.price} <small>/mo</small>
              </div>
              <div className="pc-lkr">{property.lkr}</div>
            </div>
            <div className="pc-tag">{property.tag}</div>
          </div>

          <div className="pc-btns">
            <button
              type="button"
              className="pc-btn-sec"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            <button
              type="button"
              className="pc-btn-pri"
              onClick={() => setBookingProperty(property)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <PropertyDetailsModal
          property={property}
          onClose={() => setShowDetails(false)}
          onBook={(p) => {
            setShowDetails(false);
            setBookingProperty(p);
          }}
        />
      )}

      {bookingProperty && (
        <BookingModal
          property={bookingProperty}
          onClose={() => setBookingProperty(null)}
        />
      )}
    </>
  );
};

export default PropertyCard;