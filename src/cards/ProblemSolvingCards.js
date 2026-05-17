import React, { useState, useEffect } from 'react'
import { LEETCODE_API_EXTERNAL, GEEKS_API_EXTERNAL, LEETCODE_LINK, GFG_LINK } from '../constants/links'
import CountUp from '../components/CountUp'

const ProblemSolvingCards = () => {
    const [leetCodeStats, setLeetcodeStats] = useState();
    const [gfgStats, setGfgStats] = useState(null);


    useEffect(() => {
        const fetchLeetcode = async () => {
            try {
                const res = await fetch(LEETCODE_API_EXTERNAL);//Already Backend code written an Deployed in Heroku . We just get the stats by giving thr Manoj_Kumar_V

                if (!res.ok) { //checking the Status like 404,500,200 etc..
                    throw new Error(`Http error! Status : ${res.status}`)
                }
                const data = await res.json();

                if (!data) {
                    throw new Error("Leetcode fetch Failed.")
                }
                console.log("Data from External API ");
                console.log(data);
                setLeetcodeStats(
                    {
                        solved: data.totalSolved,
                        easySolved: data.easySolved,
                        mediumSolved: data.mediumSolved,
                        hardSolved: data.hardSolved,
                        link: LEETCODE_LINK
                    }
                );
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchLeetcode();

        //Gfg statstics uploading Manually(Hard coding)
        setGfgStats(
            {
                solved: 143,
                link: GFG_LINK
            }
        )
    }, []);

    // useEffect(() => {
    //     const fetchGFG = async () => {
    //         try {
    //             const res = await fetch(GEEKS_API_EXTERNAL)
    //             const data = await res.json();
    //             console.log("Data from GFG ")
    //             console.log(data);
    //             setGfgStats(
    //                 {
    //                     profileName: data.info.userName,
    //                     solved: data.solvedStats.easy.count
    //                 }
    //             )
    //         }
    //         catch (err) {

    //         }
    //     }

    //     fetchGFG();
    // }, [])
    return (
        <div className='flex flex-row px-4 gap-6 mt-10 justify-center'>

            {/* LeetCode */}
            <div className='w-48 h-28 rounded-xl bg-customTeal/30 backdrop-blur-md border border-customTeal/40
                            shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='flex flex-col items-center justify-center h-full gap-3 px-4 cursor-pointer'
                    onClick={() => {
                        window.open(leetCodeStats?.link, "_blank")
                    }}>
                    <h1 className='text-lg font-semibold text-white/80 tracking-wide'>Leetcode</h1>
                    {/* <h2 className='text-sm text-white/70 uppercase tracking-widest'>Solved</h2> */}

                    <div>
                        <CountUp className='text-4xl font-bold text-customGreen' from={0} to={leetCodeStats?.solved} duration={((leetCodeStats?.solved)*10)/100} />
                    </div>


                    {/* Easy, Medium, Hard Levels */}
                    {/* <div className="flex flex-row gap-2 mt-2">
                        <span className="px-3 py-1 text-xs rounded-full
                         bg-green-500/80 text-white">
                            Easy: {leetCodeStats?.easySolved ?? 0}
                        </span>

                        <span className="px-3 py-1 text-xs rounded-full
                         bg-amber-600/80 text-white">
                            Medium: {leetCodeStats?.mediumSolved ?? 0}
                        </span>

                        <span className="px-3 py-1 text-xs rounded-full
                         bg-red-500/80 text-white">
                            Hard: {leetCodeStats?.hardSolved ?? 0}
                        </span>
                    </div> */}

                </div>
            </div>


            {/* Geeks for Geeks */}
            <div className='w-48 h-28 rounded-xl bg-customTeal/30 backdrop-blur-md border border-customTeal/40
                            shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                onClick={() => {
                    window.open(gfgStats?.link, "_blank")
                }}>
                <div className='flex flex-col items-center justify-center h-full gap-3 px-4'>
                    <h1 className='text-lg font-semibold text-white/80 tracking-wide'>Geeks For Geeks</h1>
                    {/* <h2 className='text-sm text-white/70 uppercase tracking-widest'>Solved</h2> */}
                    <div>
                        <CountUp className='text-4xl font-bold text-customGreen' from={0} to={gfgStats?.solved} duration={((gfgStats?.solved)*10)/100} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProblemSolvingCards