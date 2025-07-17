import React from 'react';
import CustomCard from '../components/CardProjects';

interface Project {
  title: string;
  description: string;
  challenge: string;
  skills: string[];
  link: string;
  imageSrc: string;
}

const Projects: React.FC<void> = () => {
  const projects: Project[] = [
    {
      title: 'Tina',
      description: 'E-commerce site in the healthcare sector.',
      challenge: 'Selling screening kits for AMD.',
      skills: ['Nuxt', 'Nuxt UI', 'Vue', 'HTML', 'CSS'],
      link: 'https://www.tina.vision/',
      imageSrc: '/assets/tina.png',
    },
    {
      title: 'Retinov',
      description: 'Corporate website in the healthcare sector.',
      challenge: 'Building a static site to showcase the company.',
      skills: ['Nuxt', 'Nuxt UI', 'Vue', 'HTML', 'CSS'],
      link: 'https://www.retinov.com/',
      imageSrc: '/assets/retinov.png',
    },
    {
      title: 'E-commerce Booking Website',
      description: 'HTML/CSS implementation of a Figma mockup for a booking platform.',
      challenge: 'Achieving a pixel-perfect replica of the design.',
      skills: ['HTML', 'CSS', 'Figma'],
      link: 'https://booki-webapp.netlify.app',
      imageSrc: '/assets/booki.png',
    },
    {
      title: 'Kasa',
      description: 'Redesign of a rental platform using React and Figma mockups.',
      challenge: 'Creating reusable React components for photo galleries and apartment details.',
      skills: ['React', 'JSX', 'CSS', 'Figma', 'State Management'],
      link: 'https://kasa-cd.netlify.app/',
      imageSrc: '/assets/kasa.png',
    },
    {
      title: 'Portfolio',
      description: 'Development of my personal portfolio site.',
      challenge: 'Building a responsive portfolio with React.',
      skills: ['React', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://portfolio-react-caro.netlify.app/',
      imageSrc: '/assets/portfolio.png',
    },
    {
      title: 'NuxtShip',
      description: 'E-commerce template using Nuxt Content.',
      challenge: 'Building a customizable template with markdown integration.',
      skills: ['Nuxt', 'Nuxt Content', 'Markdown', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://nuxtship.vercel.app/',
      imageSrc: '/assets/nuxtship.png',
    },
    {
      title: 'Nina Carducci',
      description: 'E-commerce site built with React.',
      challenge: 'Creating a customizable React template.',
      skills: ['React', 'JSX', 'CSS'],
      link: 'https://nina-carducci-react.netlify.app/',
      imageSrc: '/assets/nina.png',
    },
    {
      title: 'Podiatrist Website',
      description: 'Healthcare template website.',
      challenge: 'Enabling content customization via Markdown.',
      skills: ['Nuxt', 'Nuxt Content', 'Markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://podiatrist.nuxt.space/',
      imageSrc: '/assets/podiatrist.png',
    },
    {
      title: 'Kine Website',
      description: 'Healthcare template website.',
      challenge: 'Enabling content customization via Markdown.',
      skills: ['Nuxt', 'Nuxt Content', 'Markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://kine.nuxt.space/',
      imageSrc: '/assets/kine.png',
    },
    {
      title: 'Doctor Website',
      description: 'Healthcare template website.',
      challenge: 'Enabling content customization via Markdown.',
      skills: ['Nuxt', 'Nuxt Content', 'Markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://doctor.nuxt.space/',
      imageSrc: '/assets/doctor.png',
    },
    {
      title: 'Psychologist Website',
      description: 'Healthcare template website.',
      challenge: 'Enabling content customization via Markdown.',
      skills: ['Nuxt', 'Nuxt Content', 'Markdown', 'Studio', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://psychologist.nuxt.space/',
      imageSrc: '/assets/psychologist.png',
    },
  ];

  return (
    <section id="projects" className="py-8">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-6xl font-bold text-center text-white">My Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <CustomCard
              key={project.title}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              challenge={project.challenge}
              tags={project.skills}
              linkUrl={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
