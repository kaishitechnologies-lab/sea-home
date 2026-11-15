import "./buy.css";
import HeroSection from "./components/HeroSection";
import FilterPanel from "./components/FilterPanel";
import ResultsBar from "./components/ResultsBar";
import Properties from "./components/properties";
import Pagination from "./components/Pagination";
import LegalRoutes from "./components/LegalRoutes";
import MandateBanner from "./components/MandateBanner";

export default function BuyPage() {
  return (
    <div className="buy-page">
      <HeroSection />
      <FilterPanel />
      <ResultsBar />
      <Properties />
      <Pagination />
      <LegalRoutes />
      <MandateBanner />
    </div>
  );
}