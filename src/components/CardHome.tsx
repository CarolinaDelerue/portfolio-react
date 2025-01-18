import { useNavigate } from 'react-router-dom';

interface CardHomeProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  link: string;
  className?: string;
}

const CardHome: React.FC<CardHomeProps> = ({
  backgroundImage,
  title,
  description,
  icon,
  imageSrc,
  link,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const containerStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      onClick={handleClick}
      style={containerStyle}
      className={`flex flex-col items-center w-full h-full max-w-md p-6 transition-transform duration-300 bg-gray-900 shadow-lg cursor-pointer rounded-3xl hover:scale-105 ${
        !imageSrc ? 'justify-center' : ''
      } ${className}`}
    >
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
      {imageSrc && (
        <div className="flex items-center justify-center w-full mt-6">
          <img
            src={imageSrc}
            alt={title || 'Card Image'}
            className="w-full h-auto rounded-b-3xl"
          />
        </div>
      )}
    </div>
  );
};

export default CardHome;
