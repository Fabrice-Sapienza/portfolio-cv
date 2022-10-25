export default function Experience({ anchorScrollSpy }) {
    return (
        <section className="bg-primary flex justify-center items-center flex-col" id={anchorScrollSpy}>
            <h2 className='text-center font-extrabold text-5xl mb-2 pt-16 md:pt-32 md:text-6xl'>
                Mes
                <span className="ml-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
                    <span className="relative text-primary">Expériences</span>
                </span>
            </h2>
            <div className="container p-4 md:pb-14 md:pt-36">
                <ol className="border-l lg:border-l-0 lg:border-t border-secondary lg:flex lg:justify-center lg:gap-6">
                    <li className="lg:w-[10%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2004 - 2015</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">Entreprise Sapienza</h4>
                            <p className="text-gray-100 mb-3 font-extralight">Peinture et revêtement de sol sur le site Airbus Helicopters au sein de l'entreprise familliale.</p>
                        </div>
                    </li>
                    <li className="lg:w-[15%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2015</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">Slap Digital - Paris</h4>
                            <p className="text-gray-100 mb-3 font-bold">Stagiaire Développeur Web</p>
                            <ul className="text-white font-extralight">
                                <li>Intégration Emailing</li>
                                <li>Développement et intégration d'outils en PHP/HTML/CSS</li>
                            </ul>
                        </div>
                    </li>
                    <li className="lg:w-[15%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2016</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">École 3W Academy</h4>
                            <p className="text-gray-100 mb-3 font-bold">Formation développeur intégrateur d'application web</p>
                            <ul className="text-white font-extralight">
                                <li>Diplôme RNCP niveau 3</li>
                            </ul>
                        </div>
                    </li>
                    <li className="lg:w-[20%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2016 - 2019</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">Manageo - Aix</h4>
                            <p className="text-gray-100 mb-3 font-bold">Développeur et Intégrateur Web</p>
                            <ul className="text-white font-extralight">
                                <li>
                                    Intégration Emailing
                                </li>
                                <li>
                                    Développement et intégration des Landing Page
                                </li>
                                <li>
                                    Développement et maintenance d’outils interne en Javascript/PHP/JAVA
                                </li>
                                <li>
                                    Formation et encadrement de personnel interne et international
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lg:w-[20%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2019 - 2021</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">Manageo - Aix</h4>
                            <p className="text-gray-100 mb-3 font-bold">Développeur Front-End</p>
                            <ul className="text-white font-extralight">
                                <li>
                                    Développement d'applications en ReactJS
                                </li>
                                <li>
                                    Développement et intégration des projets sur NextJs/GatsbyJs
                                </li>
                                <li>
                                    Déploiement d’applications et function serverless sur Vercel
                                </li>
                                <li>
                                    Participation aux chiffrages, poker planning, rétrospective de sprint
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="lg:w-[20%]">
                        <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                            <div className="bg-secondary w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                            <p className="text-gray-100 text-sm mt-2 font-semibold">2022</p>
                        </div>
                        <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                            <h4 className="text-secondary font-bold text-xl mb-1.5">École O'clock</h4>
                            <p className="text-gray-100 mb-3 font-bold">Formation</p>
                            <ul className="text-white font-extralight">
                                <li>
                                    ReactJs
                                </li>
                                <li>
                                    React-Redux
                                </li>
                                <li>
                                    Architecture complexe
                                </li>
                                <li>
                                    JWT
                                </li>
                                <li>
                                    Tests, TDD / BDD
                                </li>
                                <li>
                                    Jest, Enzyme
                                </li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}
