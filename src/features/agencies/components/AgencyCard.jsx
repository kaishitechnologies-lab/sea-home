import { Star, MapPin, ShieldCheck } from "lucide-react";

export default function AgencyCard({ a }) {
  return (
    <article className="ag-card">
      <div className="ag-card__top">
        <span className="ag-card__tag">{a.tag}</span>
        {a.ultra ? (
          <span className="ag-card__ultra"><ShieldCheck size={13} fill="#0b5394" color="#fff" /> {a.ultra}</span>
        ) : (
          <span className="ag-card__rating">
            <Star size={12} fill="#0b5394" color="#0b5394" /> <b>{a.rating}</b> <i>{a.reviews}</i>
          </span>
        )}
      </div>

      <h3 className="ag-card__name">{a.name}</h3>
      <p className="ag-card__loc"><MapPin size={12} /> {a.location}</p>

      <div className="ag-card__spec">
        <span>SPECIALIZATION</span>
        <strong>{a.specialization}</strong>
      </div>

      <div className="ag-card__person">
        <div className="ag-avatars">
          {a.people.map((p, i) => (
            <span key={i} className={`ag-avatar ${p.dark ? "is-dark" : ""}`}>{p.initials}</span>
          ))}
        </div>
        <div>
          <strong>{a.personName}</strong>
          <small>{a.personRole}</small>
        </div>
      </div>

      <div className="ag-card__stats">
        {a.stats.map((s) => (
          <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </div>

      <div className="ag-card__badges">
        {a.badges.map((b) => <span key={b}>{b}</span>)}
      </div>

      <div className="ag-card__actions">
        <button className="ag-btn ag-btn--primary">{a.cta}</button>
        <button className="ag-btn ag-btn--ghost">Contact</button>
      </div>
    </article>
  );
}