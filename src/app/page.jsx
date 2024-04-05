'use client'
import Image from "next/image";
import usePrefersReducedMotion from "@/hooks/reducedMotion";
import { motion } from "framer-motion";
import Projects from "../components/Section/projects";
import Hero from "../components/Section/hero";


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
    <section className="bg-[url('/bg_island.webp')] bg-cover bg-center h-screen" >
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
    <section>
      <Hero />
    </section>
    {/* <section>
      <div className="h-screen bg-black flex justify-center md:items-center">
        <h1 className="text-white text-7xl">ABOUT ME</h1>
      </div>
    </section> */}
    {/* projects */}
    {/* <section>
      <div className="h-screen bg-black flex justify-center md:items-center">
        <h1 className="text-white text-7xl translate-y-20 md:translate-y-0">PROJECTS</h1>
      </div>
    </section> */}
    {/* contact */}
    {/* <section>
      <div className="h-screen bg-black flex justify-center md:items-center">
        <h1 className="text-white text-7xl translate-y-20 md:translate-y-0">CONTACT</h1>
      </div>
    </section> */}
  </>
    
  );
}

export default Home;


