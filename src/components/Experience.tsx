import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2021 - Present",
      description: "Leading development of complex web applications using MERN Stack and Next.js. Collaborating with international clients to deliver scalable solutions. Implementing modern UI/UX designs and optimizing application performance.",
      technologies: ["React", "Node.js", "MongoDB", "Next.js", "AWS", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "Folio3",
      period: "2020 - 2021",
      description: "Developed and maintained enterprise-level web applications. Led a team of 3 developers in implementing new features and optimizing existing codebase. Reduced application load time by 40% through performance optimization.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Jenkins"]
    },
    {
      title: "Web Developer",
      company: "Techwards",
      period: "2019 - 2020",
      description: "Built responsive web applications and implemented UI/UX designs. Collaborated with design team to create intuitive user interfaces. Maintained and improved existing web applications.",
      technologies: ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-1 w-12 bg-blue-500"></div>
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-gray-400 space-x-4">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-700 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}