import PropTypes from 'prop-types';

export default function Button({ children, ...props }) {
  return (
    <button
      aria-label="button"
      role="button"
      className="p-3 font-medium text-sm ounded-sm transition-all duration-200 ease-in-out border border-secondary text-secondary bg-white shadow-md hover:border-primary hover:text-primary hover:shadow-lg"
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  props: PropTypes.any,
};

Button.defaultProps = {
  children: '',
};
