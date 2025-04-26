import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CompanyInfo from '../components/CompanyInfo';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <CompanyInfo />
      <Contact />
    </div>
  );
};

export default Home;