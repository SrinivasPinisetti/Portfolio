import React, { useState } from 'react';
import { ExternalLink, Code, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
  featured?: boolean;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveLink, 
  codeLink, 
  featured = false 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex gap-3">
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {codeLink && (
                <a 
                  href={codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      title: "Expenses Tracker",
      description: "A user-friendly application designed to help individuals track their daily expenses, categorize transactions, and visualize spending patterns. Built with Java, JDBC, it ensures efficient management of personal finances with real-time updates and easy-to-use features.",
      image: "https://images.pexels.com/photos/16282306/pexels-photo-16282306/free-photo-of-a-person-using-a-calculator.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Core Java", "Advance Java","JDBC"],
      // liveLink: "https://example.com/ecommerce-demo",
      // codeLink: "https://github.com/johndoe/ecommerce-project",
      featured: true,
      category: "web"
    },
    {
      title: "Hotel Management",
      description: "A comprehensive web application designed to manage hotel operations including bookings, room availability, and customer records.",
      image: "https://images.pexels.com/photos/31967701/pexels-photo-31967701/free-photo-of-cozy-modern-hotel-room-interior-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Spring Boot", "Rest APIs","Hibernate"],
      // liveLink: "https://example.com/ecommerce-demo",
      // codeLink: "https://github.com/johndoe/ecommerce-project",
      featured: true,
      category: "web"
    },
   
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            responsive design, and problem-solving.
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-full shadow-sm">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'web' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                Web
              </button>
              <button 
                onClick={() => setFilter('mobile')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'mobile' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Project 
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                featured={project.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              <Github size={20} />
              View more projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;