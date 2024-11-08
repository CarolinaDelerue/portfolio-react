import React from 'react';

const CustomCard = ({ imageSrc, title, description, challenge, tags, linkIcon, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex items-center p-4 space-x-6 bg-transparent border-b border-gray-700">
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="w-32 h-32 rounded-xl" // Augmentation de la taille de la photo
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-3xl font-semibold text-white">{title}</h3>
          <p className="text-lg text-gray-400">{description}</p>
          <p className="mt-1 text-sm text-gray-500">{challenge}</p>
          <div className="flex mt-3 space-x-2"> {/* Réduction du padding des tags */}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-2xl text-gray-400">{linkIcon}</span>
        </div>
      </div>
    </a>
  );
};

export default CustomCard;
