import { Link } from 'react-scroll';
import humanDev from '../../../../public/assets/humanDev.gif';

export default function About({ anchorScrollSpy }) {
  return (
    <section id={anchorScrollSpy} className="bg-custom">
      <h1 className="text-center font-extrabold text-5xl mb-2 pt-28 md:text-6xl word-spacing">
        <span className="my-3">Développeur</span>
        <span className="my-3 ml-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
          <span className="relative text-white">Front</span>
        </span>
      </h1>
      <h2 className="text-center font-extralight text-3xl">React.js / Javascript</h2>
      <div className="container text-center px-6 mx-auto py-10 lg:pb-36 lg:pt-24 lg:text-left xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="relative block shadow-lg px-6 py-12 z-10 bg-white lg:bg-inherit lg:bg-['hsla(0, 0%, 100%, 0.55)'] lg:backdrop-blur-[30px] mb-4 md:mb-12 md:px-10 lg:mb-0 lg:-mr-14">
            <h3 className="text-3xl font-extrabold">À propos</h3>
            <h4 className="text-xl font-bold my-3">
              Développeur Front-end React.js & intégrateur web
            </h4>
            <p className="mb-2">
              Passionné de développement web, j’ai effectué une reconversion professionnelle en
              2016.
            </p>
            <p className="mb-2">
              Étant autodidacte et très sensible à la qualité du code, l’ergonomie, la fluidité et
              l’expérience utilisateur (UX) d’un site web, je n’hésite pas à me former
              régulièrement.
            </p>
            <p className="mb-2">
              Je serais très heureux de discuter avec vous de vos projets ou de belles opportunités
              professionnelles.
            </p>
            <p className="md-2">
              N’hésitez pas à me{' '}
              <Link
                to="contact"
                href="#contact"
                smooth={true}
                offset={-150}
                duration={500}
                className="cursor-pointer text-primary font-semibold"
              >
                contacter
              </Link>
              .
            </p>
          </div>
          <div>
            <img
              src={humanDev.src}
              width="640"
              height="480"
              className="w-full shadow-2xl border"
              alt="Human developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
