import { FastForward, Play, Rewind, Square, X } from "lucide-react";

const CardOne = () => {
  return (
    <div className="bg-[#3DB099] flex items-center justify-center pt-11 w-full md:w-md flex-col relative">
      <div className="w-60 max-w-[320px] md:w-70 md:h-28 bg-[#DDD3D2] border-2 border-black shadow-lg relative mb-6">
        {/* Header Bar */}
        <div className="bg-pink-300 border-b-2 border-black flex items-center justify-end gap-1">
          <Square className="w-4" />
          <X />
        </div>

        {/* Content Area */}
        <div className="px-6 flex items-center">
          <img src="/cardUi/music/songIcon.svg" alt="" className="w-5" />
          <div className="flex justify-center items-center translate-x-12 md:translate-x-14 py-4">
            <div className="flex gap-3">
              <Rewind className="h-4" fill="currentColor" />
              <Play fill="currentColor" className="h-4" />
              <FastForward fill="currentColor" className="h-4" />
            </div>

            <div className="relative w-40 md:w-58 h-px bg-black top-8 md:top-8 right-45 translate-x-5  md:translate-x-0 mb-6">
              {/* Green thicker progress line */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-green-500 w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end mr-10 mt-12">
        <img
          src="/cardUi/images/star.svg"
          alt=""
          className="object-contain  w-20  top-[38%]  left-0 md:w-38 absolute md:left-0 md:top-[34%]"
        />
        <img
          src="/cardUi/images/smile.svg"
          alt=""
          className="object-contain  w-10 left-5 top-[43%] md:w-20 absolute md:left-8 md:top-[42%]"
        />
        <img
          src="/cardUi/images/purpleHeart.svg"
          alt=""
          className="object-contain w-12 left-10 bottom-4  md:w-24 absolute md:left-22 md:bottom-4"
        />
        <div className="bg-[#F1C851] flex w-50 max-w-[320px] md:w-70 justify-center flex-col h-60">
          <div className="bg-[#A4F3DE] flex flex-col items-center justify-center pt-8 pb-2 w-38 max-w-[220px] md:w-50 absolute top-42 right-5 md:right-10 shadow-[-5px_5px_0px_rgba(0,0,0,100)]">
            <img src="/cardUi/images/camera.svg" alt="" className="w-30 md:w-45 border-2" />
            <button className="px-8 shadow-md bg-pink-300 mt-5 translate-x-4 md:translate-x-7 text-white">
              done!
            </button>
            <img src="/cardUi/images/littleHeart.svg" alt="" className=" w-6 -top-2 right-2 md:w-8 absolute md:-top-0 md:right-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
