import React, { useState, useEffect } from 'react'
import contact1 from '../assets/contact1.png'
import linkedin from '../assets/linkedin-logo.png'
import github from '../assets/GitHub.png'
import instagram from '../assets/instagram1.png'
import Modal from '../cards/Modal'
import LocationModal from '../cards/LocationModal'
import gmail from '../assets/mail.png'
import location from '../assets/location (1).png'
import reddit from '../assets/reddit_logo.png'
import quora from '../assets/quora.png'
import { LINKEDIN_LINK, GITHUB_LINK, INSTAGRAM_LINK, REDDIT_LINK, QUORA_LINK } from '../constants/links'

const Contact = () => {
  const socialAcc = [
    {
      name: "Linkedin",
      link: LINKEDIN_LINK,
      logo: linkedin,
      isActive: true
    },
    {
      name: "Github",
      link: GITHUB_LINK,
      logo: github,
      isActive: true
    },
    {
      name: "Instagram",
      link: INSTAGRAM_LINK,
      logo: instagram,
      isActive: true
    },
    {
      name: "Reddit",
      link: REDDIT_LINK,
      logo: reddit,
      isActive: true
    },
    {
      name: "Quora",
      link: QUORA_LINK,
      logo: quora,
      isActive: true
    }
  ]

  const [open, setOpen] = useState(false);
  const [locMenuOpen, setLocMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-col gap-16 px-6 py-8 ">
      <h1 className='text-4xl font-bold text-customPink mb-0 text-center font-cursive'>Reach Me</h1>
      <div className="flex flex-row relative gap-20">

        {/* pulse effect */}
        <div className="w-5 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen my-auto relative ">
          <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
        </div>


        {/* left side */}
        <div>
          <img src={contact1}
            className='h-[550px] w-[550px] animate-fade-right' />

        </div>



        {/* right side */}
        <div className='flex flex-col gap-10 items-center justify-center transition-transform animate-fade-left'>

          {/* Message  */}
          <div className='flex flex-row justify-between border rounded-xl bg-white/80 backdrop-blur-sm p-5 min-w-[470px] max-w-[90%]'>

            {/* left side content */}
            <div className="flex items-center gap-6">
              <img src={gmail} className="h-8 w-8" />
              <span className='text-sm'>
                Direct Message
                <span className="block text-base font-semibold font-cursive">Send via Gmail</span>
              </span>
            </div>


            {/* right side button */}
            <button className='px-6 py-2 bg-customPink/60 hover:bg-customPink/80 text-black  
                border border-customPink rounded-lg cursor-pointer transition-all duration-500 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] 
                [transform:perspective(150px)_rotateY(-15deg)] font-cursive hover:[transform:perspective(800px)_rotateY(0deg)] hover:shadow-customPink/40'
              onClick={() => {
                setOpen(true)
              }}>
              Send Message
            </button>

            {open && <Modal onClose={() => setOpen(false)} />}
          </div>

          {/* Location */}
          <div className='flex flex-row justify-between border rounded-xl bg-white/80 backdrop-blur-sm p-5 min-w-[470px] max-w-[90%]'>

            {/* left side content */}
            <div className="flex items-center gap-6">
              <img src={location} className="h-8 w-8" />
              <span className='text-sm'>
                Place
                <span className="block text-base  font-semibold font-cursive">Know My Location</span>
              </span>
            </div>


            {/* right side button */}
            <button className='px-6 py-2 bg-customPink/60 hover:bg-customPink/80 text-black font-cursive 
                border border-customPink rounded-lg cursor-pointer transition-all duration-500 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] 
                [transform:perspective(150px)_rotateY(-15deg)] hover:[transform:perspective(800px)_rotateY(0deg)] hover:shadow-customPink/40'
              onClick={() => {
                setLocMenuOpen(true)
              }}>
              Spot My Area
            </button>

            {locMenuOpen && <LocationModal onClose={() => setLocMenuOpen(false)} />}
          </div>

          {/* social links */}
          <div className='flex flex-row gap-6 '>
            {socialAcc.map((acc, index) => (
              acc.isActive && (
                <div key={index} onClick={() => window.open(acc.link, '_blank')} className='
                              group relative px-6 py-3 border border-white/30 rounded-xl cursor-pointer 
                              transition-all duration-300 ease-in-out hover:scale-105
                              hover:border-customOrange
                              bg-customGreen'>
                  <img src={acc.logo} className='
                    h-6 w-6 rounded-md transition-opacity duration-300 group-hover:opacity-0  ' />

                  <span
                    className="absolute inset-0 flex items-center justify-center
                   text-black text-sm font-medium
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
                  >
                    {acc.name}
                  </span>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact