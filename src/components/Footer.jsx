import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <footer className="bg-black text-white py-4 px-4">
      <div className="w-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-3xl font-semibold text-blue font-body">
            Sci-Mat
          </h1>
          <p className="text-lg">
            Exploring the frontiers and fostering innovation.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-3xl font-semibold text-blue font-body">
            Quick Links
          </h1>
          <ul className="flex flex-col justify-start items-start text-lg gap-2">
            <li>
              <a
                onClick={()=>scrollToSection("#home")}
                className="hover:text-blue transition-colors duration-200 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={()=>scrollToSection("#about")}
                className="hover:text-blue transition-colors duration-200 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={()=>scrollToSection("#events")}
                className="hover:text-blue transition-colors duration-200 cursor-pointer"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={()=>scrollToSection("#our team")}
                className="hover:text-blue transition-colors duration-200 cursor-pointer"
              >
               Our Team
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-3xl font-semibold text-blue font-body">
            Contact Us
          </h1>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:sci-mat@bmu.edu.in"
              className="hover:text-blue transition-colors duration-200 cursor-pointer"
            >
              sci-mat@bmu.edu.in
            </a>
          </p>
          <p className="text-lg">
            Address: <br />
            BML Munjal University (BMU) <br />
            67th Milestone, NH 48, Kapriwas, Haryana 122413
          </p>
          <div className="mt-4 w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.190384062748!2d76.811051974077!3d28.24768050145567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d478e1d59b7fb%3A0xb1787ccb5563c223!2sBML%20Munjal%20University%20(BMU)!5e1!3m2!1sen!2sin!4v1735981160065!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="text-3xl font-semibold text-blue font-body">
            Follow Us
          </h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/sci-mat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:-translate-y-1  rounded-full hover:bg-purple transition-all duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/sci-mat-bmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:-translate-y-1  rounded-full hover:bg-purple transition-all duration-200"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/scimat_bmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:-translate-y-1 rounded-full hover:bg-purple transition-all duration-200"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-blue pt-4 text-center text-sm">
        <p>
          &copy; {year}{" "}
          <span className="font-semibold">Sci-Mat</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
