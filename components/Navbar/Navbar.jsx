import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import MenuList from './MenuList/MenuList'
import { MdOutlineFileDownload } from "react-icons/md";
import logo from '../../public/assets/logo.png'




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
			<header ref={refMenu} className="fixed top-0 z-20 bg-white w-full shadow-lg lg:h-auto">
				<nav className={`p-2 lg:shadow-none lg:max-w-7xl lg:flex lg:justify-between lg:align-center mx-auto`}>
					<div className="flex justify-between items-center">

						<div className='flex items-center justify-center'>

							<img src={logo.src} alt="logo Fabrice Sapienza Développeur Front React.JS" width="64" height="64" className='w-16' />

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
					<ul className={`${!isOpen && 'hidden'} flex px-1 pt-6 flex-col lg:visible lg:flex lg:bg-transparent lg:pt-0 lg:flex-row lg:space-x-10 lg:w-auto lg:items-center lg:justify-center`}>
						<MenuList title="À propos" anchor="about" closeMenu={() => setIsOpen(false)} />
						<MenuList title="Expériences" anchor="careers" closeMenu={() => setIsOpen(false)} />
						<MenuList title="Compétences" anchor="skills" closeMenu={() => setIsOpen(false)} />
						<MenuList title="Contact" anchor="contact" closeMenu={() => setIsOpen(false)} />
					</ul>
					<div className={`${!isOpen && 'hidden'} flex justify-center items-center my-6 lg:my-0 lg:mx-3 lg:flex`} >
						<Link href="https://drive.google.com/file/d/1F6R25Iz7RV_FwjBb153rg4HOtO3tzeef/view?usp=sharing">
							<a
								onClick={() => setIsOpen(false)}
								target="_blank"
								className="flex items-center justify-center p-3 font-medium text-sm ounded-sm transition duration-150 ease-in-out border border-secondary text-secondary bg-white shadow-md hover:border-primary hover:text-primary hover:shadow-lg"
							>
								Télécharger CV <MdOutlineFileDownload className='inline text-xl' />
							</a>
						</Link>
					</div>
				</nav>
			</header>
		</>
	)
}