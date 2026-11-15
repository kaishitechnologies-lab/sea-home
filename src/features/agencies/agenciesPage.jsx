import "./agencies.css";
import AgenciesNavbar from "./components/AgenciesNavbar";
import HeroSection from "./components/herosection";
import AgencyFilters from "./components/AgencyFilters";
import AgencyGrid from "./components/AgencyGrid";
import AccreditationSection from "./components/AccreditationSection";
import PartnerCTA from "./components/PartnerCTA";
import AgenciesFooter from "./components/AgenciesFooter";

export default function AgenciesPage() {
  return (
    <div className="ag-page">
      <HeroSection />
      <main className="ag-main">
        <AgencyFilters />
        <AgencyGrid />
        <AccreditationSection />
        <PartnerCTA />
      </main>
    </div>
  );
}