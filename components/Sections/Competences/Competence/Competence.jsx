import PropTypes from 'prop-types';

export default function Competence({ icon, title, text }) {

    return (
        <div className="flex flex-col justify-start items-center text-center">
            {icon}
            <h3 className="font-bold text-lg my-2">{title}</h3>
            <p className="font-medium text-sm">{text}</p>
        </div>
    )
}

Competence.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}