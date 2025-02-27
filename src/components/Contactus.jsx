import {
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
const Contactus = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-neutral-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#00ffcc_1px,transparent_1px)]"
        style={{ backgroundSize: "25px 25px", opacity: 0.05 }}
      ></div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#00b4ff]/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-[#8a2be2]/10 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#00b4ff10_1px,transparent_1px),linear-gradient(to_bottom,#00b4ff10_1px,transparent_1px)]"
        style={{ backgroundSize: "35px 35px" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
            <span className="text-white">
              Get in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]">
                Touch
              </span>
            </span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[#00b4ff] to-[#8a2be2] rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mt-6">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-neutral-800/40 backdrop-blur-md rounded-2xl p-8 border border-neutral-700 shadow-lg shadow-[#00b4ff]/5">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send Us a Message
              </h3>
              <form className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#00b4ff] focus:shadow-[0_0_15px_rgba(0,180,255,0.3)]"
                      placeholder=" "
                    />
                    <label className="absolute text-gray-400 transform transition-all duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#00b4ff] left-4">
                      Your Name
                    </label>
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      required
                      className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#8a2be2] focus:shadow-[0_0_15px_rgba(138,43,226,0.3)]"
                      placeholder=" "
                    />
                    <label className="absolute text-gray-400 transform transition-all duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#8a2be2] left-4">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#00ffcc] focus:shadow-[0_0_15px_rgba(0,255,204,0.3)]"
                    placeholder=" "
                  />
                  <label className="absolute text-gray-400 transform transition-all duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#00ffcc] left-4">
                    Subject
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    rows="5"
                    required
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#00b4ff] focus:shadow-[0_0_15px_rgba(0,180,255,0.3)]"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute text-gray-400 transform transition-all duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#00b4ff] left-4">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#00b4ff] to-[#8a2be2] text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.5)] hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-neutral-800/40 backdrop-blur-md rounded-2xl p-8 border border-neutral-700 h-full shadow-lg shadow-[#8a2be2]/5">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00b4ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00b4ff]/20 group-hover:shadow-[0_0_15px_rgba(0,180,255,0.3)]">
                    <svg
                      className="w-5 h-5 text-[#00b4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-[#00b4ff] transition-colors duration-300">
                      Email
                    </h4>
                    <a
                      href="mailto:info@sci-mat.org"
                      className="text-gray-300 mt-1 block hover:text-[#00b4ff] transition-colors duration-300"
                    >
                      info@sci-mat.org
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8a2be2]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#8a2be2]/20 group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                    <svg
                      className="w-5 h-5 text-[#8a2be2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-[#8a2be2] transition-colors duration-300">
                      Location
                    </h4>
                    <p className="text-gray-300 mt-1">
                      Science Building, Room 305
                      <br />
                      University Campus
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Mon-Fri: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00ffcc]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00ffcc]/20 group-hover:shadow-[0_0_15px_rgba(0,255,204,0.3)]">
                    <svg
                      className="w-5 h-5 text-[#00ffcc]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-[#00ffcc] transition-colors duration-300">
                      Weekly Meetings
                    </h4>
                    <p className="text-gray-300 mt-1">
                      Thursdays at 6:00 PM
                      <br />
                      Science Building Auditorium
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      All welcome to attend
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-700">
                <h4 className="text-lg font-medium text-white mb-5">
                  Connect With Us
                </h4>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
