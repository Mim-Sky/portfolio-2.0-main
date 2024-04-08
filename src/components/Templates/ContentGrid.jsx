import TextComponent from "./TextComponent";

const ContentGrid = ({ title, contentComponent }) => {
  return (
    <div className="h-screen overflow-scroll p-5 flex justify-center bg-wave_blue/30">
      <div className="flex flex-row md:container items-center justify-between">
        
        <div className="flex flex-col items-center">
          <h2 className="p-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
            CONTACT
          </h2>
          <p>Contact form</p>
        </div>
         
        <div className="socials flex flex-col items-center">
          <h2 className="p-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">SOCIALS</h2>
          <ul className="flex">
            <li className="mx-2">ICON1</li>
            <li className="mx-2">ICON2</li>
            <li className="mx-2">ICON3</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default ContentGrid;