import React from 'react';

type GalleryItemProps = {
  image: string;
  caption: string;
};

const GalleryItem = ({ image, caption }: GalleryItemProps) => {
  return (
    <div className="group relative w-full sm:w-1/2 md:w-1/5 p-2 transition-all">
      <div className="overflow-hidden rounded-lg h-48 md:h-64 w-42">
        <img 
          src={image} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <p className="text-cream mt-2 text-sm md:text-base opacity-80">{caption}</p>
    </div>
  );
};

const GallerySection = () => {
  const galleryItems = [
    {
      image:"/image/coffe.svg",
      caption: "Et integer facilisi eget"
    },
    {
        image:"/image/hotcoffe.svg",
      caption: "Et integer facilisi eget"
    },
    {
        image:"/image/coldcoffe.svg",
      caption: "Et integer facilisi eget"
    },
    {
        image:"/image/outdoorcoffe.svg",
      caption: "Et integer facilisi eget"
    },
    {
        image:"/image/lastcoffe.svg",
      caption: "Et integer facilisi eget"
    }
  ];

  return (
    <div className="w-full bg-dark-brown py-12 md:py-20 px-4 md:px-16  text-white bg-[#363032] -translate-y-16 z-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} image={item.image} caption={item.caption} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;