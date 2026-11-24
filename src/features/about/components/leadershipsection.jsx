import { CheckCircle } from "lucide-react"; // Changed from BadgeCheck

const team = [
  {
    img: "/images (6).jpeg", // Update these paths to your actual files
    desk: "Tokyo Desk",
    name: "Kenji Takahashi",
    side: "高橋 健二",
    role: "Managing Director & Head of Tokyo Desk",
    tags: ["Tokyo Real Estate Trust", "Cross-Border M&A"],
    text: "Oversees bilateral family office allocations and Japanese institutional acquisitions into Sri Lanka’s luxury hospitality corridors.",
    foot: "Bilingual Desk: JP / EN",
  },
  {
    img: "/images (5).jpeg",
    desk: "Colombo HQ",
    name: "Ananya Perera",
    side: "LL.B (Hons)",
    role: "Managing Partner & Chief Conveyancing Officer",
    tags: ["Supreme Court Attorney", "Bim Saviya Class 1"],
    text: "Over 18 years of title deed perfection, resolving complex multi-generational co-ownership deeds and verifying cadastral boundaries across the Southern Province.",
    foot: "Deed Registrar Liaison",
  },
  {
    img: "/images (4).jpeg",
    desk: "Galle & Southern Desk",
    name: "Sarah Jenkins",
    side: "MRICS Assoc.",
    role: "Director of Expat Relocation & Coastal Acquisitions",
    tags: ["Galle Fort Heritage", "Weligama Coastal"],
    text: "Former London conveyancing advisor assisting European and Australian expatriates with turnkey beachfront estates and residency structuring.",
    foot: "Relocation & Turnkey",
  },
  {
    img: "/images (6).jpeg", // Assuming the pro file is an image
    desk: "Advisory Board",
    name: "Dr. Shirazi Fernando, PC",
    side: "President's Counsel",
    role: "Senior Counsel & Regulatory Advisor",
    tags: ["BOI Regulations", "Port City SEZ Counsel"],
    text: "Advises on multi-million dollar foreign direct investment (FDI) frameworks, BOI tax concessions, and bilateral commercial treaties.",
    foot: "President's Counsel",
  },
];

export default function LeadershipSection() {
  return (
    <section className="ab-section ab-leaders">
      <div className="ab-container">
        <header className="ab-center-head">
          <span className="ab-eyebrow">Cross-Border Governance</span>
          <h2 className="ab-h2">Executive Leadership &amp; Advisory Board</h2>
          <p>
            Led by prominent cross-border conveyancers, Japanese trust veterans, and
            coastal development authorities committed to zero-compromise client safety.
          </p>
        </header>

        <div className="ab-team">
          {team.map((m) => (
            <article className="ab-card ab-member" key={m.name}>
              <div className="ab-member-photo">
                <img src={m.img} alt={m.name} loading="lazy" />
                <span className="ab-desk">{m.desk}</span>
              </div>
              <div className="ab-member-body">
                <div className="ab-member-name">
                  <h3>{m.name}</h3>
                  <span>{m.side}</span>
                </div>
                <p className="ab-member-role">{m.role}</p>
                <div className="ab-chips">
                  {m.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <p className="ab-member-text">{m.text}</p>
                <div className="ab-member-foot">
                  <span>{m.foot}</span>
                  <CheckCircle size={18} strokeWidth={2.5} /> {/* Changed icon */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}