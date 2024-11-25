import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu burger si l'utilisateur clique en dehors du menu
  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target.closest('nav') || e.target.closest('button')) return;
      setMenuOpen(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  // Fonction pour basculer l'état du menu burger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 bg-gray-800 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo ou nom du portfolio */}
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

        {/* Icône du menu burger (visible sur mobile uniquement) */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu burger, visible uniquement en mobile */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 right-0 bg-gray-700 w-full p-4 space-y-4 md:space-y-0 md:static md:w-auto md:flex md:justify-end md:bg-transparent`}
        >
          <ul className="flex flex-col items-end space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)} // Ferme le menu burger sur mobile
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)} // Ferme le menu burger sur mobile
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)} // Ferme le menu burger sur mobile
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)} // Ferme le menu burger sur mobile
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)} // Ferme le menu burger sur mobile
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
