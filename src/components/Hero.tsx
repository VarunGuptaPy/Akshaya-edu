import React, { useState } from 'react';
import { Smartphone, Download } from 'lucide-react';
import ComingSoon from './ComingSoon';

const Hero = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsComingSoonOpen(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Transform Your Learning with Akshaya.ai
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Create flashcards, Q&As, summaries, and notes from images and PDFs using AI technology.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <a href="#" onClick={handleDownloadClick} className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              <Download className="mr-2" size={20} />
              Download APK
            </a>
            <a href="#" onClick={handleDownloadClick} className="bg-black text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
              <Smartphone className="mr-2" size={20} />
              App Store
            </a>
            <a href="#" onClick={handleDownloadClick} className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-green-700 transition duration-300 transform hover:scale-105">
              <Smartphone className="mr-2" size={20} />
              Play Store
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-fade-in-up animation-delay-600">
          <div className="w-72 h-[500px] mx-auto bg-black rounded-[60px] p-4 shadow-xl transition duration-300 transform hover:scale-105 hover:rotate-3">
            <div className="w-full h-full overflow-hidden rounded-[48px]">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Akshaya.ai App Screenshot" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <ComingSoon isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} />
    </section>
  );
};

export default Hero;