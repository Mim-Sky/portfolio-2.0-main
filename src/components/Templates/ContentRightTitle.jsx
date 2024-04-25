
const ContentRightTitle= ({ title, contentComponent }) => {

  return (
  <section className="h-screen p-5 flex justify-center bg-wave_blue/30 overflow-scroll">
    <div className="flex flex-col md:flex lg:grid lg:grid-cols-[1fr_auto] gap-4 items-center container">
      <div className='order-2 lg:order-1'>
        {contentComponent}
      </div>
      <div className="flex order-1 lg-order-2 p-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:rotate-[+90deg] tracking-wide">
      <h1 className="text-text_dark">{title}</h1>
      </div>
    </div>
  </section>
);
}

export default ContentRightTitle;