'use client'

import usePrefersReducedMotion from "@/hooks/reducedMotion";
import { motion } from "framer-motion";
import Projects from "../components/Section/projects";
import Hero from "../components/Section/hero";
import Banner from "@/components/Section/banner";
import Contact from "@/components/Section/contact";


function Home() {

  const prefersReducedMotion = usePrefersReducedMotion();

  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, delay: 0.5 },
    
  };

  const reducedMotionSettings = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0 }
  };
  return (
  <>
    <section className="bg-[url('/bg_island.webp')] overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg h-screen" >
      <div className="flex justify-center h-screen">
        <motion.div
        className="flex flex-col justify-center md:justify-center items-center gap-y-10 "
        {...(prefersReducedMotion ? reducedMotionSettings : animationSettings)}>  
          <h1 className= "text-white text-md md:text-3xl lg:text-5xl xl:text-7xl font-bold ">MICHAL HORODYSKI</h1>
          <h2 className= "text-white text-xs md:text-xl lg:text-2xl xl:text-4xl ">WEB DESIGNER</h2>
        </motion.div>
      </div>
    </section>
    <section>
      <Projects />
    </section>  

    <section >
      <Hero />
    </section>
    <section>
    <Contact />
    </section>
  </>
    
  );
}

export default Home;


