import { useEffect, useState } from 'react';

export default function CardAlertSubmit({ text, closeCard, type }) {
  const [styleColor, setStyleColor] = useState({});

  const setColor = (color) => {
    return {
      bgColor: `bg-${color}-100 dark:bg-${color}-700`,
      textColor: `text-${color}-700 dark:text-${color}-300`,
      btnColor: `bg-${color}-100 text-${color}-500 focus:ring-${color}-400 hover:bg-${color}-200 dark:bg-${color}-700 dark:text-${color}-300 dark:hover:bg-${color}-800 dark:hover:text-${color}-100`,
    };
  };

  useEffect(() => {
    switch (type) {
      case 'success':
        setStyleColor(setColor('green'));
        break;
      case 'danger':
        setStyleColor(setColor('red'));
        break;
      case 'warning':
        setStyleColor(setColor('orange'));
        break;
      default:
        setStyleColor(setColor('gray'));
    }
  }, [type]);

  return (
    <div className={`flex p-4 mb-4  rounded-lg ${styleColor.bgColor}`} role="alert">
      <svg
        aria-hidden="true"
        className={`flex-shrink-0 w-5 h-5 ${styleColor.textColor}`}
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
      <div className={`ml-3 text-sm font-medium ${styleColor.textColor}`}>{text}</div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${styleColor.btnColor}`}
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
