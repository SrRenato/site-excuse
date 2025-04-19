import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="w-full overflow-hidden bg-black">
        <img src="/assets/decoration-left.jpg" alt="Decoration" className="w-full object-cover h-[120px] md:h-[150px]" />
      </div>
      <header className="w-full py-6 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-wider">EXCUSE</h1>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#projects" className="text-lg hover:text-gray-600 transition-colors">Projetos</a></li>
                <li><a href="#about" className="text-lg hover:text-gray-600 transition-colors">Sobre</a></li>
                <li><a href="#social" className="text-lg hover:text-gray-600 transition-colors">Social</a></li>
              </ul>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-4">
                <li><a href="#projects" className="text-lg hover:text-gray-600 transition-colors">Projetos</a></li>
                <li><a href="#about" className="text-lg hover:text-gray-600 transition-colors">Sobre</a></li>
                <li><a href="#social" className="text-lg hover:text-gray-600 transition-colors">Social</a></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
