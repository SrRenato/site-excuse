import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
          
          <p className="text-lg md:text-xl mb-6">
            I'm a passionate designer with over 8 years of experience creating meaningful visual experiences. My work focuses on brand identity, UI/UX design, and editorial projects that communicate clear messages and evoke emotions.
          </p>
          
          <p className="text-lg md:text-xl mb-6">
            My design philosophy centers around the perfect balance of aesthetics and functionality. Every project begins with deep research and understanding of the client's needs, audience, and market position.
          </p>
          
          <p className="text-lg md:text-xl">
            When I'm not designing, you can find me photographing urban landscapes, exploring art exhibitions, or experimenting with new creative techniques.
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Brand Identity', 'UI/UX Design', 'Editorial Design', 'Typography', 'Packaging', 'Motion Graphics', 'Illustration', 'Art Direction'].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;