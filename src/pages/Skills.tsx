import CardSkills from '../components/CardSkills';
import LogoSkills from '../components/LogoSkills'

function SkillsPage() {
  const webIntegrationSkills = [
    "Integrate content according to a layout with HTML and CSS",
    "Implement a responsive interface with HTML and CSS",
  ];

  const reactSkills = [
    "Set up navigation with React Router",
    "Initialize an application with Create React App / Vite",
    "Develop UI elements with React components",
  ];

  const projectSkills = [
    "Track project progress with a project management tool",
    "Write technical specifications for a web project based on functional requirements",
    "Break down a feature into tasks to prepare for development",
    "Present the technical solution",
    "Set up a technology monitoring method",
    "Version control the project with Git and Github",
    "Set up a front-end development environment",
  ];

  const backendSkills = [
    "Implement a logical data model in accordance with regulations",
    "Implement CRUD operations securely",
    "Store data securely",
  ];

  const optimizationSkills = [
    "Optimize and debug a website with Chrome DevTools",
    "Deploy a static site online",
    "Optimize website performance",
  ];

  const jsSkills = [
    "Retrieve user data in JavaScript via forms",
    "Manipulate DOM elements with JavaScript",
    "Handle user events with JavaScript",
  ];

  const deployedSkills = ["Publish a website - Netlify - Vercel"];

  const openSourceSkills = ["Contributing to open source - Nuxt"];

  const techLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      alt: "TailwindCSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      alt: "Vue.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      alt: "Nuxt.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
      style: { filter: "invert(1) brightness(2)" }, // White logo
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
  ];

  return (
    <>
      <div className="container px-4 mx-auto mt-12">
        <h1 className="py-12 text-2xl font-bold text-center text-white md:text-6xl">
          My skills
        </h1>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardSkills
            title="Web Integration"
            description="Here is an overview of my HTML/CSS integration skills."
            softSkills={webIntegrationSkills}
            techLogos={['CSS', 'HTML', "TailwindCSS"]}
          />
          <CardSkills
            title="React Development"
            description="Skills related to development with React."
            softSkills={reactSkills}
            techLogos={['React', 'Vite']}
          />
          <CardSkills
            title="Project Management"
            description="Skills in managing and organizing projects."
            softSkills={projectSkills}
            techLogos={['Git', 'GitHub', 'Trello', 'Notion']}
          />
          <CardSkills
            title="Back-End Development"
            description="Skills related to server-side development."
            softSkills={backendSkills}
            techLogos={['React', 'Express', 'Node', 'Supabase', 'Prisma']}
          />
          <CardSkills
            title="Optimization and Debugging"
            description="Skills to optimize and debug websites."
            softSkills={optimizationSkills}
            techLogos={['Chrome', 'Safari', 'Firefox']}
          />
          <CardSkills
            title="JavaScript Development"
            description="Here are my JavaScript skills on the client-side."
            softSkills={jsSkills}
            techLogos={['JavaScript', 'TypeScript']}
          />
          <CardSkills
            title="Website Deployment"
            description="Skills in deploying websites."
            softSkills={deployedSkills}
            techLogos={['Vercel', 'Netlify']}
          />
          <CardSkills
            title="Open Source Contribution"
            description="Contributions to open source projects."
            softSkills={openSourceSkills}
            techLogos={['Nuxt']}
          />
        </div>
        <div className='flex flex-col items-center gap-12 mt-6'>
        <div>
          <p className="text-2xl font-bold text-center text-white">My technologies</p>
          <p className="text-xl font-bold text-center text-white">Here are my skills, but I am eager to learn more!</p>
        </div>
        <div>
        <LogoSkills techLogos={techLogos} />
        </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
