
const Hero = ()=>{
      return(
        <section id="home">
        <div className="flex justify-center items-center bg-transparent min-h-screen py-40">
          <div className="max-w-[800px] w-full bg-transparent text-white py-16 px-10">
            <div className="flex justify-center text-center items-center">
                <h1 
                className="text-4xl md:text-6xl font-body"
                >Innovate With Us</h1>
            </div>
            <div className="text-center md:p-4 py-4 px-1.5">
              <p className="text-white text-ellipsis text-lg md:text-xl font-light opacity-70">
                The SCIMAT club is all about realising the importance of science and mathematics and the things one can do with their applications. In the accomplishment of this purpose, it proceeds with engagement in various coding courses, mathematical and scientific software, and brainstorming mathematical problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      )
};

export default Hero;