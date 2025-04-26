import React from 'react';
import { Code, Smartphone, Cloud, Globe, Link, MessageSquare } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'Custom Software',
    description: 'Tailored solutions designed to meet your specific business needs',
    icon: 'Code',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile application development',
    icon: 'Smartphone',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    icon: 'Cloud',
  },
  {
    title: 'Web Development',
    description: 'Modern web applications with responsive design',
    icon: 'Globe',
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs',
    icon: 'Link',
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on technology strategy and implementation',
    icon: 'MessageSquare',
  },
];

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Code':
        return <Code className="h-8 w-8 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-blue-600" />;
      case 'Cloud':
        return <Cloud className="h-8 w-8 text-blue-600" />;
      case 'Globe':
        return <Globe className="h-8 w-8 text-blue-600" />;
      case 'Link':
        return <Link className="h-8 w-8 text-blue-600" />;
      case 'MessageSquare':
        return <MessageSquare className="h-8 w-8 text-blue-600" />;
      default:
        return <Code className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-blue-100">
      <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer comprehensive software development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;