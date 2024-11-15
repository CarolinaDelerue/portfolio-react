import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <p className="text-sm">&copy; 2024 Carolina Delerue. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
