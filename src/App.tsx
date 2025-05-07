import { useState } from "react";
import { Navigation } from "./components/Navigation";
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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

export default App;
