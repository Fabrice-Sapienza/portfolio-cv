import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white text-secondary py-2">
            <div className="flex justify-center items-center my-2" >
                <Link href='https://www.linkedin.com/in/fabrice-sapienza-8934a5129'>
                    <a>
                        <FaLinkedin className="cursor-pointer text-3xl hover:text-primary mr-3" />
                    </a>
                </Link>
                <Link href='https://github.com/Fabrice-Sapienza'>
                    <a>
                        <FaGithub className="cursor-pointer text-3xl hover:text-primary mr-3" />
                    </a>
                </Link>
            </div>
            <p className="text-center text-xs font-normale">© 2022 Fabrice Sapienza. Tous droits réservés.</p>
        </footer>
    )
}
