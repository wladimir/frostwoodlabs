import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold">Frostwood Labs</Link>
            <p className="mt-2 text-gray-300 text-sm">
              Specializing in custom software development, helping businesses transform their digital presence with innovative solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/#services" className="text-gray-300 hover:text-blue-400 text-sm">Custom Software</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-blue-400 text-sm">Mobile Apps</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-blue-400 text-sm">Cloud Solutions</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-blue-400 text-sm">Web Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-blue-400 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 text-sm">Privacy Policy</Link></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-blue-400 text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-gray-300 text-sm">📧</span>
                <a href="mailto:hello@frostwoodlabs.com" className="ml-2 text-gray-300 hover:text-white text-sm">hello@frostwoodlabs.com</a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 text-sm">📞</span>
                <a href="tel:+13074522403" className="ml-2 text-gray-300 hover:text-white text-sm">+1 (307) 452-2403</a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 text-sm">📍</span>
                <span className="ml-2 text-gray-300 text-sm">75 E 3rd St, Ste 7, Sheridan, WY 82801</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-sm">© 2025 Frostwood Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;