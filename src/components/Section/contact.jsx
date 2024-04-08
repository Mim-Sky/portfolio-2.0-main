import { motion } from "framer-motion";
import ContentLeftTitle from "../Templates/ContentLeftTitle";
import TextComponent from "../Templates/TextComponent";
import ContentGrid from "../Templates/ContentGrid";

const Contact = () => {
  return(
    <>
      <ContentGrid 
      title={'CONTACT'}
      contentComponent={<TextComponent text={'Contact form'}/>}
       />

    </>
  )

}

export default Contact;