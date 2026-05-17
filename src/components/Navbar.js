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
  ];

  const scrollToSection = (ref, index = null) => {
    setActiveIndex(index);
    setMenuOpen(false);

    requestAnimationFrame(() => {
      ref?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <nav className="backdrop-blur-3xl shadow-md sticky top-0 z-50 font-inter text-medium bg-black/20">
      <div className="w-full mx-auto px-4">

        <div className="flex items-center justify-between py-4 w-full">

          {/* (M) Character */}
          <h1
            className="text-4xl mx-24 font-bold text-customGreen font-serif tracking-widest cursor-pointer animate-fade-right"
            onClick={() => scrollToSection(homeRef)}
          >
            M
          </h1>

          {/* Desktop */}
          <div className='animate-fade-left ml-auto'>
            <ul className="hidden md:flex space-x-6 text-white font-medium">
              {navOptions.map((options, idx) => (
                <li
                  key={idx}
                  className={`
                  p-2
                  rounded-2xl
                  cursor-pointer transition-all duration-300
                  hover:text-black hover:bg-white/80
                  font-cursive
                  ${activeIndex === idx
                      ? "bg-customTeal text-black rounded-ss-2xl rounded-se-sm rounded-es-sm rounded-ee-2xl"
                      : "text-white"
                    }`
                  }
                  onClick={() => scrollToSection(options.ref, idx)}>{options.name}</li>
              ))}
            </ul>
          </div>

          {/* Mobile Navbar */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Bottom Glow Line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[1px] 
          bg-gradient-to-r from-transparent 
          via-customGreen to-transparent animate-pulse"
        />

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-down">
            <ul className="flex flex-col gap-2 text-white font-medium bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/10 shadow-lg">
              {navOptions.map((options, idx) => (
                <li
                  key={idx}
                  className={`
                    px-4 py-3 rounded-lg
                    cursor-pointer transition-all duration-300
                    hover:bg-white/10 hover:text-customOrange
                    text-sm tracking-wide
                    ${activeIndex === idx
                      ? "bg-white/20 text-customOrange"
                      : "text-white"
                    }
                  `}
                  onClick={() => scrollToSection(options.ref, idx)}
                >
                  {options.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;