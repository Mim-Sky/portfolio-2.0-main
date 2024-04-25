'use client'

import usePrefersReducedMotion from "@/hooks/reducedMotion";
import { motion } from "framer-motion";
import Projects from "../components/Section/projects";
import Hero from "../components/Section/hero";
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
    <div className="overflow-scroll h-screen md:snap-y snap-mandatory">
      <section className="snap-start bg-[url('/bg_island_optimized.webp')] bg-cover bg-fixed bg-center bg-no-repeat h-screen" >
        <div className="flex justify-center h-screen">
          <motion.div
            className="flex flex-col justify-center md:justify-center items-center gap-y-10 brightness-10"
            {...(prefersReducedMotion ? reducedMotionSettings : animationSettings)}>
            <h1 className="text-white text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">MICHAL HORODYSKI</h1>
            <h2 className="text-white text-md md:text-xl lg:text-2xl xl:text-4xl">WEB DESIGNER</h2>
          </motion.div>
        </div>
      </section>
      <section className="snap-center">
        <Projects />
      </section>  
      <section className="snap-center">
        <Hero />
      </section>
      <section className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default Home;


