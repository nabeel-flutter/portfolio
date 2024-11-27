import React from 'react';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`${className} space-x-6`}>
      <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
      <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
      <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
      <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
      <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
    </nav>
  );
}