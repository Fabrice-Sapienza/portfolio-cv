import Experience from "./Experience/Experience"

export default function Experiences({ anchorScrollSpy }) {
    return (
        <section className="text-secondary bg-primary flex justify-center items-center flex-col" id={anchorScrollSpy}>
            {/* <h2 className="text-center font-extrabold text-5xl mb-2 pt-16 md:pt-32 md:text-6xl">
                Mes
                <span className="ml-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
                    <span className="relative text-primary">Expériences</span>
                </span>
            </h2> */}
            <div className="container p-4 md:py-32">
                <ol className="border-l lg:border-l-0 lg:border-t border-secondary lg:flex lg:justify-center lg:gap-6">
                    <Experience date="2004 - 2015" title="Entreprise Sapienza" subTitle="CDI / Gérant" list={["Peinture et revêtement de sol sur le site Airbus Helicopters au sein de l'entreprise familliale."]} />
                    <Experience date="2015" title="Slap Digital - Paris" subTitle="Stagiaire Développeur Web" list={["Intégration Emailing", "Développement et intégration d'outils en PHP/HTML/CSS"]} />
                    <Experience date="2016" title="École 3W Academy" subTitle="Formation développeur intégrateur d'application web" list={["Diplôme RNCP niveau 3", "JavaScript", "PHP", "MySQL", "HTML / CSS"]} />
                    <Experience date="2016 - 2019" title="Manageo" subTitle="Développeur et Intégrateur Web" list={["Intégration Emailing", "Développement et intégration des Landing Page", "Développement et maintenance d’outils interne en Javascript/PHP/JAVA", "Formation et encadrement de personnel interne et international"]} />
                    <Experience date="2019 - 2021" title="Manageo" subTitle="Développeur React.JS" list={["Développement d'applications en ReactJS", "Développement et intégration des projets sur NextJs/GatsbyJs", "Déploiement d’applications et function serverless sur Vercel", "Participation aux chiffrages, poker planning, rétrospective de sprint"]} />
                    <Experience date="2022" title="École O'clock" subTitle="Formation" list={["ReactJS", "React-Redux / Recoil", "Hooks / Reducer", "Architecture complexe", "JWT", "Tests, TDD / BDD", "Jest, Enzyme"]} />
                </ol>
            </div>
        </section>
    )
}