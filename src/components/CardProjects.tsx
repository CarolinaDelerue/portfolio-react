import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNuxtdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';
import { VscMarkdown } from 'react-icons/vsc';

const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className="text-xl text-white md:text-2xl" />,
  CSS: <FaCss3Alt className="text-xl text-white md:text-2xl" />,
  React: <FaReact className="text-xl text-white md:text-2xl" />,
  Nuxt: <SiNuxtdotjs className="text-xl text-white md:text-2xl" />,
  markdown: <VscMarkdown className="text-xl text-white md:text-2xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-xl text-white md:text-2xl" />,
  Figma: <SiFigma className="text-xl text-white md:text-2xl" />,
};

interface CustomCardProps {
  imageSrc: string;
  title: string;
  description: string;
  challenge?: string;
  tags: string[];
  linkIcon?: JSX.Element | string; // Rend l'icône facultative
  linkUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageSrc,
  title,
  description,
  challenge,
  tags,
  linkIcon,
  linkUrl,
}) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex flex-col items-center p-4 space-y-4 bg-transparent border-b border-gray-700 md:flex-row md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-24 h-24 md:w-32 md:h-32 rounded-xl"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-semibold text-white md:text-3xl">{title}</h3>
          <p className="text-sm text-gray-400 md:text-lg">{description}</p>
          {challenge && <p className="mt-1 text-xs text-gray-500 md:text-sm">{challenge}</p>}
          <div className="flex justify-center mt-3 space-x-2 md:justify-start">
            {tags.map((tag, index) => (
              iconMap[tag] ? (
                <span key={index}>
                  {iconMap[tag]}
                </span>
              ) : null
            ))}
          </div>
        </div>
        {linkIcon && (
          <div className="flex-shrink-0 text-center md:text-right">
            <span className="text-xl text-gray-400 md:text-2xl">{linkIcon}</span>
          </div>
        )}
      </div>
    </a>
  );
};

export default CustomCard;
