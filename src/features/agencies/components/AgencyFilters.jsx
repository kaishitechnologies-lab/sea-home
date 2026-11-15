import { Search, ChevronDown, Check, ShieldCheck, Building, FileText } from "lucide-react";

const chips = [
  { label: "CEA Licensed Brokerage", icon: Check, active: true },
  { label: "Bim Saviya Audited", icon: ShieldCheck },
  { label: "Tokyo Desk Affiliated", icon: Building },
  { label: "Bilingual Contracts (EN/JA)", icon: FileText },
];

export default function AgencyFilters() {
  return (
    <div className="ag-filters">
      <div className="ag-filters__row">
        <label className="ag-field ag-field--search">
          <Search size={16} />
          <input type="text" placeholder="Search agency name, license #, or broker..." />
        </label>
        <div className="ag-field ag-field--select">
          <select defaultValue="all"><option value="all">All Regions (All Sri Lanka)</option></select>
          <ChevronDown size={16} />
        </div>
        <div className="ag-field ag-field--select">
          <select defaultValue="all"><option value="all">All Specializations</option></select>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="ag-filters__chips">
        <span className="ag-filters__label">COMPLIANCE:</span>
        {chips.map(({ label, icon: Icon, active }) => (
          <button key={label} className={`ag-chip ${active ? "is-active" : ""}`}>
            <Icon size={13} /> {label}
          </button>
        ))}
      </div>

      <div className="ag-filters__sort">
        <span>Showing <strong>42 Certified Agencies</strong></span>
        <div className="ag-sort">
          <select defaultValue="rating"><option value="rating">Highest Expat Rating</option></select>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}