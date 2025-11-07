
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="glass-card-dark text-white sticky top-0 z-50 shadow-2xl backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient-gold hover:scale-105 transition-transform duration-300">Your Company</a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition duration-300 ease-in-out">{link.label}</a>
          ))}
          <a href="#contact" className="bg-gradient-to-r from-gold to-yellow-400 text-navy font-semibold py-2 px-6 rounded-full hover:from-yellow-400 hover:to-gold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-0.5 shadow-lg btn-shimmer">
            Book Consultation
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-navy">
          <nav className="px-6 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-center hover:bg-blue-900 rounded">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block mt-2 bg-gold text-navy font-semibold py-2 px-4 rounded text-center hover:bg-yellow-400 transition duration-300">
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
