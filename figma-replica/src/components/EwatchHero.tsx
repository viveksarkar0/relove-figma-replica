export default function EWatchHero() {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Left content */}
        <div className="space-y-6">
          <img src="/ewatchIcon/logo.svg" alt="eWatch logo" className="w-24" />

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            THE eWatch with the <br /> newest microchip <br /> technology
          </h1>

          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium">
              Order now
            </button>
            <button className="border border-black text-black px-6 py-3 rounded-md font-medium">
              Explore more
            </button>
          </div>

          {/* Icons row */}
          <div className="mt-10 border rounded-2xl px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-sm text-gray-600"
              >
                <img
                  src={
                    [
                      "/ewatchIcon/one.svg",
                      "/ewatchIcon/two.svg",
                      "/ewatchIcon/three.svg",
                      "/ewatchIcon/four.svg",
                    ][i]
                  }
                  alt="Icon"
                  className="mb-2"
                />
                <p className="text-center">
                  Lorem ipsu <br /> dolor amet
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image with decorations */}
        <div className="relative w-full h-full">
          <img
            src="/ewatchIcon/star.svg"
            alt=""
            className="absolute -top-8 left-0 z-0"
          />

          {/* Outer container with rounded corners */}
          <div className="relative rounded-3xl b p-4">
            <img
              src="/ewatchIcon/left.svg"
              alt="Smartwatch"
              className="w-full object-cover rounded-xl"
            />

            {/* Award badge */}
          </div>
        </div>
      </div>
    </section>
  );
}
