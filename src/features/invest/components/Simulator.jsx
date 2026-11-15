import { useState } from "react";

const CLASSES = [
  { name: "Boutique Hotel / Villa", yieldPct: 12.5 },
  { name: "Port City Commercial", yieldPct: 10.8 },
  { name: "Land Sub-division", yieldPct: 9.5 },
];
const MIN = 250000, MAX = 5000000, LKR_RATE = 300;

const fmt = (n) => Math.round(n).toLocaleString("en-US");

export default function Simulator() {
  const [capital, setCapital] = useState(1250000);
  const [cls, setCls] = useState(0);

  const y = CLASSES[cls].yieldPct;
  const net = capital * (y / 100);
  const taxSaved = net * 0.3;
  const pct = ((capital - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="inv-sim-wrap">
      <div className="inv-sim">
        <div className="inv-sim-left">
          <small>PORTFOLIO PROJECTION ENGINE</small>
          <h2>Institutional Net Yield Simulator</h2>
          <p>
            Estimate annual gross cash flow, corporate tax exemptions under BOI
            Section 17 / Colombo Port City SEZ, and net repatriatable profits
            through authorized Inward Investment Accounts (IIA).
          </p>

          <div className="inv-sim-row">
            <span>Investment Capital Allocation</span>
            <b>${fmt(capital)} USD</b>
          </div>
          <input
            className="inv-range"
            type="range"
            min={MIN}
            max={MAX}
            step={50000}
            value={capital}
            onChange={(e) => setCapital(+e.target.value)}
            style={{ background: `linear-gradient(90deg,#0b4a7a ${pct}%,#dbe6fb ${pct}%)` }}
          />
          <div className="inv-ticks">
            <span>$250k (BOI Min)</span><span>$2.5M</span><span>$5.0M+</span>
          </div>

          <div className="inv-sim-row second">
            <span>Target Asset Class / Operating Model</span>
            <em>{y}% Projected Yield</em>
          </div>
          <div className="inv-classes">
            {CLASSES.map((c, i) => (
              <button key={c.name} className={cls === i ? "on" : ""} onClick={() => setCls(i)}>
                {c.name}
              </button>
            ))}
          </div>

          <p className="inv-note">
            Calculations incorporate current 2024 Sri Lanka Board of Investment (BOI)
            statutory tax holiday provisions.
          </p>
        </div>

        <div className="inv-sim-right">
          <div className="inv-sim-rh">
            <span>ANNUALIZED PRO-FORMA</span>
            <i>USD Repatriable</i>
          </div>
          <div className="lab">Estimated Annual Net Yield</div>
          <div className="big">${fmt(net)}</div>
          <div className="lkr">~LKR {fmt(net * LKR_RATE)} / year</div>

          <div className="rows">
            <div><span>BOI / SEZ Corporate Tax Saved</span><b>${fmt(taxSaved)} USD (0% Tax)</b></div>
            <div><span>Repatriation Authorization</span><b>Instant (IIA Guaranteed)</b></div>
            <div><span>Investor Residency Eligible</span><b>10-Year Golden Visa</b></div>
          </div>
          <button>Request Custom Underwriting Model</button>
        </div>
      </div>
    </section>
  );
}