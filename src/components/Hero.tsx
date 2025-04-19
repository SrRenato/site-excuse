import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative bg-white">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none">
  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-3">
    Editor & Designer 
  </span>
</h1>

          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto text-gray-700">
            <span className="font-semibold">Media Controller at</span> <span className="font-bold">@BONOXS </span><br />
            <span className="font-semibold">Social Media at</span> <span className="font-bold">@CurralzinhoCPC </span><br />
            <span className="font-semibold">Mod at</span> <span className="font-bold">@HUBmarvelSA</span><br />
            <span className="font-semibold">Editor at</span> <span className="font-bold">@KKPRODUTORA, @StellaeGaming</span>
          </p>
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 text-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors rounded-full"
          >
            Meus Projetos
            <ArrowDown className="ml-2" size={20} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <ArrowDown className="inline-block animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;