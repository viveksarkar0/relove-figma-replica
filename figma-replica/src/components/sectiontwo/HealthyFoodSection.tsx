export default function HealthyFoodWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 font-avenir">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content - Text section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              A place you
              <br />
              eat healthy
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget. Lorem ipsum dolor.
            </p>
            <button className="bg-gray-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
              Explore the menu
            </button>
          </div>

          {/* Right content - Bowl image */}
          <div className="md:w-1/2">
            <img
              src="/image/food.svg"
              alt="Healthy food bowl"
              className="w-full h-auto rounded-full z-10"
            />
          </div>
        </div>
      </div>

      {/* Chef section - Desktop */}
      <div className="hidden md:flex items-center w-full justify-around gap-10 shadow bg-white px-6 lg:px-20 py-5 rounded-lg mt-5 h-72">
        <div className="flex -translate-y-28 gap-6 relative">
          <div>
            <img src="/image/rt.svg" alt="Chef portrait 1" />
          </div>
          <div>
            <img src="/image/rt2.svg" alt="Chef portrait 2" />
          </div>
          <div>
            <img src="/image/rt3.svg" alt="Chef portrait 3" />
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col gap-3.5">
              <div className="w-12 h-1 bg-gray-900 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-900">Chef ABC</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Faucibus in libero risus semper.
            </p>
          </div>

          {/* Ingredient icons */}
          <div className="flex space-x-6">
            <img
              src="/image/tomato.svg"
              alt="Tomato"
              className="rounded-full object-cover"
            />
            <img
              src="/image/brokly.png"
              alt="Broccoli"
              className="rounded-full object-cover"
            />
            <img
              src="/image/apple.png"
              alt="Pear"
              className="rounded-full object-cover"
            />
            <img
              src="/image/nut.png"
              alt="Beans"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chef section - Mobile */}
      <div className="md:hidden flex flex-col items-center shadow bg-white px-4 py-6 rounded-lg mt-5">
        {/* Chef images in horizontal row */}
        <div className="flex justify-center gap-2 -mt-16 mb-6">
          <div className="w-1/3">
            <img src="/image/rt.svg" alt="Chef portrait 1" className="w-full" />
          </div>
          <div className="w-1/3">
            <img src="/image/rt2.svg" alt="Chef portrait 2" className="w-full" />
          </div>
          <div className="w-1/3">
            <img src="/image/rt3.svg" alt="Chef portrait 3" className="w-full" />
          </div>
        </div>
        
        {/* Chef info */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-2 mb-3">
            <div className="w-12 h-1 bg-gray-900"></div>
            <h2 className="text-xl font-bold text-gray-900">Chef ABC</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper.
          </p>
        </div>

        {/* Ingredient icons */}
        <div className="flex justify-center space-x-4">
          <img
            src="/image/tomato.svg"
            alt="Tomato"
            className="w-12 h-12 rounded-full object-cover"
          />
          <img
            src="/image/brokly.png"
            alt="Broccoli"
            className="w-12 h-12 rounded-full object-cover"
          />
          <img
            src="/image/apple.png"
            alt="Pear"
            className="w-12 h-12 rounded-full object-cover"
          />
          <img
            src="/image/nut.png"
            alt="Beans"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}