import { useState } from "react";
import {
  Ruler, Building2, BedDouble, Mountain, Landmark, Trees, Mail, Lock, ArrowRight,
} from "lucide-react";

const DATA = [
  {
    img: "/invest.01.avif",
    b1: "COASTAL DEVELOPMENT", b2: "BOI SECTION 17",
    Over: Ruler, over: "3.8 Acres (608 Perches)",
    loc: "Mirissa South, Southern Province",
    title: "Mirissa Cove Luxury Eco-Resort Land Parcel",
    m1: ["Projected IRR", "16.4%"], m2: ["Approved Keys", "32 Boutique Suites"],
    list: ["140m Direct White Sand Frontage", "Coast Conservation Dept (CCD) Pre-Cleared", "Tokyo Architectural Concept Pack Included"],
    lkr: "~LKR 555,000,000", usd: "$1,850,000",
    btn1: "Memo (PDF)", btn2: "Due Diligence",
  },
  {
    img: "/invest.02.webp",
    b1: "COMMERCIAL FREEHOLD", b2: "PORT CITY SEZ",
    Over: Building2, over: "5,400 sq.ft Floorplate",
    loc: "Port City SEZ, Colombo 01",
    title: "Port City Colombo Financial Tower - Grade A Floor",
    m1: ["Net Rental Yield", "10.8%"], m2: ["Tax Exemption", "25-Yr 0% Corp Tax"],
    list: ["Offshore SEZ Status (Act No. 11 of 2021)", "Zero Foreign Exchange Controls (100% Repatriation)", "LEED Platinum Certified with Marina Views"],
    lkr: "~LKR 420,000,000", usd: "$1,400,000",
    btn1: "Prospectus", btn2: "Legal Counsel",
  },
  {
    img: "/invest.03.jpeg",
    b1: "TURNKEY HOSPITALITY", b2: "CASH-FLOWING",
    Over: BedDouble, over: "12 Designer Suites",
    loc: "Ahangama Surf Strip, Galle Coast",
    title: "Ahangama Turnkey Surf & Wellness Boutique Hotel",
    m1: ["Operational Yield", "14.2% Net"], m2: ["Net Cash Flow", "$135,000 / Year"],
    list: ["Fully Operational with 88% Year-Round Occupancy", "Solar Microgrid + 100kVA Industrial Backup", "Commercial Liquor & Restaurant Licenses Active"],
    lkr: "~LKR 285,000,000", usd: "$950,000",
    btn1: "Audited P&L", btn2: "Tokyo Video Tour",
  },
  {
    img: "/invest.04.jpg",
    b1: "AGRI & ECO-TOURISM", b2: "EXPORT CROP",
    Over: Mountain, over: "22 Acres Operational",
    loc: "Pedro Valley, Central Highlands",
    title: "Nuwara Eliya Specialty Tea & Eco-Lodge Estate",
    m1: ["Blended Yield", "11.5% ROI"], m2: ["Residency Visa", "10-Yr Golden Visa"],
    list: ["6 Operational Luxury Heritage Chalets", "Certified Organic Single-Estate Ceylon Black Tea", "Perpetual Mountain Spring Water Extraction Rights"],
    lkr: "~LKR 234,000,000", usd: "$780,000",
    btn1: "Crop Dossier", btn2: "Inquire Desk", Btn2Icon: Mail,
  },
  {
    img: "/invest.05.jpeg",
    b1: "UNESCO HERITAGE", b2: "TRIPLE NET LEASE",
    Over: Landmark, over: "Rare Freehold Fort Deed",
    loc: "Galle Fort World Heritage Site",
    title: "Galle Fort Restored 18th-Century Commercial Arcade",
    m1: ["NNN Net Yield", "9.4% USD"], m2: ["Lease Term", "10-Yr Anchor Tenants"],
    list: ["Tenanted by Michelin-Guide Dining & Gem Brands", "Zero Vacancy History in 15 Consecutive Years", "Unrivaled Capital Preservation & Trophy Status"],
    lkr: "~LKR 630,000,000", usd: "$2,100,000",
    btn1: "Leases", btn2: "Private Showing", Btn2Icon: Lock,
  },
  {
    img: "/invest.06.jpeg",
    b1: "CLIFFTOP & BEACH", b2: "SUB-DIVISION READY",
    Over: Trees, over: "2.5 Acres (400 Perches)",
    loc: "Seenimodera Bay, Tangalle Coast",
    title: "Tangalle Clifftop Oceanfront Development Plot",
    m1: ["Projected Equity Multiple", "2.8x MOIC"], m2: ["Sub-division", "5 Private Villa Plots"],
    list: ["Clean Bim Saviya Class 1 Title (Direct Owner)", "Paved Road Access, 3-Phase Power & Deep Well", "Private Sandy Swimming Cove Access"],
    lkr: "~LKR 186,000,000", usd: "$620,000",
    btn1: "Topo Survey", btn2: "Inquire Plot",
  },
];

function Card({ d }) {
  const { Over, Btn2Icon } = d;
  return (
    <article className="inv-card">
      <div className="inv-card-img">
        <img
          src={d.img}
          alt={d.title}
          onError={(e) => { e.currentTarget.src = "/buy-property.jpeg"; }}
        />
        <div className="inv-badges">
          <span className="dark">{d.b1}</span>
          <span className="light">{d.b2}</span>
        </div>
        <div className="inv-over">
          <Over className="inv-ic" size="1em" strokeWidth={2} />
          <span>{d.over}</span>
        </div>
      </div>

      <div className="inv-card-body">
        <div className="inv-loc">{d.loc}</div>
        <h4>{d.title}</h4>

        <div className="inv-metrics">
          <div>
            <small>{d.m1[0]}</small>
            <b className="big">{d.m1[1]}</b>
          </div>
          <div className="r">
            <small>{d.m2[0]}</small>
            <b>{d.m2[1]}</b>
          </div>
        </div>

        <ul>
          {d.list.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <div className="inv-ask">
          <div className="inv-ask-top">
            <span>Asking Price (USD)</span>
            <b>{d.lkr}</b>
          </div>
          <div className="inv-usd">{d.usd}</div>
          <div className="inv-btns">
            <button className="solid">{d.btn1}</button>
            <button className="link">
              {Btn2Icon && <Btn2Icon className="inv-ic" size="1em" strokeWidth={2} />}
              {d.btn2}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Opportunities() {
  return (
    <section className="inv-opps">
      <div className="inv-opps-head">
        <div>
          <small>VETTED SOVEREIGN &amp; PRIVATE PORTFOLIOS</small>
          <h2>Curated Institutional Opportunities</h2>
        </div>
        <a href="#">
          Explore all 320+ listings <ArrowRight className="inv-ic" size="1em" strokeWidth={2.2} />
        </a>
      </div>
      <div className="inv-opps-grid">
        {DATA.map((d) => <Card key={d.title} d={d} />)}
      </div>
    </section>
  );
}