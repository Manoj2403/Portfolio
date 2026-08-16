import React, { useEffect } from 'react'
import cognizantLogo from '../assets/Cognizant_Logo.png'
import cognizantLogoSymbol from '../assets/cognizant_logo_symbol.jpeg'
import gfgLogo from '../assets/gfg_logo.png'
import tcsLogo from '../assets/tcs_logo_1.png'

const Experience = () => {
  const experience = [
    // {
    //   designation: "System Engineer",
    //   company: "Tata Consultancy Services",
    //   startYear: 2026,
    //   startMonth: "July",
    //   endYear: null,
    //   endMonth: null,
    //   location: "Chennai, India",
    //   isCurrentlyWorking: true,
    //   image: tcsLogo,
    //   description: "",
    // },
    {
      designation: "Software Engineer Trainee",
      company: "Cognizant",
      startYear: 2025,
      startMonth: "March",
      endYear: 2026,
      endMonth: "July",
      location: "Chennai, India",
      isCurrentlyWorking: false,
      image: cognizantLogoSymbol,
      description: "Working as a Software Engineer, contributing to enterprise-level applications and collaborating with cross-functional teams to deliver high-quality solutions.",
    },
    {
      designation: "Campus Ambassador",
      company: "Geeks For Geeks",
      startYear: 2022,
      startMonth: "December",
      endYear: 2023,
      endMonth: "December",
      location: "Remote",
      isCurrentlyWorking: false,
      image: gfgLogo,
      description: "Represented GeeksforGeeks on campus, organized coding events, workshops, and helped students enhance their DSA and programming skills.",
    }
  ]

  const calculateYOE = (startYear, startMonth, endYear, endMonth) => {
    const monthOrder = {
      January: 1, February: 2, March: 3, April: 4,
      May: 5, June: 6, July: 7, August: 8,
      September: 9, October: 10, November: 11, December: 12
    };

    let toYear, toMonth;

    if (endYear === null || endMonth === null) {
      // Currently working — calculate till today
      const now = new Date();
      toYear = now.getFullYear();
      toMonth = now.getMonth() + 1; // 0-indexed
    } else {
      // Past experience — calculate till end date
      toYear = endYear;
      toMonth = monthOrder[endMonth];
    }

    const totalMonths =
      (toYear - startYear) * 12 + (toMonth - monthOrder[startMonth]);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div
        className="block lg:hidden w-full h-[1px]
        bg-gradient-to-r from-transparent
        via-customGreen to-transparent animate-pulse"
      />
      <h1 className="text-4xl font-bold text-customPink mb-20 text-center animate-fade-left font-cursive">
        Places That Trusted Me 🤗{/* Journey So Far 🚀*/}
      </h1>

      <div className='flex items-start animate-fade-right'>


        {/* Experience scroll section */}
        <div className="relative max-h-[500px] overflow-y-auto pr-2 flex-1 scrollbar-thin scrollbar-thumb-customGreen scrollbar-track-transparent" style={{ scrollbarWidth: 'none' }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="flex items-start mb-16 relative">

              {/* LEFT Side */}
              <div className="w-64 pr-8 text-right flex-shrink-0">
                <div className="flex items-center justify-end gap-3 mb-1">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-10 h-10 object-contain rounded"
                  />
                  <p className='text-white/80 font-semibold'>{exp.company}</p>
                </div>
                <p className="text-sm text-gray-400">
                  {exp.startMonth} {exp.startYear} -{" "}
                  {exp.isCurrentlyWorking
                    ? "Present"
                    : `${exp.endMonth} ${exp.endYear}`}
                </p>
                <p className='text-sm text-gray-400 '>{exp.location}</p>
              </div>

              {/* Center Dotted line */}
              <div className="flex flex-col items-center mx-4 flex-shrink-0 self-stretch">
                {/* Dashed circle + solid dot */}
                <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
                  <div className="absolute w-10 h-10 rounded-full border-2 border-dashed border-gray-400" />
                  {exp.isCurrentlyWorking
                    ? <div className={`w-4 h-4 rounded-full bg-teal-500 z-10`} />
                    : <div className={`w-4 h-4 rounded-full bg-orange-500 z-10`} />}
                </div>

                {/* Vertical line — stretches to next dot */}
                {idx < experience.length - 1 && (
                  <div className="flex-1 w-px border-l-2 border-dashed border-gray-400 my-1 mb-[-4rem]" />
                )}
              </div>

              {/* RIGHT side */}
              <div className="flex-1 pl-4 pt-1 border p-6 rounded-ss-lg rounded-ee-lg rounded-se-3xl rounded-es-3xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-customGreen">
                    {exp.designation}
                  </h3>
                  <span className="text-sm text-customTeal px-2 py-1 rounded-full">
                    {calculateYOE(exp.startYear, exp.startMonth, exp.endYear, exp.endMonth)}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm max-w-md">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Right green line */}
        {/* <div className="hidden lg:block w-[2px] self-stretch bg-customGreen relative flex-shrink-0">
        <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
      </div> */}

      </div>
    </div>
  )
}

export default Experience