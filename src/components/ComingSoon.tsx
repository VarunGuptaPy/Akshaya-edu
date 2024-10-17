import React from 'react';
import { X } from 'lucide-react';

interface ComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full animate-fade-in-up">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Coming Soon!</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          We're excited to announce that the Akshaya.ai app is coming soon! We're working hard to bring you the best AI-powered learning experience.
        </p>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter to be notified when we launch and get exclusive early access!
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;