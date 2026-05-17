import React from 'react'
import { FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3, FaJs, FaCss3Alt, FaGraduationCap } from "react-icons/fa";
import { FaC } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiMongodb, SiNodedotjs } from "react-icons/si";
// import { VscVisualStudio } from "react-icons/vsc";
import image1 from '../assets/man-laptop-gibli.gif';
// import image2 from '../assets/man-with-laptop.jpg';
import htmlLogo from '../assets/HTML5.png';
import css3Logo from '../assets/CSS3.png';
import javacsriptLogo from '../assets/JavaScript.png';
import reactLogo from '../assets/React.png';
import postmanLogo from '../assets/Postman.png';
import tailwindLogo from '../assets/Tailwind CSS.png'
import javaLogo from '../assets/Java.png';
import cLogo from '../assets/C.png';
import springLogo from '../assets/Spring.png';
// import nodeLogo from '../assets/Node.js.png';
import mySqlLogo from '../assets/MySQL.png';
import mongoDbLogo from '../assets/MongoDB.png';
import vsCodeLogo from '../assets/Visual Studio Code (VS Code).png';
import eclipseLogo from '../assets/Eclipse IDE.png';
import intelliJLogo from '../assets/IntelliJ IDEA.png';
import gitLogo from '../assets/Git.png';
import githubLogo from '../assets/GitHub.png';
import figmaLogo from '../assets/Figma.png';
import dockerLogo from '../assets/Docker.png';
import ProblemSolvingCards from '../cards/ProblemSolvingCards';


const Skills = () => {
  const frontendTech = [
    { name: "HTML", icon: <img src={htmlLogo} alt="HTML" className="w-7 h-7 rounded-2xl" /> },
    { name: "CSS", icon: <img src={css3Logo} alt="Css" className="w-7 h-7 rounded-2xl  " /> },
    { name: "React JS", icon: <img src={reactLogo} alt="React" className="w-7 h-7 rounded-2xl" /> },
    { name: "JavaScript", icon: <img src={javacsriptLogo} alt="JS" className="w-7 h-7 rounded-2xl" /> },
    { name: "Tailwind CSS", icon: <img src={tailwindLogo} alt="Tailwind" className="w-7 h-7 rounded-2xl" /> },
    { name: "Postman API", icon: <img src={postmanLogo} alt="Postman" className="w-7 h-7 rounded-2xl" /> }
  ];

  const backendTech = [
    { name: "Java", icon: <img src={javaLogo} alt="Java" className="w-7 h-7 rounded-2xl" /> },
    { name: "C", icon: <img src={cLogo} alt="C" className="w-7 h-7 rounded-2xl" /> },
    { name: "Spring Boot", icon: <img src={springLogo} alt="Spring Boot" className="w-7 h-7 rounded-2xl" /> },
    { name: "Node JS", icon: <SiNodedotjs className='h-7 w-7' /> },
    { name: "Docker", icon: <img src={dockerLogo} alt="Docker" className="w-7 h-7" /> }
  ];

  const databaseTech = [
    { name: "MySQL", icon: <img src={mySqlLogo} alt="MySQL" className="w-7 h-7 " /> },
    { name: "MongoDB", icon: <img src={mongoDbLogo} alt="MongoDB" className="w-7 h-7 rounded-2xl" /> }
  ];

  const tools = [
    { name: "VS Code", icon: <img src={vsCodeLogo} alt="VS Code" className="w-7 h-7" /> },
    { name: "IntelliJ", icon: <img src={intelliJLogo} alt="IntelliJ" className="w-7 h-7 rounded-2xl" /> },
    { name: "Eclipse", icon: <img src={eclipseLogo} alt="Eclipse" className="w-7 h-7 rounded-2xl" /> },
    { name: "Git", icon: <img src={gitLogo} alt="Git" className="w-7 h-7 rounded-2xl" /> },
    { name: "GitHub", icon: <img src={githubLogo} alt="Github" className="w-7 h-7 rounded-2xl" /> },
    { name: "Figma", icon: <img src={figmaLogo} alt="Figma" className="w-7 h-7 " /> }
  ];

  const areasOfInterest = [
    { name: "Object Oriented Programming" },
    { name: "Problem Solving" },
    { name: "Data Structures and Algorithms" },
    { name: "Software Development" },
    { name: "Fullstack Development" },
    { name: "Backend Development" },
    { name: "Low Level Design" }
  ];

  const renderSkill = (skill, index) => (
    <span
      key={index}
      className={`flex items-center gap-2 p-3 font-medium mx-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-fade-up
        ${index % 2 === 0 ? "bg-white backdrop-blur-md rounded-3xl border-white" : "bg-customGreen rounded-3xl border-customGreen"} `}
    >
      {skill.icon && <span className="">{skill.icon}</span>}
      {skill.name}
    </span>
  );

  return (
    <div>

      <h1 className="text-4xl font-bold text-customGreen mb-20 text-center animate-fade-in font-cursive"> Tech Stack - The Level-Up Tools 😉 </h1>

      <div className="flex flex-col lg:flex-row items-start mx-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-[2] animate-fade-right">
          <div className="bg-white/10 backdrop-blur-md border  border-customGreen shadow-lg rounded-2xl p-6">
            {/* <img src={image2}/> */}
            <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Frontend</h3>
            <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
              <FaGraduationCap className='text-base text-black' /> {frontendTech.length}
            </span>
            <div className="flex flex-wrap gap-5">
              {frontendTech.map(renderSkill)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Backend</h3>
            <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
              <FaGraduationCap className='text-base text-black' /> {backendTech.length}
            </span>
            <div className="flex flex-wrap gap-5">
              {backendTech.map(renderSkill)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Database</h3>
            <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
              <FaGraduationCap className='text-base text-black' /> {databaseTech.length}
            </span>
            <div className="flex flex-wrap gap-5">
              {databaseTech.map(renderSkill)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Tools</h3>
            <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
              <FaGraduationCap className='text-base text-black' /> {tools.length}
            </span>
            <div className="flex flex-wrap gap-5">
              {tools.map(renderSkill)}
            </div>
          </div>
        </div>


        {/* Illustration image */}
        <div className='flex flex-col'>

          <div className="flex-[1] flex justify-center animate-fade-left">
            <img
              src={image1}
              alt="Tech Illustration"
              className="max-w-md w-full object-contain drop-shadow-lg rounded-2xl"
            />
          </div>

          <div className=''>
            <ProblemSolvingCards />
          </div>
        </div>

        {/*Pulse */}
        <div className="my-auto w-20 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen relative mx-10">
          <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
        </div>
      </div>

      <div className="mt-10 mx-20 relative bg-gradient-to-r from-customGreen/20 via-black/30 to-customGreen/20 
                      backdrop-blur-md border border-customGreen shadow-xl rounded-2xl p-8
                      hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-fade-up" >
        <h3 className="text-3xl font-bold mb-5 text-center text-customPink tracking-wide font-cursive">
          🚀 Areas Of Interest
        </h3>
        <span className="absolute top-4 right-4 bg-customGreen/70 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
          <FaGraduationCap className="text-base text-black" /> {areasOfInterest.length}
        </span>
        <div className="flex flex-wrap justify-center gap-6">
          {areasOfInterest.map((skill, index) => (
            <span
              key={index}
              className={`px-5 py-3 rounded-2xl font-medium shadow-md cursor-pointer transition-all duration-300
                          ${index % 2 === 0
                  ? "bg-customGreen/40 text-white hover:bg-customGreen hover:scale-105"
                  : "bg-white/20 text-customPink hover:bg-white hover:text-black hover:scale-105"}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* <div>

  <h1 className="text-4xl font-bold text-customGreen mb-20 text-center animate-fade-in font-cursive">
    Tech Stack - The Level-Up Tools 😉
  </h1>

  <div className="flex flex-col lg:flex-row items-stretch mx-10 min-h-[520px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-[2] animate-fade-right">
      <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Frontend</h3>
        <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
          <FaGraduationCap className='text-base text-black' /> {frontendTech.length}
        </span>
        <div className="flex flex-wrap gap-5">
          {frontendTech.map(renderSkill)}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Backend</h3>
        <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
          <FaGraduationCap className='text-base text-black' /> {backendTech.length}
        </span>
        <div className="flex flex-wrap gap-5">
          {backendTech.map(renderSkill)}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Database</h3>
        <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
          <FaGraduationCap className='text-base text-black' /> {databaseTech.length}
        </span>
        <div className="flex flex-wrap gap-5">
          {databaseTech.map(renderSkill)}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-customGreen shadow-lg rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-3 text-center text-customPink font-cursive">Tools</h3>
        <span className="absolute top-4 right-4 bg-customGreen/50 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
          <FaGraduationCap className='text-base text-black' /> {tools.length}
        </span>
        <div className="flex flex-wrap gap-5">
          {tools.map(renderSkill)}
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-1 justify-between">
      <div className="flex justify-center animate-fade-left">
        <img
          src={image1}
          alt="Tech Illustration"
          className="max-w-md w-full object-contain drop-shadow-lg rounded-2xl"
        />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-xs aspect-square">
          <ProblemSolvingCards />
        </div>
      </div>
    </div>

    <div className="my-auto w-20 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen relative mx-10">
      <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
    </div>
  </div>

  <div className="mt-10 mx-20 relative bg-gradient-to-r from-customGreen/20 via-black/30 to-customGreen/20 
                  backdrop-blur-md border border-customGreen shadow-xl rounded-2xl p-8
                  hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-fade-up">
    <h3 className="text-3xl font-bold mb-5 text-center text-customPink tracking-wide font-cursive">
      🚀 Areas Of Interest
    </h3>
    <span className="absolute top-4 right-4 bg-customGreen/70 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
      <FaGraduationCap className="text-base text-black" /> {areasOfInterest.length}
    </span>
    <div className="flex flex-wrap justify-center gap-6">
      {areasOfInterest.map((skill, index) => (
        <span
          key={index}
          className={`px-5 py-3 rounded-2xl font-medium shadow-md cursor-pointer transition-all duration-300
            ${index % 2 === 0
              ? "bg-customGreen/40 text-white hover:bg-customGreen hover:scale-105"
              : "bg-white/20 text-customPink hover:bg-white hover:text-black hover:scale-105"}`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
</div> */}


    </div>







  )
}

export default Skills