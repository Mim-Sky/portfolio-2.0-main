import Instagram from "../Icons/Insta";
import Linkedin from "../Icons/linkedIn";
import Github from "../Icons/OcticonMarkGithub24";
import Facebook from "../Icons/faceBook";

const ContentGrid = ({ title, contentComponent }) => {
  return (
    <div className="md:h-screen p-5 flex justify-center bg-wave_blue/30">
      <div className="md:flex md:justify-between md:container items-center gap">
        <div className="h-96 flex flex-col items-center">
          <h2 className="pb-10 md:pb-24 text-text_dark text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
            {title}
          </h2>
          {contentComponent}
        </div>
        <div className="h-96 flex flex-col items-center">
          <h2 className="pb-10 md:pb-24 text-text_dark text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">SOCIALS</h2>
          <ul className="flex gap-6">
            <li><Github /></li>
            <li><Linkedin /></li>
            <li><Facebook /></li>
            <li><Instagram /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;