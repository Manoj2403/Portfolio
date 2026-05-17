import React from 'react'
import graduationImg from '../assets/graduation.png'
import schoolImg from '../assets/school.png'
import graduationCap from '../assets/graduation-cap.png'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import locationImg from '../assets/location (1).png'
import bit from '../assets/bit_clg.jpeg'

const Education = () => {
  const education = [
    {
      class: "B.E - Information Science and Engineering",
      institutionName: "Bannari Amman Institute of Technology",
      startingYear: 2021,
      passingYear: 2025,
      location: "Erode, Tamilnadu",
      percentage: "8.55 CGPA",
      // image: graduationImg
      image: graduationCap
    },
    {
      class: "HSC",
      institutionName: "Cheran Matriculation Higher Secondary School",
      startingYear: 2019,
      passingYear: 2021,
      location: "Karur, Tamilnadu",
      percentage: "92.54%",
      image: schoolImg
    },
    {
      class: "SSLC",
      institutionName: "Cheran Matriculation Higher Secondary School",
      startingYear: 2018,
      passingYear: 2019,
      location: "Karur, Tamilnadu",
      percentage: "90.4%",
      image: schoolImg
    },
  ]
  return (
    <div className="flex flex-col lg:flex-col gap-16 px-6 py-8">

      <h1 className="text-4xl font-bold text-customPink mb-6 font-cursive text-center">
        Education
      </h1>

      {/* pulse effect */}
      <div className='flex flex-row relative'>
        <div className="w-5 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen my-auto relative">
          <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
        </div>

        <img src={book2} className='h-[500px] w-[900px] animate-fade-right' />
        {/* education section */}
        <div className='flex flex-col relative w-full gap-5 animate-fade-left'>
          {education.map((educationInfo, index) => (
            <div
              key={index}
              // style={{backgroundImage:`url(${bit})`}}
              className="group bg-customTeal/50 backdrop-blur-md border border-black shadow-lg rounded-2xl p-6 mb-4 w-auto
                        hover:scale-[1.02] transition-transform duration-300 ease-in-out animate-fade-up hover:bg-customTeal/60"
            >
              <div className="flex items-start gap-4">

                <img
                  src={educationInfo.image}
                  className="h-20 w-20 rounded-lg object-cover p-1"
                />

                <div className="flex flex-grow justify-between">

                  {/* Left Text */}
                  <div className="flex flex-col gap-2 ">
                    <h1 className="text-xl font-semibold text-white/80">{educationInfo.class}</h1>
                    <p className="text-lg text-white/80 ">{educationInfo.institutionName}</p>
                    <div className='flex flex-row gap-2'>
                      <img src={locationImg} className='h-6 w-6 ' />
                      <p className='text-customGreen font-bold font-cursive'>{educationInfo.location}</p>
                    </div>
                  </div>

                  {/* Right Text */}
                  <div className="flex flex-col items-end font-cursive text-white gap-5">
                    <h1 className="font-semibold text-black  group-hover:text-white group-hover:font-semibold">{educationInfo.percentage}</h1>
                    <div className="flex flex-row space-x-1 text-black font-semibold " >
                      <p>{educationInfo.startingYear}</p>
                      <p>-</p>
                      <p>{educationInfo.passingYear}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>



  )
}

export default Education