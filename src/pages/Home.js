import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Autos from "../components/Autos";
import Banner from "../components/Banner";
import Gridimg from "../components/Gridimg";
import Footer from "../components/Footer";

import imgBackground from "../images/hero-home.jpg";

const Home = () => {
    return(
        <>  
            <Navbar />
            <Hero 
                imgBackground={imgBackground}
            />
            <Nosotros />
            <Autos />
            <Banner />
            <Gridimg />
            <Footer />
        </>
    );
}

export default Home;