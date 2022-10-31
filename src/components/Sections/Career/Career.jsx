import CareerItem from './CareerItem';

export default function Career({ anchorScrollSpy }) {
  return (
    <section
      id={anchorScrollSpy}
      className="bg-secondary text-primary flex flex-col justify-center items-center"
    >
      <div className="container p-4 md:py-32">
        <ol className="border-white border-l lg:border-l-0 lg:border-t lg:flex lg:justify-center lg:gap-6">
          <CareerItem
            date="2004 - 2015"
            title="Entreprise Sapienza"
            subTitle="CDI / Gérant"
            list={[
              "Peinture et revêtement de sol sur le site Airbus Helicopters au sein de l'entreprise familliale.",
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
            date="2016 - 2019"
            title="Manageo"
            subTitle="Développeur et Intégrateur Web"
            list={[
              'Intégration Emailing',
              'Développement et intégration des Landing Page',
              'Développement et maintenance d’outils interne en Javascript/PHP/JAVA',
              'Formation et encadrement de personnel interne et international',
            ]}
          />
          <CareerItem
            date="2019 - 2021"
            title="Manageo"
            subTitle="Développeur React.JS"
            list={[
              "Développement d'applications en ReactJS",
              'Développement et intégration des projets sur NextJs/GatsbyJs',
              'Déploiement d’applications et function serverless sur Vercel',
              'Participation aux chiffrages, poker planning, rétrospective de sprint',
            ]}
          />
          <CareerItem
            date="2022"
            title="École O'clock"
            subTitle="Formation avancée"
            list={[
              'ReactJS',
              'React-Redux / Recoil / Context',
              'Hooks / Reducer',
              'React-Router',
              'Architecture complexe',
              'JWT',
              'Tests, TDD / BDD',
              'Jest, Enzyme',
            ]}
          />
        </ol>
      </div>
    </section>
  );
}
