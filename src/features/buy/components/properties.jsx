import PropertyCard from "./PropertyCard";

const IMG = "/buy-property.jpeg";

export const properties = [
  {
    id: 1, image: IMG,
    badge1: { text: "100% FOREIGN FREEHOLD", color: "blue" }, badge2: "4TH FL+ CONDO ACT",
    overlay: { icon: "trending_up", label: "Projected Net Yield:", value: "8.4% Net" },
    location: "Galle Face Terrace, Colombo 03", title: "The Ocean Sapphire Freehold Penthouse",
    beds: 3, baths: 4, sqft: "2,850", extra: "Floor 26",
    chips: ["Tokyo Desk Ready", "Private Plunge Pool", "Dual Parking"],
    usd: "$680,000 USD", lkr: "LKR 204,000,000 • Inward IIA Transfer",
    rightLabel: "Est. Rental", rightValue: "$4,200 / mo",
    action: { icon: "analytics", label: "Financials & Yields" },
  },
  {
    id: 2, image: IMG,
    badge1: { text: "99-YEAR EXTENDABLE LEASE", color: "orange" }, badge2: "BOI STRUCTURE APPR",
    overlay: { icon: "verified", label: "Projected Net Yield:", value: "9.2% Net", green: true },
    location: "Thalpe Golden Mile, Galle Coast", title: "Serendib Colonial Beachfront Estate",
    beds: 5, baths: 6, sqft: "5,400", extra: "1.2 Acres Beach",
    chips: ["Staff Quarters", "Industrial Backup Gen", "Direct Beach Access"],
    usd: "$1,250,000 USD", lkr: "LKR 375,000,000 • Tourism License Ready",
    rightLabel: "Annual Gross", rightValue: "$145,000 / yr",
    action: { icon: "description", label: "Legal Pack (PDF)" },
  },
  {
    id: 3, image: IMG,
    badge1: { text: "ACTIVE TURNKEY RESORT", color: "green" }, badge2: "BIM SAVIYA TITLE",
    overlay: { icon: "payments", label: "Projected Net Yield:", value: "11.5% Net", green: true },
    location: "Pelena Coast, Weligama", title: "Weligama Bay Surf & Boutique Villa",
    beds: 4, baths: 4, sqft: "3,200", extra: "35 Perches",
    chips: ["Walk to Main Break", "Coworking Lounge", "Starlink & Fiber Ready"],
    usd: "$540,000 USD", lkr: "LKR 162,000,000 • Airbnb Superhost 4.98★",
    rightLabel: "ADR Peak", rightValue: "$380 / nt",
    action: { icon: "bar_chart", label: "Financials & Yields" },
  },
  {
    id: 4, image: IMG,
    badge1: { text: "HERITAGE FREEHOLD", color: "purple" }, badge2: "ORGANIC TEA YIELD",
    overlay: { icon: "nature", label: "Agricultural ROI:", value: "7.1% Net" },
    location: "Pedro Valley, Nuwara Eliya", title: "Nuwara Eliya Mountain Mist Tea Bungalow",
    beds: 4, baths: 3, sqft: "3,800", extra: "4.5 Acres Tea",
    chips: ["Crop Harvest Income", "Fireplace Suites", "Cool Climate (16°C)"],
    usd: "$420,000 USD", lkr: "LKR 126,000,000 • Pure Spring Water Source",
    rightLabel: "Tea Production", rightValue: "1,800 kg / mo",
    action: { icon: "verified_user", label: "Title Pack" },
  },
  {
    id: 5, image: IMG,
    badge1: { text: "TAX-EXEMPT SEZ FREEHOLD", color: "blue" }, badge2: "OFFSHORE ACCTS ALL",
    overlay: { icon: "account_balance", label: "Capital Gains:", value: "0% SEZ Tax" },
    location: "Port City SEZ (Special Economic Zone), Colombo", title: "Port City Marina View Horizon Residence",
    beds: 2, baths: 2, sqft: "1,450", extra: "Marina Frontage",
    chips: ["Multi-Currency Repat", "VIP Yacht Slip", "Golden Visa Tier 1"],
    usd: "$395,000 USD", lkr: "LKR 118,500,000 • 9.8% Net Projected Yield",
    rightLabel: "Holding Tax", rightValue: "0% Exempt", rightGreen: true,
    action: { icon: "verified_user", label: "SEZ Incentives" },
  },
  {
    id: 6, image: IMG,
    badge1: { text: "99-YEAR LEASE", color: "green" }, badge2: "GATED PRIVACY",
    overlay: { icon: "speed", label: "Commute:", value: "20 Min to CBD" },
    pin: true, location: "Hotel Road, Mount Lavinia", title: "Mount Lavinia Sunset Shoreline Villa",
    beds: 3, baths: 3.5, sqft: "2,600", extra: "20 Perches",
    chips: ["Commuter Rail 5 Min", "Fiber Broadband", "Full Generator Setup"],
    usd: "$310,000 USD", lkr: "LKR 93,000,000 • Projected Yield: 8.1% Net",
    rightLabel: "Long-Term Rent", rightValue: "$2,100 / mo",
    action: { icon: "calendar_month", label: "Schedule Tour" },
  },
];

export default function Properties() {
  return (
    <section className="buy-grid">
      {properties.map((p) => (
        <PropertyCard key={p.id} p={p} />
      ))}
    </section>
  );
}