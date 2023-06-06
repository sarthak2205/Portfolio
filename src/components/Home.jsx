import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/HeroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          {/*An aspiring Software Engineer with knowledge in software engineering practices such as Coding, testing,
          code reviews, code comments, Web Development, etc. Strong Ability to work with team and Ability to express ideas clearly and concisely. Good in critical thinking   and brings forth ideas not just talking terms but keeping business in mind, */}
          I have a 3 years of experience in building and designing software dashboards and report generation. I am very much familiar with MmongoDB, ExpressJS, Redux & NodeJS.  
          </p>
          <div>
          
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% hover:duration-300 hover:font-bold hover:text-xl"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 hover:font-bold hover:text-xl">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
