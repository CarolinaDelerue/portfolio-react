import CardSkills from '../components/CardSkills';
import BannerIcon from '../components/BannerIcon';

function App() {
  const webIntegrationSkills = [
    "Intégrer du contenu conformément à une maquette avec HTML et CSS",
    "Implémenter une interface responsive avec HTML et CSS",
  ];

  const reactSkills = [
    "Configurer la navigation avec React Router",
    "Initialiser une application avec Create React App / Vite",
    "Développer des éléments d'interface avec des composants React",
  ];

  const projectSkills = [
    "Suivre le déroulement du projet grâce à un outil de gestion de projet",
    "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
    "Découper une fonctionnalité en tâches pour préparer le développement",
    "Présenter la solution technique",
    "Mettre en place une méthode de veille technologique",
    "Versionner son projet avec Git et Github",
    "Installer un environnement de développement front-end",
  ];

  const backendSkills = [
    "Implémenter un modèle logique de données conformément à la réglementation",
    "Mettre en œuvre des opérations CRUD de manière sécurisée",
    "Stocker des données de manière sécurisée",
  ];

  const optimizationSkills = [
    "Optimiser et débugger un site avec Chrome DevTools",
    "Déployer un site statique en ligne",
    "Optimiser les performances d’un site",
  ];

  const jsSkills = [
    "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
    "Manipuler les éléments du DOM avec JavaScript",
    "Gérer les événements utilisateurs avec JavaScript",
  ];

  const deployedSkills = ["Publication d'un site web - Netlify - Vercel"];

  const openSourceSkills = ["Contributrice à l'open source - Nuxt"];

  return (
    <>
      {/* Bannière pleine page */}
      <div className="mt-16">
        <BannerIcon />
      </div>

      {/* Contenu principal */}
      <div className="container px-4 mx-auto mt-12">
        <h1 className="py-12 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl">
          My skills
        </h1>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardSkills
            title="Intégration Web"
            description="Voici un aperçu de mes compétences en intégration HTML/CSS."
            softSkills={webIntegrationSkills}
            techLogos={['CSS', 'HTML', "TailwindCSS"]}
          />
          <CardSkills
            title="Développement React"
            description="Compétences liées au développement avec React."
            softSkills={reactSkills}
            techLogos={['React', 'Vite']}
          />
          <CardSkills
            title="Gestion de Projet"
            description="Compétences en gestion et organisation de projets."
            softSkills={projectSkills}
            techLogos={['Git', 'GitHub', 'Trello', 'Notion']}
          />
          <CardSkills
            title="Développement Back-End"
            description="Compétences liées au développement serveur."
            softSkills={backendSkills}
            techLogos={['React', 'Express', 'Node', 'Supabase', 'Prisma']}
          />
          <CardSkills
            title="Optimisation et Debug"
            description="Compétences pour optimiser et déboguer des sites."
            softSkills={optimizationSkills}
            techLogos={['Chrome', 'Safari', 'Firefox']}
          />
          <CardSkills
            title="Développement JavaScript"
            description="Voici mes compétences en JavaScript côté client."
            softSkills={jsSkills}
            techLogos={['JavaScript', 'TypeScript']}
          />
          <CardSkills
            title="Publication d'un site web"
            description="Compétences dans le déploiement de sites web."
            softSkills={deployedSkills}
            techLogos={['Vercel', 'Netlify']}
          />
          <CardSkills
            title="Participation Open Source"
            description="Contributions à des projets open source."
            softSkills={openSourceSkills}
            techLogos={['Nuxt']}
          />
        </div>
      </div>
    </>
  );
}

export default App;
