import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import Confetti from 'react-confetti';
const SpecialDaysCard = ({ dayDetails, onClose }) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

        }
        window.addEventListener("keydown", handleEsc, true);

        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose])

    const isMobile = window.innerWidth < 768;

    if (!dayDetails)
        return null;
    return ReactDOM.createPortal(
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-lg"
                onClick={onClose}
            />

            {/* Centering Wrapper */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">

                {/* Modal Container */}
                <div className="
                            relative
                            w-[92%]
                            max-w-md
                            max-h-[80vh]
                            min-h-[300px]
                            bg-purple-950/90
                            backdrop-blur-lg
                            text-purple-100
                            rounded-2xl
                            shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                            p-6
                            flex flex-col
                            animate-scaleIn">


                    {/* Close Button */}
                    <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    {/* Title */}
                    <div className="relative mb-4">
                        <h1 className="font-bold text-center text-lg tracking-wide text-purple-100">
                            🎉 Special Day! 🎉
                        </h1>
                        <div
                            className="absolute bottom-0 left-0 w-full h-[1px]
                                        bg-gradient-to-r from-transparent
                                        via-customGreen to-transparent animate-pulse"
                        />
                    </div>


                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center flex flex-col gap-3 whitespace-pre-line">
                            <div className="text-customGreen font-semibold text-lg">
                                {dayDetails.desc}
                            </div>
                            <div className="text-purple-300 font-semibold">
                                {dayDetails.shortMsg}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Confetti */}
                <Confetti
                    className="fixed inset-0 z-40 pointer-events-none"
                    numberOfPieces={isMobile ? 150 : 700}
                    recycle={false}
                    gravity={0.1}
                    initialVelocityX={6}
                    initialVelocityY={12}
                    colors={[
                        '#FF4D4D',
                        '#FFD93D',
                        '#6BCB77',
                        '#4D96FF',
                        '#C77DFF',
                    ]}
                    // confettiSource={{
                    //     x: 0,
                    //     y: 0,
                    //     w: window.innerWidth,
                    //     h: 0,
                    // }}
                />

            </div>
        </>,

        document.getElementById("modal-root")
    )
}

export default SpecialDaysCard