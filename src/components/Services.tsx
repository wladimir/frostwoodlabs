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
        return <Code className="h-8 w-8 text-black" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-black" />;
      case 'Cloud':
        return <Cloud className="h-8 w-8 text-black" />;
      case 'Globe':
        return <Globe className="h-8 w-8 text-black" />;
      case 'Link':
        return <Link className="h-8 w-8 text-black" />;
      case 'MessageSquare':
        return <MessageSquare className="h-8 w-8 text-black" />;
      default:
        return <Code className="h-8 w-8 text-black" />;
    }
  };

  return (
    <div className="brutalist-border brutalist-bg p-8">
      <div className="w-16 h-16 flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-black uppercase tracking-widest">{title}</h3>
      <p className="text-lg text-black">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding brutalist-bg">
      <div className="container-max px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-widest">Our Services</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;