import React, { useState, useEffect } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ScrollButton = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    //detecting the Scroll Position
    const handleScroll = () => {
      const toltalScrollabaleHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(window.scrollY > (toltalScrollabaleHeight * 0.5));
    };

    window.addEventListener("scroll", handleScroll)

    return () => { window.removeEventListener("scroll", handleScroll) }
  }, []);

  // const scrollDown = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth"
  //   });
  // }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div >

      {showUp && (
        <button onClick={scrollUp}
          className='h-10 w-10 rounded-full z-50 fixed bottom-4 right-4 backdrop-blur-md
                  bg-white/80 text-black flex items-center hover:bg-customGreen/70 hover:text-white
                    justify-center'>
            <FaArrowUp />
        </button>
      )}




      {/* -----------Arrow Icons will show top right to scroll down and bottom right to scroll up based on condition---------- */}
      {/* {showUp ? (
        <button onClick={scrollUp}
          className='h-10 w-10 rounded-full z-50 fixed bottom-4 right-4 backdrop-blur-md bg-white/80 text-customGreen flex items-center
                        justify-center border'>
          <FaArrowUp />
        </button>
      ) :
        (
          <button onClick={scrollDown}
            className='h-10 w-10 rounded-full z-50 fixed top-4 right-4 backdrop-blur-md bg-customGreen text-black flex items-center
                        justify-center hover:bg-white/60'>
            <FaArrowDown />
          </button>
        )} */}

    </div>
  )
}

export default ScrollButton