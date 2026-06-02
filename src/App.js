import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import SpecialDaysCard from './cards/SpecialDaysCard';
import Experience from './components/Experience';

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  // const certificationsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const year = new Date().getFullYear();
  const [visibleSection, setVisibleSection] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const specialDays = [
    {
      specialDate: 1,
      specialMonth: 1,
      desc: `Wishing you a very \nHappy New Year ${year} !`,
      shortMsg: `"May this year bring success, growth, and happiness ✨"`,
      image: null
    },
    {
      specialDate: 26,
      specialMonth: 1,
      desc: `Happy Republic Day ${year}!`,
      shortMsg: `"Celebrating the spirit of unity, pride, and \nthe Constitution of India"`,
      image: null
    },
    {
      specialDate: 15,
      specialMonth: 1,
      desc: `Happy Pongal ${year}!`,
      shortMsg: `"Wishing you a harvest of happiness, prosperity, \nand success 🌾"`,
      image: null
    },
    {
      specialDate: 16,
      specialMonth: 1,
      desc: `Happy Pongal ${year}!`,
      shortMsg: `"Wishing you a harvest of happiness, prosperity, \nand success 🌾"`,
      image: null
    },
    {
      specialDate: 15,
      specialMonth: 8,
      desc: `Happy Independence Day ${year}!`,
      shortMsg: `"Honoring freedom, courage, and the spirit of India"`,
      image: null
    },
    {
      specialDate: 14,
      specialMonth: 9,
      desc: `Happy Vinayagar Chaturthi ${year}!`,
      shortMsg: `" Celebrates the birth of Lord Ganesha, the remover of obstacles and symbol of wisdom."`,
      image: null
    },
    {
      specialDate: 12,
      specialMonth: 11,
      desc: `🪔  Happy Diwali ${year}!  🪔`,
      shortMsg: "May the festival of lights brighten your life with joy and prosperity 🪔",
      image: null
    },
    {
      specialDate: 25,
      specialMonth: 12,
      desc: `Merry Christmas ${year}!`,
      shortMsg: "May your day be filled with peace, joy, and warmth 🎄",
      image: null
    }
  ];

  const [isTodaySpecial, setIsTodaySpecial] = useState(false);
  const [specialDay, setSpecialDay] = useState(null);

  useEffect(() => {
    //Handling the Scroll
    const handleScroll = () => {
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (reachedBottom && !isLoading) {
        setIsLoading(true);
        setVisibleSection((prev) => {
          if (prev < 8) {
            return prev + 1;
          }
          return prev;
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
    const today = new Date();
    const todayDate = today.getDate();
    const currentMonth = today.getMonth() + 1;

    const matchedDay = specialDays.find(day =>
      day.specialDate === todayDate &&
      day.specialMonth === currentMonth
    )
    console.log(matchedDay);
    // Today is Special Day
    if (matchedDay) {
      setIsTodaySpecial(true);
      setSpecialDay(matchedDay);
    }
    else {    // Today is not a Special Day
      setIsTodaySpecial(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])



  return (
    <div className='bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] '>
      {isTodaySpecial && <SpecialDaysCard onClose={() => setIsTodaySpecial(false)} dayDetails={specialDay} />}
      <Navbar
        homeRef={homeRef}
        experienceRef={experienceRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        // certificationsRef={certificationsRef}
        educationRef={educationRef}
        contactRef={contactRef} />
      <div ref={homeRef} ><Home /></div>
      {visibleSection >= 2 && <div ref={aboutRef} className="scroll-mt-10 py-20"><About /></div>}
      {visibleSection >= 3 && <div ref={experienceRef} className="scroll-mt-10 py-20"><Experience /></div>}
      {visibleSection >= 4 && <div ref={skillsRef} className="scroll-mt-10 py-20"><Skills /></div>}
      {visibleSection >= 5 && <div ref={educationRef} className="scroll-mt-10 py-20"><Education /></div>}
      {visibleSection >= 6 && <div ref={projectsRef} className="scroll-mt-10 py-20"><Projects /></div>}
      {visibleSection >= 7 && <div ref={contactRef} className="scroll-mt-10 py-20"><Contact /></div>}
      {visibleSection >= 8 && <Footer aboutRef={aboutRef} />}
      <ScrollButton />
    </div>
  );
}

export default App;