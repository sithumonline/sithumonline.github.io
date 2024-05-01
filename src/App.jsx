import React from "react";
import {
  FaDev,
  FaMedium,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa";

import sithum from "./assets/images/sithum.jpg";
import HuggingFace from "./huggingfacecopy";

function App() {
  const icons = [
    {
      uri: "https://github.com/sithumonline",
      Icon: FaGithubSquare,
    },
    {
      uri: "https://medium.com/@sithumonline",
      Icon: FaMedium,
    },
    {
      uri: "https://www.facebook.com/sithumonline",
      Icon: FaFacebookSquare,
    },
    {
      uri: "https://www.instagram.com/sithumonline",
      Icon: FaInstagramSquare,
    },
    {
      uri: "https://www.linkedin.com/in/sithumonline",
      Icon: FaLinkedin,
    },
    {
      uri: "https://stackoverflow.com/users/12165840/xeon",
      Icon: FaStackOverflow,
    },
    {
      uri: "https://twitter.com/sithumonline",
      Icon: FaTwitterSquare,
    },
    {
      uri: "https://dev.to/sithumonline",
      Icon: FaDev,
    },
    {
      uri: "https://huggingface.co/sithumonline",
      Icon: HuggingFace,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center p-10 md:p-0">
        <div className="flex justify-center">
          <div className="group h-auto sm:max-w-sm md:max-w-md xl:max-w-lg shadow-lg bg-white/60 backdrop-blur-[5px] md:m-6 lg:m-10 p-5 md:p-10 rounded-3xl transform hover:-rotate-6 transition-all duration-300">
            <img
              id="image"
              src={sithum}
              className="rounded-3xl group-hover:rotate-[12deg] transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 min-h-[65vh] md:min-h-screen bg-[#121212] py-6 flex flex-col justify-center sm:py-12">
        <div className="group relative py-3 sm:max-w-xl sm:mx-auto m-10 p-5 md:py-3 mb-20 transform md:scale-[0.80] lg:scale-[1.03]">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-3 md:-skey-y-6 sm:skew-y-0 -rotate-6 rounded-3xl group-hover:bg-gradient-to-l group-hover:rotate-6 transition-all duration-300"></div>
          <div className="relative px-4 py-10 bg-white/60 backdrop-blur-[5px] shadow-lg rounded-3xl sm:p-20 group-hover:-rotate-6 transition-all duration-300">
            <div className="max-w-md mx-auto">
              <div className="grid grid-rows-3 grid-cols-3 gap-4">
                {icons.map((icon, index) => {
                  return (
                    <a
                      key={index}
                      href={icon.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center odd:hover:text-[#fd1d7c] even:hover:text-blue-500"
                    >
                      <icon.Icon className="h-14 w-14 md:h-20 md:w-20 fill-current transition-all duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
