import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">Akshaya.ai</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-purple-600 transition duration-300">Features</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-purple-600 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition duration-300">Download</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;