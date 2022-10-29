import { FaLinkedin, FaGithub, FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Portrait from '../../../../public/assets/portrait.jpg';

export default function CardProfile() {
  return (
    <div className="bg-white block rounded-lg shadow-lg">
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img
          src={Portrait.src}
          alt="Photo Fabrice Sapienza Développeur Front React JS"
          width="250"
          height="250"
          className="w-full rounded-t-lg"
        />
        <svg
          className="absolute left-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="fill-white"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="p-5 pt-1">
        <h3 className="text-lg font-bold mb-1">Fabrice Sapienza</h3>
        <p className="text-sm text-gray-500 mb-3">Développeur Front-end</p>
        <ul className="list-inside flex flex-col mx-auto justify-start space-y-2">
          <li>
            <Link href="tel:+33627149514">
              <a className="flex items-center text-xs text-secondary">
                <FaPhoneAlt className="cursor-pointer text-secondary text-xl transition-all duration-200 hover:text-primary  mr-2" />{' '}
                06 27 14 95 14
              </a>
            </Link>
          </li>
          <li>
            <Link href="mailto:sapienza.fabrice@gmail.com">
              <a className="flex items-center text-xs text-secondary">
                <FaRegEnvelope className="cursor-pointer text-secondary text-xl transition-all duration-200 hover:text-primary  mr-2" />
                sapienza.fabrice@gmail.com
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://goo.gl/maps/4zPCuTZgQ32r82ZG8">
              <a className="flex items-center text-xs text-secondary">
                <FaMapMarkerAlt className="text-secondary text-xl transition-all duration-200 hover:text-primary mr-2" />{' '}
                Marignane, 13700.
              </a>
            </Link>
          </li>
        </ul>
        <ul className="list-inside flex justify-start mt-3 mx-auto">
          <li>
            <Link href="https://www.linkedin.com/in/fabrice-sapienza-8934a5129">
              <a aria-label="Page Linkedin Fabrice Sapienza">
                <FaLinkedin className="cursor-pointer text-2xl text-secondary transition-all duration-200 hover:text-primary mr-2" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Fabrice-Sapienza">
              <a aria-label="Page GitHub Fabrice Sapienza">
                <FaGithub className="cursor-pointer text-2xl text-secondary transition-all duration-200 hover:text-primary" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
