
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">About Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slide-left">
            <div className="relative group">
              <img src="https://images.pexels.com/photos/5915230/pexels-photo-5915230.jpeg" alt="Professional Team Meeting" className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-gold rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-gold rounded-br-lg"></div>
            </div>
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 space-y-6 animate-slide-right">
            <div className="glass-card p-6 rounded-2xl border border-gold/20">
              <p className="relative">
                <span className="absolute -left-4 -top-2 text-4xl text-gold/30">"</span>
                With over <span className="text-gold font-semibold">[X] years</span> of dedicated experience, <strong className="text-navy">[YOUR COMPANY NAME]</strong> has established itself as a cornerstone of financial expertise for individuals and small-to-medium businesses.
              </p>
            </div>
            
            <p className="relative pl-6 border-l-4 border-gold/30 hover:border-gold transition-colors duration-300">
              Our mission is to provide personalized, reliable, and proactive accounting solutions that empower our clients to achieve their financial goals. We believe in building long-term partnerships based on <span className="text-gold font-medium">trust, integrity,</span> and a deep understanding of your unique financial landscape.
            </p>
            
            <p className="relative pl-6 border-l-4 border-gold/30 hover:border-gold transition-colors duration-300">
              Our team of <span className="text-navy font-semibold">certified professionals</span> is committed to navigating the complexities of taxation and finance, allowing you to focus on what you do best—<span className="text-gold font-medium">growing your business.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
