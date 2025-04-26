export default function HealthyFoodWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 font-avenir">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content - Text section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              A place you
              <br />
              eat healthy
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget. Lorem ipsum dolor.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Explore the menu
            </button>
          </div>

          {/* Right content - Bowl image */}
          <div className="">
            <img
              src="/image/food.svg"
              alt="Healthy food bowl"
              className="w-full h-auto rounded-full z-99"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-around gap-10 shadow bg-white px-20 py-5 rounded-lg mt-5 h-72">
        {/* Chef section */}

        <div className="flex -translate-y-28 gap-6 relative">
          <div>
            <img src="/image/rt.svg" alt="" />
       
          </div>
          <div>
            <img src="/image/rt2.svg" alt="" />
          </div>
          <div>
            <img src="/image/rt3.svg" alt="" />
          </div>
        </div>
        <div>
          <div className="">
            <div className=" ">
              <div className="flex   flex-col gap-3.5">
                <div className="w-12 h-1 bg-gray-900 mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-900">Chef ABC</h2>
              </div>
              <p className="text-gray-600 mb-8 w-">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Faucibus in libero risus semper.
              </p>
            </div>

            {/* Ingredient icons */}
            <div className="flex space-x-6 ">
              <img
            src="/image/tomato.svg"
                alt="Tomato"
                className=" rounded-full object-cover"
              />
              <img
                  src="/image/brokly.png"
                alt="Broccoli"
                className=" rounded-full object-cover"
              />
              <img
                    src="/image/apple.png"
                alt="Pear"
                className=" rounded-full object-cover"
              />
              <img
                     src="/image/nut.png"
                alt="Beans"
                className=" rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
