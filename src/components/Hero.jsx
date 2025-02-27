import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative flex justify-center items-center min-h-screen bg-transparent">
        <ParticleBackground />
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6a11cb]/20 to-[#00b4ff]/30 "></div>
          <div className="relative z-10 w-full text-white py-16 px-6 md:px-10 text-center flex flex-col justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-2 tracking-wide">
              Your Gateway to Scientific Brilliance
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto animate-fade-in">
              Where science, mathematics, and technology converge to shape the
              future.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => scrollToSection("about")}
        >
          <svg
            className="w-12 h-12 text-white animate-bounce pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 6l-7 7-7-7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 16l-7 7-7-7"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
