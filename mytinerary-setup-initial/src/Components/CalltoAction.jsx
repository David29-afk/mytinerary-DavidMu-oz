import React from "react";
import video from '../assets/videos.mp4'
import { NavLink } from 'react-router-dom';

function CalltoAction(params) {
    return (
<section className="relative overflow-hidden">
            <video 
                className="absolute inset-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
            >
                <source src={video} type="video/mp4" />
                Tu navegador no soporta video.
            </video>
            <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 bg-gray-700 bg-opacity-20">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    We invest in the world’s potential
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Find your perfect trip, designed by insiders who know and love their cities.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                
        <NavLink 
            to="/cities" 
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
            Explore cities
            <svg 
                aria-hidden="true" 
                className="ml-2 -mr-1 w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                ></path>
            </svg>
        </NavLink>
                    <a 
                        href="#" 
                        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                    >
                        Learn more
                    </a>  
                </div>
            </div>
        </section>
    );
}

export { CalltoAction };