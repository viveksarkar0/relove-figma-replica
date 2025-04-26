import React from "react";

// Header Component
const Header: React.FC = () => {
  return (
    <div className="text-center mb-16 font-avenir">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Discover the beauty
        <br />
        around the world
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Faucibus in
        libero risus semper habitant arcu <br /> eget. Et integer facilisi eget diam.
      </p>

      <div className="mt-10">
        <button className="bg-gray-900 text-white px-12 py-3 rounded-2xl hover:bg-gray-800 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

// Gallery Image Component
interface GalleryImageProps {
  imageUrl: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ imageUrl }) => {
  return (
    <div className="rounded-2xl overflow-hidden w-full h-64 md:h-72">
      <img
        src={imageUrl}
        alt="Gallery item"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Gallery Grid Component
const GalleryGrid: React.FC = () => {
  // Images that match the design more closely
  const images = [
    "/headerImage/one.svg",
    "/headerImage/two.svg",
    "/headerImage/three.svg",
    "/headerImage/four.png",
    "/headerImage/five.svg",
    "/headerImage/six.svg",
    "/headerImage/seven.svg",
    "/headerImage/eight.svg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <GalleryImage key={index} imageUrl={image} />
      ))}
    </div>
  );
};

// Main App Component
const HeaderImage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto py-8">
        <Header />
        <GalleryGrid />
      </div>
    </div>
  );
};

export default HeaderImage;
