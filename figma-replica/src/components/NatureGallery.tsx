import React from 'react';

const NatureGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-10 py-16 mt-14" >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Text Column */}
          <div className="md:col-span-1 space-y-6">
            <h1 className="text-4xl font-semibold text-black leading-snug">
              Discover the<br /> beauty around<br /> the world
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.
            </p>
            <button className="bg-black text-white text-sm px-5 py-2 rounded-md">
              Get started
            </button>
          </div>

          {/* Two Images on Right */}
          <div className="md:col-span-2 grid grid-cols-2   gap-6 sm:gap-0 ">
            <div className="rounded-2xl overflow-hidden  sm:translate-y-[-128px] sm:translate-x-10">
              <img 
                src="/natureImage/left.svg" 
                alt="Leaves" 
                className=" w-[350px] object-cover "
              />
            </div>
            <div className=" rounded-2xl overflow-hidden">
              <img 
                src="/natureImage/right.svg" 
                alt="Foggy forest" 
                className=" object-cover  w-[350px] "
              />
            </div>
          </div>
        </div>

        {/* Bottom Gallery Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 01 */}
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-3">01</div>
            <div className="rounded-2xl overflow-hidden h-[350px]">
              <img 
                src="/natureImage/one.svg" 
                alt="Top trees" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 02 */}
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-3">02</div>
            <div className="rounded-2xl overflow-hidden h-[350px]">
              <img 
                src="/natureImage/three.svg" 
                alt="Lake view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 03 */}
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-3">03</div>
            <div className="rounded-2xl overflow-hidden h-[350px]">
              <img 
                src="/natureImage/two.svg" 
                alt="Open field" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureGallery;
