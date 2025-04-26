const FashionLayout = () => {
  return (
    <div className="bg-white px-4 py-8 md:px-6 md:py-12 lg:py-20 flex flex-col font-avenir">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-10 md:mb-16">
        <img src="/leftCircle.svg" alt="" className="hidden md:block" />

        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Your ultimate <br /> fashion outfits
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
          </p>
          <button className="rounded-full bg-gray-900 hover:bg-gray-800 px-6 py-2 md:px-8 md:py-3 text-white text-sm md:text-base">
            Explore
          </button>
        </div>

        <img src="/rightCircle.svg" alt="" className="hidden md:block" />
      </div>

      {/* Bottom Section - Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-6 items-center justify-center">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col h-full items-center">
          <div className="italic space-y-2 text-center w-full flex flex-col items-center">
            <p className="text-lg">Exclusive gifts.</p>
            <p className="text-lg">Insider access.</p>
            <p className="text-lg">Special events.</p>
            <div className="w-28 h-1 bg-black mt-4"></div>
          </div>
          <img src="/leftImage.svg" alt="Left Bottom" className="rounded-lg object-cover mt-16" />
        </div>

        {/* Middle Grid Section */}
        <div className="col-span-8 grid grid-cols-3 grid-rows-2 gap-4">
          <img src="/image/left1.svg" alt="Left 1" className="rounded-lg object-cover w-full -translate-y-6" />
          <img src="/image/middle.svg" alt="Middle" className="row-span-2 rounded-lg object-cover w-full h-full -translate-y-6" />
          <img src="/image/right1.svg" alt="Right 1" className="rounded-lg object-cover w-full" />
          <img src="/image/left2.svg" alt="Left 2" className="rounded-lg object-cover w-full -translate-y-6" />
          <img src="/image/right2.svg" alt="Right 2" className="rounded-lg object-cover w-full" />
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex flex-col h-full items-center justify-center">
          <img src="/right.svg" alt="Right Bottom" className="rounded-lg object-cover w-full" />
          <div className="space-y-2 italic mt-5">
            <p className="text-lg">Beauty</p>
            <p className="text-lg">Fashion</p>
            <p className="text-lg">Culture</p>
            <div className="w-16 h-1 bg-black ml-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Mobile */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Mobile Top Info */}
        <div className="italic text-center mb-4">
          <p className="text-base">Exclusive gifts.</p>
          <p className="text-base">Insider access.</p>
          <p className="text-base">Special events.</p>
          <div className="w-24 h-1 bg-black mx-auto mt-3"></div>
        </div>

        {/* Mobile Image Grid - Simplified */}
        <div className="grid grid-cols-2 gap-3">
          <img src="/image/left1.svg" alt="Fashion 1" className="rounded-lg object-cover w-full aspect-square" />
          <img src="/image/right1.svg" alt="Fashion 2" className="rounded-lg object-cover w-full aspect-square" />
          <img src="/image/middle.svg" alt="Fashion 3" className="rounded-lg object-cover w-full aspect-square" />
          <img src="/image/left2.svg" alt="Fashion 4" className="rounded-lg object-cover w-full aspect-square" />
        </div>

        {/* Mobile Bottom Info */}
        <div className="italic text-center mt-4">
          <p className="text-base">Beauty</p>
          <p className="text-base">Fashion</p>
          <p className="text-base">Culture</p>
          <div className="w-16 h-1 bg-black mx-auto mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default FashionLayout;