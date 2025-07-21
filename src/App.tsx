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
import ThirdPartyManagement from "./pages/ThirdPartyManagement";
import { CGUPage } from "./pages/legal/CGUPage";
import { CGVPage } from "./pages/legal/CGVPage";
import { PolitiqueConfidentialitePage } from "./pages/legal/PolitiqueConfidentialitePage";
import { PolitiqueProtectionDonneesPage } from "./pages/legal/PolitiqueProtectionDonneesPage";

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
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tiers" element={<ThirdPartyManagement />} />
        <Route path="/cgu" element={<CGUPage />} />
        <Route path="/cgv" element={<CGVPage />} />
        <Route
          path="/privatepolicy"
          element={<PolitiqueConfidentialitePage />}
        />
        <Route
          path="/politique-protection-donnees"
          element={<PolitiqueProtectionDonneesPage />}
        />
      </Routes>
    </>
  );
}

export default App;
