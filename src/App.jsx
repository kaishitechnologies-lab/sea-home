import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Page from "./pages/page";
import LocationsPage from "./features/locations/LocationsPage";
import HomePage from "./features/home/HomePage";
// import RentalPage from "./features/rentals/rentalpage"; 
// import BuyPage from "./features/buy/buyPage";
// import InvestPage from "./features/invest/investPage";
import AgenciesPage from "./features/agencies/agenciesPage";
import PropertyPage from "./features/property/property";

// Import your new AuthPage
import AuthPage from "./auth/AuthPage"; 

export default function App() {
  const location = useLocation();
  
  // Check if the current path is the auth page
  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {/* Only show Navbar if NOT on the auth page */}
      {!isAuthPage && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/rentals" element={<RentalPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/invest" element={<InvestPage />} /> */}
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/countries" element={<Page title="Countries" />} />
          <Route path="/agencies" element={<AgenciesPage/>} />
          <Route path="/locations" element={<LocationsPage />} />
          
          {/* Add the Auth Route */}
          <Route path="/auth" element={<AuthPage />} />

          {/* <Route path="*" element={<Page title="404 - Page not found" />} /> */}
        </Routes>
      </main>

      {/* Only show Footer if NOT on the auth page */}
      {!isAuthPage && <Footer />}
    </>
  );
}