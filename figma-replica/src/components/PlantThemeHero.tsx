export default function PlantThemeHero() {
    return (
      <section className="bg-white px-10 py-20 font-serif text-gray-900">
      
        <img src="/" alt="" />
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6 relative">
            <div className="text-5xl font-medium space-y-2">
              <h1>Adventure</h1>
              <h1>Voyage</h1>
              <h1>Wandering</h1>
            </div>
            <p className="text-base max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi.
            </p>
            <button className="w-max bg-[#5e876f] text-white px-6 py-2 rounded-full font-medium">
              Get started
            </button>
            <div className="flex gap-4 mt-8">
              <img src="/plantim1.svg" alt="Leaf" className=" object-cover rounded-[40px]" />
              <img src="/plantim2.svg" alt="Flower" className=" object-cover rounded-[40px] -translate-y-20" />
            </div>
            <img src="/star.svg" alt="" className="absolute right-0" />
          </div>
  
          {/* Center Column */}
          <div className="flex flex-col items-center relative mr-9">
            <img
              src="/middleimg.svg"
              alt="Main Plant"
              className="z-10"
            />
            
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col  gap-6 mr-56 ">
            <div className="flex gap-4 relative">
              <img src="/pl.svg" alt="Minimal" className=" object-cover -translate-y-10 " />
              <img src="/pl1.svg" alt="Succulent" className=" object-cover " />
              <img src="/star.svg" alt="" className="absolute bottom-0  translate-y-10 " />
            </div>
            <div className="text- max-w-xs text-sm mt-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                Et integer facilisi
              </p>
            </div>
            <div className="text-4xl font-medium space-y-2 text-start">
              <h1>Trave</h1>
              <h1>Explore</h1>
              <h1>Discover</h1>
            </div>
           
          </div>
        </div>
      </section>
    );
  }
  