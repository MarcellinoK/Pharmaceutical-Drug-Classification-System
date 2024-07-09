import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-cover bg-center bg-no-repeat bg-[#E1EEFF]" style={{ backgroundImage: "url('/bg2.png')" }}>
      <div className="absolute inset-0 bg-[#E1EEFF] bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-gray-900">
        <p className="text-blue-500 font-semibold text-xl md:text-2xl lg:text-3xl">Welcome</p>
        <h2 className="text-5xl font-bold leading-tight mt-4">
          Pharmaceutical Drug <br/> Classification System
        </h2>
        <p className="mt-2 md:mt-4 lg:mt-6 text-lg md:text-xl lg:text-2xl">
          Safe and Guaranteed Medication<br/>A Trusted Pharmaceutical Drug Classification System
        </p>
        <ScrollLink 
          to="prediction" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-max cursor-pointer"
        >
          Let's Predict
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
