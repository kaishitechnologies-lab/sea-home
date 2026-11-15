import { Home, MapPin, Building2 } from "lucide-react";

const cols = [
  { title: "PROPERTIES", items: ["Colombo Condominiums", "Galle Beachfront Villas", "Kandy Hill Country Houses", "Nomad Surf Bungalows", "Commercial & Coworking"] },
  { title: "EXPAT GUIDES", items: ["Sri Lanka Foreign Lease Law", "Digital Nomad Visa Guide", "Escrow Deposit System", "Banking & Remittances", "Tokyo Desk Japanese FAQ"] },
];

export default function AgenciesFooter() {
  return (
    <footer className="ag-footer">
      <div className="ag-footer__inner">
        <div className="ag-footer__brand">
          <div className="ag-footer__logo">
            <span className="ag-brand__icon"><Home size={18} /></span>
            <span><strong>SeaHome Lands</strong><small>SRI LANKA REAL ESTATE</small></span>
          </div>
          <p>Sri Lanka's dedicated relocation and real estate agency for foreigners, expats, and digital nomads. Secure leases, verified deeds, and bilingual contracts.</p>
          <div className="ag-footer__loc">
            <span><MapPin size={12} /> Colombo 03, Sri Lanka</span>
            <span><Building2 size={12} /> Shibuya, Tokyo, Japan</span>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h5>{c.title}</h5>
            <ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul>
          </div>
        ))}

        <div>
          <h5>STAY UPDATED</h5>
          <p className="ag-footer__news">Receive vetted new listings and Sri Lankan market reports.</p>
          <form className="ag-subscribe" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email..." />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </footer>
  );
}