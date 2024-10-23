import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const CityDetails = () => {
    const { id } = useParams(); // Obtener el id de la URL
    const [city, setCity] = useState(null);

    useEffect(() => {
        const fetchCity = async () => {
            const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
            const data = await response.json();
            setCity(data.response);
        };

        fetchCity();
    }, [id]);

    if (!city) return <div>Loading...</div>;

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={city.photo} 
                    alt={city.name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    {city.name}
                </h1>
                <h2 className="mb-2 text-2xl font-semibold text-white opacity-80">{city.country}</h2>
                <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48 bg-gray-900 bg-opacity-10 p-4 rounded shadow-lg">
                    {city.description}
                </p>
                <NavLink 
                    to="/cities" 
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                    Back to Cities
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

                {/* Card for Under Construction */}
                <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mt-8 opacity-80">
                    <svg className="w-12 h-12 dark:text-gray-400 text-gray-700" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
                        <g id="File_Off">
                            <g>
                                <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z"></path>
                                <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z"></path>
                            </g>
                        </g>
                    </svg>
                    <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200 opacity-80">Under Construction</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 opacity-80">
                        This section is currently being developed.
                    </p>
                </div>
            </div>
        </section>
    );
};



export { CityDetails };



