import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Special = ({ name, email, imgUrl, linkedin, about }) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-3xl px-4 md:px-0">
      <div className="relative mx-2 md:mx-6 my-4 perspective-1000">
        <div className="relative w-full transition-transform duration-500 [transform-style:preserve-3d] group">
          <div className="relative [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)] transition-all ease-in-out duration-500">
            <div className="flex flex-col md:flex-row bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-5">
              <div className="relative flex flex-col justify-start items-center text-center rounded-2xl bg-white/5 border-2 border-white/20 pb-4 md:pb-6 px-4 w-full md:w-auto">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mt-6 mb-4 rounded-full overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1 className="font-bold text-lg md:text-xl text-white/90">
                  {name}
                </h1>
                <h2 className="text-sm md:text-base font-medium text-white/70">
                  (Our Mentor)
                </h2>
              </div>
              <div className="flex flex-col md:flex-row px-4 md:px-8 py-4 text-white/80">
                <div className="flex flex-col justify-between gap-2 md:gap-3">
                  <p className="text-sm md:text-base">
                    <b className="text-base md:text-lg text-white/90">School:</b>{" "}
                    <br />
                    School of Engineering and Technology
                  </p>
                  <p className="text-sm md:text-base">
                    <b className="text-base md:text-lg text-white/90">
                      Department:
                    </b>{" "}
                    <br />
                    Mathematics
                  </p>
                  <p className="text-sm md:text-base break-words">
                    <b className="text-base md:text-lg text-white/90">Email:</b>{" "}
                    <br />
                    {email}
                  </p>
                  <div className="flex pt-2 gap-4">
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CiMail
                        size={20}
                        className="text-white/80 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                      />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn
                        size={20}
                        className="text-white/80 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(360deg)] transition-all ease-in-out duration-500">
            <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm rounded-lg p-6 ">
              <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-4">
                About {name}
              </h2>
              <div className="overflow-y-auto max-h-[calc(100%-4rem)]">
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-sans">
                  {about}
                </p>
              </div>
              <div className="mt-4 flex justify-end gap-4">
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiMail
                    size={20}
                    className="text-white/80 hover:text-blue cursor-pointer transition-colors duration-300"
                  />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn
                    size={20}
                    className="text-white/80 hover:text-blue cursor-pointer transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;