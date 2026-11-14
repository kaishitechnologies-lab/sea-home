import {
  Banknote,
  Wifi,
  ShieldCheck,
  Building2,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";

export function FeaturedDestination({ data }) {
  const getStatIcon = (label) => {
    if (label.includes("Rent")) return <Banknote size={14} />;
    if (label.includes("Connectivity")) return <Wifi size={14} />;
    if (label.includes("Safety")) return <ShieldCheck size={14} />;
    if (label.includes("Units")) return <Building2 size={14} />;
    return null;
  };

  return (
    <section className="feat">
      <div className="feat__head">
        <div>
          <span className="feat__tag">{data.tag}</span>
          <h2>{data.title}</h2>
        </div>
        <span className="feat__note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {data.note}
        </span>
      </div>

      <div className="feat__body">
        <div className="feat__img" style={{ backgroundImage: `url(${data.image})` }}>
          <div className="feat__badges">
            <span className="feat__badge feat__badge--dark">
              <Star size={12} fill="currentColor" /> {data.badge}
            </span>
            <span className="feat__badge feat__badge--blue">{data.verified}</span>
          </div>
          <div className="feat__caption">
            <small>
              <MapPin size={14} /> {data.places}
            </small>
            <strong>{data.caption}</strong>
          </div>
        </div>

        <div className="feat__info">
          <span className="feat__kicker">{data.heading}</span>
          <p>{data.text}</p>

          <div className="feat__stats">
            {data.stats.map((stat, idx) => (
              <div className="feat__stat" key={idx}>
                <small>
                  {getStatIcon(stat.label)} {stat.label}
                </small>
                <strong>{stat.value}</strong>
                <span>{stat.sub}</span>
              </div>
            ))}
          </div>

          <div className="feat__tags">
            {data.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>

          <button className="feat__cta">
            {data.cta} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---- THIS WAS MISSING ---- */
export function CityCard({ city }) {
  return (
    <article className="city">
      <div
        className="city__img"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <span className="city__tag">{city.tag}</span>
        <div className="city__name">
          <small>
            <MapPin size={12} /> {city.region}
          </small>
          <strong>{city.name}</strong>
        </div>
      </div>

      <div className="city__body">
        <div className="city__price">
          <span>
            <b>{city.price}</b> / mo
          </span>
          <span className="city__rentals">{city.rentals}</span>
        </div>

        <p>{city.desc}</p>

        <ul>
          {city.features.map((f) => (
            <li key={f}>
              <CheckCircle2 size={16} /> {f}
            </li>
          ))}
        </ul>

        <button className="city__cta">
          {city.cta} <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}