
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

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-gold">
    <div className="text-gold mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
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
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
