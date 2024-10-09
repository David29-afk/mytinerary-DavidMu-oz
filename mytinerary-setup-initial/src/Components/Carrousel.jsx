import React, { useState, useEffect } from 'react';

function Content(params) {
    return (
        <div className='flex flex-col items-center w-full mt-4'>
            <div className='h-96 w-full mb-10 sm:mb-20'> {/* Cambia max-w-xl a w-full */}
                <Carrousel />
            </div>
        </div>
    );
}



function Carrousel() {
    const data = [
        {
            cities: [
                { name: "New York", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-panama.png" },
                { name: "Paris", img: "https://aeromexico.com/cms/sites/default/files/media/top-destino-brasil.png" },
                { name: "Tokyo", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-dubai.png" },
                { name: "London", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-estados-unidos.png" },
            ],
        },
        {
            cities: [
                { name: "Sydney", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-espa%C3%B1a.png" },
                { name: "Dubai", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-canada.png" },
                { name: "Rome", img: "https://aeromexico.com/cms/sites/default/files/media/top-destinos-italia.png" },
                { name: "Barcelona", img: "https://content.skyscnr.com/m/533ff844a7599088/original/eyeem-26694340-106474070.jpg" },
            ],
        },
        {
            cities: [
                { name: "Istanbul", img: "https://content.skyscnr.com/m/3dd5ddbd5da36698/original/GettyImages-452680481_doc.jpg?resize=1800px:1800px&quality=100" },
                { name: "Singapore", img: "https://content.skyscnr.com/m/62e6e2604995961c/original/GettyImages-496113219.jpg?resize=1800px:1800px&quality=100" },
                { name: "Los Angeles", img: "https://content.skyscnr.com/m/3747ec5030089541/original/GettyImages-160624226.jpg?resize=1800px:1800px&quality=100" },
                { name: "Amsterdam", img: "https://content.skyscnr.com/m/2b8739b75450c3da/original/GettyImages-464257809.jpg?resize=1800px:1800px&quality=100" },
            ],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isManual, setIsManual] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
        setIsManual(true);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
        setIsManual(true);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isManual) {
                nextSlide();
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [isManual]);

    useEffect(() => {
        if (isManual) {
            const timer = setTimeout(() => {
                setIsManual(false); // Reiniciar a automático después de 3 segundos
            }, 3000); // Ajusta el tiempo que quieras

            return () => clearTimeout(timer);
        }
    }, [isManual]);

    return (
       <div className="max-w-4xl mx-auto">
    <h2 className="text-center text-2xl font-bold mb-4">Popular Mytineraries</h2>
    <div className="relative">
        <div className="overflow-hidden rounded-lg w-3/4 mx-auto"> {/* Cambia el ancho aquí */}
            {data.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                        {slide.cities.map((city, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <img src={city.img} alt={city.name} className="w-full h-32 object-cover rounded-lg" />
                                <p className="text-center mt-2">{city.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</div>

    );
}

export { Content };