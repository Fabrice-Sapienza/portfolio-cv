import { useState, useRef } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';

import MenuItem from './MenuItem';
import BurgerMobile from './BurgerMobile';
import LogoBrand from './LogoBrand';
import ButtonCv from './ButtonCv';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const clickOutSideMenu = useOnClickOutside;

  clickOutSideMenu(ref, isOpen, () => setIsOpen(false));

  return (
    <>
      <header ref={ref} className="fixed top-0 z-20 bg-white w-full shadow-lg lg:h-auto">
        <nav
          className={`p-2 lg:shadow-none lg:max-w-7xl lg:flex lg:justify-between lg:align-center mx-auto`}
        >
          <div className="flex justify-between items-center">
            <LogoBrand />
            <BurgerMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <ul
            className={`${
              !isOpen && 'hidden'
            } flex px-1 pt-6 flex-col lg:visible lg:flex lg:bg-transparent lg:pt-0 lg:flex-row lg:space-x-10 lg:w-auto lg:items-center lg:justify-center`}
          >
            <MenuItem title="À propos" anchor="about" closeMenu={() => setIsOpen(false)} />
            <MenuItem title="Expériences" anchor="career" closeMenu={() => setIsOpen(false)} />
            <MenuItem title="Compétences" anchor="skill" closeMenu={() => setIsOpen(false)} />
            <MenuItem title="Contact" anchor="contact" closeMenu={() => setIsOpen(false)} />
          </ul>
          <ButtonCv isOpen={isOpen} />
        </nav>
      </header>
    </>
  );
}
