import Scrollspy from 'react-scrollspy'
import { useState, useEffect, useRef } from 'react'
import logo from '../../public/assets/logo.png'
import Link from 'next/link'



export default function Navbar() {

	const [isOpen, setIsOpen] = useState(false)
	const refMenu = useRef(null);

	useEffect(() => {

		function handleClickOutside(event) {
			if (refMenu.current && !refMenu.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<>
			<header ref={refMenu} className="fixed top-0 z-20 bg-white w-full shadow-md lg:h-auto">
				<nav className={`p-2 lg:shadow-none lg:max-w-7xl lg:flex lg:justify-between lg:align-center mx-auto`}>
					<div className="flex justify-between items-center">

						<div className='flex items-center justify-center'>
							<img src={logo.src} alt="logo" />
							<div className='text-center'>
								<span className='ml-2 text-secondary text-2xl block font-thin'><span className='font-bold text-primary'>F</span>abrice <span className='font-bold text-primary'>S</span>apienza</span>
							</div>
						</div>

						<button
							className="p-2 lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							<div className="space-y-2">
								<span className={`${isOpen && "rotate-45 translate-y-2.5"} block w-7 h-0.5 bg-black transition ease transform duration-300`} />
								<span className={`${isOpen && "opacity-0"} block mx-auto w-4 h-0.5 bg-black transition ease transform duration-300`} />
								<span className={`${isOpen && "-rotate-45 -translate-y-2.5"} block w-7 h-0.5 bg-black transition ease transform duration-300`} />
							</div>
						</button>
					</div>
					<Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} offset={-500} currentClassName="is-current" className={`${!isOpen && 'hidden'} flex px-1 pt-6 flex-col lg:visible lg:flex lg:bg-transparent lg:pt-0 lg:flex-row lg:space-x-10 lg:w-auto lg:items-center lg:justify-center`}>
						<li className="py-2 text-center border-t border-gray-200 relative font-medium text-lg text-secondary hover:text-primary lg:border-0">
							<Link href="#apropos" >
								<a className="">À propos</a>
							</Link>
						</li>
						<li className="py-2 text-center border-t border-gray-200 relative lg:border-0">
							<Link href="#experience" >
								<a className="font-medium text-lg text-secondary hover:text-primary">Expérience</a>
							</Link>
						</li>
						<li className="py-2 text-center border-t border-gray-200 relative lg:border-0">
							<Link href="#competence" >
								<a className="font-medium text-lg text-secondary hover:text-primary">Compétence</a>
							</Link>
						</li>
						<li className="py-2 text-center border-t border-gray-200 relative lg:border-0">
							<Link href="#portofolio" >
								<a className="font-medium text-lg text-secondary hover:text-primary">Portofolio</a>
							</Link>
						</li>
						<li className="py-2 text-center border-t border-b border-gray-200 relative lg:border-0">
							<a
								href="#contact"
								className="font-medium text-lg text-secondary hover:text-primary"
							>Contact</a>
						</li>
					</Scrollspy>
					<div className={`${!isOpen && 'hidden'} flex justify-center items-center my-6 lg:my-0 lg:mx-3 lg:flex`} >
						<a
							href="#"
							data-mdb-ripple="true"
							data-mdb-ripple-color="#00b2df"
							className="p-3 font-medium text-center text-sm ounded-sm shadow-md transition duration-150 ease-in-out border border-primary text-primary bg-white hover:shadow-lg"
						>
							Télécharger CV <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
								className="w-3 mr-2 inline hover:animate-bounce" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path fill="currentColor"
									d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
								</path>
							</svg>
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}