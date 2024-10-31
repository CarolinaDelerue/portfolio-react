// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <p className="text-sm">&copy; 2023 Your Name. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
