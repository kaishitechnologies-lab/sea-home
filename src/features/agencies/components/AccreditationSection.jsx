import { BadgeCheck, Lock, IdCard, ShieldCheck, Landmark, Languages } from "lucide-react";

const stages = [
  { icon: IdCard, n: "STAGE 01", title: "Licensing & Background Check",
    text: "Every agency partner must present verified corporate licensing with the Ceylon Estate Agents association and clean police/notary disciplinary records." },
  { icon: ShieldCheck, n: "STAGE 02", title: "Mandatory Bim Saviya Deed Audit",
    text: "Prior to listing, all land parcels and titles undergo 30-year folio extractions and cadastral boundary surveys to ensure zero encumbrances or family disputes." },
  { icon: Landmark, n: "STAGE 03", title: "Regulated Escrow Custody",
    text: "Client earnest money and security deposits are held in regulated Tier-1 commercial bank escrow accounts, released strictly upon deed registration milestone sign-offs." },
  { icon: Languages, n: "STAGE 04", title: "Bilingual Legal Contracts",
    text: "To protect international buyers, sales and purchase agreements are notarized in dual-language formats (English/Japanese) with clear repatriation covenants." },
];

export default function AccreditationSection() {
  return (
    <section className="ag-accred">
      <div className="ag-accred__head">
        <div>
          <span className="ag-eyebrow"><BadgeCheck size={14} /> RIGOROUS ACCREDITATION STANDARDS</span>
          <h2>How We Vet &amp; Protect Overseas Buyers</h2>
          <p>SeaHome Lands enforces strict legal oversight. Only brokerages maintaining active notary
            credentials and flawless regulatory standing are certified into our network.</p>
        </div>
        <span className="ag-escrow"><Lock size={13} /> Escrow Security Guaranteed</span>
      </div>

      <div className="ag-accred__grid">
        {stages.map(({ icon: Icon, n, title, text }) => (
          <div className="ag-stage" key={n}>
            <span className="ag-stage__icon"><Icon size={20} /></span>
            <small>{n}</small>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}