import React, { useState } from 'react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/reducedMotion';
import Image from "next/image"
import Button from '../Buttons/button.jsx';




const Card = ({ title, image, description, projectDetails }) => {
  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected(!selected);
  };

  const prefersReducedMotion = usePrefersReducedMotion();

  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    viewport: { once: true },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  const reducedMotionSettings = {
    initial: {opacity: 1},
    animate: {opacity: 1},
    transition: {duration: 0},
  };

  return (
    <motion.div 
      {...(prefersReducedMotion ? reducedMotionSettings : animationSettings)}
      className="min-h-96 transition duration-300 ease-in-out transform bg-secondary_bg hover:bg-secondary_bg/70 p-4 rounded-lg shadow-lg">
      {selected ? (
      <div className='flex flex-col h-full'>
        <div className="flex justify-between items-center gap-2">
        <Button onClick={clickHandler}>Back</Button>
        <Button href="#">Visit website</Button>
        </div>
        <div className='flex items-center justify-center h-full'>
          <ul className="p-4">
            {projectDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>  
    ) : (
      <div className='flex flex-col items-center gap-3 grayscale-50'
        >
        <div className='flex justify-between items-                                                                                     center w-full'>
          <h2 className="text-xl font-bold text-gray-700 hover:text-black">{title}</h2>
          <Button onClick={clickHandler}>More details</Button>
          
        </div>
          <Image 
          src={image}
          width={350}
          height={300}
          objectFit='contain'
          className='p-2'
          alt='project website screenshot'/>
          <p className="text-gray-600 hover:text-black">{description}</p>
      </div>
      )}
    </motion.div>
  
  );
};

export default Card;