import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="w-full h-1 bg-neutral-200 mb-4"></div>
      <h3 className="text-xl font-medium text-neutral-800 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;