import CareerItem from './CareerItem';

export default function Career({ anchorScrollSpy }) {
  return (
    <section
      id={anchorScrollSpy}
      className="bg-secondary text-primary flex flex-col justify-center items-center py-16"
    >
      <h2 className="text-center text-4xl text-white font-extrabold mb-16">Mes expériences</h2>
      <div className="container p-4">
        <ol className="border-white border-l lg:border-l-0 lg:border-t lg:flex lg:justify-center lg:gap-6">
          <CareerItem
            date="2004 - 2015"
            title="Entreprise Sapienza"
            subTitle="CDI / Gérant"
            list={[
              'Entreprise familiale BTP composée de 4 employés en sous-traitance chez Airbus Hélicopter.',
              'Gérant de 2013 à 2015.',
            ]}
          />
          <CareerItem
            date="2015"
            title="Slap Digital - Paris"
            subTitle="Stage Développeur"
            list={[
              "Analyser l'application et rédiger un compte-rendu pour permettre son amélioration UX.",
              "Développement des améliorations identifiées et d'un formulaire permettant l'upload de fichiers.",
              "Intégration en CSS en se basant sur le design de l'application.",
              'Réaliser une structure HTML et CSS en respectant une maquette du designer ainsi que les normes W3C.',
              'Intégration Emailing.',
            ]}
          />
          <CareerItem
            date="2016"
            title="École 3W Academy"
            subTitle="Formation développeur intégrateur d'application web"
            list={[
              "J'ai pu apprendre les bases et les principaux langages de programmation.",
              'JavaScript, JQuery, PHP, Symfony, MySQL, HTML, CSS, Git',
            ]}
          />
          <CareerItem
            date="2016 - 2021"
            title="Manageo"
            subTitle="Développeur Front-End ReactJs"
            list={[
              'Développement front des applications en ReactJS, utilisation des hooks personnalisés ainsi que de react context et de react-router.',
              'Étude, conception et création des sites en PWA avec les frameworks NextJs et GatsbyJs en utilisant des appels API pour la construction des pages ainsi que le développement des composants réutilisables.',
              'Déploiement et configuration des solutions en production sur Vercel et Netlify.',
              'Intégration Emailing optimisée pour la délivrabilité et le responsive en respectant les maquettes du designer.',
              'Développement des autres composants des campagnes e-mails : pop-in, landing pages, formulaires sécurisés ainsi que la gestion de la base de données.',
              'Formation et encadrement de personnel interne et international.',
            ]}
          />
          <CareerItem
            date="2022"
            title="École O'clock"
            subTitle="Formation avancée"
            list={[
              "J'ai pu me perfectionner sur la bibliothèque React ainsi qu'en apprendre d'avantage sur les bonnes pratiques.",
              'Rappels ESNext, ReactJs, Webpack.',
              'React-Redux, Redux-Thunk.',
              'Context, Hooks, Reducer.',
              'React-Router.',
              'Tests unitaires, Jest, Enzyme et le JWT.',
            ]}
          />
        </ol>
      </div>
    </section>
  );
}
