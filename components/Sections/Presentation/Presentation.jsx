import Link from 'next/link'
import humanDev from '../../../src/images/humanDev.gif'

export default function Presentation({ anchorScrollSpy }) {

    return (
        <section className="bg-custom" id={anchorScrollSpy}>
            <h1 className='text-center font-extrabold text-5xl mb-2 pt-32 md:text-6xl'>
                Développeur
                <span className="ml-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
                    <span className="relative text-white">Front</span>
                </span>
            </h1>
            <div className="container text-gray-800 text-center px-6 mx-auto py-10 lg:py-36 lg:text-left xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                    <div
                        className="relative block shadow-lg px-6 py-12 z-10 bg-['hsla(0, 0%, 100%, 0.55)'] backdrop-blur-[30px] mb-12 md:px-10 lg:mb-0 lg:-mr-14"
                    >
                        <h2 className="text-3xl font-bold mb-4 display-5 relative">À propos</h2>
                        <p className="text-gray-500 mb-2">Bonjour!</p>
                        <p className="text-gray-500 mb-2">Je m'appelle Fabrice, j'ai 36 ans et j'habite en France sur Marignane.</p>
                        <p className="text-gray-500 mb-2">Je suis développeur front, après avoir effectué une reconversion professionnelle en 2016.</p>
                        <p className="text-gray-500 mb-2">Je vous propose ce support afin d'exposer mes réalisations et vous permettre de mieux me connaître.</p>
                        <p className="text-gray-500 mb-2">Pour toutes demandes, n'hésitez pas à me <Link href='#contact'><a className='text-primary font-semibold'>contacter</a></Link>.</p>
                    </div>
                    <div>
                        <img src={humanDev.src} className="w-full shadow-2xl border" alt="human dev" />
                    </div>
                </div>
            </div >
        </section >
    )
}
