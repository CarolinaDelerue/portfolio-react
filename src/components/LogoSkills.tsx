import React from "react";

interface Logo {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

interface LogoSkillsProps {
  techLogos: Logo[];
}

const LogoSkills: React.FC<LogoSkillsProps> = ({ techLogos }) => {
  return (
    <div className="flex flex-wrap justify-center grid-cols-6 gap-6 mb-16 lg:flex">
      {techLogos.map((logo, index) => (
        <div
          key={logo.src}
          className="items-center justify-center w-16 h-16 p-4 transition-transform bg-white rounded-lg hover:scale-105"
          style={logo.style || {}}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            title={logo.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoSkills;
