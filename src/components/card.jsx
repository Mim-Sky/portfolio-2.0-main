import React, { useState } from 'react';


const Card = ({ title, image, description }) => {

  const [selected, setSelected] = useState();

  const clickHandler = () => {
    
  };


  return (
    <div 
      className="flex flex-col justify-center items-center gap-3 min-h-96  transition duration-300 ease-in-out transform bg-gray-200 hover:bg-gray-100 p-4 rounded-lg shadow-lg"
      
    >
      <h2 className="text-xl font-bold text-gray-700 hover:text-black">{title}</h2>
      <img src={image} alt={title} className="w-full grayscale hover:grayscale-0" />
      <p className="text-gray-600 hover:text-black">{description}</p>
      <button onClick={clickHandler} className='p-2 rounded text-white bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out mt-6'>More defails</button>
    </div>
  );
};

export default Card;