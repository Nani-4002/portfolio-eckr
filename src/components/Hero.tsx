
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-orange-400 opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-yellow-400 opacity-60"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 rounded-full bg-white opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hello, I'm
              <br />
              <span className="text-yellow-300">E Charan Kumar Reddy</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Exploring new ideas daily and building the future with AI.
            </p>
            <p className="text-lg mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate about leveraging AI through prompt engineering to create innovative solutions without traditional coding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-2 animate-scale-in">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-medium">
                  Profile Photo
                  <br />
                  Placeholder
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                <span className="text-purple-600 font-bold text-2xl">AI+</span>
                <p className="text-gray-600 text-sm">Prompt Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
