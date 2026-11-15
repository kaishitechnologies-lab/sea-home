import { BadgeCheck, Building2, Gavel, Languages, Newspaper } from "lucide-react";

const stats = [
  { icon: Building2, title: "42+ Agencies", sub: "Fully Vetted" },
  { icon: Gavel, title: "100% Supreme", sub: "Court Oversight" },
  { icon: Languages, title: "Bilingual Desks", sub: "EN • 日本語 • DE" },
  { icon: Newspaper, title: "0% Hidden", sub: "Buyer Surcharges" },
];

export default function HeroSection() {
  return (
    <section className="ag-hero">
      <div className="ag-hero__inner">
        <span className="ag-hero__badge">
          <BadgeCheck size={16} fill="#0b5394" color="#fff" />
          VERIFIED AGENCY NETWORK • BIM SAVIYA &amp; CEA ACCREDITED BROKERAGES
        </span>

        <h1 className="ag-hero__title">
          Certified Partner Agencies &amp; Conveyance Desks in Sri Lanka
        </h1>

        <p className="ag-hero__text">
          Connect with vetted real estate agencies, licensed foreign investor conveyancers,
          and regional specialist brokerages across Colombo, the Southern Coast, and Central Highlands.
        </p>

        <div className="ag-hero__stats">
          {stats.map(({ icon: Icon, title, sub }) => (
            <div className="ag-stat" key={title}>
              <span className="ag-stat__icon"><Icon size={18} /></span>
              <span>
                <strong>{title}</strong>
                <small>{sub}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}