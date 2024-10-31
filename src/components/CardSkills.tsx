// src/components/CardSkills.jsx
import React from 'react';

const CardSkills = ({ title, skills }) => {
  return (
    <div className="block max-w-sm mx-auto transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index} className="mt-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardSkills;
