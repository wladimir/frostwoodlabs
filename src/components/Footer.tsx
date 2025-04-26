import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Frostwood Labs</h3>
            <p className="text-gray-400 mb-4">
              Custom software development and digital solutions for businesses.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong>Email:</strong> <a href="mailto:hello@frostwoodlabs.com" className="hover:underline text-blue-300">hello@frostwoodlabs.com</a>
              </p>
              <p className="text-gray-400">
                <strong>Phone:</strong> <a href="tel:+13074522403" className="hover:underline text-blue-300">+1 (307) 452-2403</a>
              </p>
              <p className="text-gray-400">
                <strong>Address:</strong> <span role="img" aria-label="pin">📍</span> 75 E 3rd St, Ste 7, Sheridan, WY 82801
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <p className="text-gray-400 mb-4">
              Frostwood Labs LLC is a registered business entity in Wyoming.
            </p>
            <p className="text-gray-400 mb-4">
              <a 
                href="https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=196038014227126004245172030113091158227120026048" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                View our Wyoming business registration
              </a>
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Frostwood Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;