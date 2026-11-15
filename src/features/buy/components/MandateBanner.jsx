import {
  Lock, Shield, Gavel, Wallet, FolderOpen, MessageCircle,
} from "lucide-react";

const ic = { className: "buy-icon", size: "1em", strokeWidth: 2 };

export default function MandateBanner() {
  return (
    <section className="buy-mandate-wrap">
      <div className="buy-mandate">
        <div className="left">
          <span className="tag">
            <Lock {...ic} /> Bespoke Institutional Mandate
          </span>
          <h2>
            Seeking Exclusive Off-Market Estates
            <br />
            or Commercial Parcels?
          </h2>
          <p>
            Over 35% of prime beachfront land and luxury estates in Galle and
            Colombo 07 are held strictly confidential. Our bilingual Tokyo and
            Colombo acquisitions desk coordinates confidential NDAs and on-ground
            private inspections.
          </p>
          <div className="marks">
            <span><Shield {...ic} /> Strict Non-Disclosure Guarantee</span>
            <i>•</i>
            <span><Gavel {...ic} /> Supreme Court Conveyancers</span>
            <span><Wallet {...ic} /> Dedicated Inward Remittance Team</span>
          </div>
        </div>

        <div className="right">
          <button className="white">
            <FolderOpen {...ic} /> Request Confidential Portfolio
          </button>
          <button className="ghost">
            <MessageCircle {...ic} /> Chat on WhatsApp / Tokyo Desk
          </button>
        </div>
      </div>
    </section>
  );
}