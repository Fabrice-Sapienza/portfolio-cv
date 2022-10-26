import { FaCode, FaCogs, FaDesktop, FaProjectDiagram } from "react-icons/fa";
import Competence from "./Competence/Competence";

export default function Competences({ anchorScrollSpy }) {

  const iconFaCode = <FaCode className="text-primary text-6xl lg:text-7xl" />
  const iconFaCogs = <FaCogs className="text-primary text-6xl lg:text-7xl" />
  const iconFaDesktop = <FaDesktop className="text-primary text-6xl lg:text-7xl" />
  const iconFaProjectDiagram = <FaProjectDiagram className="text-primary text-6xl lg:text-7xl" />

  return (
    <section className="text-secondary bg-white flex justify-center items-center py-16 lg:py-24" id={anchorScrollSpy}>
      <div className="container p-2">
        <div className="grid grid-cols-2 content-start gap-x-4 gap-y-6 lg:grid-cols-4">
          <Competence icon={iconFaCode} title='Langages et frameworks' text='JavaScript, React.Js, Redux, Recoil, TypeScript, NextJS, GatsbyJS, TailwindCSS, Bootstrap, Sass, Php, Wordpress, Symphony, MySql, MJML, HTML5, CSS3.' />
          <Competence icon={iconFaCogs} title='Outils et Autres' text='WebPack, Git, Npm, Jest, Enzyme, Visual Studio Code, WebStorm, Photoshop, Linux, Windows.' />
          <Competence icon={iconFaDesktop} title='Design' text='Développement mobile first, UX Design, Respect des standards, Responsive Design, Rétrocompatibilité (multi-plateformes, multi-navigateurs).' />
          <Competence icon={iconFaProjectDiagram} title='Méthodes' text='Analyse, maintenance corrective et évolutive, méthode Agile Scrum, tests TDD / BDD.' />
        </div>
      </div>
    </section>
  )
}
