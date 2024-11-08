import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardHome = ({
  backgroundImage,
  title,
  description,
  icon,
  imageSrc,
  link,
  className // Ajout de className ici
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      onClick={handleClick}
      style={containerStyle}
      className={`flex flex-col items-center w-full h-64 max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg cursor-pointer rounded-3xl hover:scale-105 ${
        !imageSrc ? 'justify-center' : ''
      } ${className}`} // Utilisation de className ici
    >
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
      {imageSrc && (
        <div className="flex items-center justify-center w-full mt-6">
          <img src={imageSrc} alt={title} className="w-full h-auto rounded-b-3xl" />
        </div>
      )}
    </div>
  );
};

export default CardHome;
