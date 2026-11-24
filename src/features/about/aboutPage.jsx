import "./about.css";
import HeroSection from "./components/herosection";
import StorySection from "./components/storysection";
import LeadershipSection from "./components/leadershipsection";
import OperationsSection from "./components/operationssection";
import ComplianceSection from "./components/compliancesection";

export default function AboutPage() {
  return (
    <main className="ab-page">
      <HeroSection />
      <StorySection />
      <LeadershipSection />
      <OperationsSection />
      <ComplianceSection />
    </main>
  );
}