import React from "react";
import "./home.css";

import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import FeaturedListings from "./components/FeaturedListings";
import Destinations from "./components/Destinations";
import Agents from "./components/Agents";
import Testimonials from "./components/Testimonials";
import FooterCTA from "./components/FooterCTA";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsBar />
      <FeaturedListings />
      <Destinations />
      <Agents />
      <Testimonials />
      <FooterCTA />
    </div>
  );
};

export default HomePage;