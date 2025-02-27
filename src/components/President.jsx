import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Ab from "../assets/AdityaBansal.webp"
const President = ({linkedin, github, instagram }) => {
  const defaultGithub = "https://github.com/";
  const defaulLinkedin = "https://www.linkedin.com/";
  const DefaulInstagram = "https://www.instagram.com/";

  return (
    <div className="flex justify-center py-4">
      <div className="relative group w-full max-w-lg px-2 md:px-0">
        <div className="absolute inset-0 bg-[#00b4ff] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
        <div className="relative">
          <div className="hex-container relative mx-auto">
            <div className="hex-outer bg-gradient-to-br from-[#00b4ff] to-[#8a2be2]">
              <div className="hex-inner bg-neutral-800 ">
                <div className="p-4 md:p-6 text-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00b4ff] to-[#8a2be2] animate-pulse"></div>
                    <div className="absolute inset-0.5 rounded-full bg-neutral-800"></div>
                    <div className="absolute inset-2 overflow-hidden rounded-full bg-neutral-700 flex items-center justify-center">
                      <img
                        src={Ab}
                        alt="Profile"
                        className="object-cover w-full rounded-full"
                        onError={(e) => (e.target.src = defaultImg)}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      Aditya Bansal
                    </h3>
                    <p className="text-[#00b4ff] font-medium mb-2 md:mb-3">
                      President
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-4">
                      Physics major with a passion for quantum mechanics and
                      scientific outreach. Leading Sci-Mat with vision and
                      innovation.
                    </p>
                    <div className="flex justify-center gap-2 md:gap-4 mt-4 md:mt-6">
                      <a
                        href={github || defaultGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00b4ff] transition-colors"
                      >
                        <FaGithub size={20} className="md:size-25" />
                      </a>
                      <a
                        href={linkedin || defaulLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00b4ff] transition-colors"
                      >
                        <FaLinkedin size={20} className="md:size-25" />
                      </a>
                      <a
                        href={instagram || DefaulInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00b4ff] transition-colors"
                      >
                        <FaInstagram size={20} className="md:size-25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
