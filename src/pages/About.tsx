// src/pages/About.jsx
import CardAbout from '../components/CardAbout'

const About = () => {
  return (
    <div className="container mx-auto mt-12">

      <div>
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
        <div className="flex flex-row justify-center gap-6">
        <div>
          <CardAbout
            title="I am also a contributor to the open-source Nuxt.js framework!"
            imageSrc="/assets/contributor.png" />
        </div>
        <div>
          <CardAbout
            icon="🤝"
            title="Soft skills"
            backgroundImage="https://example.com/background.jpg"
            softSkills={['Curious 🔎', 'Organized 🗂️', 'Ability to learn 🧠', 'IPA enthusiast 🍺']}
            className="my-custom-class"
          />
        </div>
        </div>
      </div>
    </div>


  )
}

export default About