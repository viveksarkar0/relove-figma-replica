const JustSimple = () => {
  return (
    <div>
      <div className="w-full bg-white px-20 py-16">
        <div className="  ">
          <div className="flex flex-col md:flex-row items-start justify-between py-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 "
                style={{ wordSpacing: "0.50rem" }}
              >
                Just that simple
              </h1>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus <br /> semper habitant arcu eget.
              </p>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-colors">
                Get started
              </button>
            </div>
          </div>

          <div className="w-full mt-4 mb-16 overflow-hidden">
            <img
              src="/heroImage.svg"
              alt="Modern architectural structure with white panels"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustSimple;
