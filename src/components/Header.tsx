import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Nabeel Khanjee
          </h1>
          <Navigation className="hidden md:flex" />
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-4">
              <a href="https://github.com/nabeelkhanjee" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nabeel-khanjee/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:nabeelkhanjee1@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <Navigation className="md:hidden mt-4" />
        )}
      </div>
    </header>
  );
}