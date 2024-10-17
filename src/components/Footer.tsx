import React from "react";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Akshaya.ai</h2>
            <p className="text-gray-400">
              Empowering students with AI-powered learning tools
            </p>
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
