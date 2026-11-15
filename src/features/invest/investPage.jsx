import "./invest.css";
import HeroSection from "./components/herosection";
import StatsRow from "./components/StatsRow";
import Screener from "./components/Screener";
import Opportunities from "./components/Opportunities";
import Simulator from "./components/Simulator";
import LegalFramework from "./components/LegalFramework";
import ConfidentialBanner from "./components/ConfidentialBanner";

export default function InvestPage() {
  return (
    <div className="inv-page">
      <HeroSection />
      <div className="inv-band">
        <StatsRow />
        <Screener />
      </div>
      <Opportunities />
      <Simulator />
      <LegalFramework />
      <ConfidentialBanner />
    </div>
  );
}