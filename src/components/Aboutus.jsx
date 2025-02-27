const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-neutral-800 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#00b4ff_1px,transparent_1px)]"
        style={{ backgroundSize: "40px 40px", opacity: 0.05 }}
      ></div>

      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8a2be2]/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-[#00b4ff]/5 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative ">
            <span className="text-white">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]">
                Sci-Mat
              </span>
            </span>
            <span className="absolute -bottom-4 right-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[#00b4ff] to-[#8a2be2]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-300 text-lg">
            <p className="mb-6 text-lg leading-normal text-justify">
              Sci-Mat is more than just a club; it's a community of passionate
              individuals dedicated to advancing scientific knowledge and
              technological innovation. Founded with the vision of bridging the
              gap between theoretical learning and practical applications, we
              provide a platform for students to explore the fascinating worlds
              of science and mathematics.
            </p>
            <p className="mb-6 text-lg leading-normal text-justify">
              Our mission is to foster critical thinking, problem-solving
              skills, and collaborative learning among students. We believe in
              making complex scientific concepts accessible and engaging for
              everyone, regardless of their background or prior knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-neutral-700/50 p-6 rounded-lg border border-[#00b4ff]/20 hover:border-[#00b4ff]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,180,255,0.2)] group">
                <div className="text-[#00b4ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Innovation
                </h3>
                <p className="text-gray-300 ">
                  We encourage creative thinking and innovative approaches to
                  scientific challenges.
                </p>
              </div>

              <div className="bg-neutral-700/50 p-6 rounded-lg border border-[#8a2be2]/20 hover:border-[#8a2be2]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)] group">
                <div className="text-[#8a2be2] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Collaboration
                </h3>
                <p className="text-gray-300 ">
                  We believe in the power of teamwork and interdisciplinary
                  approaches to problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="w-full h-full absolute -inset-2 rounded-lg bg-gradient-to-r from-[#00b4ff] to-[#8a2be2] blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-neutral-700/50 rounded-lg p-4 border border-neutral-600">
              <div className="aspect-w-4 aspect-h-3">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <svg
                    class="w-full h-full"
                    viewBox="0 0 500 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="500" height="375" fill="#1e1e1e"></rect>
                    <g opacity="0.2">
                      <path
                        d="M0 187.5H500"
                        stroke="#00b4ff"
                        stroke-width="0.5"
                      ></path>
                      <path
                        d="M250 0L250 375"
                        stroke="#00b4ff"
                        stroke-width="0.5"
                      ></path>
                      <circle
                        cx="250"
                        cy="187.5"
                        r="100"
                        stroke="#00b4ff"
                        stroke-width="0.5"
                        stroke-dasharray="5 5"
                      ></circle>
                      <circle
                        cx="250"
                        cy="187.5"
                        r="150"
                        stroke="#8a2be2"
                        stroke-width="0.5"
                        stroke-dasharray="5 5"
                      ></circle>
                    </g>
                    <g>
                      <circle
                        cx="250"
                        cy="187.5"
                        r="15"
                        fill="#00b4ff"
                      ></circle>
                      <circle
                        cx="250"
                        cy="187.5"
                        r="50"
                        stroke="#00b4ff"
                        stroke-width="1.5"
                        stroke-dasharray="8 8"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 250 187.5"
                          to="360 250 187.5"
                          dur="20s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                      <circle cx="300" cy="187.5" r="8" fill="#00ffcc">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 250 187.5"
                          to="360 250 187.5"
                          dur="20s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                    </g>
                    <g fill="#ffffff" opacity="0.7">
                      <text
                        x="180"
                        y="140"
                        font-family="monospace"
                        font-size="18"
                      >
                        Σ
                      </text>
                      <text
                        x="320"
                        y="220"
                        font-family="monospace"
                        font-size="18"
                      >
                        ∫
                      </text>
                      <text
                        x="230"
                        y="270"
                        font-family="monospace"
                        font-size="18"
                      >
                        π
                      </text>
                      <text
                        x="290"
                        y="130"
                        font-family="monospace"
                        font-size="18"
                      >
                        ∞
                      </text>
                    </g>
                    <g stroke="#8a2be2" stroke-width="1.5" fill="none">
                      <polyline points="100,100 150,100 150,150 200,150 200,100 250,100"></polyline>
                      <polyline points="300,100 350,100 350,150 400,150 400,100 450,100"></polyline>
                      <polyline points="100,250 150,250 150,300 200,300 200,250 250,250"></polyline>
                      <polyline points="300,250 350,250 350,300 400,300 400,250 450,250"></polyline>
                    </g>
                    <g
                      fill="#00ffcc"
                      opacity="0.4"
                      font-family="monospace"
                      font-size="10"
                    >
                      <text x="110" y="120">
                        01001
                      </text>
                      <text x="110" y="130">
                        10110
                      </text>
                      <text x="350" y="280">
                        11010
                      </text>
                      <text x="350" y="290">
                        01101
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-neutral-700/30 p-6 rounded-lg border border-[#00ffcc]/20 hover:border-[#00ffcc]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,255,204,0.2)]">
            <div className="text-[#00ffcc] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Scientific Excellence
            </h3>
            <p className="text-gray-300">
              We strive to achieve the highest standards in scientific research
              and knowledge dissemination.
            </p>
          </div>
          <div className="bg-neutral-700/30 p-6 rounded-lg border border-[#00b4ff]/20 hover:border-[#00b4ff]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,180,255,0.2)]">
            <div className="text-[#00b4ff] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="el-3mn2bknw"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  id="el-cicb3s3h"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Continuous Learning
            </h3>
            <p className="text-gray-300 ">
              We embrace lifelong learning and constantly seek to expand our
              knowledge and understanding of the scientific world.
            </p>
          </div>
          <div className="bg-neutral-700/30 p-6 rounded-lg border border-[#8a2be2]/20 hover:border-[#8a2be2]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(138,43,226,0.2)]">
            <div className="text-[#8a2be2] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="el-1zcuj2fa"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  id="el-6g86pnna"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Inclusive Innovation
            </h3>
            <p className="text-gray-300 ">
              We believe in creating an inclusive environment where diverse
              perspectives contribute to innovative scientific solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
