import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function ButtonCv({ isOpen }) {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } flex justify-center items-center my-6 lg:my-0 lg:mx-3 lg:flex`}
    >
      <Link href="https://drive.google.com/file/d/1F6R25Iz7RV_FwjBb153rg4HOtO3tzeef/view?usp=sharing">
        <a
          onClick={() => setIsOpen(false)}
          target="_blank"
          className="flex items-center justify-center p-3 font-medium text-sm ounded-sm transition-all duration-200 ease-in-out border border-secondary text-secondary bg-white shadow-md hover:border-primary hover:text-primary hover:shadow-lg"
        >
          Télécharger CV <MdOutlineFileDownload className="inline text-xl" />
        </a>
      </Link>
    </div>
  );
}

ButtonCv.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
