import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">Frostwood Labs</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${scrolled ? 'text-gray-700 hover:text-blue-400' : 'text-gray-700 hover:text-blue-400'}`}
              >
                Home
              </Link>
              <Link
                to="/terms"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${scrolled ? 'text-gray-700 hover:text-blue-400' : 'text-gray-700 hover:text-blue-400'}`}
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${scrolled ? 'text-gray-700 hover:text-blue-400' : 'text-gray-700 hover:text-blue-400'}`}
              >
                Privacy
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-100 
                ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-400 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="block px-3 py-2 rounded-md text-base font-medium bg-blue-400 text-white hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;