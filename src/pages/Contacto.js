import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

import imgBackground from "../images/hero-contacto.jpg";

function Contacto() {
  return(
    <>
      <Navbar />
      <Hero 
          imgBackground={imgBackground}
          text="Contacto"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contacto