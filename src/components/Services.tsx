
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Design Powered by AI",
      description: "Creating modern, responsive websites using AI-generated code and innovative design approaches.",
      icon: "🌐"
    },
    {
      title: "Prompt Engineering Solutions",
      description: "Custom code solutions crafted through advanced prompt engineering techniques for various business needs.",
      icon: "⚡"
    },
    {
      title: "AI Agent Integrations",
      description: "Implementing intelligent AI agents to automate processes and enhance user experiences across platforms.",
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services I Plan to Offer</h2>
          <p className="text-gray-600 text-lg">Coming soon - innovative solutions powered by AI</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
