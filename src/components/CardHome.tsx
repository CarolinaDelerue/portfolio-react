// src/components/CardHome.jsx
import React from 'react';

const CardHome = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block max-w-sm mx-auto transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <img src={imageUrl} alt={title} className="object-cover w-full h-48 rounded-b-lg" />
    </a>
  );
};

export default CardHome;
