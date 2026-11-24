import { ShieldCheck, IdCard, BadgeCheck, Gavel } from "lucide-react";

const items = [
  {
    Icon: ShieldCheck,
    title: "Board of Investment (BOI)",
    sub: "Registered Entity (Lic: LK-BOI-2024-884)",
    text: "Approved under Section 17 of the BOI Law for foreign capital facilitation and hotel development advisory.",
  },
  {
    Icon: IdCard,
    title: "Ceylon Estate Agents (CEA)",
    sub: "Licensed Brokerage (#CEA-LK-402)",
    text: "Fully certified by the national governing body adhering strictly to transparent market commission codes.",
  },
  {
    Icon: BadgeCheck,
    title: "Bim Saviya Title Registry",
    sub: "Audited Conveyancers",
    text: "Certified practitioners under the Registration of Title Act No. 21 of 1998, ensuring indefeasible state-guaranteed ownership.",
  },
  {
    Icon: Gavel,
    title: "Tokyo Roppongi Bar Desk",
    sub: "Cross-Border Legal Affiliate",
    text: "Integrated collaboration for bilingual documentation, apostille attestations, and compliance under Japanese legal ethics.",
  },
];

export default function ComplianceSection() {
  return (
    <section className="ab-section ab-compliance">
      <div className="ab-container">
        <header className="ab-center-head">
          <span className="ab-eyebrow">Institutional Safety</span>
          <h2 className="ab-h2">Compliance &amp; Sovereign Accreditations</h2>
        </header>

        <div className="ab-accred">
          {items.map(({ Icon, ...i }) => (
            <article className="ab-card ab-accred-card" key={i.title}>
              <span className="ab-icon-box"><Icon size={22} /></span>
              <h3>{i.title}</h3>
              <span className="ab-accred-sub">{i.sub}</span>
              <p>{i.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}