export default function ProjectsSection() {
  return (
    <div className="w-full bg-white py-16 px-8 md:px-16 font-avenir">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-gray-900 relative inline-block">
          Projects and
  
        </h2>
        <h2 className="text-5xl font-bold text-gray-900 mt-4">practice</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((num, index) => (
          <div key={index} className="flex flex-col">
            {/* Card Number */}
            <h3 className="text-2xl font-medium text-gray-500 mb-4">0{num}</h3>

            {/* Text & Image */}
            <div className="w-full max-w-md">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                in libero risus semper habitant arcu eget. Et integer facilisi eget.
              </p>
              <img
                src={`/projectImage/${['one', 'two', 'three'][index]}.svg`}
                alt={`Project 0${num}`}
                className="w-full rounded-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
