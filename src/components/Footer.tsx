import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Akshaya.ai</h2>
            <p className="text-gray-400">Empowering students with AI-powered learning tools</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition duration-300"><Github size={24} /></a>
            <a href="#" className="hover:text-purple-400 transition duration-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-purple-400 transition duration-300"><Instagram size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Akshaya.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;