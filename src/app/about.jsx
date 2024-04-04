import CardsContainer from "@/components/cardsContainer";

const About = () => {
    return (
        <div className="md:h-screen p-5 flex justify-center bg-wave_blue/30">
            <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-4 items-center container">
                <h1 className="p-5 text-3xl lg:text-5xl xl:text-7xl font-bold md:rotate-[-90deg] origin-top-left md:translate-y-24 md:self-auto self-center">PROJECTS</h1>
            <CardsContainer />
        </div>
    </div>
    );
};

export default About;