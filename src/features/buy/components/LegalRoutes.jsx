import { Building2, Receipt, Building, ArrowLeftRight } from "lucide-react";

const ROUTES = [
  {
    Icon: Building2, color: "#0B5A94",
    title: "Condominium Freehold (Act No. 45)",
    text: "Foreign nationals can purchase and hold 100% freehold ownership in any residential condo unit situated on the 4th floor or above, free from land restrictions and with unconditional resale authorization.",
    link: "Read Condo Law FAQ",
  },
  {
    Icon: Receipt, color: "#F59E0B",
    title: "99-Year Registered Leases",
    text: "Direct land, beach estates, and coconut plantations can be legally bound via a 99-year registered tripartite long lease deed at the Land Registry with automatic heirs transfer clauses and assignment rights.",
    link: "Review Sample Lease Deed",
  },
  {
    Icon: Building, color: "#059669",
    title: "BOI Company Inward Investment",
    text: "Incorporate a 100% foreign-owned Sri Lankan entity under BOI Section 17. The BOI company holds freehold land ownership without restriction for hospitality, villas, boutique retreats, or development projects.",
    link: "BOI Qualification Guide",
  },
  {
    Icon: ArrowLeftRight, color: "#2563EB",
    title: "Central Bank IIA Repatriation",
    text: "All acquisition capital routed through Inward Investment Accounts (IIA) in commercial banks guarantees unimpeded repatriation of original capital, sales proceeds, and capital gains in foreign currency (USD/JPY/EUR).",
    link: "IIA Banking Protocol",
  },
];

export default function LegalRoutes() {
  return (
    <section className="buy-legal">
      <small>FOREIGN INVESTMENT SECURITY PROTOCOL</small>
      <h2>How Foreigners Safely Buy Real Estate in Sri Lanka</h2>
      <p>
        The 4 legally sanctioned conveyancing mechanisms verified by the Attorney
        General's Department and Central Bank of Sri Lanka.
      </p>

      <div className="buy-legal-grid">
        {ROUTES.map(({ Icon, color, title, text, link }) => (
          <div className="buy-legal-card" key={title}>
            <div className="ico" style={{ background: color }}>
              <Icon className="buy-icon" size="1em" strokeWidth={2} />
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            <a href="#" style={{ color }}>{link}</a>
          </div>
        ))}
      </div>
    </section>
  );
}