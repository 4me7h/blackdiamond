import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Autos from "../components/Autos";
import Precios from "../components/Precios";

import imgBackground from "../images/hero-sorteos.jpg";

function Sorteos() {
  return(
    <>
      <Navbar />
      <Hero 
          imgBackground={imgBackground}
          text="Sorteos"
      />
      <Autos />
      <Precios />
      <Footer />
    </>
  );
}

export default Sorteos