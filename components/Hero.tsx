import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center particle-bg">
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl font-bold text-gradient-gold mb-4 animate-fade-in" 
          style={{ animationFillMode: 'backwards' }}
        >
          Unlock Your Financial Potential
        </h1>
        <p 
          className="text-2xl md:text-3xl font-light mb-8 text-gray-200 tracking-wide animate-fade-in" 
          style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
        >
          Expert Accounting and Taxation Services for Individuals & Businesses
        </p>
        <p 
          className="text-lg md:text-xl mb-10 font-light text-gray-300 animate-fade-in" 
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          Simplifying complexity, so you can focus on what matters most.
        </p>
        <a 
          href="#contact" 
          className="bg-gold text-navy font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl animate-fade-in" 
          style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;