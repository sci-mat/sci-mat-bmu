import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import PastEvents from "./components/PastEvents";
import Loader from "./components/Loader";
import { ScrollProgress } from "./animations/ScrollProgress";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
     {!loaded && <Loader setLoaded={setLoaded} />}
      <motion.div
        className="relative min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {loaded && (
          <div className="relative min-h-screen">
            <ParticleBackground />
            <div className="relative z-10">
              <Navbar />
              <ScrollProgress
                className="h-1 bg-shiny-progress"
                springOptions={{
                  stiffness: 250,
                  damping: 18,
                  mass: 0.3,
                }}
              />
              <Hero />
              <AboutUs />
              <PastEvents />
              <OurTeam />
              <Contactus />
              <Footer />
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default App;
