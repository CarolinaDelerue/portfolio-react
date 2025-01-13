import CardAbout from '../components/CardAbout'

const About = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto md:px-8">
      <h1 className="mb-4 text-2xl font-bold text-center text-white">About Me</h1>

        <div className="grid items-center gap-6 grid-cols-16">
          {/* Image à gauche */}
          <div className="flex flex-col md:flex-row gap-x-6">
            {/* Image à gauche */}
            <div className="">
              <img
                src="src/assets/photo2022.jpg"
                alt="Carolina portrait"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Texte à droite */}
            <div className="text-white">
              <p className="mb-4">
                Hello! My name is Carolina, a passionate web developer with a specialization in creating high-performance and aesthetically pleasing web applications. I have primarily worked in start-ups, notably on projects with Nuxt, and more recently at Retinov, a start-up specializing in health.
              </p>
              <p className="mb-4">
                Before diving into web development, I worked as a statistics engineer in the public sector, which allowed me to develop an analytical and rigorous approach to problem-solving.
              </p>
              <p>
                Outside of work, I'm a big fan of video games, reading, and manga (yes, it's a bit cliché, but that's me!). Always curious and open to new opportunities, feel free to reach out for a chat or collaboration!
              </p>
            </div>
          </div>

        </div>


        {/* Flex container pour les cartes */}
        <div className="flex flex-col justify-center md:flex-row">

            <CardAbout
              title="I am also a contributor to the open-source Nuxt.js framework!"
              imageSrc="/assets/contributor.png"
            />



            <CardAbout
              icon="🤝"
              title="Soft skills"
              backgroundImage="https://example.com/background.jpg"
              softSkills={['Curious 🔎', 'Organized 🗂️', 'Ability to learn 🧠', 'IPA enthusiast 🍺']}
              className="my-custom-class"
            />

        </div>


    </div>
  )
}

export default About
