

import ProjectGallery from './ProjectGallery';
import FeaturedProject from './Feature';
import HeroSection from './Hero';

const PortfolioLayout: React.FC = () => {
  // Sample data
  const projectCards = [
    { title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur' },
    { title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur' },
    { title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur' },
    { title: 'Title 1', description: 'Lorem ipsum dolor  sit amet, consectetur' },
  ];
  
  const galleryImages = [
    { 
      src: '/bottom1.svg', 
      alt: 'Modern white architectural structure' 
    },
    { 
        src: '/bottom2.svg',
      alt: 'Spiral architecture from below' 
    },
    { 
        src: '/bottom3.svg',
      alt: 'Smooth white architectural curves' 
    },
  ];

  const handleExploreClick = () => {
    console.log('Explore clicked');
    // Add navigation or modal functionality here
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection 
          title="Find the project you love"
          buttonText="Explore"
          onButtonClick={handleExploreClick}
        />
        
        <div className="mt-8 sm:mt-12">
          <FeaturedProject 
            image="/h.svg"
            alt="Featured architectural building"
            cards={projectCards}
          />
        </div>
        
        <div className="mt-8 sm:mt-16">
          <ProjectGallery images={galleryImages} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;