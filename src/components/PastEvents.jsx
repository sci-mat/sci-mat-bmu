import React from 'react';
import CardStack from './CardStack';

const pastEvents = [
  {
    id: 1,
    title: "2023 EVENTS",
    description: <p></p>,
    image: "https://wallpapergod.com/images/hd/black-aesthetic-1920X1080-wallpaper-ch9tk3j5p772ls09.jpeg"
  },
  {
    id: 2,
    title: "OOPsify – Introduction to OOPS",
    description: <p>
    Conducted on: 13th September 2023<br />
    The event was centered on the fundamentals of OOP (Object-Oriented Programming), covering key concepts and their practical applications. Our speakers, Vaibhav Jain, Pallav Jain, and Japesh, shared their expertise, guiding students on how to effectively approach different programming languages using OOP principles.
Throughout the session, the speakers maintained a lively interaction with the students, encouraging questions and addressing doubts. Their engaging approach ensured a better understanding of the core OOP concepts, leaving the participants with valuable insights for their programming journey.
  </p>,
    image: "/assets/oops.png"
  },
  {
    id: 3,
    title: "Crafting the divine",
    description: <p>
    Conducted on: 20th September 2023<br />
    In this one-of-a-kind "Mathematical Ganesha Sculpture Competition," participants from various departments put their mathematical skills to the test, crafting awe-inspiring Lord Ganesha sculptures using nothing but mathematical figures. 
The event was a true fusion of art and science, as students meticulously calculated angles, shapes, and dimensions to construct their own mathematical masterpieces.
From fractal patterns forming intricate Ganesha figurines to geometric designs depicting the divine elephant-headed deity, the creations left everyone in awe of the students' ingenuity and mathematical prowess.

  </p>,
    image: "https://res.cloudinary.com/dufhheixk/image/upload/q_auto/f_auto/ganesh_ezfipb?_a=BAMCkGP80"
  },
  {
    id: 4,
    title: "Journey to the space",
    description: <p>
    Conducted on: 22nd September 2023<br />
    The event title ‘Journey to space’ in collaboration with Savera club for kids aimed to inspire young minds and create curiosity about the cosmos.
We took the kids on an exciting journey, sharing amazing facts about the universe — from the planets in our solar system to faraway stars and galaxies. Using fun presentations and videos, the children learned about black holes, the Moon, and the chance of life on other planets. They were very excited during the Q&A session, asking interesting questions about space missions and what it’s like to be an astronaut.

 </p>,
    image: "https://res.cloudinary.com/dufhheixk/image/upload/q_auto/f_auto/space_clx2ob?_a=BAMCkGP80"
  },
  {
    id: 5,
    title: "Roadmap’23",
    description: <p>
    Conducted on: 27th October 2023	<br />
    The event titled ‘Roadmap’ 23 for engineering students, offering valuable guidance on career paths. Our guest speaker, Tanya Ahuja, shared her insights with the students, providing practical advice on learning various programming languages, their future potential, and related job opportunities.
Throughout the session, the speaker maintained an engaging dialogue with the students, actively addressing their questions and clarifying their doubts. This interactive approach helped make the session more dynamic and insightful, leaving the participants with a clearer understanding of how to navigate their programming journey and career choices.
</p>,
    image: "/assets/Roadmap_23.png"
  },
  {
    id: 6,
    title: "Tech Talks – Bit manipulation",
    description: <p>
    Conducted on:  7th February 2023	<br />
    The event began with an introduction from our speaker, Mr. Sanket Singh, who immediately connected with the audience. He then delved into various interesting techniques and patterns related to Bit manipulation, explaining them in a clear and engaging manner.
After the presentation, Mr. Singh opened the floor for a lively Q&A session, addressing a wide range of questions from the audience. He also shared tips on how to succeed in interviews during the placement process, emphasizing the key skills students should focus on. Drawing from his extensive industry experience, he provided valuable advice and insights that will greatly benefit the students in their career journeys.
</p>,
    image: "/assets/Roadmap_24.png"
  },
  {
    id: 7,
    title: "2024 EVENTS",
    description: <p></p>,
    image: "https://wallpapergod.com/images/hd/black-aesthetic-1920X1080-wallpaper-ch9tk3j5p772ls09.jpeg"
  },
  {
    id: 8,
    title: "Hacked 2.0",
    description:<p>
    Conducted on: 1st March 2024 – 2nd March 2024<br />
    Hacked 2.0 was the second version of Hacked, a national level hackathon organized by ACM, SATA and SCI-MAT during 67th Milestone. Hacked 2.0 was a great success Out of 330 registrations on unstop we received a total of 143 participants who survived the 24hrs challenge and presented their hard work to the judges.
    The final winners were announced in the closing ceremony on 2nd March and were rewarded by the BMU faculty and the top 10 teams were awarded with certificates. </p>,
    image: "/assets/hacked.png"
  },{
    id: 9,
    title: "KBC 3.0",
    description:<p>
    Conducted on: 23rd April,2024<br />
    KBC 3.0, hosted by Sci-Mat, was a dynamic quiz competition inspired by "Kaun Banega Crorepati." The event featured 78 registered teams, with 48 teams participating live, supported by an enthusiastic audience. Teams of two tackled questions on general knowledge, sports, movies, and science. The operations team and EC members ensured smooth management throughout. 

The host engaged the audience with interactive questions, rewarding correct answers with chocolates, adding fun and inclusivity. In the first round, four teams competed on stage, answering 10 questions, with the highest-scoring team advancing to the next round. The event was a resounding success, blending knowledge and entertainment, and leaving participants and spectators with a memorable experience.
</p>,
    image: "https://res.cloudinary.com/dufhheixk/image/upload/q_auto/f_auto/kbc_jdwmcs?_a=BAMCkGP80"
  },
  {
    id: 10,
    title: "Roadmap’24",
    description: <p>
    Conducted on:  4th September 2024<br />
    The event was focused on providing a comprehensive roadmap for students to follow throughout their college journey. Our speaker, Shwet Mishra, shared his invaluable insights, guiding the students on how to effectively learn different programming languages, understand their future potential, and explore related job opportunities.

Shwet Mishra kept the session interactive, engaging directly with the students and responding to their questions. He addressed their doubts with clarity, offering practical advice and tips to help them succeed in their academic and professional paths. The session was both informative and engaging, equipping students with a clear plan for their college life and career development.
 </p>,
    image: "/assets/Roadmap_24.png"
  }, {
    id: 11,
    title: "Science Sparks",
    description: <p>
    Conducted on: 23rd September 2024<br />
    On 23rd September 2024, Savera Club, in collaboration with Sci-Mat, organized Science Sparks, an exciting and interactive event aimed at introducing underprivileged children to the fascinating world of science. The event featured a series of hands-on experiments that not only engaged the children but also sparked their curiosity about scientific phenomena.</p>,
    image: "/assets/Roadmap_24.png"
  }, {
    id: 12,
    title: "Hack 101: Introduction to Hacking",
    description: <p>
    Conducted on:  25th September 2024<br />
    Hack 101, an introductory workshop led by Sanchay Singh, the Co-founder of HackersVilla Community.
The event begins with Abhishek Jain sir’s brief on cybersecurity followed by speaker’s talk on basics of hacking, including vulnerability identification, exploitation, and mitigation strategies.
The speaker demonstrated their expertise in web security by successfully executing an attack on a website using Burp Suite, a widely recognized tool for vulnerability scanning and penetration testing. The attack involved intercepting and modifying HTTP requests, analyzing responses, and exploiting the website's weaknesses. This process highlighted the importance of strong security measures to protect against potential threats in real-world scenarios.
</p>,
    image: "/assets/Roadmap_24.png"
  },
  {
    id: 13,
    title: "Open Sourcery",
    description: <p>
    Conducted on:  14th Oct - 18th Nov<br />
    Event Description: Open Sourcery, organized by the Sci-Mat Club, is a beginner-friendly, month-long event designed to introduce students to the world of open-source development. Through hands-on workshops and real-world coding challenges, participants will gain essential skills in version control with Git and GitHub, collaborate on projects, and build confidence in their coding abilities.</p>,
    image: "/assets/Roadmap_24.png"
  },
];

const PastEvents = () => {
  return (
      <div className="container font-body mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center my-10 md:my-16 lg:my-20">
        <h1 className="mb-10 md:mb-16 lg:mb-28 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-tr from-[#CFD4E3] to-[#2F4D99] text-transparent bg-clip-text text-center">
          Past Events
        </h1>
        <section id="events">
        <div className="w-full h-full">
        </div>
         </section>
      </div>
   
  );
};

export default PastEvents;
