import { Banknote, ShieldCheck, Building2, Gem } from "lucide-react";

const stats = [
  { label: "Advised Volume", value: "$180M+", note: "Total Transactions Advised", Icon: Banknote },
  { label: "Deed Security", value: "100%", note: "Clean Title Guarantee (Bim Saviya Class 1)", Icon: ShieldCheck },
  { label: "Client Base", value: "420+", note: "Foreign Landlords & Investors Represented", Icon: Building2 },
  { label: "Track Record", value: "14+ Years", note: "Combined Cross-Border JP & LK Experience", Icon: Gem },
];

export default function HeroSection() {
  return (
    <section className="ab-hero">
      <div className="ab-container">
        <span className="ab-pill">
          <i className="ab-pill-dot" />
          Bilateral Real Estate Advisory • Colombo HQ &amp; Tokyo Desk
        </span>

        <h1 className="ab-hero-title">
          Bridging Global Capital &amp;<br className="ab-br" /> Tropical Sanctuaries in SriLanka
        </h1>

        <p className="ab-hero-text">
          SeaHome Lands was founded on a singular conviction: international investors
          and expats deserve sovereign-grade legal security, transparent title
          conveyancing, and world-class advisory when acquiring prime island property.
        </p>

        <div className="ab-stats">
          {stats.map(({ label, value, note, Icon }) => (
            <article className="ab-stat" key={label}>
              <div className="ab-stat-top">
                <span className="ab-stat-label">{label}</span>
                <Icon size={20} strokeWidth={2} />
              </div>
              <strong className="ab-stat-value">{value}</strong>
              <p className="ab-stat-note">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}