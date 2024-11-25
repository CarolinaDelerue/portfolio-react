import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardAboutProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  link?: string;
  className?: string;
  softSkills?: string[]; // Nouvelle propriété pour les soft skills
}

const CardAbout: FC<CardAboutProps> = ({
  backgroundImage,
  title,
  description,
  icon,
  imageSrc,
  link,
  className = '',
  softSkills, // Extraction de la propriété softSkills
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    } else {
      console.warn('No link provided for navigation.');
    }
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      onClick={link ? handleClick : undefined}
      style={containerStyle}
      className={`flex flex-col items-center w-full h-64 max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg ${
        link ? 'cursor-pointer hover:scale-105' : 'cursor-default'
      } rounded-3xl ${!imageSrc ? 'justify-center' : ''} ${className} m-4`} // Ajout de la marge ici (m-4)
    >
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
      {/* Affichage des soft skills */}
      {softSkills && softSkills.length > 0 && (
        <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
      {imageSrc && (
        <div className="flex items-center justify-center w-full mt-6 overflow-hidden">
          <img
            src={imageSrc}
            alt={title || 'Card image'}
            className="object-contain w-full h-full rounded-b-3xl" // Ajout de object-contain et h-full
          />
        </div>
      )}
    </div>
  );
};

export default CardAbout;
