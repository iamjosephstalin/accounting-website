
import React from 'react';

const Footer: React.FC = () => {
  const socialIcons = (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.013c0 4.953 3.523 9.09 8.207 9.865v-6.927h-2.47V12.01h2.47V9.782c0-2.424 1.42-3.774 3.646-3.774 1.054 0 2.158.186 2.158.186v2.54h-1.25c-1.21 0-1.56.73-1.56 1.505v1.765h2.82l-.44 2.89h-2.38v6.927A10.005 10.005 0 0022 12.013C22 6.477 17.523 2 12 2z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gold mb-2">Yuvaraj</h3>
            <p className="text-gray-400">Your trusted partner in financial growth.</p>
            <div className="mt-4">{socialIcons}</div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}><a href={link.href} className="text-gray-400 hover:text-gold transition">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Income Tax Filing</li>
              <li>GST Registration</li>
              <li>Business Accounting</li>
              <li>Financial Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>No. 68, 1st Floor, Avadi, Chennai</li>
              <li>contact@yuvarajtax.com</li>
              <li>+91 9789801048</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>Copyright © 2025 Yuvaraj Accounting and Taxation Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
