
const ContentLeftTitle = ({ title, renderContentComponent = () => null }) => {
  return (
    <div className="xl:h-screen overflow-scroll-x p-5 flex justify-center bg-wave_blue/30">
      <div className="flex flex-col xl:grid xl:grid-cols-[auto_1fr] gap-4 items-center container">
        <h1 className="p-5 text-text_dark text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold xl:rotate-[-90deg] md:self-auto self-center tracking-wide">
          {title}
        </h1>
        {renderContentComponent()}
      </div>
    </div>
  );
};

export default ContentLeftTitle;