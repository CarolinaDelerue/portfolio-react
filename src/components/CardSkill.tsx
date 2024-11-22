import React, { FC } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';

interface CardSkillsProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  softSkills?: string[]; // Liste des soft skills
  className?: string;
  techLogos?: string[]; // Liste des technologies sous forme de chaînes de caractères
}

const CardSkills: FC<CardSkillsProps> = ({
  backgroundImage,
  title,
  description,
  softSkills,
  className = '',
  techLogos, // Liste des technologies
}) => {
  // Dictionnaire pour mapper les noms des technologies aux icônes correspondantes
  const iconMap: { [key: string]: JSX.Element } = {
    React: <FaReact className="text-2xl text-white" />,
    TailwindCSS: <SiTailwindcss className="text-2xl text-white" />,
    JavaScript: <SiJavascript className="text-2xl text-white" />,
    TypeScript: <SiTypescript className="text-2xl text-white" />,
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      style={containerStyle}
      className={`flex flex-col items-start w-full h-auto max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg rounded-3xl ${className}`}
    >
      {/* Title and Description */}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}

      {/* Soft Skills List */}
      {softSkills && softSkills.length > 0 && (
        <ul className="pl-6 mt-4 text-sm text-gray-400 list-disc list-inside">
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}

      {/* Tech Logos */}
      {techLogos && techLogos.length > 0 && (
        <div className="flex flex-wrap justify-start mt-4 space-x-4">
          {techLogos.map((tech, index) => (
            <div key={index} className="flex items-center justify-center w-12 h-12">
              {iconMap[tech] && iconMap[tech]} {/* Affiche l'icône correspondante */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSkills;
