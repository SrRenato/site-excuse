import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">EXCUSE</p>
          
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">&copy; {currentYear} EXCUSE. All rights reserved.</p>
            <p className="text-sm text-gray-600 mt-1">Create by @Renatin</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;