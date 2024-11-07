import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardHome = ({ title, description, imageSrc, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center w-full h-64 max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg cursor-pointer rounded-3xl hover:scale-105"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
      <div className="flex items-center justify-center w-full mt-6">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-b-3xl" />
      </div>
    </div>
  );
};

export default CardHome;
