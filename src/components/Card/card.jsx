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
      className="min-h-96 transition duration-300 ease-in-out transform bg-secondary_bg hover:bg-secondary_bg/70 rounded-xl shadow-lg">
      {selected ? (
      <div className='flex flex-col h-full'>
        <div className="flex justify-between items-center gap-2 p-4">
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
  <div className='flex flex-col items-center h-96 md:h-full w-full'>
    <div className='w-full rounded-t-xl overflow-hidden brightness-90 '>
      <Image 
        src={image}
        width={550} 
        height={300} 
        className='w-full objectFir:cover layout:responsive'
        alt='project website screenshot'/>
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-text_card text-center mt-6 ">{title}</h2>
    <div className='p-4 h-1/2 flex flex-col justify-around gap-6'>
      <p className="text-text_card text-center text-sm md:text-base">{description}</p>
      <div className='text-center'>
      <Button onClick={clickHandler}>More details</Button>
      </div>
  </div>
</div>
      )}
    </motion.div>
  );
};

export default Card;