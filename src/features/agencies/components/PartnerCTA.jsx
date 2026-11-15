import { ArrowRight, Download, BadgeCheck } from "lucide-react";

const points = ["Direct Tokyo Roadshows", "Integrated CRM & Escrow", "Qualified Leads Only"];

export default function PartnerCTA() {
  return (
    <section className="ag-cta">
      <div className="ag-cta__text">
        <span className="ag-cta__badge">GROW YOUR BROKERAGE REACH</span>
        <h2>Are You a Licensed Real Estate Agency in Sri Lanka?</h2>
        <p>Join the SeaHome Lands Global Network. Connect directly with qualified Japanese
          high-net-worth investors, European expatriates, and institutional buyers seeking verified assets.</p>
        <ul>
          {points.map((p) => (
            <li key={p}><BadgeCheck size={14} /> {p}</li>
          ))}
        </ul>
      </div>
      <div className="ag-cta__actions">
        <button className="ag-cta__apply">Apply for Partner Accreditation <ArrowRight size={14} /></button>
        <button className="ag-cta__deck"><Download size={14} /> Partnership Deck (PDF)</button>
      </div>
    </section>
  );
}