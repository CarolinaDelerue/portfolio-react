import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 pt-6 text-white bg-gray-800">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <p className="text-sm">&copy; 2024 Carolina Delerue. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/CarolinaDelerue" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/carolina-delerue-7ba70468/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
