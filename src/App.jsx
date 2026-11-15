import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./pages/page";
import LocationsPage from "./features/locations/LocationsPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Page title="Home" />} />
          <Route path="/properties" element={<Page title="Properties" />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/how-it-works" element={<Page title="How It Works" />} />
          <Route path="/why-us" element={<Page title="Why Us" />} />
          <Route path="/faq" element={<Page title="FAQ" />} />
          <Route path="/contact" element={<Page title="Contact" />} />
          <Route path="*" element={<Page title="404 - Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}