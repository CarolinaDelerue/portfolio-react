import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNuxtdotjs } from 'react-icons/si';
import { VscMarkdown } from 'react-icons/vsc';
import { SiTailwindcss } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';

const iconMap = {
  HTML: <FaHtml5 className="text-2xl text-white" />,
  CSS: <FaCss3Alt className="text-2xl text-white" />,
  React: <FaReact className="text-2xl text-white" />,
  Nuxt: <SiNuxtdotjs className="text-2xl text-white" />,
  markdown: <VscMarkdown className="text-2xl text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-2xl text-white" />,
  Figma: <SiFigma className="text-2xl text-white" />,
};

const CustomCard = ({ imageSrc, title, description, challenge, tags, linkIcon, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex items-center p-4 space-x-6 bg-transparent border-b border-gray-700">
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-32 h-32 rounded-xl"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-3xl font-semibold text-white">{title}</h3>
          <p className="text-lg text-gray-400">{description}</p>
          <p className="mt-1 text-sm text-gray-500">{challenge}</p>
          <div className="flex mt-3 space-x-2">
            {tags.map((tag, index) => (
              iconMap[tag] ? (
                <span key={index}>
                  {iconMap[tag]}
                </span>
              ) : null
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
