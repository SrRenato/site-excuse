import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Reset animation flag after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-lg shadow-xl relative h-[400px] md:h-[500px]">
  {projects.map((project, index) => (
    <div
      key={project.id}
      className={`absolute inset-0 transition-opacity duration-500 ${
        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
      style={{
        backgroundImage: `url(${project.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4 max-w-2xl">{project.description}</p>
        {project.behanceLink && (
          <a 
            href={project.behanceLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
          >
            View on Behance <ExternalLink className="ml-2" size={18} />
          </a>
        )}
      </div>
    </div>
  ))}
</div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-md transition-all z-10"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-md transition-all z-10"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;