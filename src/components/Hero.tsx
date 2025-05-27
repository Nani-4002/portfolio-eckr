
import React from 'react';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-purple-200 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for projects
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                  E Charan Kumar Reddy
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Exploring new ideas daily and building the future with AI
              </p>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Passionate about leveraging AI through prompt engineering to create innovative solutions without traditional coding. Currently mastering AI agents to transform ideas into reality.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Get In Touch
                <Mail className="ml-2" size={20} />
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="mailto:reddycharan348@gmail.com" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/nani-4002" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl rotate-6 opacity-75"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl rotate-3 opacity-90"></div>
                <div className="relative w-full h-full bg-gray-800 rounded-3xl p-1 border-2 border-white/20">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-300 text-lg font-medium">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">👨‍💻</span>
                      </div>
                      <p>Profile Photo</p>
                      <p className="text-sm opacity-75">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <p className="font-bold text-xl">AI+</p>
                  <p className="text-sm opacity-90">Prompt Engineer</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-2xl -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <p className="font-bold text-xl">🤖</p>
                  <p className="text-sm opacity-90">AI Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
