import React from "react";
import imagen from '../assets/imagencities.jpg'
import { CityList } from "../Components/City";

function Cities(params) {
    return (
        <>
<section className="relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
        <img 
            src={imagen}
            alt="Background" 
            className="w-full h-full object-cover" 
        />
    </div>
    <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 bg-gray-700 bg-opacity-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Discover Amazing Cities
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 bg-gray-900 bg-opacity-30 p-4 rounded shadow-lg">
            Embark on unforgettable adventures tailored by those who know the magic of each destination.
        </p>
    </div>
</section>



            <CityList />
        </>
    );
}

export { Cities };