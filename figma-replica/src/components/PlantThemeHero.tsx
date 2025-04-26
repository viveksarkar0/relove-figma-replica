export default function PlantThemeHero() {
  return (
    <section className="bg-white px-4 md:px-10 py-10 md:py-20 font-serif text-gray-900">
      <img src="/" alt="" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:gap-6 relative order-2 md:order-1">
          <div className="text-3xl md:text-5xl font-medium space-y-1 md:space-y-2 text-center md:text-left">
            <h1>Adventure</h1>
            <h1>Voyage</h1>
            <h1>Wandering</h1>
          </div>
          <p className="text-sm md:text-base max-w-xs mx-auto md:mx-0 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="w-max bg-[#5e876f] text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full font-medium text-sm md:text-base">
              Get started
            </button>
          </div>
          <div className="flex gap-4 mt-4 md:mt-8 justify-center md:justify-start">
            <img src="/plantim1.svg" alt="Leaf" className="w-24 md:w-auto object-cover rounded-[20px] md:rounded-[40px]" />
            <img src="/plantim2.svg" alt="Flower" className="w-24 md:w-auto object-cover rounded-[20px] md:rounded-[40px] -translate-y-10 md:-translate-y-20" />
          </div>
          <img src="/star.svg" alt="" className="absolute right-0 w-8 md:w-auto hidden md:block" />
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center relative mr-0 md:mr-9 order-1 md:order-2 mb-6 md:mb-0">
          <img
            src="/middleimg.svg"
            alt="Main Plant"
            className="z-10 w-3/4 md:w-auto"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6 mr-0 md:mr-56 order-3">
          <div className="flex gap-2 md:gap-4 relative justify-center md:justify-start">
            <img src="/pl.svg" alt="Minimal" className="w-24 md:w-auto object-cover -translate-y-5 md:-translate-y-10" />
            <img src="/pl1.svg" alt="Succulent" className="w-24 md:w-auto object-cover" />
            <img src="/star.svg" alt="" className="absolute bottom-0 translate-y-5 md:translate-y-10 w-8 md:w-auto hidden md:block" />
          </div>
          <div className="text-sm max-w-xs mt-4 md:mt-7 mx-auto md:mx-0 text-center md:text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
              Et integer facilisi
            </p>
          </div>
          <div className="text-2xl md:text-4xl font-medium space-y-1 md:space-y-2 text-center md:text-start">
            <h1>Travel</h1>
            <h1>Explore</h1>
            <h1>Discover</h1>
          </div>
        </div>
      </div>
    </section>
  );
}