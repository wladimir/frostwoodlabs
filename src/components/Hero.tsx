import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
                <span className="block">Transform Your</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto lg:mx-0">
                We build custom software solutions that help businesses scale, innovate, and succeed in the digital age.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform rotate-12 scale-150"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;