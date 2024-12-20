import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CityList = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const response = await fetch('http://localhost:8080/api/cities/all');
            const data = await response.json();
            setCities(data.response);
        };

        fetchCities();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
            {cities.map(city => (
                <div 
                    className="relative flex flex-col justify-center overflow-hidden bg-gray-50 m-4 rounded-xl shadow-xl" 
                    key={city._id}
                >
                    <div className="group relative flex h-72 rounded-xl shadow-xl">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl transition duration-300 ease-in-out group-hover:opacity-100">
                            <img 
                                src={city.photo} 
                                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center transition duration-300 group-hover:scale-110" 
                                alt={city.name} 
                            />
                        </div>
                        <div className="absolute bottom-0 z-10 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 className=" text-2xl font-bold text-white shadow-xl mb-2 city-name">{city.name}</h1>
                            <h2 className="text-sm font-light text-gray-200 shadow-xl mb-4 city-country">{city.country}</h2>
                            <NavLink 
                                to={`/cities/${city._id}`} 
                                className="mt-2 px-4 py-2 text-sm text-white bg-yellow-400 rounded hover:bg-yellow-500"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { CityList };


