// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-2xl p-6 mx-auto font-sans leading-relaxed">
      <h1 className="mb-4 text-2xl font-bold text-center text-white">About Me</h1>
      <p className="mb-2 text-white">
        Hello! My name is Carolina, a passionate web developer with a specialization in creating high-performance and aesthetically pleasing web applications. I have primarily worked in start-ups, notably on projects with Nuxt, and more recently at Retinov, a start-up specializing in health.
      </p>
      <p className="mb-2 text-white">
        Before diving into web development, I worked as a statistics engineer in the public sector, which allowed me to develop an analytical and rigorous approach to problem-solving.
      </p>
      <p className="text-white">
        Outside of work, I'm a big fan of video games, reading, and manga (yes, it's a bit cliché, but that's me!). Always curious and open to new opportunities, feel free to reach out for a chat or collaboration!
      </p>
    </div>
  );
};

export default About;