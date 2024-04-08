import { ABOUT_ME } from "@/app/data";  
import Image from "next/image";
import Banner from "../Banner/banner";
import ContentRightTitle from "../Templates/ContentRightTitle";
import TextComponent from "../Templates/TextComponent";

const Hero = () => {

  return (
    
  <>
    <ContentRightTitle 
      title={'WHO AM I'} 
      contentComponent={<TextComponent text={ABOUT_ME[0].aboutmetext}/>}

      
      />
  </>
);
}




export default Hero;