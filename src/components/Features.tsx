import React from 'react';
import { FileText, HelpCircle, FileQuestion, Save } from 'lucide-react';

const features = [
  {
    icon: <FileText size={40} />,
    title: 'Flashcards',
    description: 'Convert images and PDFs into interactive flashcards for effective studying.'
  },
  {
    icon: <HelpCircle size={40} />,
    title: 'Q&A Generation',
    description: 'Generate question and answer pairs from your study materials.'
  },
  {
    icon: <FileQuestion size={40} />,
    title: 'Summaries',
    description: 'Create concise summaries of your documents for quick review.'
  },
  {
    icon: <Save size={40} />,
    title: 'In-App Storage',
    description: 'Save and organize your generated study materials within the app.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;