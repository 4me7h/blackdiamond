import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/Hero";

import imgBackground from "../images/hero-login.jpg";

function Login() {
  return(
    <>
      <Navbar />
      <Hero 
          imgBackground={imgBackground}
          text="Login"
      />
      <Footer />
    </>
  );
}

export default Login