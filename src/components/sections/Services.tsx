import React from 'react';
import { Code, Palette, Rocket, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: 'Custom Web Development',
    description: 'Tailored web solutions built with modern technologies and best practices for optimal performance.'
  },
  {
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring your website looks and works perfectly on all devices.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-indigo-600" />,
    title: 'Performance Optimization',
    description: 'Speed optimization and best practices implementation for lightning-fast loading times.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}