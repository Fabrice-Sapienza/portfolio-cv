import { Link } from 'react-scroll';

export default function Menu({ title, anchor, setIsOpen }) {
    return (
        <>
            <li className="py-2 text-center border-t border-gray-200 relative lg:border-0">
                <Link
                    to={anchor}
                    className="cursor-pointer font-medium text-lg hover:text-primary"
                    // spy={true}
                    // activeClass="is-current"
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={setIsOpen}
                >
                    {title}
                </Link>
            </li>
        </>
    )
}