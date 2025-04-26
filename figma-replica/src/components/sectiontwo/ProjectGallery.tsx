import React from 'react';

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02]"
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;