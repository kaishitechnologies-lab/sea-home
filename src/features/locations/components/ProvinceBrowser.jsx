import { useState } from "react";
import {
  Map as MapIcon,
  MapPin,
  Waves,
  Mountain,
  Sun,
  Maximize2,
} from "lucide-react";
import { provinces } from "../data/provinces";

const icons = {
  pin: MapPin,
  waves: Waves,
  mountain: Mountain,
  sun: Sun,
};

// what Google Maps should show for each province
const mapQuery = {
  western: { q: "Western Province, Sri Lanka", zoom: 9 },
  southern: { q: "Southern Province, Sri Lanka", zoom: 9 },
  central: { q: "Central Province, Sri Lanka", zoom: 9 },
  eastern: { q: "Eastern Province, Sri Lanka", zoom: 9 },
};

export default function ProvinceBrowser() {
  const [active, setActive] = useState(provinces[0].id);

  const { q, zoom } = mapQuery[active];
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    q
  )}&z=${zoom}&output=embed`;
  const fullUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  return (
    <section className="prov">
      {/* Left panel */}
      <div className="prov__left">
        <span className="prov__tag">
          <MapIcon size={12} /> Geographic Overview
        </span>
        <h2>Browse Rentals by Geographic Province</h2>
        <p>
          Sri Lanka offers distinct regional microclimates. Click each province
          to discover average rents, registered expatriates, and vetted
          accommodations.
        </p>

        <div className="prov__list">
          {provinces.map((p) => {
            const Icon = icons[p.icon];
            return (
              <button
                key={p.id}
                className={"prov__row" + (active === p.id ? " active" : "")}
                onClick={() => setActive(p.id)}
              >
                <Icon size={18} className="prov__icon" />
                <div className="prov__info">
                  <strong>{p.name}</strong>
                  <small>{p.towns}</small>
                </div>
                <div className="prov__count">
                  <strong>{p.homes}</strong>
                  <small>Homes</small>
                </div>
              </button>
            );
          })}
        </div>

        <a className="prov__full" href={fullUrl} target="_blank" rel="noreferrer">
          <Maximize2 size={13} /> Open Interactive Fullscreen Map
        </a>
      </div>

      {/* Right: Google Map */}
      <div className="prov__map">
        <iframe
          key={active}
          title={`Map of ${q}`}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
