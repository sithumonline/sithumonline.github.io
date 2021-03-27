import React from 'react';
import {
    FaDev,
    FaDocker,
    FaFacebookMessenger,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaStackOverflow,
    FaTwitterSquare
} from 'react-icons/fa';
import person_1 from './assets/images/sithum.jpg';

function App() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div class="bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center">
                <div className="flex justify-center">
                    <div>
                        <img src={person_1} className="h-auto sm:max-w-sm md:max-w-md xl:max-w-xl bg-white p-10"/>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="grid grid-rows-3 grid-cols-3 gap-4">
                                <div>
                                    <a href="https://github.com/sithumonline" target="_blank"
                                    ><FaGithubSquare className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/sithumonline" target="_blank"
                                    ><FaTwitterSquare className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://dev.to/ebonynon" target="_blank"
                                    ><FaDev className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://stackoverflow.com/users/12165840/xeon" target="_blank"
                                    ><FaStackOverflow className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://hub.docker.com/u/ebonynon" target="_blank"
                                    ><FaDocker className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/sithumonline" target="_blank"
                                    ><FaLinkedin className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/sithumonline" target="_blank"
                                    ><FaFacebookSquare className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://m.me/sithumonline" target="_blank"
                                    ><FaFacebookMessenger className="h-28 w-28"/></a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/sithumonline" target="_blank"
                                    ><FaInstagramSquare className="h-28 w-28"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
