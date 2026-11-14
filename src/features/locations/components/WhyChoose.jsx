import {
  ShieldCheck,
  Scale,
  Lock,
  MessageCircle,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "100% In-Person Verified Deeds",
    text: "Every property and landlord deed is physically verified by our legal partners before publication.",
  },
  {
    icon: Scale,
    title: "Foreigner-Legal Leases",
    text: "Bilingual English and Japanese tenancy agreements with local police station residency registration assistance.",
  },
  {
    icon: Lock,
    title: "Deposit Escrow Protection",
    text: "Safeguard security deposits via institutional escrow with transparent, dispute-free return clauses.",
  },
  {
    icon: MessageCircle,
    title: "Tokyo & Colombo Concierge",
    text: "Dedicated WhatsApp support in English, Japanese, and Sinhala before, during, and after your tenancy.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why">
      <span className="why__kicker">Why Choose</span>
      <h2>SeaHome Lands for Foreigners?</h2>
      
      {/* SVG wave from Figma */}
      <svg className="why__wave" width="48" height="6" viewBox="0 0 48 6" fill="none">
        <path
          d="M1 3c4-3 7 3 11 0s7 3 11 0 7 3 11 0 7 3 11 0"
          stroke="#0a6cf0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <p className="why__lead">
        Renting in a new country can feel intimidating. We streamline every step
        with transparent bilingual contracts, verified properties, and escrow
        protections.
      </p>

      <div className="why__grid">
        {items.map(({ icon: Icon, title, text }) => (
          <div className="why__item" key={title}>
            <span className="why__icon">
              {/* Reduced icon size to 18 to match Figma proportions */}
              <Icon size={18} />
            </span>
            <div>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="why__deco">
        {/* The large headphones icon in the corner */}
        <Headphones size={64} strokeWidth={1.5} />
      </div>
    </section>
  );
}