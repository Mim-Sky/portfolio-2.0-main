import CardsContainer from "@/components/Card/cardsContainer";
import ContentLeftTitle from "../Templates/ContentLeftTitle";

const Projects = () => {
  return <ContentLeftTitle title="PROJECTS" renderContentComponent={() => (<CardsContainer /> ) }/>;
};

export default Projects;