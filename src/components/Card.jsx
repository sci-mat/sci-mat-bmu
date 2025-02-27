import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Card = ({ name, team, img, linkedin, github, instagram }) => {
  const defaultImg =
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
  const defaultGithub = "https://github.com/";
  const defaulLinkedin = "https://www.linkedin.com/";
  const DefaulInstagram = "https://www.instagram.com/";

  return (
    <div className="bg-neutral-700/30 rounded-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4ff] to-transparent"></div>
      <div className="p-5 relative">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-[#00b4ff]/20 group-hover:bg-[#00b4ff]/40 transition-colors duration-300"></div>
          <div className="absolute inset-1 rounded-full bg-neutral-800"></div>
          <div className="absolute inset-2 overflow-hidden rounded-full bg-neutral-700 flex items-center justify-center">
            <img
              src={img || defaultImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => (e.target.src = defaultImg)}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-1 text-center">
          {name}
        </h3>
        <p className="text-[#00b4ff] text-sm font-medium mb-3 text-center">
          {team}
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <a
            href={github || defaultGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8a2be2] transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={linkedin || defaulLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00b4ff] transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href={instagram || DefaulInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00ffcc] transition-colors"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
