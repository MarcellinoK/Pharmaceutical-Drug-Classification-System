import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 line-clamp-2">{description}</p>
    </div>
  );
};

export default Card;
