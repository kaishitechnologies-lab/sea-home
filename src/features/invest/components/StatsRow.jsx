import { TrendingUp, Percent, Umbrella, BadgeCheck, CircleDollarSign } from "lucide-react";

const STATS = [
  { Icon: TrendingUp, label: "TOURISM CAGR", value: "+18.4%", sub: "Projected through 2028" },
  { Icon: Percent, label: "HOSPITALITY YIELD", value: "11.2% - 15.8%", sub: "Average Net Operational ROI" },
  { Icon: Umbrella, label: "PORT CITY SEZ TAX", value: "0% Holiday", sub: "Guaranteed up to 25 Years" },
  { Icon: BadgeCheck, label: "BIM SAVIYA TITLE", value: "100% Audited", sub: "Absolute Sovereign Registry" },
  { Icon: CircleDollarSign, label: "REPATRIATION", value: "Central Bank IIA", sub: "Dual-Currency Unrestricted Exit" },
];

export default function StatsRow() {
  return (
    <section className="inv-stats">
      {STATS.map(({ Icon, label, value, sub }) => (
        <div className="inv-stat" key={label}>
          <div className="inv-stat-top">
            <span>{label}</span>
            <Icon className="inv-ic" size="1em" strokeWidth={2} />
          </div>
          <b>{value}</b>
          <small>{sub}</small>
        </div>
      ))}
    </section>
  );
}