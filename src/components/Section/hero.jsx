


const Hero = () => {

  return (
  <div className="md:h-screen p-5 flex justify-center bg-wave_blue/30">
  <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 items-center container h-full">
      {/* Text block */}
      <div className="">
          <p className="">W Ministerstwie Rodziny i Polityki Społecznej trwają prace nad projektem nowelizacji ustawy o pomocy społecznej. Resort chce między innymi zwiększyć datki dla pracowników socjalnych za pracę w terenie, zwiększyć dodatek za wywiady środowiskowe oraz wyłączyć z minimalnego wynagrodzenia zasadniczego za pracę. Głównym celem ministerstwa jest poprawa warunków pracy pracowników socjalnych. Obecnie projekt jest na etapie konsultacji międzyresortowych. Ministerstwo ma jednak nadzieję, iż jeszcze w tym roku trafi on do Sejmu. Ile wyniosą podwyżki dla pracowników socjalnych? Jakie zajdą zmiany? Sprawdź!

          Szukasz dobrze płatnej pracy? Sprawdź nasze oferty na stronie GoWork.pl!

          Nowelizacja ustawy o pomocy społecznej: dla kogo?
          – Podstawowe zmiany dotyczą m.in. pracowników socjalnych. Chcemy maksymalnie umożliwić wykonywanie tego zawodu większej grupie osób, oczywiście zachowując standardy takie jak ukończenie odpowiednich studiów – informuje w rozmowie z PAP (Polska Agencja Prasowa) wiceszef Ministerstwa Rodziny i Polityki Społecznej Stanisław Szwed w sprawie nowelizacji ustawy o pomocy społecznej.</p>
      </div>
      
      {/* WHO AM I */}
      <h1 className="p-5 text-3xl lg:text-5xl xl:text-7xl font-bold md:rotate-[-90deg] md:self-auto self-center w-full">WHO AM I?</h1>
  </div>
</div>
);
}




export default Hero;