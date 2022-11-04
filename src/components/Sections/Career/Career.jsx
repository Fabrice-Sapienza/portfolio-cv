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
              "Peinture et revêtement de sol sur le site Airbus Helicopters au sein de l'entreprise familliale",
            ]}
          />
          <CareerItem
            date="2015"
            title="Slap Digital - Paris"
            subTitle="Stagiaire Développeur Web"
            list={['Intégration Emailing', "Développement et intégration d'outils en PHP/HTML/CSS"]}
          />
          <CareerItem
            date="2016"
            title="École 3W Academy"
            subTitle="Formation développeur intégrateur d'application web"
            list={['Diplôme RNCP niveau 3', 'JavaScript', 'PHP', 'MySQL', 'HTML / CSS']}
          />
          <CareerItem
            date="2016 - 2021"
            title="Manageo"
            subTitle="Développeur Front-End React.js"
            list={[
              "Développement d'applications en ReactJS",
              'Développement et intégration des projets sur NextJs et GatsbyJs',
              'Déploiement d’applications sur Vercel et Netlify',
              'Développement et maintenance d’outils interne en Javascript/PHP/JAVA',
              'Développement et intégration des Landing Page',
              'Participation aux chiffrages, poker planning, rétrospective de sprint',
              'Intégration Emailing',
              'Formation et encadrement de personnel interne et international',
            ]}
          />
          <CareerItem
            date="2022"
            title="École O'clock"
            subTitle="Formation avancée"
            list={[
              'ReactJS, Webpack',
              'React Redux, Redux-Thunk',
              'Context, Hooks, Reducer, Recoil',
              'React-Router',
              'Tests unitaire avec Jest, Enzyme',
              'JWT',
            ]}
          />
        </ol>
      </div>
    </section>
  );
}
