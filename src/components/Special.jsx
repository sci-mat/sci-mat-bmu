import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Special = ({ name, email, imgUrl, linkedin, about }) => {
  return (
    <div
      className="relative bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-[0px_3px_10px_0px_rgba(138,43,226,0.4),0px_6px_20px_0px_rgba(0,255,204,0.4),0px_4px_25px_0px_rgba(0,128,255,0.3)]
 transition-all hover:-translate-y-1 ease-in-out duration-300 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#8a2be2]/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-[#00b4ff]/10 to-transparent rounded-full blur-xl"></div>

      <div className="z-10 flex flex-col md:flex-row items-center gap-6 relative">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00b4ff]/60 animate-pulse to-[#8a2be2]/60"></div>
          <div className="absolute inset-1 rounded-full bg-neutral-800"></div>
          <div className="absolute inset-2 overflow-hidden rounded-full bg-neutral-700 flex items-center justify-center">
            <img
              src={imgUrl}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="text-center md:text-left mt-6 md:mt-0 flex-1">
          <h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-gray-300 mb-5 leading-relaxed max-w-lg">{about}</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={`mailto:${email}`}
              className="px-3 py-1.5 flex items-center gap-2 bg-[#00ffcc]/20 text-[#00ffcc] rounded-md hover:-translate-y-1 ease-in-out transition-all duration-300"
            >
              <CiMail size={16} />
              <span className="text-sm">{email}</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 flex items-center gap-2 bg-[#00b4ff]/20 text-[#00b4ff] rounded-md hover:-translate-y-1 hover:shadow-white ease-in-out transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute animate-pulse bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00b4ff]/50 to-[#8a2be2]/50"></div>
    </div>
  );
};

export default Special;
