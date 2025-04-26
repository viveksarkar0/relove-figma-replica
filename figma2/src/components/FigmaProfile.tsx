"use client"
import { ExternalLink } from "lucide-react"

export default function FigmaProfile() {
  return (
    <div className="relative min-h-screen bg-red-400 flex items-center justify-center overflow-hidden border-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,100)] m-4 md:m-20 w-[95%] md:w-[90%]"
  
    >
      {/* Curved grid background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("/sticker/bgs.svg")`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      {/* Main container */}
      <div className="relative w-[95%] md:w-[90%] max-w-7xl h-[90vh] md:h-[80vh] bg-black p-1 z-10 border-3 border-black shadow-[5px_5px_0px_rgba(0,0,0,100)]"
        style={
          {
            backgroundColor:"",
            backgroundImage: `linear-gradient(to right, rgba(155, 114, 52, 0.05) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(176, 63, 63, 0.05) 1px, transparent 1px)`,
            backgroundSize: "6px 6px",
          }
        }
      >
        {/* Top bar */}
        <div className="flex justify-between items-center text-white font-mono text-xs md:text-sm">
          <div className="flex items-center">
            <span className="mr-1 md:mr-2">⌘</span>
            <span>FIGMA.OS</span>
            <span className="hidden md:inline ml-8">CONFIG 2022 *** MAY 10-11 *** LIVE FROM SF</span>
          </div>
          <div className="flex items-center">
            <span>04:00PM</span>
            <span className="ml-2 md:ml-4">🌐</span>
          </div>
        </div>

        {/* Content area with colorful background */}
        <div className="h-full rounded-b-lg relative overflow-hidden "
          style={{
            backgroundImage: `url("/bg.svg")`,
            backgroundSize: "100% 100%",
          }}
        >
          {/* Profile card window */}
          <div className="w-[90%] md:w-[50%]  bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] z-20 flex flex-col mt-10 ml-4 "
          style={{
            backgroundColor:"",
            backgroundImage: `linear-gradient(to right, rgba(155, 114, 52, 0.05) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(176, 63, 63, 0.05) 1px, transparent 1px)`,
            backgroundSize: "6px 6px",
          }}
          >
            {/* Window header */}
            <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-black border border-white"></div>
                <div className="w-3 h-3 rounded-full bg-black border border-white"></div>
                <div className="w-3 h-3 rounded-full bg-black border border-white"></div>
              </div>
              <div className="font-mono text-center flex-1">BIO.DMG</div>
              <div className="w-4 h-4">👤</div>
            </div>

            {/* Profile content */}
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-6">
              {/* Profile image with yellow border */}
              <div className="relative mx-auto md:mx-0">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                  <img
                    src="/namebadge.svg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile info */}
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                  Bruno Figueiredo <span className="text-gray-400 text-xs md:text-sm font-normal">HE/HIM</span>
                </h1>
                <h2 className="text-base md:text-lg font-medium mb-2 md:mb-4">Community Advocate @ Friends of Figma</h2>
                <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices urna consequat commodo ornare
                  commodo.
                </p>
              </div>
            </div>

            {/* Footer with social links and location */}
            <div
              className="border-t border-gray-200 px-3 md:px-6 py-2 md:py-3 flex flex-col md:flex-row justify-between items-center font-mono text-xs md:text-sm"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), 
                                   linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            >
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-0">
                <span className="text-gray-500">SOCIAL LINKS:</span>
                <div className="flex items-center gap-1">
                  <span>@HANDLE</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
              <div>Portugal</div>
            </div>
          </div>

          {/* Cursor and name tag */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex items-end">
            <div className="w-4 h-4 md:w-6 md:h-6">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 20L14 14L20 12L4 4Z" fill="white" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className="bg-yellow-300 border-2 border-black px-1 md:px-2 py-0.5 md:py-1 text-xs md:text-base font-mono font-bold ml-1 md:ml-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Bruno
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}