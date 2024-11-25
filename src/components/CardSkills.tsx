import React, { FC } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiVite, SiGithub, SiNuxtdotjs, SiNetlify, SiGooglechrome, SiExpress, SiSupabase, SiPrisma, SiTrello, SiNotion, SiFirefox, SiSafari } from 'react-icons/si';

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
    HTML: <FaHtml5 className="text-2xl text-white" />,
    CSS: <FaCss3Alt className="text-2xl text-white" />,
    Vite: <SiVite className="text-2xl text-white" />,
    Git: <FaGitAlt className="text-2xl text-white" />,
    GitHub: <SiGithub className="text-2xl text-white" />,
    Chrome: <SiGooglechrome className="text-2xl text-white" />,
    Safari: <SiSafari className="text-2xl text-white" />,
    Firefox: <SiFirefox className="text-2xl text-white" />,
    Netlify: <SiNetlify className="text-2xl text-white" />,
    Vercel: <SiVite className="text-2xl text-white" />, // Si pas d'icône spécifique, utilisez Vite
    Nuxt: <SiNuxtdotjs className="text-2xl text-white" />,
    Node: <FaNodeJs className="text-2xl text-white" />,
    Express: <SiExpress className="text-2xl text-white" />,
    Supabase: <SiSupabase className="text-2xl text-white" />,
    Prisma: <SiPrisma className="text-2xl text-white" />,
    Trello: <SiTrello className="text-2xl text-white" />,
    Notion: <SiNotion className="text-2xl text-white" />,
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      style={containerStyle}
      className={`flex flex-col items-start w-full h-auto max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg rounded-3xl cursor-pointer hover:scale-105 ${className}`}
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
        <div
          className="flex flex-wrap justify-start mt-4 space-x-4"
          style={{ minHeight: '72px' }} // Fixe une hauteur minimale pour harmoniser l'espace
        >
          {techLogos.map((tech, index) => (
            <div key={index} className="flex items-center justify-center w-12 h-12">
              {iconMap[tech] || (
                <span className="text-sm text-gray-400">Icone manquante</span>
              )} {/* Affiche l'icône correspondante ou un texte par défaut */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSkills;
