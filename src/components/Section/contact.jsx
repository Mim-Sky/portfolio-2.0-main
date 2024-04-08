import { motion } from "framer-motion";
import ContentLeftTitle from "../Templates/ContentLeftTitle";
import TextComponent from "../Templates/TextComponent";

const Contact = () => {
  return(
    <>
      <ContentLeftTitle 
      title={'CONTACT'}
      renderContentComponent={() => <TextComponent text='Here goes content form'/> }
       />

    </>
  )

}

export default Contact;