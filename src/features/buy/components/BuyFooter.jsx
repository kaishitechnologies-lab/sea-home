const Col = ({ title, items }) => (
  <div>
    <h5>{title}</h5>
    {items.map((i) => <a href="#" key={i}>{i}</a>)}
  </div>
);

export default function BuyFooter() {
  return (
    <footer className="buy-footer">
      <div className="buy-footer-in">
        <div className="brand">
          <div className="logo-row">
            <div className="logo"><span className="material-symbols-outlined">home_work</span></div>
            <div><b>SeaHome Lands</b><small>SRI LANKA REAL ESTATE</small></div>
          </div>
          <p>Sri Lanka's dedicated relocation and real estate agency for foreigners, expats, and digital nomads. Secure leases, verified deeds, and bilingual contracts.</p>
          <div className="addr">
            <span><span className="material-symbols-outlined">location_on</span> Colombo 03, Sri Lanka</span>
            <span><span className="material-symbols-outlined">apartment</span> Shibuya, Tokyo, Japan</span>
          </div>
        </div>
        <Col title="PROPERTIES" items={["Colombo Condominiums", "Galle Beachfront Villas", "Kandy Hill Country Houses", "Nomad Surf Bungalows", "Commercial & Coworking"]} />
        <Col title="EXPAT GUIDES" items={["Sri Lanka Foreign Lease Law", "Digital Nomad Visa Guide", "Escrow Deposit System", "Banking & Remittances", "Tokyo Desk Japanese FAQ"]} />
        <div>
          <h5>STAY UPDATED</h5>
          <p className="sub">Receive vetted new listings and Sri Lankan market reports.</p>
          <div className="join"><input placeholder="Your email..." /><button>Join</button></div>
        </div>
      </div>
    </footer>
  );
}