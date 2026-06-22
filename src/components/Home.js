import React, { useEffect, useState } from 'react';
import profile from '../assets/profile1.jpg';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { LINKEDIN_LINK, HACKERRANK_LINK, GITHUB_LINK, LEETCODE_LINK } from '../constants/links'

const Home = () => {
    const domain = ["Junior Software Engineer", "Tech Enthusiast"];
    // const [visibleJob, setVisibleJob] = useState("");

    // useEffect(() => {
    //     let current = 0;
    //     const interval = setInterval(() => {
    //         // setVisibleJob(domain[current]);
    //         current = (current + 1) % domain.length;
    //     }, 1500);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-10 py-10 md:py-16 text-white gap-10">


            <div className="w-full md:w-1/2 md:ml-20 animate-fade-right transition-all duration-500 ease-in-out text-center md:text-left">
                <p className="text-lg sm:text-2xl md:text-3xl font-cursive">Hello 👋, I am</p>

                <h1 className="text-xl sm:text-5xl md:text-6xl font-bold tracking-wide mt-4 font-cursive text-customPink">
                    Manoj Kumar V
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl text-customGreen font-cursive mt-3">
                    <Typewriter
                        words={domain}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>

                <div className="mt-8">
                    <a
                        href="/Manoj_kumar_V.pdf"
                        download
                        className="inline-flex font-cursive items-center gap-2 px-4 sm:px-6 py-2 w-44 sm:w-52 justify-center border border-black text-white bg-customPink rounded-3xl transition duration-200 hover:bg-customGreen hover:border-black hover:text-black text-lg sm:text-xl font-medium"
                    >
                        Resume <FaDownload />
                    </a>
                </div>




            </div>


            <div className="flex flex-col items-center gap-6">
                <img
                    src={profile}
                    alt="Manoj"
                    className="sm:w-60 md:w-96 border-x-2 border-y-4
                            border-customTeal/80  hover:brightness-100 rounded-full cursor-pointer
                            shadow-[0_0_30px_rgba(20,184,166,0.2)]
                            animate-fade-in
                            hover:shadow-[0_0_45px_rgba(20,184,166,0.3)]    
                            transition-[border-radius,filter]
                            duration-500
                            ease-in-out"
                />
                <div className='flex justify-center animate-fade-in md:justify-start gap-4 sm:gap-6 text-2xl sm:text-3xl mt-8'>
                    <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className='hover:text-customGreen'>
                        <FaGithub />
                    </a>
                    <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className='hover:text-customPink'>
                        <FaLinkedin />
                    </a>
                    <a href={LEETCODE_LINK} target="_blank" rel="noopener noreferrer" className='hover:text-customGreen'>
                        <SiLeetcode />
                    </a>
                    <a href={HACKERRANK_LINK} target="_blank" rel="noopener noreferrer" className='hover:text-customPink'>
                        <SiHackerrank />
                    </a>
                </div>
            </div>

            <div className="hidden lg:block w-1 h-72 bg-customGreen my-auto relative">
                <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
            </div>
        </div>
    );
};

export default Home;
