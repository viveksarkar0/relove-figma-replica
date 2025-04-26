const LastCard = () => {
  return (
    <div className="w-xl mt-7 h-[70vh] bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Blue Dotted Background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="grid grid-cols-13 gap-6">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 border-1 border-[#611FF3] rounded-full"
              ></div>
            ))}
          </div>
        </div>

        {/* Green Circles */}
        <div className="relative flex space-x-[-100px] -translate-x-11">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-[#CCF000] rounded-full border border-black"
            ></div>
          ))}

          {/* Sparkle SVG */}
          <div className="absolute -right-28 top-1/2 transform -translate-y-1/2">
            <svg
              viewBox="0 0 100 100"
              className="w-40 h-40 fill-white stroke-black"
            >
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
