import React from 'react'
import BounceCards from '../cards/BounceCards'
import bus_transport from '../assets/bus_transport.png'
import event_management from '../assets/event_management.png'
import github from '../assets/GitHub.png'
import image_unavailable from '../assets/image_unavailable.png'
import { EVENT_MANAGEMENT_GITHUB_URL, BUS_TRANSPORT_GITHUB_URL, CHARITY_DONATION_GITHUB_URL } from '../constants/links'

const Projects = () => {
    const projects = [
        {
            image: bus_transport,
            name: "Bus Transport",
            applicationType: "Web App",
            description: `A basic static website that displays bus routes for passengers.Built to practice designing clean layouts and presenting information in a structured and user-friendly way.`,
            projectDate: "May 2022",
            techStack: ["HTML5", "CSS3", "Javascript", "SQL"],
            link: BUS_TRANSPORT_GITHUB_URL
        },
        {
            image: image_unavailable,
            name: "Parent App",
            applicationType: "Mobile App",
            description: `A communication platform connecting schools and parents for attendance tracking, announcements, and academic updates.
Designed to improve parent teacher engagement with a simple and user-friendly interface.`,
            projectDate: "February 2023",
            techStack: ["Java", "SQLite", "XML", "App Development"]
            // link: ""
        },
        {
            image: image_unavailable,
            name: "Charity Donation Platform",
            applicationType: "Web App",
            description: `A transparent online system for donors to contribute to charities and track their donations.
Focused on secure payments and impactful donation visibility to build trust between donors and organizations.`,
            projectDate: "September 2023",
            techStack: ["React Js", "Node Js", "MongoDB", "Stripe API", "Web Development"],
            link: CHARITY_DONATION_GITHUB_URL
        },

        {
            image: event_management,
            name: "Event Management System",
            applicationType: "Web App",
            description: `A web application that simplifies event planning, volunteer coordination.
Optimizes task assignments and event workflows to improve efficiency and reduce manual effort.  `,
            projectDate: "June 2025",
            techStack: ["Java", "Spring Boot", "React JS", "Spring Security", "MySQL", "Rest API", "RazorPay"],
            link: EVENT_MANAGEMENT_GITHUB_URL
        }
    ]

    return (
        <div className="flex flex-col lg:flex-col gap-16 px-6 py-8">
            <h1 className="text-4xl font-cursive font-bold text-customGreen mb-6 text-center">
                What I've Built
                {/* The Projects that I enjoyed Working on  */}
            </h1>


            {/* Main Container Horizontal */}
            <div className='flex flex-row lg:flex-row items-start gap-10  w-full animate-fade-top' >

                {/* pulse effect */}
                <div className="w-5 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen my-auto relative">
                    <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
                </div>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md border cursor-pointer rounded-2xl p-8
                            w-96 h-[500px] text-left
                            hover:scale-[1.02] transition-transform duration-300 ease-in-out
                            animate-fade-up flex flex-col hover:border-customOrange/50"
                        onClick={() => {
                            project.link
                                ? window.open(project.link, "_blank")
                                : window.alert("No URL Found for " + project.name + ".");
                        }}
                    >
                        {/* Image */}
                        <div className="-mx-8 -mt-8 rounded-t-2xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name + ' screenshot'}
                                className="w-full h-44 object-cover block"
                            />
                        </div>

                        {/* Content */}
                        <div className="pt-3 -mx-5 flex flex-col w-[calc(100%+2rem)] flex-1">
                            {/* Title + Date */}
                            <div className="flex w-full justify-between items-start min-w-0 h-auto">
                                <h1 className="text-sm text-white font-semibold max-w-[72%] break-words whitespace-normal">
                                    {project.name}
                                </h1>
                                <p className="text-sm text-gray-300 flex-shrink-0 ml-3 font-cursive">
                                    {project.projectDate}
                                </p>
                            </div>

                            {/* Application type */}
                            <p className="text-sm text-customOrange mt-2 font-cursive">
                                {project.applicationType}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-300 mt-3 overflow-hidden">
                                {project.description || "Short summary..."}
                            </p>

                            {/* Tech stack tags */}
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.techStack.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl px-3 py-1 border font-cursive border-customGreen/50 font-medium
                                                w-auto h-auto text-sm text-customGreen
                                                hover:scale-110 transition-transform duration-300 ease-in-out
                                                hover:text-customPink hover:border-customPink/50">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}


                {/* Pulse Effect */}
                <div className="w-5 h-20 sm:w-0 sm:h-0 lg:w-1 lg:h-72 bg-customGreen my-auto relative">
                    <div className="absolute inset-0 blur-sm bg-customGreen animate-pulse" />
                </div>
            </div>
        </div>
    )
}

export default Projects