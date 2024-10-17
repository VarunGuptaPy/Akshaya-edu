import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-200">
            <Users size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">We're a group of passionate educators, developers, and AI enthusiasts committed to revolutionizing the way students learn.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
            <Lightbulb size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">To empower students with cutting-edge AI technology, making learning more efficient, engaging, and accessible for everyone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
            <Target size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">To create a world where every student has the tools they need to succeed, fostering a global community of lifelong learners.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;