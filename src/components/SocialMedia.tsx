import React from 'react';
import { Instagram, Linkedin, Figma, Twitter, Youtube } from 'lucide-react';
import { SocialLink } from '../types';

interface SocialMediaProps {
  socialLinks: SocialLink[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ socialLinks }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram size={32} />;
      case 'Linkedin':
        return <Linkedin size={32} />;
      case 'Figma':
        return <Figma size={32} />;
      case 'Twitter':
        return <Twitter size={32} />;
      case 'Youtube':
        return <Youtube size={32} />;
      default:
        return <Figma size={32} />;
    }
  };

  return (
    <section id="social" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Connect With Me</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white 
                  hover:bg-black hover:border-black hover:text-white transition-all duration-300 
                  transform group-hover:scale-110">
                  {getIconComponent(link.icon)}
                </div>
                <span className="mt-3 text-lg font-medium">{link.platform}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;