import Special from "./Special";

const AboutUs = () => {
  return (
    <section id="about" className="p-2 md:p-5">
    <div className="flex justify-center items-center mt-20 px-4 md:px-2">
      <div className="flex flex-col w-[1400px] bg-transparent">
        <div className="flex flex-col justify-center items-center">
          <div className="flex">
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/nv58jdm109b50iobm58x1/About1.png?rlkey=r1lemv52d9hyp6f7aslrjioio&st=4lraf43y"
              className="relative bottom-8 left-16 md:bottom-16 md:left-20 md:w-40"
              style={{pointerEvents:"none"}}
            />
            <h1 className="text-2xl md:text-4xl font-body font-bold p-4 whitespace-nowrap bg-gradient-to-tr from-[#CFD4E3] to-[#2F4D99] inline-block text-transparent bg-clip-text">
              About Us
            </h1>
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/4075zg7h0ok5buj4dch5n/About.png?rlkey=pe5aeredbj9vgx2oi8t4wcum7&st=vr4ljlt8"
              className="relative right-16 bottom-2 md:right-20 md:bottom-5 md:w-40"
              style={{pointerEvents:"none"}}
            />
          </div>
          <div className="px-4 md:px-10 mb-10 text-text">
  <h1 className="text-center font-bold text-xl md:text-3xl mb-6 font-body">
    Welcome to Sci-Mat: Your gateway to scientific brilliance!
  </h1>
  <p className="text-justify font-light font-sans text-base md:text-xl mb-10">
    At the Scientific and Mathematics Society, we are on a mission to redefine the way students perceive and interact with science, mathematics, and emerging technologies. 
    Our club serves as a dynamic hub for thinkers, doers, and dreamers who are passionate about exploring the infinite possibilities at the intersection of these domains.
  </p>
  <h2 className=" font-bold text-lg md:text-2xl mb-4 font-body">Our Values</h2>
  <ul className="list-disc list-inside font-light text-base md:text-xl mb-10">
    <li><strong>Innovation:</strong> Encouraging creative thinking to solve complex problems.</li>
    <li><strong>Collaboration:</strong> Building a supportive community of learners and mentors.</li>
    <li><strong>Excellence:</strong> Striving for the highest standards in academic and professional growth.</li>
  </ul>
  <h2 className=" font-bold text-lg md:text-2xl mb-4 font-body">Our Mission</h2>
  <p className="text-justify font-light font-sans text-base md:text-xl mb-10">
    To empower students with a deep understanding of science and mathematics while equipping them with cutting-edge skills to excel in the fast-evolving technological world. 
    <strong> Sci-Mat</strong> bridges the gap between theory and practice by exploring areas where mathematics and computing converge. 
    From hands-on workshops in cryptography and cybersecurity to seminars on open-source innovations, we ensure our members stay ahead in the tech landscape. 
    We emphasize real-world applications of science and mathematics, empowering students to work on impactful projects and master the tools of tomorrow. 
    Our vibrant community fosters mentorship, networking, and collaborative growth, preparing students to thrive as leaders in the STEM field.
  </p>
  <h2 className=" font-bold text-lg md:text-2xl mb-4 font-body">Why Join Us?</h2>
  <ul className="list-disc list-inside font-light text-base md:text-xl">
    <li>Dive into a world of cryptography, hacking, and open-source innovation.</li>
    <li>Gain practical skills through projects and hands-on workshops.</li>
    <li>Be part of a community that shares your passion for science and mathematics.</li>
    <li>Build your professional network with access to expert mentors and peers.</li>
  </ul>
</div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center font-body font-light mt-6">
            <Special
            name={"Dr.Himanshu Upreti"}
            email={"himanshu.upreti@bmu.edu.in"}
            imgUrl={"/assets/Himanshu.jpg"}
            about={"A passionate mathematician and researcher with over three years at BML Munjal University, Dr. Himanshu Upreti specializes in fluid dynamics and has published over 30 research papers. He seamlessly combines theoretical rigor with practical application, inspiring students to explore new frontiers in mathematical sciences."}/>
            <Special
            name={"Dr. Ranjib Banerjee"}
            email={"ranjib.banerjee@bmu.edu.in"}
            imgUrl={"/assets/Ranjib.webp"}
            about={"With over nine years of academic experience, Dr. Ranjib Banerjee is an educator and researcher known for his innovative teaching methods in applied mathematics and statistics. His research spans nonlinear dynamics, complex networks, and economic data trends, blending theory with tools like SAS, R, and MS Excel. At Sci-Mat, he ignites creativity and analytical thinking, making math both fascinating and accessible."}/>
        </div>
        <p className="font-bold text-2xl text-center p-8 bg-gradient-to-r from-[#AC2196] to-[#70A448] text-transparent bg-clip-text mt-8 ">
            Follow our updates , get connected, check our activities, feature
            your blogs on our site for better reach and many more!
          </p>
      </div>
    </div>
    </section>
  );
};
export default AboutUs;
