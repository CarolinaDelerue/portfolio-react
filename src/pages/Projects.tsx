import CustomCard from '../components/CardProjects';

interface Project {
  title: string;
  description: string;
  challenge: string;
  skills: string[];
  link: string;
  imageSrc: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
        {
      title: 'Tina',
      description: 'E-commerce site in the healthcare sector',
      challenge: 'Selling screening kits for AMD',
      skills: ['Nuxt', 'Nuxt UI', 'Vue', 'HTML', 'CSS' ],
      link: 'https://www.tina.vision/',
      imageSrc: '/assets/tina.png',
    },
    {
      title: 'Retinov',
      description: 'Company website',
      challenge: 'Company website',
      skills: ['Nuxt', 'Nuxt UI', 'Vue', 'HTML', 'CSS' ],
      link: 'https://www.retinov.com/',
      imageSrc: '/assets/retinov.png',
    },
    {
      title: 'E-commerce Booking Website',
      description: 'Replicated a Figma mockup in HTML/CSS for an apartment booking website.',
      challenge: 'Reproducing the mockup pixel-perfect.',
      skills: ['HTML', 'CSS', 'Figma'],
      link: 'https://booki-webapp.netlify.app',
      imageSrc: '/assets/booki.png',
    },
    {
      title: 'Kasa',
      description: 'Redesign of a website for renting apartments between individuals, using React and Figma mockups.',
      challenge: 'Creating reusable components in React for managing the photo gallery and detailed information about the apartments.',
      skills: ['React', 'JSX', 'CSS', 'Figma', 'state management'],
      link: 'https://kasa-cd.netlify.app/',
      imageSrc: '/assets/kasa.png',
    },
    {
      title: 'Portfolio',
      description: 'Creation of my portfolio',
      challenge: 'Creation of my portfolio with React',
      skills: ['React', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://portfolio-react-caro.netlify.app/',
      imageSrc: '/assets/portfolio.png',
    },
    {
      title: 'NuxtShip',
      description: 'Creation of an e-commerce website.',
      challenge: 'Creation of an e-commerce template with Nuxt Content.',
      skills: ['Nuxt', 'Nuxt-content', 'markdown', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://nuxtship.vercel.app/',
      imageSrc: '/assets/nuxtship.png',
    },
    {
      title: 'Nina Carducci',
      description: 'Creation of an e-commerce website.',
      challenge: 'Creation of an e-commerce template with React',
      skills: ['React', 'JSX', 'CSS'],
      link: 'https://nina-carducci-react.netlify.app/',
      imageSrc: '/assets/nina.png',
    },

    {
      title: 'Podiatrist website',
      description: 'Creation of templates in the healthcare field.',
      challenge: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: ['Nuxt', 'Nuxt-content', 'markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://podiatrist.nuxt.space/',
      imageSrc: '/assets/podiatrist.png',
    },
    {
      title: 'Kine website',
      description: 'Creation of templates in the healthcare field.',
      challenge: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: ['Nuxt', 'Nuxt-content', 'markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://kine.nuxt.space/',
      imageSrc: '/assets/kine.png',
    },
    {
      title: 'Doctor website',
      description: 'Creation of templates in the healthcare field.',
      challenge: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: ['Nuxt', 'Nuxt-content', 'markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://doctor.nuxt.space/',
      imageSrc: '/assets/doctor.png',
    },
    {
      title: 'Psychologist website',
      description: 'Creation of templates in the healthcare field.',
      challenge: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: ['Nuxt', 'Nuxt-content', 'markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://psychologist.nuxt.space/',
      imageSrc: '/assets/psychologist.png',
    },
  ];

  return (
    <section id="projects" className="py-8">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-6xl font-bold text-center text-white">My Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <CustomCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              challenge={project.challenge}
              tags={project.skills}
              // linkIcon=""
              linkUrl={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
