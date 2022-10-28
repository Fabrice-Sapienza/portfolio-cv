import { FaCode, FaCogs, FaDesktop, FaProjectDiagram } from 'react-icons/fa';
import SkillItem from './SkillItem';

export default function Skill({ anchorScrollSpy }) {
  const iconClassName = 'text-primary text-6xl lg:text-7xl';

  return (
    <section
      id={anchorScrollSpy}
      className="text-secondary bg-white flex justify-center items-center py-16 lg:py-24"
    >
      <div className="container p-2">
        <div className="grid grid-cols-2 content-start gap-x-4 gap-y-6 lg:grid-cols-4">
          <SkillItem
            icon={<FaCode className={iconClassName} />}
            title="Langages et frameworks"
            text="JavaScript, React.Js, Redux, Recoil, NextJS, GatsbyJS, TailwindCSS, Bootstrap, Sass, Php, Wordpress, Symphony, MySql, MJML, HTML5, CSS3."
          />
          <SkillItem
            icon={<FaCogs className={iconClassName} />}
            title="Outils et Autres"
            text="WebPack, Git, Npm, Jest, Enzyme, Visual Studio Code, WebStorm, Photoshop, Linux, Windows."
          />
          <SkillItem
            icon={<FaDesktop className={iconClassName} />}
            title="Design"
            text="Développement mobile first, UX Design, Semantic-ui React, Material Mui, respect des standards, responsive design."
          />
          <SkillItem
            icon={<FaProjectDiagram className={iconClassName} />}
            title="Méthodes"
            text="Analyse, maintenance corrective et évolutive, méthode Agile Scrum / Kanban, tests TDD / BDD."
          />
        </div>
      </div>
    </section>
  );
}
