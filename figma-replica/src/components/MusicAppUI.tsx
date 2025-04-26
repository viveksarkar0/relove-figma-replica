import React from "react";

export default function MusicAppUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2e1b0e] leading-tight">
            Listen to yourself
            <br />
            Follow your heart
          </h1>
          <p className="text-[#5f4b3a] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
            risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
          <button className="bg-yellow-300 text-[#2e1b0e] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition">
            Download the App
          </button>

          {/* Stats */}
          <div className="mt-10 bg-[#3f2b1e] text-white p-6 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">4.9</p>
              <div className="h-0.5 bg-white w-6 mx-auto my-2"></div>
              <p className="text-sm">Lorem ipsum dolor amet</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">876K</p>
              <div className="h-0.5 bg-white w-6 mx-auto my-2"></div>
              <p className="text-sm">Lorem ipsum dolor amet</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">No.1</p>
              <div className="h-0.5 bg-white w-6 mx-auto my-2"></div>
              <p className="text-sm">Lorem ipsum dolor amet</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">
        \
          <img
            src="/music.svg"
            alt="App on phone"
            className="relative z-20  rounded-xl  "
          />
        </div>
      </div>
    </div>
  );
}