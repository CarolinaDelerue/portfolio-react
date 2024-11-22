import React from 'react';

const TechBanner: React.FC = () => {
  const techLogos = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      alt: 'TailwindCSS',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      alt: 'Node.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      alt: 'Vue.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      alt: 'Nuxt.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      alt: 'GitHub',
      style: { filter: 'invert(1) brightness(2)' }, // Logo en blanc
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML5',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS3',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-800">
      <div
        className="flex items-center justify-start space-x-12 animate-marquee whitespace-nowrap"
        style={{ animationDuration: '20s' }} // Réduction de la cadence pour un mouvement fluide
      >
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ flex: '0 0 auto' }} // Empêche les zones vides
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={logo.style || {}}
              className="h-24 transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
        {/* Duplicate for seamless scrolling */}
        {techLogos.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center justify-center"
            style={{ flex: '0 0 auto' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={logo.style || {}}
              className="h-24 transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBanner;
