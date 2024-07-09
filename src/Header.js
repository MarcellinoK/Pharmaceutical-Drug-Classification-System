import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="w-full bg-[#E1EEFF] py-4 px-6 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-gray-800">ClassMed</div>
        <nav className="flex flex-1 justify-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <ScrollLink 
                to="hero" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition duration-300 ml-6"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition duration-300 ml-6"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="data" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition duration-300 ml-6"
              >
                Our Data
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="sponsors" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition duration-300 ml-6"
              >
                Project Sponsor
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="ourteam" 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className="cursor-pointer text-lg text-gray-800 hover:text-blue-600 transition duration-300 ml-6"
              >
                Our Team
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <ScrollLink 
          to="prediction" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="cursor-pointer text-lg font-semibold text-gray-800 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300"
        >
          Let's Predict
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
