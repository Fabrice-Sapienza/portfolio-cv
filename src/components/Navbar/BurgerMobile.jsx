import PropTypes from 'prop-types';

export default function BurgerMobile({ isOpen, setIsOpen }) {
  return (
    <button
      className="p-2 lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Burger"
      role="button"
    >
      <div className="space-y-2">
        <span
          className={`${
            isOpen && 'rotate-45 translate-y-2.5'
          } block w-7 h-0.5 bg-black transition ease transform duration-300`}
        />
        <span
          className={`${
            isOpen && 'opacity-0'
          } block mx-auto w-4 h-0.5 bg-black transition ease transform duration-300`}
        />
        <span
          className={`${
            isOpen && '-rotate-45 -translate-y-2.5'
          } block w-7 h-0.5 bg-black transition ease transform duration-300`}
        />
      </div>
    </button>
  );
}

BurgerMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
