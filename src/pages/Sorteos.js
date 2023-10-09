import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import imgBackground from "../images/hero-sorteos.jpg";

function Sorteos() {
  return(
    <>
      <Navbar />
      <Hero 
          imgBackground={imgBackground}
          text="Sorteos"
      />
      <Footer />
    </>
  );
}

export default Sorteos