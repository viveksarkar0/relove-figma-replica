import { Sparkles } from "lucide-react"; // Icon for cards
import { useState, useEffect } from "react";

export default function SpaceTravelUI() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative h-screen font-sans text-white bg-gradient-to-br from-[#09212C] via-[#043E49] to-[#02141c] overflow-hidden">
      {/* Astronaut and background */}
      <div className="flex-1 relative h-screen">
        <img
          src="/spacehero.svg"
          alt="Astronaut"
          className={`absolute right-0 bottom-0 ${isMobile ? 'w-full' : 'w-[70%]'} object-fill`}
        />
      </div>

      {/* Main text card */}
      <div className={`absolute ${isMobile ? 'top-[10%] left-4 right-4 w-auto h-auto' : 'top-[20%] left-[5%] z-10 w-[600px] h-[400px]'} p-8 bg-gradient-to-br from-[#000000]/80 via-[#000000]/20 to-[#000000]/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg`}>
        {/* Colored dots */}
        <div className="flex gap-2 mb-4">
          <img src="/colorblock.svg" alt="" />
        </div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 leading-tight`}>
          What's next in <br /> your space travel
        </h1>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget
          diam.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-[#062333] px-6 py-2 rounded-full font-semibold">
          Explore
        </button>
      </div>

      {/* Bottom Cards */}
      <div className={`absolute bottom-6 ${isMobile ? 'left-4 right-4' : 'left-10 right-10'} flex justify-center z-10`}>
        <div className={`flex w-full max-w-5xl ${isMobile ? 'flex-col' : 'flex-row'} gap-6 justify-between p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/1 to-white/10 backdrop-blur-md`}>
          {[
            { title: "Planets", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { title: "Interstellar", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { title: "Wormhole", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { title: "Time", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          ].map((item, index) => (
            <div key={index} className={`${isMobile ? 'mb-4' : 'flex-1 min-w-[150px]'}`}>
              <div className="flex items-center mb-2">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}