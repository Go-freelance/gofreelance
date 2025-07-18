import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Brands } from "./components/Brands";
import { Services } from "./components/Services";
import { Partners } from "./components/Partners";
import { KeyFigures } from "./components/KeyFigures";
import { Work } from "./components/Work";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { ContactPage } from "./components/ContactPage";
import { AutomatisationPage, CampagneCrossCanalPage } from "./pages/services";
import ThirdPartyManagement from "./pages/ThirdPartyManagement";
import { AppointmentProvider } from "./contexts/AppointmentContext";

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <WhyUs />
      <KeyFigures />
      <Work />
      <Brands />
      <CallToAction />
      <Footer />
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AppointmentProvider>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tiers" element={<ThirdPartyManagement />} />
        <Route
          path="/services/automatisation"
          element={<AutomatisationPage />}
        />
        <Route
          path="/services/campagne-cross-canal"
          element={<CampagneCrossCanalPage />}
        />
      </Routes>
    </AppointmentProvider>
  );
}

export default App;
