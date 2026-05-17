import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        const to = "manojvelusamy24@gmail.com";
        const subject = encodeURIComponent("Contact from Portfolio");

        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
        window.open(gmailURL, "_blank");
        onClose();
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

        }
        window.addEventListener("keydown", handleEsc, true);

        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose])
    return ReactDOM.createPortal(
        <>
            {/* Background Overlay with Blur */}
            <div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
            />

            {/* Modal Card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="relative bg-white text-black rounded-2xl shadow-2xl
                     p-6 w-auto min-w-[480px] max-w-[90%]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>

                    {/* Content */}
                    <h2 className="text-xl font-semibold mb-4">Direct Message</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Feel free to reach out. I’ll respond as soon as possible.
                    </p>
                    <h1 class="text-sm text-customOrange font-semiboldn">
                        Note: Message will be sent from your logged-in Gmail account.
                    </h1>

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            onChange={(e) => setMessage(e.target.value)}
                            className="border rounded-lg p-2 resize-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleSend}
                            className="bg-customGreen/80 text-black py-2 rounded-lg hover:bg-customGreen transition"
                        >
                            Send Message to Manoj
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modal-root")
    );
}

export default Modal;
