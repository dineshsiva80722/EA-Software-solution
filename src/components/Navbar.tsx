import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 py-4 transition-colors duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'backdrop-blur-sm'
    }`}>
      <div className="container mx-auto py-1 px-4 flex justify-between items-center">
        <div className="font-bold text-white text-4xl">logo</div>
        <div className="flex gap-8">
          <a href="#home" className="text-white text-xl">Home</a>
          <a href="#about" className="text-white text-xl">About Us</a>
          <a href="#services" className="text-white text-xl">Services</a>
          <a href="#contact" className="text-white text-xl">Contact</a>
          <a href="#contacts" className="text-white text-xl">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;