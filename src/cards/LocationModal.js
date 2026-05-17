import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const LocationModal = ({ onClose }) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

        }
        window.addEventListener("keydown", handleEsc,true);

        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose])

    const [myLocation,setMyLocation] = useState("https://www.google.com/maps?q=Chennai,TamilNadu&z=14&output=embed");


    //It get the Location coords lively from the user and set in the myLocation

    // useEffect(()=>{
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(
    //             (position)=>{
    //                 const {latitude,longitude} = position.coords;
    //                 console.log(latitude)
    //                 console.log(longitude)
    //                 setMyLocation(`https://www.google.com/maps?q=${latitude},${longitude},TamilNadu&z=14&output=embed`);
    //             },
    //             (err)=>{
    //                 console.log("Error : ",err)
    //             },
    //             {
    //                 enableHighAccuracy:true,
    //                 timeout:10000,
    //                 maximumAge:0
    //             }
    //         )
    //     }
    // },[])

    return ReactDOM.createPortal(
        <>
            {/* Background Overlay with Blur */}
            <div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="relative bg-white text-black rounded-2xl shadow-2xl
                       p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>

                    {/* {userLocation && (
                        <div>
                            <p>{userLocation.latitude}</p>
                            <p>{userLocation.longitude}</p>
                        </div>
                    )} */}

                    {/* <iframe width="778" height="649" id="gmap_canvas" src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}

                    <iframe
                        title='Chennai Location'
                        src={myLocation}
                        width="778px"
                        height="649px"
                        loading='lazy'
                        referrerPolicy='no-referred-when-downgrade' />
                </div>
            </div>
        </>,
        document.getElementById("modal-root")
    );
}

export default LocationModal