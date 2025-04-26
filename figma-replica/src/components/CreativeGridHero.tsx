export default function CreativeGridHero() {
  const images = [
    "/image/one.svg",
    "/image/two.svg",
    "/image/three.svg",
    "/image/four.svg",
    "/image/five.svg",
    "/image/six.svg",
    "/image/seven.svg",
    "/image/eight.svg",
    "/image/nine.svg",
    "/image/ten.svg",
    "/image/eleven.svg",
    "/image/twelve.svg",
    "/image/thirteen.svg",
    "/image/forteen.svg",
    "/image/fifteen.svg",
    "/image/sixteen.svg",
  ];

  return (
    <section className="min-h-screen bg-[#1e1e1e] text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-wrap lg:flex-nowrap gap-12 items-start">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6 max-w-sm items-center justify-center h-screen">
          <div className="">
            <h1 className="text-[4rem] leading-[1.2] font-extrabold space-y-2 mb-5">
              <div className="text-pink-300">Design.</div>
              <div className="text-blue-300">Create.</div>
              <div className="text-teal-300">Inspire.</div>
            </h1>
            <p className="text-gray-300 mb-2" style={{wordSpacing: "0.2em"}}>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. Faucibus <br />
              in libero risus semper habitant arcu <br />
              eget. Et integer facilisi
              eget.
            </p>
            <button className="mt-4 px-10 py-3 bg-white text-black rounded-full w-max font-medium shadow hover:scale-105 transition">
              Explore
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-wrap gap-4 justify-end">
          {/* Right: Image Grid */}
          <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full max-w-[650px]">
            {images.map((src, i) => (
              <div key={i} className="rounded-[20px] overflow-hidden">
                <img
                  src={src}
                  alt={`Grid ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
