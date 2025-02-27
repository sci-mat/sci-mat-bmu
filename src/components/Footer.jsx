import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-transparent pt-16 pb-8 relative overflow-hidden mt-10"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]">
                Sci-Mat
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Your gateway to scientific brilliance where science, mathematics,
              and technology converge to shape the future.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-[#00ffcc] hover:bg-neutral-800/80 transition-colors duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-[#00b4ff] hover:bg-neutral-800/80 transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-[#8a2be2] hover:bg-neutral-800/80 transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-5">Quick Links</h3>
            <ul className="space-y-3 text-md">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#mentors"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  Mentors
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#00b4ff] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#00b4ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-h7y22s1c"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-ue7808rm"
                    ></path>
                  </svg>
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-5 ">Projects</h3>
            <ul className="space-y-3 text-md">
              <li>
                <a
                  href="#project1"
                  className="text-gray-400 hover:text-[#8a2be2] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#8a2be2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-4zbxqafx"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-vvh6d5jm"
                    ></path>
                  </svg>
                  Scientific Articles
                </a>
              </li>
              <li>
                <a
                  href="#project2"
                  className="text-gray-400 hover:text-[#8a2be2] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#8a2be2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-4zbxqafx"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-vvh6d5jm"
                    ></path>
                  </svg>
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#project3"
                  className="text-gray-400 hover:text-[#8a2be2] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#8a2be2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-4zbxqafx"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-vvh6d5jm"
                    ></path>
                  </svg>
                  Study Materials
                </a>
              </li>
              <li>
                <a
                  href="#project4"
                  className="text-gray-400 hover:text-[#8a2be2] transition-colors duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-[#8a2be2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    id="el-4zbxqafx"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                      id="el-vvh6d5jm"
                    ></path>
                  </svg>
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-5">Contact Us</h3>
            <ul className="space-y-3 text-md">
              <li className="text-gray-400 flex items-center gap-2">
                <CiMail color="#00ffcc" size={20} /> Email: contact@scimat.com
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <IoLocationSharp color="#00ffcc" size={20} /> 67th Milestone, NH
                48, Kapriwas, Haryana 122413
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Sci-Mat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
