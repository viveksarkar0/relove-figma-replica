import { FaCloud } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 bg-white text-black">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
            <h1>New designs</h1>
            <h1>New inspirations</h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 sm:mb-6 max-w-md sm:max-w-xl mx-auto lg:mx-0 font-light">
            Lorem ipsum dolor sit amet, consectetur <br className="hidden sm:inline" />
            adipiscing elit. Faucibus in libero risus <br className="hidden sm:inline" />
            semper habitant arcu eget. Et integer facilisi eget diam.
          </p>
          <button className="bg-black text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg">
            Explore
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0">
          <img
            src="/rectangleone.svg"
            alt="Design 1"
            className="w-56 sm:w-64 md:w-80 lg:w-96 -translate-y-6 sm:-translate-y-8 -translate-x-10 sm:-translate-x-20"
          />
          <img
            src="/rectagletwo.svg"
            alt="Design 2"
            className="w-56 sm:w-64 md:w-80 lg:w-96 absolute bottom-0 right-0 sm:right-6 translate-x-4 sm:translate-x-6 translate-y-10 sm:translate-y-16"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-24 sm:mt-32 bg-[#1F1F1F] text-gray-400 px-4 sm:px-6 md:px-10 py-8 sm:py-10 rounded-[24px] sm:rounded-[30px] flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 h-auto md:h-72">
        {["Title 1", "Title 2", "Title 3"].map((title, idx) => (
          <div key={idx} className="text-center md:text-left max-w-xs">
            <FaCloud className="text-2xl sm:text-3xl mb-2 mx-auto md:mx-0" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-md text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
