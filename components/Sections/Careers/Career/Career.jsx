
import PropTypes from 'prop-types';

export default function Career({ date, title, subTitle, list }) {
    return (
        <>
            <li className="lg:w-[20%]">
                <div className="flex lg:block flex-start items-center pt-2 lg:pt-0">
                    <div className="bg-white w-2 h-2 rounded-full -ml-1 lg:ml-0 mr-3 lg:mr-0 lg:-mt-1"></div>
                    <p className="text-gray-100 text-sm mt-2 font-semibold">{date}</p>
                </div>
                <div className="mt-0.5 ml-4 lg:ml-0 pb-5">
                    <h4 className="font-bold text-xl mb-1.5">{title}</h4>
                    <h5 className="text-gray-100 mb-3 font-bold">{subTitle}</h5>
                    <ul className="text-white font-extralight">
                        {list.map((item, index) =>
                        (
                            <li key={index}>{item}</li>
                        )

                        )}
                    </ul>
                </div>
            </li>
        </>
    )
}

Career.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
}