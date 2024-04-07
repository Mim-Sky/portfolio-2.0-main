const ContentLeftTitle = ({ title, ContentComponent }) => {
  return (
    <div className="md:h-screen p-5 flex justify-center bg-wave_blue/30">
      <div className="flex flex-col xl:grid xl:grid-cols-[auto_1fr] gap-4 items-center container">
        <h1 className="p-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold xl:rotate-[-90deg] md:self-auto self-center tracking-wide">
          {title}
        </h1>
        <ContentComponent />
      </div>
    </div>
  );
};

export default ContentLeftTitle;