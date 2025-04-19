import React from 'react';
import { Instagram, Eye, Heart } from 'lucide-react';
import { SocialContent } from '../types';

interface PopularContentProps {
  content: SocialContent[];
}

const PopularContent: React.FC<PopularContentProps> = ({ content }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Popular Content</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {content.map((item) => (
            <a
              key={item.id}
              href={item.contentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div 
                  className="aspect-[9/16] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
                >
                  <div className="absolute top-4 left-4">
                    <Instagram className="text-white drop-shadow-lg" size={24} />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-sm font-bold mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Eye size={16} className="mr-1" />
                      <span>{formatNumber(item.views)}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Heart size={16} className="mr-1" />
                      <span>{formatNumber(item.likes)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularContent;