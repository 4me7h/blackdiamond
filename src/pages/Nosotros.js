import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mision from "../components/Mision";
import Faq from "../components/Faq";

import imgBackground from "../images/hero-nosotros.jpg";

const Nosotros = () => {
    return(
        <>
            <Navbar />
            <Hero 
                imgBackground={imgBackground}
                text="Nosotros"
            />
            <Mision />
            <Faq />
            <Footer />
        </>
    );
}

export default Nosotros;