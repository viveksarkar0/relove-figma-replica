import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[70vh] bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-8 md:py-12">
      <div className="z-10 max-w-lg">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-dark-brown mb-2">
          Your coffee
        </h1>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-dark-brown mb-2">
          Your vibe
        </h1>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-dark-brown mb-8">
          Your energy
        </h1>
        <p className="text-dark-brown/80 text-lg md:text-xl mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
        </p>
        <button 
          className="px-8 py-2.5 bg-coffee text-white rounded-full text-lg font-medium transition-transform hover:scale-105 hover:shadow-lg"
          aria-label="Explore our coffee selection"
        >
          Explore
        </button>
      </div>
      
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 md:mt-0">
        <div className="absolute top-0 right-0 md:right-32 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
          <img 
            src="/coffe.svg" 
            alt="Coffee cup with froth" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-8  w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white">
          <img 
            src="tea.svg" 
            alt="Latte art coffee" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;