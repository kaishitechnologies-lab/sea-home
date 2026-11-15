import {
  TrendingUp,
  Wallet,
  Wifi,
  ShieldCheck,
  Home,
  ArrowRight,
  BadgeCheck,
  Star,
  MapPin,
  Check,
} from "lucide-react";
import "./LocationCards.css";

const statIcons = [Wallet, Wifi, ShieldCheck, Home];

export function FeaturedDestination({ data }) {
  return (
    <section className="feat">
      <div className="feat__head">
        <div>
          <span className="feat__tag">{data.tag}</span>
          <h2>{data.title}</h2>
        </div>
        <span className="feat__note">
          <BadgeCheck size={12} /> {data.note}
        </span>
      </div>

      <div className="feat__body">
        <div
          className="feat__img"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,.7), transparent 55%), url(${data.image})`,
          }}
        >
          <div className="feat__badges">
            <span className="feat__badge feat__badge--dark">
              <Star size={9} /> {data.badge}
            </span>
            <span className="feat__badge feat__badge--blue">{data.verified}</span>
          </div>
          <div className="feat__caption">
            <small>{data.places}</small>
            <strong>{data.caption}</strong>
          </div>
        </div>

        <div className="feat__info">
          <span className="feat__kicker">
            <TrendingUp size={11} /> {data.heading}
          </span>
          <p>{data.text}</p>

          <div className="feat__stats">
            {data.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <div className="feat__stat" key={s.label}>
                  <small>
                    <Icon size={10} /> {s.label}
                  </small>
                  <strong>{s.value}</strong>
                  <span>{s.sub}</span>
                </div>
              );
            })}
          </div>

          <div className="feat__tags">
            {data.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <button className="feat__cta">
            {data.cta} <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function CityCard({ city }) {
  return (
    <article className="city">
      <div
        className="city__img"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.7), transparent 60%), url(${city.image})`,
        }}
      >
        <span className="city__tag">{city.tag}</span>
        <div className="city__name">
          <small>
            <MapPin size={9} /> {city.region}
          </small>
          <strong>{city.name}</strong>
        </div>
      </div>

      <div className="city__body">
        <div className="city__price">
          <span>
            <b>{city.price}</b> /mo
          </span>
          <em>{city.rentals}</em>
        </div>
        <p>{city.desc}</p>

        <ul>
          {city.features.map((f) => (
            <li key={f}>
              <Check size={9} /> {f}
            </li>
          ))}
        </ul>

        <button className="city__cta">
          {city.cta} <ArrowRight size={10} />
        </button>
      </div>
    </article>
  );
}