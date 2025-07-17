import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiNuxtdotjs, SiTailwindcss, SiFigma } from 'react-icons/si'
import { VscMarkdown } from 'react-icons/vsc'


type IconTags = 'HTML' | 'CSS' | 'React' | 'Nuxt' | 'markdown' | 'Tailwind CSS' | 'Figma';


const iconMap: Record<IconTags, JSX.Element> = {
  HTML: <FaHtml5 className="text-xl text-white md:text-2xl" />,
  CSS: <FaCss3Alt className="text-xl text-white md:text-2xl" />,
  React: <FaReact className="text-xl text-white md:text-2xl" />,
  Nuxt: <SiNuxtdotjs className="text-xl text-white md:text-2xl" />,
  markdown: <VscMarkdown className="text-xl text-white md:text-2xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-xl text-white md:text-2xl" />,
  Figma: <SiFigma className="text-xl text-white md:text-2xl" />,
}

interface CustomCardProps {
  imageSrc: string
  title: string
  description: string
  challenge?: string
  tags: string[]
  linkIcon?: JSX.Element | string
  linkUrl: string
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageSrc,
  title,
  description,
  challenge,
  tags,
  linkUrl,
}) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block group">
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
            {tags.map((tag, index) => {
              const icon = iconMap[tag as IconTags];
              return icon ? <span key={index}>{icon}</span> : null;
            })}
          </div>
        </div>

        <div className="flex-shrink-0 text-center transition-opacity duration-300 opacity-0 md:text-right group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="white" d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default CustomCard
