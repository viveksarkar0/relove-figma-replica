
export default function DesignFeaturesSection() {
  const features = [
    {
      number: "01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/design/one.svg",
      title: "Title",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    },
    {
      number: "02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/design/two.svg",
      title: "Title",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    },
    {
      number: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/design/three.svg",
      title: "Title",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    },
    {
      number: "04",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/design/four.svg",
      title: "Title",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    }
  ];

  return (
    <section className="w-full py-16 px-8 md:px-16 bg-white font-avenir">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-3xl">
          Design is the way how you express the feelings
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h">
              {/* Number and Description */}
              <div className="mb-6">
                <p className="text-4xl font-light text-gray-300 mb-2">{feature.number}</p>
                <p className="text-gray-700">{feature.description}</p>
              </div>

              {/* Image Card with Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent text-black">
                  <h3 className="font-medium text-lg">{feature.title}</h3>
                  <p className="text-sm">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}