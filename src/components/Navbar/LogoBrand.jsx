import React from 'react';
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';

export default function LogoBrand() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16">
        <Image
          src={logo}
          alt="logo Fabrice Sapienza Développeur Front React.JS"
          width={64}
          height={64}
        />
      </div>

      <div className="text-center">
        <span className="ml-2 text-2xl block font-thin">
          <span className="font-bold text-primary">F</span>abrice{' '}
          <span className="font-bold text-primary">S</span>apienza
        </span>
      </div>
    </div>
  );
}
