import React from 'react';
import { CheckCircle, Award, MapPin } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  return (
    <section id="company-info" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Company Information</h2>
          <p className="text-xl text-gray-600">
            Verified business credentials and registration details for your reference.
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
            <div className="px-8 py-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold flex items-center text-gray-900 mb-8">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  Verified Business Credentials
                </h3>
                <ul className="space-y-6 text-lg">
                  <li className="flex items-start">
                    <Award className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">D-U-N-S Number</span>
                      <span className="text-gray-600">119478037</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">Registered Address</span>
                      <span className="text-gray-600">75 E 3rd St, Ste 7, Sheridan, WY 82801</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">Business Registration</span>
                      <span className="text-gray-600">Wyoming Business Registry</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;