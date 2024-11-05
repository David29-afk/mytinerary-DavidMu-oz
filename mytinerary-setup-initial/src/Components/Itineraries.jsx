import React, { useEffect, useState } from 'react';

const ItinerariesByCity = ({ cityId }) => {
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedItineraryIds, setExpandedItineraryIds] = useState([]);

    useEffect(() => {
        const fetchItinerariesByCity = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItineraries(data.response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchItinerariesByCity();
    }, [cityId]);

    const toggleExpand = (id) => {
        setExpandedItineraryIds(prevIds => 
            prevIds.includes(id) ? prevIds.filter(expId => expId !== id) : [...prevIds, id]
        );
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-20">Itineraries for This City</h1>
            {itineraries.length === 0 ? (
                <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                    <svg className="w-12 h-12 dark:text-gray-400 text-gray-700" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
                        <g id="Travel_Icon">
                            <path d="M12,4C8.134,4,5,7.134,5,11c0,3.865,3.134,7,7,7s7-3.135,7-7C19,7.134,15.866,4,12,4z M12,16c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C17,13.761,14.761,16,12,16z"></path>
                            <path d="M12,6c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S14.757,6,12,6z M12,14c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,14,12,14z"></path>
                            <path d="M12 0c-1.659 0-3.071 1.047-3.647 2.532C8.327 2.532 9 2 10 2c1.103 0 2 .897 2 2 0 .371-.098.714-.267 1.014-.324-.175-.679-.288-1.056-.352C11.054 4.345 11 4.175 11 4c0-.552-.449-1-1-1-.523 0-.938.421-1.004.933C7.617 4.06 7 5.091 7 6.219V8c0 1.104.897 2 2 2h2c1.103 0 2-.896 2-2V6.219c0-1.128-.617-2.158-1.498-2.286-.066-.511-.481-.933-1.004-.933-.552 0-1 .448-1 1 0 .175-.054.345-.143.508-.377.063-.732.177-1.056.352C9.098 4.714 9 4.371 9 4c0-1.103.897-2 2-2 1 0 1.673.532 1.647 1.532C15.071 1.047 13.659 0 12 0zM8 2C6.897 2 6 2.897 6 4s.897 2 2 2 2-.897 2-2S9.103 2 8 2zM16 4c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2S17.103 4 16 4z"></path>
                        </g>
                    </svg>
                    <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">No itineraries yet for this city</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        There are no itineraries available for this city.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {itineraries.map(itinerary => (
                        <div key={itinerary._id} className="max-w-sm w-full rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img className="w-full" src={itinerary.photo} alt={itinerary.nameItinerary} />
                            <div className="px-6 py-4">
                                <h2 className="text-xl font-bold text-gray-900">{itinerary.nameItinerary}</h2>
                                <div className="mt-2">
                                    <span className="mr-2 rounded-full bg-blue-600 py-1 px-2 text-xs font-medium text-white">{itinerary.type}</span>
                                    {itinerary.hashtags.map((hashtag, index) => (
                                        <span key={index} className="mr-1 rounded-full bg-yellow-500 py-1 px-2 text-xs font-medium text-white">{hashtag}</span>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center">
                                    <img 
                                        src="https://img.icons8.com/ios-filled/24/null/clock.png" 
                                        alt="Duration" 
                                        className="mr-2 opacity-75 text-blue-500" 
                                        style={{ filter: "opacity(0.7) hue-rotate(200deg)" }} 
                                    />
                                    <p className="text-lg font-medium text-gray-700">{itinerary.duration} hours</p>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <img 
                                        src="https://img.icons8.com/ios-filled/50/null/banknotes.png" 
                                        alt="Price" 
                                        className="mr-2 opacity-75 text-blue-500" 
                                        style={{ filter: "opacity(0.7) hue-rotate(200deg)" }} 
                                    />
                                    <p className="text-3xl font-extrabold text-blue-800">${itinerary.price}</p>
                                </div>
                            </div>
                            <div className="px-6 py-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img 
                                        src={itinerary.photoUser || "https://via.placeholder.com/50"} 
                                        alt="Agent" 
                                        className="mr-2 rounded-full object-cover w-10 h-10" 
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{itinerary.name}</p>
                                        <p className="text-xs text-gray-600">Creator</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <button onClick={() => toggleExpand(itinerary._id)} className="mr-2 rounded-full bg-gray-300 p-1 text-gray-700 hover:text-gray-800">
                                        <img src="https://img.icons8.com/ios-filled/24/null/chevron-down.png" alt="Expand" />
                                    </button>
                                </div>
                            </div>
                            {expandedItineraryIds.includes(itinerary._id) && (
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-bold text-gray-900">Activities</h3>
                                    <p className="text-gray-700 mt-2">{itinerary.activities}</p>
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
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItinerariesByCity;



















