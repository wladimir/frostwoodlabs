import React from 'react';
import { Award, MapPin, CheckCircle } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  return (
    <section id="company-info" className="section-padding brutalist-bg border-b-8 border-black">
      <div className="container-max px-0">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 uppercase tracking-widest">Company Information</h2>
        </div>
        <div className="mt-16">
          <div className="brutalist-border brutalist-bg p-12">
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <Award className="h-8 w-8 text-black mr-3 mt-1" />
                  <div>
                    <span className="font-extrabold block text-black uppercase">D-U-N-S Number</span>
                    <span className="text-black font-bold">119478037</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-8 w-8 text-black mr-3 mt-1" />
                  <div>
                    <span className="font-extrabold block text-black uppercase">Registered Address</span>
                    <span className="text-black font-bold">75 E 3rd St, Ste 7, Sheridan, WY 82801</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-8 w-8 text-black mr-3 mt-1" />
                  <div>
                    <span className="font-extrabold block text-black uppercase">Business Registration</span>
                    <span className="text-black font-bold">Wyoming Business Registry</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;