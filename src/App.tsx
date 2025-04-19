import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import About from './components/About';
import PopularContent from './components/PopularContent';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { socialLinks } from './data/socialLinks';
import { socialContent } from './data/socialContent';

function App() {
  useEffect(() => {
    document.title = 'EXCUSE - Design Portfolio';
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main>
        <Hero />
        <ProjectsCarousel projects={projects} />
        <About />
        <PopularContent content={socialContent} />
        <SocialMedia socialLinks={socialLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;