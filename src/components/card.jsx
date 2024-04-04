import React, { useState } from 'react';

const Card = ({ title, image, description, projectDetails }) => {
  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected(!selected);
  };

  return (
    <div 
      className="min-h-96 transition duration-300 ease-in-out transform bg-gray-200 hover:bg-gray-100 p-4 rounded-lg shadow-lg"
    >
      {selected ? (
        <div className='flex flex-col justify-between items-center gap-3 h-full  '>
          <div className="flex justify-between items-center gap-2 w-full">
            <button onClick={clickHandler} className='p-2 rounded text-white bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out'>Back</button>
            <a href="#" className='p-2 rounded text-white bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out text-center'>Visit website</a>
          </div>
          <div>
          <ul className="p-4">
            {projectDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          </div>
          
        </div>
      ) : (
        <div className='flex flex-col items-center gap-3 '>
          <div className='flex justify-between items-center w-full'>
            <h2 className="text-xl font-bold text-gray-700 hover:text-black">{title}</h2>
            <button onClick={clickHandler} className='p-2 rounded text-white bg-slate-600 hover:bg-slate-500 duration-200 ease-in-out '>More details</button>
          </div>
            <img src={image} alt={title} className="w-full " />
            <p className="text-gray-600 hover:text-black">{description}</p>
        </div>
        
      )}
    </div>
  );
};

export default Card;