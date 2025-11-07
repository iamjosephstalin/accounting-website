
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Working with Yuvaraj Accounting has been a game-changer for our business. Their attention to detail and proactive advice on GST filing saved us both time and money. Highly recommended!",
    name: 'Priya Sharma',
    company: 'Innovate Solutions Inc.'
  },
  {
    quote: "As a new entrepreneur, navigating company formation was daunting. The team at YATS made the process incredibly smooth and transparent. Their expertise is invaluable.",
    name: 'Rohan Verma',
    company: 'Verma Tech Start-up'
  },
  {
    quote: "Their financial consulting services provided us with a clear roadmap for growth. We finally feel in control of our finances and confident about the future.",
    name: 'Anjali Desai',
    company: 'Creative Designs Co.'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-navy text-white p-8 rounded-lg shadow-xl relative">
    <svg className="w-16 h-16 text-gold opacity-20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 3a1 1 0 00-1.447-.894L.5 6.5A1 1 0 000 7.4V11a1 1 0 001 1h2a1 1 0 001-1V7.4a1 1 0 00-.553-.894L2 6.118V3a1 1 0 00-1-1H0z" clipRule="evenodd" fillRule="evenodd"></path>
      <path d="M14 3a1 1 0 00-1.447-.894L8.5 6.5A1 1 0 008 7.4V11a1 1 0 001 1h2a1 1 0 001-1V7.4a1 1 0 00-.553-.894L10 6.118V3a1 1 0 00-1-1H8z" clipRule="evenodd" fillRule="evenodd"></path>
    </svg>
    <p className="relative text-lg italic mb-6">"{testimonial.quote}"</p>
    <div className="border-t border-gold opacity-50"></div>
    <div className="mt-4">
      <p className="font-bold text-lg text-gold">{testimonial.name}</p>
      <p className="text-sm text-gray-300">{testimonial.company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
