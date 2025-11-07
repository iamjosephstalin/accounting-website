
import React from 'react';
import type { Service } from '../types';
import { FileTextIcon, PercentIcon, CalculatorIcon, BuildingIcon, LineChartIcon, UsersIcon } from './icons/ServiceIcons';

const services: Service[] = [
  {
    icon: <FileTextIcon />,
    title: 'Income Tax Filing',
    description: 'Expert preparation and filing of individual and corporate income tax returns to maximize your refunds.'
  },
  {
    icon: <PercentIcon />,
    title: 'GST Registration & Filing',
    description: 'Seamless GST registration and timely filing of returns to ensure full compliance with regulations.'
  },
  {
    icon: <CalculatorIcon />,
    title: 'Business Accounting',
    description: 'Comprehensive bookkeeping and accounting services to maintain accurate financial records for your business.'
  },
  {
    icon: <BuildingIcon />,
    title: 'Company Formation',
    description: 'End-to-end assistance with business registration, company incorporation, and statutory compliance.'
  },
  {
    icon: <LineChartIcon />,
    title: 'Financial Consulting',
    description: 'Strategic financial planning and advisory services to help you make informed decisions for growth.'
  },
  {
    icon: <UsersIcon />,
    title: 'Payroll Management',
    description: 'Efficient and accurate payroll processing services to ensure your employees are paid on time, every time.'
  }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div 
    className="glass-card p-8 rounded-2xl shadow-2xl hover:shadow-gold/20 hover:-translate-y-4 transition-all duration-500 ease-in-out border border-white/20 hover:border-gold/30 group relative overflow-hidden animate-slide-up hover-glow"
    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Animated border */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    
    <div className="relative z-10">
      <div className="text-gold mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 floating-element">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
        {service.description}
      </p>
    </div>
    
    {/* Decorative corner elements */}
    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gold/20 group-hover:border-gold/60 transition-colors duration-300"></div>
    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-gold/20 group-hover:border-gold/60 transition-colors duration-300"></div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">Tailored financial solutions for your success.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
