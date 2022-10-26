import Link from 'next/link'
import humanDev from '../../../public/assets/humanDev.gif'

export default function Presentation({ anchorScrollSpy }) {

    return (
        <section className="bg-custom text-secondary" id={anchorScrollSpy}>
            <h1 className='text-center font-extrabold text-5xl mb-2 pt-28 md:text-6xl word-spacing'>
                <span className='my-3'>Développeur</span>
                <span className="my-3 ml-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
                    <span className="relative text-white">Front</span>
                </span>
            </h1>
            <h2 className="text-center font-extralight text-3xl">React.js / Javascript</h2>
            <div className="container text-center px-6 mx-auto py-10 lg:py-36 lg:text-left xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                    <div
                        className="relative block shadow-lg px-6 py-12 z-10 bg-white lg:bg-inherit lg:bg-['hsla(0, 0%, 100%, 0.55)'] lg:backdrop-blur-[30px] mb-4 md:mb-12 md:px-10 lg:mb-0 lg:-mr-14"
                    >
                        <h3 className="text-3xl font-extrabold">À propos</h3>
                        <h4 className="text-xl font-bold my-3">Développeur Front-end React.js & intégrateur web</h4>
                        <p className="mb-2">Passionné de développement web, j'ai effectué une reconversion professionnelle en 2016.</p>
                        <p className="mb-2">Je suis également très sensible à l'ergonomie, la fluidité et l'expérience utilisateur (UX) d'un site web.</p>
                        <p className="mb-2"> je serais très heureux d'échanger avec vous ou bien discuter de belles opportunités professionnelles</p>
                        <p className="md-2">N'hésitez pas à me <Link href='#contact'><a className='text-primary font-semibold'>contacter</a></Link>.</p>
                    </div>
                    <div>
                        <img src={humanDev.src} className="w-full shadow-2xl border" alt="human dev" />
                    </div>
                </div>
            </div >
        </section >
    )
}
