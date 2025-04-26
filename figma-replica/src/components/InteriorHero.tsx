export default function InteriorDesignHero() {
  return (
    <section className="relative bg-[#d3d9dc] px-10 pt-24 pb-32 overflow-hidden font-avenir ">
      {/* Right Circular Image */}
      <div className="absolute top-0 right-16 overflow-hidden  z-0">
        <img
          src="/imgleft.svg" // replace with actual image path
          alt="Mirror"
          className=" w-[400px] h-[400px] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-6 justify-center translate-x-96">
        <h1 className="text-7xl font-extrabold  text-gray-900">Interior design</h1>
        <p className="text-gray-700 text-lg max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit. Faucibus in libero risus semper habitant arcu eget. <br />

          Et integer facilisi eget.
        </p>
        <button className="w-max bg-[#2c2e28] text-white px-6 py-3 rounded-full text-lg shadow">
          Explore
        </button>
      </div>

     
      <div className="mt-20 flex max-w-6xl mx-auto items-end justify-between relative ">
        {/* Left Bottom Image */}
        <div className=" overflow-hidden rounded-lg shadow-md translate-y-30">
          <img
            src="/imgright.svg" 
            alt="Vase"
            className="w-full h-full object-cover  "
          />
        </div>

        {/* Stats Box */}
        <div className="absolute -bottom-16 right-0 bg-white/10 backdrop-blur-xl rounded-full px-12 py-8 flex gap-12 shadow-lg">
          {[
            { value: "5.8", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget." },
            { value: "99+", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget." },
            { value: "110K", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget." },
          ].map(({ value, desc }, i) => (
            <div key={i} className="max-w-[200px]">
              <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
              <div className="w-6 h-[2px] bg-gray-900 my-2" />
              <p className="text-sm text-gray-800">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
