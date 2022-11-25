import { FaCode, FaCogs, FaDesktop, FaProjectDiagram } from 'react-icons/fa';
import SkillItem from './SkillItem';

export default function Skill({ anchorScrollSpy }) {
  const iconClassName = 'text-primary text-6xl lg:text-7xl';

  return (
    <section
      id={anchorScrollSpy}
      className="text-secondary bg-white flex justify-center items-center py-16"
    >
      <div className="container p-2">
        <h2 className="text-center text-4xl font-extrabold mb-16">Mes compétences</h2>
        <div className="grid grid-cols-2 content-start gap-x-4 gap-y-6 lg:grid-cols-4">
          <SkillItem
            icon={<FaCode className={iconClassName} />}
            title="Langages et frameworks"
            text="React.Js, JavaScript, Redux, TypeScript, NextJS, GatsbyJS, API REST, Serverless, PWA, Jest, Enzyme, TailwindCSS, Bootstrap, CSS Grid, Sass, MySql, MJML, HTML, CSS"
          />
          <SkillItem
            icon={<FaCogs className={iconClassName} />}
            title="Outils et Autres"
            text="WebPack, Git, Npm / Yarn, Visual Studio Code, WebStorm, Photoshop, Linux, Windows"
          />
          <SkillItem
            icon={<FaDesktop className={iconClassName} />}
            title="Design"
            text="Développement mobile first, UX Design, Semantic-ui React, Material Mui, Tailwind Elements, respect des standards W3C, responsive design"
          />
          <SkillItem
            icon={<FaProjectDiagram className={iconClassName} />}
            title="Méthodes"
            text="Agile Scrum / Kanban, Analyse, chiffrage, maintenance corrective et évolutive, tests TDD / BDD"
          />
        </div>
      </div>
    </section>
  );
}
