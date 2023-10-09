import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mision from "../components/Mision";

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
            <Footer />
        </>
    );
}

export default Nosotros;