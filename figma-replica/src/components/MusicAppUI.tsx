

export default function MusicAppUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-2 md:p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-4 md:space-y-6 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e1b0e] leading-tight text-center md:text-left">
            Listen to yourself
            <br />
            Follow your heart
          </h1>
          <p className="text-[#5f4b3a] text-base md:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
            risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-yellow-300 text-[#2e1b0e] px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition text-sm md:text-base">
              Download the App
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 md:mt-10 bg-[#3f2b1e] text-white p-4 md:p-6 rounded-xl grid grid-cols-3 gap-2 md:gap-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">4.9</p>
              <div className="h-0.5 bg-white w-4 md:w-6 mx-auto my-1 md:my-2"></div>
              <p className="text-xs md:text-sm">Lorem ipsum dolor</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">876K</p>
              <div className="h-0.5 bg-white w-4 md:w-6 mx-auto my-1 md:my-2"></div>
              <p className="text-xs md:text-sm">Lorem ipsum dolor</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">No.1</p>
              <div className="h-0.5 bg-white w-4 md:w-6 mx-auto my-1 md:my-2"></div>
              <p className="text-xs md:text-sm">Lorem ipsum dolor</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center mb-6 md:mb-0 order-1 md:order-2">
          <img
            src="/music.svg"
            alt="App on phone"
            className="relative z-20 rounded-xl w-3/4 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}