// components/DesignHero.tsx
export default function DesignHero() {
  return (
    <div className="w-full min-h-screen bg-[#952D17] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Image and Shapes */}
        <div className="relative flex-1  flex items-start justify-end ">
     
          <div className="absolute bg-[#E8C04D] rounded-full w-[400px] h-[400px] -z-10 top-0 left-0 translate-x-[-20%] translate-y-[-10%]" />

    
          <img
            src="/hero.svg" 
            alt="Design Model"
            className="z-10  translate-y-[5%]  object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 text-white max-w-xl ">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Take your <br />
            designs to <br />
            the next level
          </h1>
          <p className="mt-6 text-lg text-[#F8D8C8]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </p>
          <button className="mt-8 bg-[#E8C04D] text-black font-semibold text-lg px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
