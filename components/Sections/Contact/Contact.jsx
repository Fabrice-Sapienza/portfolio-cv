import Card from './Card/Card';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact({ anchorScrollSpy }) {
  return (
    <section className="bg-custom border-t-2 border-secondary py-6 lg:p-10" id={anchorScrollSpy}>
      <h2 className="text-secondary text-center font-medium text-3xl md:text-4xl">
        Rentrons en contact
      </h2>
      <p className="text-center my-6 px-2">
        Toujours disponible pour des beaux projets ou des opportunités professionnelles.
      </p>
      <div className="flex items-center justify-center mb-6">
        <Card />
      </div>
      <div className="bg-white shadow-xl mx-10 max-w-xl px-2 py-5 flex flex-col rounded-b-lg border-t-2 border-secondary md:mx-auto lg:p-7">
        <div className="flex justify-around items-start flex-col space-x-2 space-y-4 sm:space-y-0 sm:items-center sm:flex-row">
          <Link href="tel:+33627149514">
            <a className="flex items-center text-xs text-secondary">
              <FaPhoneAlt className="cursor-pointer text-secondary text-3xl mr-3" /> 06 27 14 95 14
            </a>
          </Link>
          <Link href="mailto:sapienza.fabrice@gmail.com">
            <a className="flex items-center text-xs text-secondary">
              <FaRegEnvelope className="cursor-pointer text-secondary text-3xl mr-3" />
              sapienza.fabrice@gmail.com
            </a>
          </Link>

          <Link href="https://goo.gl/maps/4zPCuTZgQ32r82ZG8">
            <a className="flex items-center text-xs text-secondary">
              <FaMapMarkerAlt className="text-secondary text-3xl mr-3" /> Marignane, 13700.
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
