import React from 'react'
import schoolImg from '../assets/school.png'
import graduationCap from '../assets/graduation-cap.png'
import book2 from '../assets/book2.png'
import locationImg from '../assets/location (1).png'

const Education = () => {
  const education = [
    {
      class: "B.E - Information Science and Engineering",
      institutionName: "Bannari Amman Institute of Technology",
      startingYear: 2021,
      passingYear: 2025,
      location: "Erode, Tamilnadu",
      percentage: "8.55 CGPA",
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
  ];

  return (
    <div className="flex flex-col gap-12 lg:gap-16 px-4 sm:px-6 py-8 overflow-hidden">

      <div
        className="block lg:hidden w-full h-[1px]
        bg-gradient-to-r from-transparent
        via-customGreen to-transparent animate-pulse"
      />
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-customPink mb-2 font-cursive text-center animate-fade-in">
        Education
      </h1>

      <div className="flex flex-col lg:flex-row relative gap-8 lg:gap-0 items-center">

        {/* Green Line */}
        <div className="hidden lg:block w-1 h-72 bg-customGreen my-auto relative">
          <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
        </div>


        {/* Book Image */}
        <img src={book2} alt="Education"
          className="w-full max-w-[300px] sm:max-w-[420px] lg:w-[900px] lg:h-[500px] object-contain animate-fade-right mx-auto" />

        {/* Education Cards */}
        <div className="flex flex-col relative w-full gap-5 animate-fade-left">

          {education.map((educationInfo, index) => (
            <div key={index}
              className="group bg-customTeal/50 backdrop-blur-md border border-black shadow-lg
                rounded-2xl
                p-4 sm:p-6
                w-full
                hover:scale-[1.02]
                transition-transform
                duration-300
                ease-in-out
                animate-fade-up
                hover:bg-customTeal/60"
            >
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Education Icon */}
                <img src={educationInfo.image}
                  alt="Education Icon"
                  className="
                    h-16 w-16
                    sm:h-20 sm:w-20
                    rounded-lg
                    object-cover
                    p-1
                    self-center sm:self-start
                  "
                />

                {/* Content */}
                <div className="flex flex-col sm:flex-row w-full justify-between gap-4">

                  {/* Left Side */}
                  <div className="flex flex-col gap-2 text-center sm:text-left">

                    <h1 className="text-lg sm:text-xl font-semibold text-white/80">
                      {educationInfo.class}
                    </h1>

                    <p className="text-sm sm:text-lg text-white/80">
                      {educationInfo.institutionName}
                    </p>

                    <div className="flex justify-center sm:justify-start items-center gap-2">
                      <img
                        src={locationImg}
                        alt="Location"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                      />

                      <p className="text-customGreen font-bold font-cursive text-sm sm:text-base">
                        {educationInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div
                    className="
                      flex flex-row sm:flex-col
                      justify-between
                      items-center sm:items-end
                      font-cursive text-white
                      gap-2 sm:gap-5
                    "
                  >
                    <h1 className="font-semibold text-black group-hover:text-white">
                      {educationInfo.percentage}
                    </h1>

                    <div className="flex flex-row space-x-1 text-black font-semibold">
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
  );
};

export default Education;