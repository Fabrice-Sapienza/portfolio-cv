import PropTypes from 'prop-types';

export default function CareerItem({ date, title, subTitle, list }) {
  return (
    <>
      <li className="lg:w-[20%]">
        <div className="flex flex-start items-center pt-2 lg:block lg:pt-0">
          <div className="bg-primary border w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
          <p className="text-gray-100 text-sm mt-2 font-semibold">{date}</p>
        </div>
        <div className="mt-0.5 ml-4 pb-5 lg:ml-0">
          <h3 className="font-bold text-xl mb-1.5">{title}</h3>
          <h4 className="text-gray-100 mb-3 font-bold">{subTitle}</h4>
          <ul className="text-gray-300 font-extralight">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

CareerItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
