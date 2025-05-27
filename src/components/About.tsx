
import React from 'react';
import { Brain, Code, Lightbulb, Rocket, GraduationCap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Brain, title: "AI-Powered Development", desc: "Building solutions through intelligent prompt engineering" },
    { icon: Code, title: "Code Generation", desc: "Creating functional applications without traditional coding" },
    { icon: Lightbulb, title: "Innovation", desc: "Exploring cutting-edge AI technologies daily" },
    { icon: Rocket, title: "AI Agents", desc: "Implementing intelligent automation systems" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am passionate about exploring new things and updating myself daily. My strength lies in crafting complete code solutions using AI through prompt engineering — even without traditional coding knowledge.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently focused on learning AI agents and applying them across different domains to create innovative solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                <p className="text-sm text-gray-600">B.Tech ECE, Kuppam Engineering College</p>
                <p className="text-sm text-purple-600 font-medium">Graduating 2026</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Current Focus</h4>
                <p className="text-sm text-gray-600">AI agents and cross-domain applications</p>
                <p className="text-sm text-orange-500 font-medium">Innovation & Learning</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">What I Do</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                      <skill.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2">{skill.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
