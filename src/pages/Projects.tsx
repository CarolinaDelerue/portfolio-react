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
      title: 'Social Media App',
      description: 'Created a social media application that allows users to share posts, follow others, and engage with content.',
      challenges: 'Ensuring real-time updates and notifications was complex. I used WebSockets to implement real-time features.',
      skills: 'React Native, Firebase, WebSockets, Real-time Data',
      link: 'https://github.com/yourusername/social-media-app',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website to showcase my projects and skills.',
      challenges: 'Creating a responsive design that works on all devices was a key challenge. I used Tailwind CSS to ensure responsiveness.',
      skills: 'HTML, CSS, JavaScript, Tailwind CSS, Responsive Design',
      link: 'https://github.com/yourusername/portfolio-website',
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
