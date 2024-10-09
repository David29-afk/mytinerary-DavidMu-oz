import React from "react";


function Footer(params) {
    return (
<footer className="w-full  p-4 bg-gradient-to-r from-gray-900 to-gray-800 shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://logos-world.net/wp-content/uploads/2021/05/Expedia-Symbol.png" className="mr-4 h-6" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MY TINERARY</span>
                </a>
                <ul className="flex flex-wrap items-center justify-center mb-6 sm:mb-0">
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024 <a href="https://flowbite.com" target="_blank" rel="noopener noreferrer" className="hover:underline">MyTinerary™</a>. All Rights Reserved.
            </span>
        </footer>
    );
}

export { Footer };