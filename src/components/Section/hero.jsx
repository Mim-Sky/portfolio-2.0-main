import { ABOUT_ME } from "@/app/data";  
import Image from "next/image";
import Banner from "../Banner/banner";


const Hero = () => {

  return (

 
    
  <section className="h-screen p-5 flex justify-center bg-wave_blue/30">
  
    
    <div className="flex flex-col md:flex lg:grid lg:grid-cols-[1fr_auto] gap-4 items-center container">
      <div className='order-2 lg:order-1'>
        
        <p className="">{ABOUT_ME[0].aboutmetext}</p>
      </div>
      <div className="flex order-1 lg-order-2 p-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:rotate-[+90deg] tracking-wide">
      <h1 >WHO AM I?</h1>
      </div>
      
    </div>
    
  </section>
 
);
}




export default Hero;