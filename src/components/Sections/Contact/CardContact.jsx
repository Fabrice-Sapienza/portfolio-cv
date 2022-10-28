import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function CardContact() {
  return (
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
  );
}
