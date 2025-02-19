import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const President = ({ img, linkedin, github ,instagram }) => {
  const defaultImg ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg";
  const defaultGithub = "https://github.com/";
  const defaulLinkedin = "https://www.linkedin.com/";
  const DefaulInstagram = "https://www.instagram.com/"
  return (
    <div className="flex justify-center items-center px-4 py-8 md:px-10 md:py-12">
      <div className="flex justify-center items-center gap-5 md:gap-8 w-full md:w-auto bg-white/5 p-4 backdrop-blur-md border border-white/30 rounded-lg shadow-lg ">
        <div className="flex flex-col text-white text-center md:text-left items-center md:items-start">
          <h1 className="font-body text-blue text-xl md:text-3xl font-bold whitespace-nowrap">
            Aditya Bansal
          </h1>
          <h2 className="font-body text-purple text-lg md:text-xl mt-2">
            President
          </h2>
          <div className="flex justify-center md:justify-start items-center gap-5 pt-4">
            <a href={github || defaultGithub} target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} className="cursor-pointer hover:text-purple hover:scale-110" />
            </a>
            <a href={linkedin || defaulLinkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="cursor-pointer hover:text-blue hover:scale-110" />
            </a>
            <a href={instagram || DefaulInstagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} className="cursor-pointer hover:text-red-400 hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src={img || defaultImg}
            alt="Profile"
            className="object-cover w-40 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
            onError={(e) => (e.target.src = defaultImg)}
          />
        </div>
      </div>
    </div>
  );
};
export default President;
