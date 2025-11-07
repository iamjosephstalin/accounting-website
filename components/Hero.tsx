import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center particle-bg overflow-hidden">
      {/* Dynamic animated background shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-gold/15 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '-6s' }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/30 rounded-full floating-element">
        <div className="absolute inset-2 border border-gold/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/20 rounded-full floating-element">
        <div className="absolute inset-2 bg-white/5 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-20 w-24 h-24 border border-gold/25 rounded-full floating-element">
        <div className="absolute inset-3 border border-gold/15 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/30 rounded-full floating-element">
        <div className="absolute inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-full"></div>
      </div>

      {/* Geometric background elements */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-gold/40 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-gold/30 rotate-45 animate-bounce-gentle"></div>
      <div className="absolute top-2/3 left-1/6 w-8 h-8 border border-white/25 rotate-45 floating-element"></div>

      {/* Elegant backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-5"></div>
      
      {/* Animated background elements behind hero card */}
      <div className="absolute inset-0 z-5">
        {/* Large rotating ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold/10 rounded-full animate-spin" style={{ animationDuration: '120s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '-100s' }}></div>
        
        {/* Pulsing gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-gold/5 via-gold/2 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-blue-500/5 via-blue-500/2 to-transparent rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Flowing wave lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 border border-gold/30 rotate-45 animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 bg-gold/20 rotate-45 animate-bounce" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 30s linear infinite'
          }}></div>
        </div>
      </div>
      
      {/* Sophisticated border frame */}
      <div className="absolute inset-10 border border-gold/20 rounded-3xl z-5 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'backwards' }}>
        <div className="absolute -top-px left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute -bottom-px left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute -left-px top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        <div className="absolute -right-px top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-gold to-transparent"></div>
      </div>

      {/* Main hero content with enhanced glassmorphic container */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-5xl mx-auto glass-hero rounded-3xl animate-scale-in -mt-16" style={{ animationFillMode: 'backwards' }}>
        {/* Elegant corner decorations */}
        <div className="absolute top-6 left-6 w-12 h-12">
          <div className="absolute inset-0 border-l-2 border-t-2 border-gold/40 rounded-tl-lg"></div>
          <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-gold/60 rounded-tl"></div>
        </div>
        <div className="absolute top-6 right-6 w-12 h-12">
          <div className="absolute inset-0 border-r-2 border-t-2 border-gold/40 rounded-tr-lg"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-gold/60 rounded-tr"></div>
        </div>
        <div className="absolute bottom-6 left-6 w-12 h-12">
          <div className="absolute inset-0 border-l-2 border-b-2 border-gold/40 rounded-bl-lg"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-gold/60 rounded-bl"></div>
        </div>
        <div className="absolute bottom-6 right-6 w-12 h-12">
          <div className="absolute inset-0 border-r-2 border-b-2 border-gold/40 rounded-br-lg"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-gold/60 rounded-br"></div>
        </div>

        {/* Luxury accent lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        {/* Luxury title with decorative elements */}
        <div className="relative mb-8">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}></div>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient-gold mb-4 animate-slide-down tracking-tight drop-shadow-2xl leading-none" 
            style={{ animationFillMode: 'backwards' }}
          >
            UNLOCK YOUR
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/95 mt-2 tracking-widest">
              FINANCIAL POTENTIAL
            </span>
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}></div>
        </div>
        
        <div className="relative mb-10">
          <p 
            className="text-lg md:text-xl lg:text-2xl font-light text-high-contrast tracking-wide animate-slide-up leading-relaxed max-w-3xl mx-auto" 
            style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
          >
            Premium Accounting & Taxation Services
            <span className="block mt-3 text-blue-200 font-medium text-base md:text-lg lg:text-xl">
              Tailored for Discerning Individuals & Enterprises
            </span>
          </p>
        </div>
        
        <div className="mb-12"></div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="group relative bg-gradient-to-r from-gold via-yellow-400 to-gold bg-size-200 text-navy font-bold py-3 px-8 rounded-full text-base hover:bg-pos-100 transition-all duration-700 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-2xl animate-scale-in btn-shimmer hover-glow" 
            style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
            <span className="relative z-10 flex items-center gap-2 tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Schedule Consultation
              <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#services" 
            className="group glass-card text-white font-semibold py-3 px-8 rounded-full text-base hover:bg-white/20 transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 animate-scale-in border-2 border-white/30 hover:border-gold/50 hover-glow backdrop-blur-md" 
            style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}
          >
            <span className="flex items-center gap-2 tracking-wide">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Explore Services
              <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>

      </div>

      {/* Additional floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gold/40 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-gold/60 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
    </section>
  );
};

export default Hero;