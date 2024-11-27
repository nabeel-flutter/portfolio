import React from 'react';
import { ArrowRight, Code2, Globe, Server } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-blue-500"></div>
              <span className="text-blue-400">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Flutter & Full Stack Developer
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Passionate Flutter developer with expertise in creating cross-platform mobile applications.
              Experienced in building scalable solutions using Flutter, Firebase, and modern development practices.
              Strong focus on clean architecture and beautiful user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://github.com/nabeel-flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-400 text-sm">Creating beautiful Flutter applications</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Server className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold mb-2">Backend Integration</h3>
                <p className="text-gray-400 text-sm">Firebase and RESTful APIs</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Globe className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-semibold mb-2">Cross-Platform</h3>
                <p className="text-gray-400 text-sm">iOS and Android development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}