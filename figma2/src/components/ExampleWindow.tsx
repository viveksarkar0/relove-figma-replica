import { User2Icon } from "lucide-react";

export default function FigmaExamplesShowcase() {
  return (
    <div className="bg-black relative w-full md:w-5xl z-50 mx-auto border-4 md:border-8 border-black shadow-[5px_5px_0px_rgba(0,0,0,100)] md:shadow-[10px_10px_0px_rgba(0,0,0,100)] mb-5 text-black"> 
      <div className="flex flex-col w-full bg-white h-full">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center p-1 bg-black z-50">
          <div className="flex space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
          </div>
          <div className="text-xs md:text-sm font-light text-center text-white">EXAMPLE</div>
          <div className="text-base md:text-lg">
            <span className="inline-block border border-white rounded-sm px-1 text-white">
              <User2Icon size={16} className="md:w-6 md:h-6" />
            </span>
          </div>
        </div>
        
        {/* Header Text */}
        <div className="px-3 md:px-4 py-4 md:py-6 border-b border-gray-200 text-black">
          <h1 className="text-lg md:text-xl font-medium">Check out some examples from the Friends of Figma Advocates and Figma team.</h1>
        </div>
        
        {/* Blue Angular Shape top right corner */}
        <div className="absolute top-0 right-0 hidden md:block">
          <img src="/square.svg" alt="" className="w-32 md:w-52 h-full" />
        </div>
        
        {/* Grid of examples */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4"
          style={{
            backgroundImage:
              "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            
          }}>
          {/* Row 1 */}
          <div className="p-1 md:p-0">
            <img src="/ex1.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/extwo.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/ex3.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/ex4.svg" alt="" className="w-full h-auto" />
          </div>
          
          {/* Row 2 */}
          <div className="p-1 md:p-0">
            <img src="/ex5.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/ex6.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/ex7.svg" alt="" className="w-full h-auto" />
          </div>
          
          <div className="p-1 md:p-0">
            <img src="/ex8.svg" alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}