import { Building, Building2, CircleCheck, Clock, ArrowUpRight } from "lucide-react";

const offices = [
  {
    Icon: Building2,
    title: "Colombo Headquarters",
    sub: "Main Operational & Legal Conveyancing Hub",
    badge: "HQ Desk",
    address: "Level 32, West Tower, World Trade Center, Echelon Square, Colombo 01, Sri Lanka.",
    items: [
      "Inward Investment Account (IIA) commercial bank processing",
      "Cadastral survey archive investigations and District Registry filings",
      "Supreme Court deed execution and escrow fund management",
    ],
    hours: "Mon - Fri: 08:30 - 18:00 (GMT+5:30)",
    phone: "+94 (11) 234-5678",
    tel: "+94112345678",
  },
  {
    Icon: Building,
    title: "Tokyo Representative Desk",
    sub: "Investor Relations & Family Office Advisory",
    badge: "Japan Desk",
    address: "Level 44, Roppongi Hills Mori Tower, 6-10-1 Roppongi, Minato-ku, Tokyo 106-6144, Japan.",
    items: [
      "High-Net-Worth private wealth & offshore asset consultation",
      "Japan-Sri Lanka Bilateral Double Taxation Treaty guidance",
      "Bilingual English/Japanese notary and conveyancing document briefing",
    ],
    hours: "Mon - Fri: 09:00 - 18:30 (JST)",
    phone: "+81 (3) 5555-8900",
    tel: "+81355558900",
  },
];

export default function OperationsSection() {
  return (
    <section className="ab-section ab-ops">
      <div className="ab-container">
        <header className="ab-story-head">
          <div>
            <span className="ab-eyebrow">Physical Presence</span>
            <h2 className="ab-h2">Global Operations &amp; Physical Desks</h2>
          </div>
          <p className="ab-lead-right">
            Real offices staffed with permanent attorneys, chartered surveyors, and
            bilateral relationship managers in South Asia and East Asia.
          </p>
        </header>

        <div className="ab-offices">
          {offices.map(({ Icon, ...o }) => (
            <article className="ab-card ab-office" key={o.title}>
              <div className="ab-office-head">
                <span className="ab-icon-box"><Icon size={22} /></span>
                <div className="ab-office-title">
                  <h3>{o.title}</h3>
                  <span>{o.sub}</span>
                </div>
                <span className="ab-badge">{o.badge}</span>
              </div>

              <p className="ab-office-address">{o.address}</p>

              <ul className="ab-checklist">
                {o.items.map((i) => (
                  <li key={i}><CircleCheck size={18} />{i}</li>
                ))}
              </ul>

              <div className="ab-office-foot">
                <span className="ab-hours"><Clock size={16} />{o.hours}</span>
                <a href={`tel:${o.tel}`} className="ab-phone">
                  {o.phone} <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}