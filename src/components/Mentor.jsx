import Special from "./Special";
import hu from "../assets/Himanshu.webp"
import rb from "../assets/Ranjib.webp"
const Mentor = () => {
  return (
    <section
      id="about"
      className="py-20 bg-neutral-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#8a2be2_1px,transparent_1px)]"
        style={{ backgroundSize: "30px 30px", opacity: 0.05 }}
      ></div>

      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#00ffcc]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#00b4ff]/5 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative ">
            <span className="text-white">
              Meet our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]">
                Mentors
              </span>
            </span>
            <span className="absolute -bottom-4 right-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]"></span>
          </h2>
          <p
            class="text-gray-300 max-w-3xl mx-auto text-lg mt-12"
          >
            Our mentors are distinguished professionals committed to guiding the
            next generation of scientific innovators.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full p-6 gap-4 font-light mt-6">
          <Special
            name={"Dr.Himanshu Upreti"}
            email={"himanshu.upreti@bmu.edu.in"}
            imgUrl={hu}
            about={
              "Dr. Himanshu Upreti, a mathematician at BML Munjal University, specializes in fluid dynamics with 30+ published papers, inspiring students through his blend of theory and practice."
            }
          />
          <Special
            name={"Dr. Ranjib Banerjee"}
            email={"ranjib.banerjee@bmu.edu.in"}
            imgUrl={rb}
            about={
              "Dr. Ranjib Banerjee specializes in applied math and statistics, focusing on nonlinear dynamics and economic data using tools like SAS, R, and Excel. He makes math engaging and accessible at Sci-Mat."
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Mentor;
