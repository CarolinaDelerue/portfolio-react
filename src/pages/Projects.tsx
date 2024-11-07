// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Booking Website',
      description: 'Replicated a Figma mockup in HTML/CSS for an apartment booking website.',
      challenges: 'Reproducing the mockup pixel-perfect.',
      skills: 'HTML, CSS, Figma',
      link: 'https://booki-webapp.netlify.app',
    },
    {
      title: 'Kasa',
      description: 'Redesign of a website for renting apartments between individuals, using React and Figma mockups.',
      challenges: 'Creating reusable components in React for managing the photo gallery and detailed information about the apartments.',
      skills: 'React, JSX, CSS, Figma, state management',
      link: 'https://kasa-cd.netlify.app/',
    },
    {
      title: 'Podiatrist website',
      description: 'Creation of templates in the healthcare field.',
      challenges: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: 'Nuxt, Nuxt-content, markdown, Studio, Tailwind CSS, Responsive Design',
      link: 'https://podiatrist.nuxt.space/',
    },
    {
      title: 'Kine website',
      description: 'Creation of templates in the healthcare field.',
      challenges: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: 'Nuxt, Nuxt-content, markdown, Studio, Tailwind CSS, Responsive Design',
      link: 'https://kine.nuxt.space/',
    },
    {
      title: 'Doctor website',
      description: 'Creation of templates in the healthcare field.',
      challenges: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: 'Nuxt, Nuxt-content, markdown, Studio, Tailwind CSS, Responsive Design',
      link: 'https://doctor.nuxt.space/',
    },
    {
      title: 'Psychologist website',
      description: 'Creation of templates in the healthcare field.',
      challenges: 'Create a template allowing the site to be customized through the integration of Markdown.',
      skills: 'Nuxt, Nuxt-content, markdown, Studio, Tailwind CSS, Responsive Design',
      link: 'https://psychologist.nuxt.space/',
    },
    {
      title: 'NuxtShip',
      description: 'Creation of an e-commerce website.',
      challenges: 'Creation of an e-commerce template with Nuxt Content.',
      skills: 'Nuxt, Nuxt-content, markdown, Tailwind CSS, Responsive Design',
      link: 'https://nuxtship.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-8">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
              <p className="mt-2 text-gray-600"><strong>Description:</strong> {project.description}</p>
              <p className="mt-2 text-gray-600"><strong>Challenges:</strong> {project.challenges}</p>
              <p className="mt-2 text-gray-600"><strong>Skills Developed:</strong> {project.skills}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
