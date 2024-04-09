import { motion } from "framer-motion";
import ContentLeftTitle from "../Templates/ContentLeftTitle";
import TextComponent from "../Templates/TextComponent";
import ContentGrid from "../Templates/ContentGrid";
import Form from "../Form/form";


const Contact = () => {
  return(
    <>
      <ContentGrid 
      title={'C'}
      contentComponent={<Form />}
       />

    </>
  )

}

export default Contact;