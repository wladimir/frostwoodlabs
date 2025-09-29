import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen" style={{backgroundColor: 'var(--color-bg)'}}>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;