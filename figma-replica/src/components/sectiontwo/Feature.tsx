import React from 'react';

interface FeaturedProjectProps {
  image: string;
  alt: string;
  cards: {
    title: string;
    description: string;
  }[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ image, alt, cards }) => {
  return (
    <div className="mt-12 mb-12 relative">
      {/* Cards overlay */}
      <div className="absolute -top-16 left-0 right-0 z-10 flex justify-center">
        <div className="bg-white rounded-3xl shadow-full p-4 md:p-6 w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="p-4">
             
                <h3 className="text-lg font-medium text-neutral-800 mb-2">{card.title}</h3>
                <div className="w-12 h-0.5 bg-neutral-400 mb-3"></div>
                <p className="text-neutral-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured image */}
      <div className="mt-20 rounded-2xl overflow-hidden">
        <img src={image} alt={alt} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default FeaturedProject;