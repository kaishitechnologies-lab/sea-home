import { Scale, Building2, Anchor, CircleDollarSign, Stamp } from "lucide-react";

const ITEMS = [
  {
    Icon: Building2, title: "BOI Section 17 Status",
    text: "Grants 100% foreign equity ownership of land and ventures in hospitality, commercial developments, and sustainable agriculture. Includes duty-free capital goods importation and statutory protection against expropriation.",
    foot: "Eligibility: $250k+ Capital",
  },
  {
    Icon: Anchor, title: "Port City Colombo SEZ Act",
    text: "Multi-currency offshore Special Economic Zone designated as a Businesses of Strategic Importance (BSI). Enjoys 0% corporate tax for up to 25 years, zero capital gains tax, zero import duties, and complete legal independence.",
    foot: "Sovereign Act No. 11 of 2021",
  },
  {
    Icon: CircleDollarSign, title: "Central Bank IIA Protocol",
    text: "Inward Investment Accounts (IIA) maintained with commercial Tier-1 banks guarantee foreign investors unhindered rights to remit sale proceeds, net rents, and dividends in foreign currency (USD, EUR, JPY) back to overseas domiciles.",
    foot: "Guaranteed Repatriation",
  },
  {
    Icon: Stamp, title: "Golden Paradise Visa (10 Yrs)",
    text: "A long-term multi-entry residency visa extended to foreign individuals and their dependents purchasing qualifying real estate ($100,000+ for condominiums or $250,000+ in recognized commercial direct investments).",
    foot: "Renewable 10-Year Term",
  },
];

export default function LegalFramework() {
  return (
    <section className="inv-legal">
      <span className="inv-legal-pill">
        <Scale className="inv-ic" size="1em" strokeWidth={2} /> SOVEREIGN GUARANTEES &amp; PROTECTION
      </span>
      <h2>Sri Lanka Foreign Investor Legal &amp; Tax Framework</h2>
      <p>
        Clear statutory channels enacted by the Parliament of Sri Lanka ensuring
        full international investor protections, tax exemptions, and unimpeded
        foreign currency transfers.
      </p>

      <div className="inv-legal-grid">
        {ITEMS.map(({ Icon, title, text, foot }) => (
          <div className="inv-legal-card" key={title}>
            <div className="ico"><Icon className="inv-ic" size="1em" strokeWidth={2} /></div>
            <h4>{title}</h4>
            <p>{text}</p>
            <b>{foot}</b>
          </div>
        ))}
      </div>
    </section>
  );
}