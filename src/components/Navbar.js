import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({
  homeRef,
  experienceRef,
  aboutRef,
  skillsRef,
  projectsRef,
  certificationsRef,
  educationRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navOptions = [
    {
      name: "ABOUT",
      ref: aboutRef
    },
    {
      name: "EXPERIENCE",
      ref: experienceRef
    },
    {
      name: "SKILLS",
      ref: skillsRef
    },
    {
      name: "EDUCATION",
      ref: educationRef
    },
    {
      name: "PROJECTS",
      ref: projectsRef
    },
    {
      name: "CONTACT",
      ref: contactRef
    }
  ]

  const scrollToSection = (ref, index) => {
    setActiveIndex(index)
    setMenuOpen(false);
    requestAnimationFrame(() => {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <nav className="backdrop-blur-3xl shadow-md sticky top-0 z-50 font-inter text-medium">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4 ">

          <h1
            className="text-2xl font-bold text-customGreen tracking-widest cursor-pointer "
            onClick={() => scrollToSection(homeRef)}
          >
            M
          </h1>


          <ul className="hidden md:flex space-x-6 text-white font-medium" >
            {navOptions.map((options, idx) => (
              <li className={`
                          px-2 py-1 rounded-ss-2xl rounded-se-sm rounded-es-sm rounded-ee-2xl cursor-pointer transition-all duration-300
                          hover:text-black hover:bg-white/80 font-cursive
                          ${activeIndex === idx ? "bg-customTeal text-black" : "text-white"}
                        `}
                key={idx} onClick={() => scrollToSection(options.ref, idx)}>{options.name}</li>

            ))}
          </ul>


          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] 
                   bg-gradient-to-r from-transparent 
                   via-customGreen to-transparent animate-pulse" />



        {menuOpen && (
          <ul className="flex flex-col gap-4 text-white font-medium pb-4 md:hidden">
            {navOptions.map((options, idx) => (
              <li className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-customOrange
                            ${activeIndex === idx ? "bg-white/20 text-customOrange" : "text-white"}
                            `} key={idx}
                onClick={() => scrollToSection(options.ref, idx)}>
                {options.name}
              </li>

            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
