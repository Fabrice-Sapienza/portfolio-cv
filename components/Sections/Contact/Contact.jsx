import { FaLinkedin, FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link'

export default function Contact({ anchorScrollSpy }) {
    return (
        <section className="bg-secondary lg:p-10" id={anchorScrollSpy}>
            <h2 className="text-white text-center font-medium pt-10 pb-6 text-3xl md:text-4xl">
                Rentrons en contact
            </h2>
            <hr className="bloc mx-auto bg-primary border-0 h-1 w-44" />
            <p className="text-center text-white my-6 px-2">Toujours disponible pour des beaux projets ou des opportunités professionnelles.</p>
            <div className="bg-white shadow-xl mx-10 max-w-3xl px-2 py-5 flex flex-col rounded-lg md:mx-auto lg:p-7">
                <div className="flex justify-around items-start flex-col space-x-2 space-y-4 sm:space-y-0 sm:items-center sm:flex-row">
                    <Link href="tel:+33627149514">
                        <a className="flex items-center text-xs"><FaPhoneAlt className="cursor-pointer text-secondary text-3xl mr-3" /> 06 27 14 95 14</a>
                    </Link>
                    <Link href="mailto:sapienza.fabrice@gmail.com">
                        <a className="flex items-center text-xs"><FaRegEnvelope className="cursor-pointer text-secondary text-3xl mr-3" />sapienza.fabrice@gmail.com</a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/fabrice-sapienza-8934a5129'>
                        <a className="flex items-center text-xs"><FaLinkedin className="cursor-pointer text-secondary text-3xl mr-3" />Fabrice Sapienza</a>
                    </Link>
                    <Link href="https://goo.gl/maps/4zPCuTZgQ32r82ZG8">
                        <a className="flex items-center text-xs">
                            <FaMapMarkerAlt className="text-secondary text-3xl mr-3" /> Marignane, 13700.
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}