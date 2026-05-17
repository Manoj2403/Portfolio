import React from "react";

const Footer = ({ aboutRef }) => {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const year = date.getFullYear();
    const day = days[date.getDay()];

    return (
        <div className="relative backdrop-blur-3xl bg-gradient-to-r 
                 from-white/5 via-white/10 to-white/5
                 border-t border-white/10 shadow-lg 
                 w-full bottom-0 z-50 font-inter animate-fade-up">

            {/* Top line */}
            <div className="absolute top-0 left-0 w-full h-[1px] 
                   bg-gradient-to-r from-transparent 
                   via-customGreen to-transparent animate-pulse" />

            <div className="max-w-7xl mx-auto px-3">
                <div className="flex flex-col md:flex-row 
                     justify-between items-center 
                     py-3 text-white gap-3 md:gap-0">
                    <p className="text-sm text-cusomtTeal/70">
                        Hope you're having a great <span className="text-customGreen font-semibold font-cursive">{day}</span> 😉
                    </p>


                    <div className="text-sm tracking-wide text-center mt-1 md:mt-0">
                        <h1>
                            Crafted with{" "}
                            <span className="inline-block animate-pulse hover:scale-125 transition-transform duration-300">
                                ❤️
                            </span>{" "}
                            by
                            <span
                                className="font-semibold text-customGreen ml-1 tracking-wider cursor-pointer font-cursive"
                                onClick={() => {
                                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                MANOJ KUMAR V
                            </span>
                        </h1>

                        <p className="text-sm text-white/70 mt-1 ">
                            Code. Build. Learn. Repeat.
                        </p>
                    </div>

                    <h4 className="text-sm text-white/70">© {year}</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
