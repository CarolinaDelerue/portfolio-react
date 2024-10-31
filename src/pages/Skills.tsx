import React from 'react';
import CardSkills from '../components/CardSkills';

function App() {
  // Listes de compétences
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

  const deployedSkills = [
    "Publication d'un site web - Netlify - Vercel",
  ];

  const openSourceSkills = [
    "Contributrice à l'open source - Nuxt",
  ];

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      <CardSkills title="Intégration Web" skills={webIntegrationSkills} />
      <CardSkills title="Développement React" skills={reactSkills} />
      <CardSkills title="Gestion de Projet" skills={projectSkills} />
      <CardSkills title="Développement Back-End" skills={backendSkills} />
      <CardSkills title="Optimisation et Debug" skills={optimizationSkills} />
      <CardSkills title="Développement web avec JavaScript" skills={jsSkills} />
      <CardSkills title="Publication d'un site web" skills={deployedSkills} />
      <CardSkills title="Participation à l'open source" skills={openSourceSkills} />
    </div>
  );
}

export default App;
