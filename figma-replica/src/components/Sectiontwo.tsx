const Sectiontwo = () => {
    return (
      <div className="px-4 sm:px-6 md:px-1 lg:px-20 py-12 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left relative">
            <div className="relative flex flex-col items-center lg:items-start">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
                  Discover. <br />
                  Explore. <br />
                  Inspire.
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 sm:mb-6 max-w-md sm:max-w-xl mx-auto lg:mx-0 font-light">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <br className="hidden sm:inline" />
                  adipiscing elit. Faucibus in libero risus{" "}
                  <br className="hidden sm:inline" />
                  semper habitant arcu eget. Et integer facilisi eget diam.
                </p>
                <button className="bg-black text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg">
                  Explore
                </button>
              </div>
  
              {/* Wave image - only show on large */}
              <img
                src="/wave.svg"
                alt=""
                className="hidden lg:block absolute right-0 translate-x-28"
              />
            </div>
  
            {/* Decorative Images */}
            <div className="flex justify-center lg:justify-between items-end mt-10 relative">
              <img src="/spiralone.svg" alt="" className="w-1/4 sm:w-auto" />
              <img src="/imageone.svg" alt="" className="w-1/4 sm:w-auto" />
              <img
                src="/middlecircle.svg"
                alt=""
                className="hidden sm:block absolute right-0 top-0 translate-x-20 sm:translate-x-36 -translate-y-20 sm:-translate-y-36 z-[999]"
              />
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1 relative flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <img src="/imagetwo.svg" alt="" className="w-2/3 sm:w-auto sm:translate-y-[50%]" />
              <img src="/imagethree.svg" alt="" className="w-2/3 sm:w-auto" />
              <img
                src="/circletwo.svg"
                alt=""
                className="hidden sm:block absolute right-0 bottom-32"
              />
            </div>
            <div className="mt-6 sm:mt-0 sm:absolute bottom-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left px-4 sm:px-0">
              <img src="/profileImage.svg" alt="" className="w-16 sm:w-auto" />
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden sm:inline" />
                elit. Faucibus in libero risus semper habitant arcu <br className="hidden sm:inline" />
                eget. Et integer facilisi eget diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sectiontwo;
  