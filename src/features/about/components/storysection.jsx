import { Scale, Landmark } from "lucide-react";

const pillars = [
  {
    no: "01",
    label: "Pillar One",
    title: "Uncompromising Legal Diligence",
    text: "Every parcel undergoes a rigorous 30-year chain of title investigation, cadastral GPS boundary surveys, local authority extract verifications, and strict Bim Saviya Class 1 certification under the supervision of senior Supreme Court conveyancers.",
    dark: true,
  },
  {
    no: "02",
    label: "Pillar Two",
    title: "Direct Bilateral Desks",
    text: "We operate native English, Japanese (日本語), and German advisory desks. Our Tokyo team facilitates client consultations, document notarization, and tax treaties locally, while Colombo teams handle boots-on-the-ground transactions seamlessly.",
  },
  {
    no: "03",
    label: "Pillar Three",
    title: "End-to-End Asset Custody",
    text: "From site selection and sovereign planning approvals through to luxury villa design-build custody, leasing yield administration, and compliant capital repatriation via Central Bank of Sri Lanka IIA mechanisms.",
  },
];

export default function StorySection() {
  return (
    <section className="ab-section ab-story">
      <div className="ab-container">
        <header className="ab-story-head">
          <div>
            <span className="ab-eyebrow">Heritage &amp; Rigor</span>
            <h2 className="ab-h2">The SeaHome Lands Story &amp; Core Pillars</h2>
          </div>
          <p className="ab-lead-right">
            Harmonizing meticulous Tokyo compliance ethics with Sri Lanka’s
            unparalleled coastal sanctuaries and long-term capital appreciation.
          </p>
        </header>

        <div className="ab-story-grid">
          <div className="ab-card ab-story-main">
            <span className="ab-tag">
              <Scale size={16} /> Bilateral Investment Architecture
            </span>
            <h3 className="ab-h3">Where Strict Japanese Due Diligence Meets Indian Ocean Sanctuary</h3>

            <p>
              Acquiring prime property across emerging island markets historically
              presented structural opacity: fragmented ownership titles, ambiguous
              cadastral surveys, and complex foreign exchange controls. SeaHome Lands
              was established to eliminate this friction entirely.
            </p>
            <p>
              Headquartered between Colombo’s World Trade Center and Tokyo’s Roppongi
              Hills, we bring institutional Japanese governance—rooted in exhaustive
              compliance audits, risk mitigation, and fiduciary integrity—to Sri
              Lanka’s premier freehold and long-term commercial leasehold sectors.
            </p>
            <p>
              Our direct affiliation with Sri Lankan Supreme Court conveyancers and
              Colombo Port City Special Economic Zone (SEZ) advisors guarantees that
              foreign buyers navigate Inward Investment Accounts (IIA), corporate
              holding frameworks, and deed registrations without bureaucratic risk.
            </p>

            <div className="ab-escrow">
              <span className="ab-escrow-icon"><Landmark size={22} /></span>
              <div>
                <h4>Escrow-Backed Conveyancing</h4>
                <p>
                  Zero advance disbursements. All earnest funds are held within
                  tier-one commercial bank trust accounts in Sri Lanka until title
                  deed deeds are formally registered at the District Land Registry.
                </p>
              </div>
            </div>
          </div>

          <div className="ab-pillars">
            {pillars.map((p) => (
              <article className="ab-card ab-pillar" key={p.no}>
                <span className={`ab-pillar-no ${p.dark ? "is-dark" : ""}`}>{p.no}</span>
                <div>
                  <span className="ab-pillar-label">{p.label}</span>
                  <h3 className="ab-pillar-title">{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}