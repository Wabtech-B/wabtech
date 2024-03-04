import SearchInput from "./search-input";

const ExploreHero = () => {
  return (
    <section className="bg-[#030712] min-h-[50vh] flex-center-center !bg-center bg-explore-hero !text-white relative">
      <div className="w-[300px] h-[300px] absolute top-0 right-0 bg-brand/60 rounded-full [filter:blur(150px)]" />
      <div className="max-w-7xl mx-auto px-3 relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          Search for templates
        </h1>
        <SearchInput />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-gray-950 to-transparent left-0 bottom-0" />
    </section>
  );
};

export default ExploreHero;
