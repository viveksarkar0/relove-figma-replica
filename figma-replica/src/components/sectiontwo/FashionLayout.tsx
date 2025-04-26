const FashionLayout = () => {
    return (
      <div className="bg-white px-6 py-12 md:py-20 flex flex-col font-avenir">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-16">
          <img src="/leftCircle.svg" alt="" className="hidden md:block " />
  
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Your ultimate <br /> fashion outfits
            </h1>
            <p className="text-base md:text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
            </p>
            <button className="rounded-full bg-gray-900 hover:bg-gray-800 px-8 py-3 text-white">
              Explore
            </button>
          </div>
  
          <img src="/rightCircle.svg" alt="" className="hidden md:block " />
        </div>
  
        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-6  items-center justify-center">
          {/* Left Column */}
          <div className="col-span-2 flex flex-col  h-full items-center ">
            <div className="italic space-y-2 text-center w-full  flex flex-col items-center ">
              <p className="text-lg">Exclusive gifts.</p>
              <p className="text-lg">Insider access.</p>
              <p className="text-lg">Special events.</p>
              <div className="w-28 h-1 bg-black mt-4 "></div>
            </div>
            <img src="/leftImage.svg" alt="Left Bottom" className="rounded-lg object-cover  mt-16 " />
          </div>
  
          {/* Middle Grid Section */}
          <div className="col-span-8 grid grid-cols-3 grid-rows-2 gap-4">
            <img src="/image/left1.svg" alt="Left 1" className="rounded-lg object-cover w-full -translate-y-6" />
            <img src="/image/middle.svg" alt="Middle" className="row-span-2 rounded-lg object-cover w-full h-full -translate-y-6" />
            <img src="/image/right1.svg" alt="Right 1" className="rounded-lg object-cover w-full " />
            <img src="/image/left2.svg" alt="Left 2" className="rounded-lg object-cover w-full -translate-y-6" />
            <img src="/image/right2.svg" alt="Right 2" className="rounded-lg object-cover w-full translate-y-" />
          </div>
  
          {/* Right Column */}
          <div className="col-span-2 flex flex-col  h-full items-center justify-center ">
            <img src="/right.svg" alt="Right Bottom" className="rounded-lg object-cover w-full " />
            <div className="space-y-2 italic mt-5">
              <p className="text-lg">Beauty</p>
              <p className="text-lg">Fashion</p>
              <p className="text-lg">Culture</p>
              <div className="w-16 h-1 bg-black ml-auto mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FashionLayout;
  