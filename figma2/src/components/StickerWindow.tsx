import { Bookmark } from "lucide-react";
import PixelDashboard from "./PixelDashboard";

const StickerWindow = () => {
  return (
    <div className="bg-black relative text-white w-full max-w-3xl mx-auto border-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,100)] mt-14 mb-11">

      <div className="bg-black">

        {/* Header */}
        <div className="flex justify-between items-center p-2 bg-black z-50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
          </div>
          <div className="font-extralight text-center">PERSONALIZE</div>
          <div className="text-lg">
            <span className="inline-block rounded-sm px-1">
              <Bookmark />
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white text-black p-6 flex flex-col md:flex-row relative z-50">
          <div className="z-50 mb-6 md:mb-0 md:w-2/3">
            <h1 className="text-4xl mb-3">Start personalizing your Badge</h1>
            <p className="z-50 mb-4">
              You can double-click to change your cursor, background and wallpaper, or just copy <br />
              & paste your stickers onto the badge (the stickers are editable). <br />
            </p>
            <p>Feel free to go wild.</p>
          </div>

          {/* Decorative Image */}
          <div className="absolute right-0 top-0 z-0 md:w-1/3 md:h-full">
            <img src="/stickernav.svg" alt="Sticker navigation" className="object-contain w-full h-auto" />
          </div>
        </div>

        {/* Pixel Dashboard */}
        <div
          className="bg-white border-t border-t-black text-black p-6 relative"
          style={{
            backgroundImage:
              "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          <PixelDashboard />
        </div>
      </div>
    </div>
  );
};

export default StickerWindow;
