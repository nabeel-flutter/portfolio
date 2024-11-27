import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: "Mobile Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      items: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Provider", level: 90 },
        { name: "BLoC", level: 85 },
        { name: "GetX", level: 80 }
      ]
    },
    {
      category: "Backend & APIs",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      items: [
        { name: "RESTful APIs", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Cloud Functions", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      category: "Development Tools",
      icon: <Wrench className="w-6 h-6 text-yellow-400" />,
      items: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 85 },
        { name: "Xcode", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      category: "Other Skills",
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      items: [
        { name: "Clean Architecture", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "State Management", level: 90 },
        { name: "Testing", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Agile", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-12">
          <div className="h-1 w-12 bg-blue-500"></div>
          <h2 className="text-3xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}