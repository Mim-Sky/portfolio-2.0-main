
import ContentGrid from "../Templates/ContentGrid";
import Form from "../Form/form";


const Contact = () => {
  return(
    <>
      <ContentGrid 
      title={'CONTACT'}
      contentComponent={<Form />}
       />

    </>
  )

}

export default Contact;