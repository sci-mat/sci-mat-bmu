import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { FaInfoCircle, FaCalendarAlt, FaUsers } from "react-icons/fa";
import AnimatedBackground from "../animations/AnimatedBackground.jsx";
import AnimatedLogo from "../animations/AnimatedLogo.jsx";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const TABS = [
    { label: "Home", icon: <MdHome /> },
    { label: "About", icon: <FaInfoCircle /> },
    { label: "Events", icon: <FaCalendarAlt /> },
    { label: "Our Team", icon: <FaUsers /> },
  ];
  return (
    <div className="fixed top-0 w-full flex justify-between items-center h-14 px-4 bg-black/90  text-white z-50 shadow-lg font-body">
      <AnimatedLogo />
      <div className="hidden sm:flex gap-8 font-semibold text-white text-lg justify-center align-middle">
        <AnimatedBackground
          defaultValue={TABS[0]}
          className="rounded-lg bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              data-id={tab}
              type="button"
              className="px-2 py-1 text-white transition-colors duration-300 hover:text-zinc-50"
              onClick={() => scrollToSection(tab.label.toLowerCase())}
            >
              {tab.label}
            </button>
          ))}
        </AnimatedBackground>
      </div>

      <div onClick={handleNav} className="md:hidden cursor-pointer z-30">
        <AiOutlineMenu
          size={25}
          className="hover:text-[#D1D2DB] transition duration-300"
        />
      </div>

      <div
        className={`fixed top-0 right-0 w-[70%] h-[100vh] z-50  bg-black transform ${
          nav ? "translate-x-0" : "translate-x-full "
        } transition-transform duration-300 z-70 md:hidden`}
      >
        <div className="flex items-center justify-between p-4 ">
          <IoIosClose
            size={25}
            className="cursor-pointer hover:text-[#D1D2DB] transition duration-800"
            onClick={handleNav}
          />
        </div>
        <ul className="flex flex-col p-4 space-y-4 text-white font-bold items-center">
          {TABS.map((item, index) => (
            <li
              key={index}
              className="w-full p-4 text-start cursor-pointer hover:bg-purple"
            >
              <div 
              className="flex justify-start gap-10 pb-2"
              onClick={() => {
                scrollToSection(item.label.toLowerCase());
                handleNav(); 
              }}>
              <span className="text-xl">{item.icon}</span> 
              <span className="font-light text-balance">{item.label}</span> 
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
