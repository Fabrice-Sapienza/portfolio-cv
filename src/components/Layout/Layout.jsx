import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <div className="font-OpenSans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
