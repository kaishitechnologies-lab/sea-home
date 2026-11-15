import { useState } from "react";
import {
  Heart, TrendingUp, BadgeCheck, Banknote, Leaf, Landmark, Gauge, MapPin,
  BarChart3, FileText, ShieldCheck, CalendarDays, ArrowRight,
} from "lucide-react";

// icon name (used in properties.jsx) -> icon component
const ICONS = {
  favorite: Heart,
  trending_up: TrendingUp,
  verified: BadgeCheck,
  payments: Banknote,
  nature: Leaf,
  account_balance: Landmark,
  speed: Gauge,
  location_on: MapPin,
  analytics: BarChart3,
  bar_chart: BarChart3,
  description: FileText,
  verified_user: ShieldCheck,
  calendar_month: CalendarDays,
  arrow_forward: ArrowRight,
};

const Icon = ({ n }) => {
  const Cmp = ICONS[n] || BarChart3;
  return <Cmp className="buy-icon" size="1em" strokeWidth={2} />;
};

const IMAGES = ["/buy-property.jpeg", "/images%20(2).jpeg"];

export default function PropertyCard({ p }) {
  const [i, setI] = useState(0);

  return (
    <article className="buy-card">
      <div className="buy-card-img">
        <img
          src={IMAGES[i]}
          alt=""
          onError={() => i < IMAGES.length - 1 && setI(i + 1)}
        />
        <div className="buy-badges">
          <span className={`buy-badge ${p.badge1.color}`}>{p.badge1.text}</span>
          <span className="buy-badge white">{p.badge2}</span>
        </div>
        <button className="buy-fav" aria-label="Favorite">
          <Icon n="favorite" />
        </button>
        <div className="buy-overlay">
          <Icon n={p.overlay.icon} />
          <span>
            {p.overlay.label}{" "}
            <b className={p.overlay.green ? "g" : ""}>{p.overlay.value}</b>
          </span>
        </div>
      </div>

      <div className="buy-card-body">
        <div className="buy-loc">
          {p.pin && <Icon n="location_on" />}
          {p.location}
        </div>
        <h2>{p.title}</h2>

        <div className="buy-specs">
          <span><b>{p.beds}</b> Beds</span><i>•</i>
          <span><b>{p.baths}</b> Baths</span><i>•</i>
          <span>{p.sqft} sq.ft</span><i>•</i>
          <span className="blue">{p.extra}</span>
        </div>

        <div className="buy-chips">
          {p.chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        <div className="buy-price-row">
          <div>
            <div className="buy-usd">{p.usd}</div>
            <div className="buy-lkr">{p.lkr}</div>
          </div>
          <div className="buy-right">
            <small>{p.rightLabel}</small>
            <strong className={p.rightGreen ? "g" : ""}>{p.rightValue}</strong>
          </div>
        </div>

        <div className="buy-actions">
          <button className="buy-ghost">
            <Icon n={p.action.icon} />
            {p.action.label}
          </button>
          <button className="buy-details">
            View Details <Icon n="arrow_forward" />
          </button>
        </div>
      </div>
    </article>
  );
}