import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./pages/page";
import LocationsPage from "./features/locations/LocationsPage";
import HomePage from "./features/home/HomePage";
import RentalPage from "./features/rentals/rentalpage"; 
import BuyPage from "./features/buy/buyPage";
import InvestPage from "./features/invest/investPage";
import AgenciesPage from "./features/agencies/agenciesPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
         <Route path="/rentals" element={<RentalPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/countries" element={<Page title="Countries" />} />
          <Route path="/agencies" element={<AgenciesPage/>} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/about-us" element={<Page title="About Us" />} />
          <Route path="*" element={<Page title="404 - Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}