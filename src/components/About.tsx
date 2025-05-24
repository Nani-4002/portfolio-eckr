
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Designing Solutions, Not Just Visuals</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am passionate about exploring new things and updating myself daily. My strength lies in crafting complete code solutions using AI through prompt engineering — even without traditional coding knowledge.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Currently focused on learning AI agents and applying them across different domains to create innovative solutions that solve real-world problems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                <span className="text-gray-700">AI-Powered Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Prompt Engineering Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                <span className="text-gray-700">Continuous Learning</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Education</h4>
              <div className="space-y-2">
                <h5 className="font-semibold text-purple-600">B.Tech in Electronics and Communication Engineering</h5>
                <p className="text-gray-600">Kuppam Engineering College</p>
                <p className="text-gray-500">Graduating 2026</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Current Focus</h4>
              <p className="text-gray-600">
                Learning AI agents and applying them across different domains to create innovative solutions and automation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
