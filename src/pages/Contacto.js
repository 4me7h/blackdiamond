import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import imgBackground from "../images/hero-contacto.jpg";

function Contacto() {
  return(
    <>
      <Navbar />
      <Hero 
          imgBackground={imgBackground}
          text="Contacto"
      />
      <Footer />
    </>
  );
}

export default Contacto