import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image_man from '../assets/image_man.svg';

const About = () => {
    const skills = ["Full Stack Development","Problem Solving","Low Level Design","Backend Development"]
    return (
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-max px-6 py-8">
            <div className="w-20 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen relative">
                <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
            </div>
            <img
                src={image_man}
                alt="Profile"
                className="h-72 w-72 ml-20 lg:h-96 lg:w-96 rounded-2xl animate-fade-right hover:brightness-110"
            />

            <div className="bg-white/10 backdrop-blur-md border border-customGreen/65 p-5 rounded-2xl shadow-lg w-auto animate-fade-left transition-transform duration-300 hover:scale-105 hover:border-customGreen ml-14 mr-9">
                <h1 className="text-4xl font-bold text-customPink mb-6 text-center font-cursive">Know Me Better</h1>

                <p className="text-white text-lg leading-relaxed mb-4">
                    Hi, This is <span className="font-semibold text-customGreen font-cursive">Manoj Kumar V</span>, a passionate Information Science graduate with a love for solving real-world problems using technology.
                </p>

                <p className="text-white text-lg leading-relaxed mb-4">
                    I've developed impactful projects in Full Stack Web Development and enjoy working on creative and scalable solutions.
                </p>

                <p className="text-white text-lg leading-relaxed mb-4">
                    I'm especially interested in {skills.map((skill, index) => (
                        <span className="font-semibold text-customOrange font-cursive">
                            {skill}
                            {index < skills.length - 1 && ", "}
                        </span>
                    ))} and exploring new tech tools and frameworks.
                </p>

                <p className="text-white text-lg leading-relaxed mb-4">
                    I worked as <span className="text-customGreen font-semibold font-cursive">Geeks for Geeks Campus Ambassador</span>, I contribute to the community and grow through collaboration.
                </p>

                <p className="text-white text-lg leading-relaxed">
                    Outside coding, I enjoy drawing, badminton, and discovering new ideas.
                </p>
            </div>
        </div>

    );
};

export default About;
