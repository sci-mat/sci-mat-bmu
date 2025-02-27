import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import PastEvents from "./components/PastEvents";
import Special from "./components/Special";
import Mentor from "./components/Mentor";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Mentor/>
      <OurTeam />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
