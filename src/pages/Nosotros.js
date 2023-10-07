import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import imgBackground from "../images/hero-nosotros.jpg";

const Nosotros = () => {
    return(
        <>
        <Navbar />
        <Hero 
            imgBackground={imgBackground}
            text="Nosotros"
        />
        <Footer />
        </>
        
    );
}

export default Nosotros;