import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Autos from "../components/Autos";
import Banner from "../components/Banner";
import Gridimg from "../components/Gridimg";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>  
            <Navbar />
            <Hero />
            <About />
            <Autos />
            <Banner />
            <Gridimg />
            <Footer />
        </>
    );
}

export default Home;