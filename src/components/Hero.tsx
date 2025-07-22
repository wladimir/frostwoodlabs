import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="brutalist-bg section-padding pt-28 pb-12 border-b-8 border-black min-h-[60vh]">
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black mt-8 sm:mt-16 mb-8 sm:mb-12 leading-tight uppercase tracking-wide">
            Transform Your Digital Presence
          </h1>
          <div className="mt-16 mb-16 flex justify-center">
            <a
              href="#services"
              className="btn-primary text-lg sm:text-2xl w-full sm:w-auto"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;