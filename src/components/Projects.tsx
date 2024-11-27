import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Flutter Chat App",
      description: "A real-time chat application built with Flutter and Firebase, featuring user authentication, real-time messaging, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      githubUrl: "https://github.com/nabeel-flutter/chat_app"
    },
    {
      title: "Flutter Todo App",
      description: "A feature-rich todo application with clean architecture, local storage, and beautiful UI animations.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Dart", "SQLite", "Provider"],
      githubUrl: "https://github.com/nabeel-flutter/todo_app"
    },
    {
      title: "Flutter Weather App",
      description: "A weather application that provides real-time weather updates with beautiful visualizations and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Weather API", "Dart", "BLoC"],
      githubUrl: "https://github.com/nabeel-flutter/weather_app"
    },
    {
      title: "Flutter Shop App",
      description: "An e-commerce application with product catalog, cart management, and order processing functionality.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Firebase", "Dart", "State Management"],
      githubUrl: "https://github.com/nabeel-flutter/shop_app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-12">
          <div className="h-1 w-12 bg-blue-500"></div>
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}