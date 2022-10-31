import PropTypes from 'prop-types';

export default function CardAlert({ text, type, closeCard }) {
  const styleColor = (color) => {
    switch (color) {
      case 'success':
        return {
          bgColor: `bg-green-100`,
          textColor: `text-green-700`,
          btnColor: `bg-green-100 text-green-600 focus:ring-green-400 hover:bg-green-200`,
        };
      case 'danger':
        return {
          bgColor: `bg-red-100`,
          textColor: `text-red-700`,
          btnColor: `bg-red-100 text-red-600 focus:ring-red-400 hover:bg-red-200`,
        };
      case 'warning':
        return {
          bgColor: `bg-orange-100`,
          textColor: `text-orange-700`,
          btnColor: `bg-orange-100 text-orange-600 focus:ring-orange-400 hover:bg-orange-200`,
        };
      case 'info':
        return {
          bgColor: `bg-blue-100`,
          textColor: `text-blue-700`,
          btnColor: `bg-blue-100 text-blue-600 focus:ring-blue-400 hover:bg-blue-200`,
        };
      default:
        return {
          bgColor: `bg-gray-100`,
          textColor: `text-gray-700`,
          btnColor: `bg-gray-100 text-gray-600 focus:ring-gray-400 hover:bg-gray-200`,
        };
    }
  };

  return (
    <div className={`flex p-4 mb-4 rounded-lg ${styleColor(type).bgColor}`}>
      <svg
        aria-hidden="true"
        className={`flex-shrink-0 w-5 h-5 ${styleColor(type).textColor}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div className={`ml-3 text-sm font-medium ${styleColor(type).textColor}`}>{text}</div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${
          styleColor(type).btnColor
        }`}
        aria-label="Close"
        onClick={closeCard}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
        </svg>
      </button>
    </div>
  );
}

CardAlert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  closeCard: PropTypes.func.isRequired,
};
