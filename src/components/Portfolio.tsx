
import React from 'react';
import { ExternalLink, Github, Bot, Globe, ShoppingBag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Translator",
      description: "AI-powered tool allowing users to select input and output languages for dynamic translation. Currently expanding this functionality into other applications using agent-based systems.",
      tech: ["AI-Generated Code", "Prompt Engineering", "Real-time Translation"],
      category: "AI Application",
      icon: Bot,
      gradient: "from-blue-500 to-purple-600",
      status: "Active Development"
    },
    {
      title: "Adit & Tax Consultancy Website",
      description: "Designed and developed a comprehensive website to represent a local consultancy firm with modern design and user-friendly interface.",
      tech: ["AI-Generated Code", "Web Design", "Business Solutions"],
      category: "Business Website",
      icon: Globe,
      gradient: "from-green-500 to-teal-600",
      status: "Completed"
    },
    {
      title: "Clothing Store Website",
      description: "Created an online storefront for a local apparel retailer with e-commerce functionality and responsive design.",
      tech: ["AI-Generated Code", "E-commerce", "Responsive Design"],
      category: "E-commerce",
      icon: ShoppingBag,
      gradient: "from-pink-500 to-orange-600",
      status: "Completed"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing projects built with AI-powered development and innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              {/* Project Image/Icon Area */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <project.icon size={48} className="mx-auto mb-4 opacity-90" />
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active Development' 
                      ? 'bg-yellow-400 text-yellow-900' 
                      : 'bg-green-400 text-green-900'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </button>
                  <button className="p-2 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                    <Github size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Interested in seeing more of my work?</p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
