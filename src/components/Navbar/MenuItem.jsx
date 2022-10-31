import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function MenuItem({ title, anchor, closeMenu }) {
  return (
    <>
      <li className="py-2 text-center border-t border-gray-200 relative lg:border-0">
        <Link
          to={anchor}
          href={`#${anchor}`}
          className="cursor-pointer font-medium text-lg transition-all duration-200 hover:text-primary"
          // spy={true}
          // activeClass="is-current"
          smooth={true}
          offset={-150}
          duration={500}
          onClick={closeMenu}
        >
          {title}
        </Link>
      </li>
    </>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
