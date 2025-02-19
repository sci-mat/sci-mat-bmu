import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Card = ({ name, team, img, linkedin, github, instagram }) => {
  const defaultImg =
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
  const defaultGithub = "https://github.com/";
  const defaulLinkedin = "https://www.linkedin.com/";
  const DefaulInstagram = "https://www.instagram.com/";
  return (
    <div className="relative sm:w-60 md:w-64 mx-auto overflow-hidden rounded-lg shadow-lg group">
      <div className="bg-white/5  backdrop-blur-md border border-white/30 rounded-lg shadow-lg ">
        <img
          src={img || defaultImg}
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = defaultImg)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
          <div className="flex flex-col justify-center gap-1 md:gap-2 items-center py-1 font-body ">
            <h1 className="text-blue text-sm sm:text-md text-center">{name}</h1>
            <h2 className="text-purple text-xs sm:text-sm">{team}</h2>
          </div>
          <div className="flex justify-center items-center gap-3 py-1 md:gap-5 md:py-2 text-white">
            <a
              href={github || defaultGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer h-4 w-4 md:h-5 md:w-5 fill-white hover:fill-purple transition-all hover:scale-110"
              />
            </a>
            <a
              href={linkedin || defaulLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
               className="cursor-pointer  h-4 w-4 md:h-5 md:w-5 fill-white hover:fill-blue transition-all hover:scale-110"
              />
            </a>
            <a
              href={instagram || DefaulInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className=" h-4 w-4 md:h-5 md:w-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all shadow-sm"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
