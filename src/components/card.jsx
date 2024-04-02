import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div 
      className="min-h-96 transition duration-300 ease-in-out transform bg-gray-200 hover:bg-gray-100 p-4 rounded-lg shadow-lg"
      
    >
      <h2 className="text-xl font-bold text-gray-700 hover:text-black">{title}</h2>
      <img src={image} alt={title} className="w-full grayscale hover:grayscale-0" />
      <p className="text-gray-600 hover:text-black">{description}</p>
    </div>
  );
};

export default Card;