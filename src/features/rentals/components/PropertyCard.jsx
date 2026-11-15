import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, Star, Heart } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const [liked, setLiked] = useState(false);

  // If for some reason the property is undefined, don't crash the app
  if (!property) return null;

  return (
    <div className="pc">
      <div className="pc-img">
        <img src={property.image} alt={property.title} />
        <div className="pc-shade" />
        
        {/* Top Left Badges */}
        <div className="pc-badges">
          {property.badges?.map((b, i) => (
            <span key={i} className={`pc-badge ${b.tone || 'dark'}`}>
              {b.label}
            </span>
          ))}
        </div>

        {/* Top Right Heart */}
        <button 
          className={`pc-heart ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Save property"
        >
          <Heart size={16} />
        </button>

        {/* Bottom Overlay (Rating & Availability) */}
        <div className="pc-overlay">
          <div className="pc-pill">
            {property.available || "Available"}
          </div>
          <div className="pc-rating">
            <Star size={14} fill="currentColor" /> 
            {property.rating} ({property.reviews})
          </div>
        </div>
      </div>

      <div className="pc-body">
        {/* Location */}
        <div className="pc-loc">
          <MapPin size={14} />
          {property.location}
        </div>

        {/* Title & Desc */}
        <h3 className="pc-title">{property.title}</h3>
        <p className="pc-desc">{property.description}</p>

        {/* Specs */}
        <div className="pc-specs">
          <span><BedDouble size={16} /> {property.beds} Beds</span>
          <div className="pc-dot" />
          <span><Bath size={16} /> {property.baths} Baths</span>
          <div className="pc-dot" />
          <span><Square size={14} /> {property.area}</span>
        </div>

        {/* Price Row */}
        <div className="pc-pricerow">
          <div>
            <div className="pc-price">
              ${property.price} <small>/mo</small>
            </div>
            <div className="pc-lkr">{property.lkr}</div>
          </div>
          <div className="pc-tag">{property.tag}</div>
        </div>

        {/* Buttons */}
        <div className="pc-btns">
          <button className="pc-btn-sec">View Details</button>
          <button className="pc-btn-pri">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;