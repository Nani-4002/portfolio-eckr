
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Translator",
      description: "AI-powered tool allowing users to select input and output languages for dynamic translation. Currently expanding this functionality into other applications using agent-based systems.",
      tech: "AI-Generated Code, Prompt Engineering",
      category: "AI Application"
    },
    {
      title: "Adit & Tax Consultancy Website",
      description: "Designed and developed a comprehensive website to represent a local consultancy firm with modern design and user-friendly interface.",
      tech: "AI-Generated Code, Web Design",
      category: "Business Website"
    },
    {
      title: "Clothing Store Website",
      description: "Created an online storefront for a local apparel retailer with e-commerce functionality and responsive design.",
      tech: "AI-Generated Code, E-commerce",
      category: "E-commerce"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 text-lg">Showcasing projects built with AI-powered development</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mb-6 flex items-center justify-center text-white font-medium">
                Project Screenshot
                <br />
                Placeholder
              </div>
              <div className="mb-2">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Tech:</span> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
