
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
          <div className="md:w-1/2">
            <img src="https://images.pexels.com/photos/5915230/pexels-photo-5915230.jpeg" alt="Professional Team Meeting" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 space-y-6">
            <p>
              With over 15 years of dedicated experience, <strong>YUVARAJ ACCOUNTING AND TAXATION SERVICES</strong> has established itself as a cornerstone of financial expertise for individuals and small-to-medium businesses.
            </p>
            <p>
              Our mission is to provide personalized, reliable, and proactive accounting solutions that empower our clients to achieve their financial goals. We believe in building long-term partnerships based on trust, integrity, and a deep understanding of your unique financial landscape.
            </p>
            <p>
              Our team of certified professionals is committed to navigating the complexities of taxation and finance, allowing you to focus on what you do best—growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
