import React from "react";

interface HeroSectionProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,

  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-semibold text-neutral-800 mb-6">
        {title}
      </h1>
      <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <br /> Faucibus in libero risus semper habitant arcu eget. Et integer{" "}
        <br />
        facilisi eget diam. Lorem ipsum dolor sit ame, consectetur"
      </p>
      <button
        onClick={onButtonClick}
        className="bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default HeroSection;
