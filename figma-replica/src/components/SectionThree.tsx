const CreativeDesignSection = () => {
  return (
    <div className="w-full px-4 py-12 sm:py-20 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start gap-6 ">
          <div className="text-gray-400 font-semibold text-sm">01</div>
          <p className="text-center lg:text-left text-gray-700 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus.
          </p>
          <div className="relative">
            <div className="flex">
            <img src="/exposion.svg" alt="" className=" " />
            <img src="/bigstar.svg" alt="" className="translate-y-32 translate-x-14 z-[99]"  />

            </div>
          
            <img
              src="/imagefour.svg"
              alt="Left Profile"
              className="  h-auto object-cover"
            />
  
          </div>
        </div>

        {/* Center Section */}
       {/* Center Section */}
<div className="relative flex flex-col items-center text-center max-w-md px-4 py-10 rounded-xl overflow-hidden bg-white">
  {/* Background Glow Layer */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, #b5e1f0 0%, transparent 40%),
          radial-gradient(circle at 70% 70%, #fbd4c3 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, #e0d8f9 0%, transparent 60%)
        `,
        filter: "blur(80px)",
        opacity: 0.8,
        width: "100%",
        height: "100%",
      }}
    />
  </div>

  {/* Content layer */}
  <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 sm:py-24">
    <div className="text-4xl sm:text-5xl font-serif font-semibold mb-4 text-black leading-tight">
      Create <br />
      your <br />
      design
    </div>
    <p className="text-gray-700 mb-6 max-w-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
      libero risus semper habitant arcu eget.
    </p>
    <button className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition">
      Explore
    </button>
  </div>
</div>


        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="relative">
            <img
              src="/imagefive.svg"
              alt="Right Profile"
              className=" h-auto object-cover"
            />
            <div className="flex">
            <img src="/littlestar.svg" alt="" className="-translate-y-20 -translate-x-11" />
            <img
              src="/sparkalegold.svg"
              alt=""
              className="  mt-10 h-32"
            />

            </div>
           
          </div>
          <p className=" text-gray-700 max-w-sm">
            <span className="text-gray-400 font-semibold text-sm block mb-2">
              02
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeDesignSection;
