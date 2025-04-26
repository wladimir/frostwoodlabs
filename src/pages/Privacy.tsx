import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link to="/" className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-sm mb-6">Last updated: April 26, 2025</p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
              <div className="mt-2 space-y-3">
                <div>
                  <h3 className="font-medium text-gray-800">Personal Information:</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Name and contact details</li>
                    <li>Business information</li>
                    <li>Payment information</li>
                    <li>Project requirements and specifications</li>
                    <li>Communications with our team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Technical Information:</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>IP addresses</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Providing and improving our services</li>
                <li>Communicating about projects and services</li>
                <li>Processing payments</li>
                <li>Complying with legal obligations</li>
                <li>Analyzing and improving our website and services</li>
                <li>Sending relevant marketing communications (with consent)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. Legal Basis for Processing</h2>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Contract performance</li>
                <li>Legal obligations</li>
                <li>Legitimate business interests</li>
                <li>Consent (where applicable)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Data Sharing and Third Parties</h2>
              <p className="mt-2 text-gray-600">
                We may share your data with:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Service providers and subcontractors</li>
                <li>Payment processors</li>
                <li>Analytics providers</li>
                <li>Legal authorities when required</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
              <p className="mt-2 text-gray-600">
                We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Encryption in transit and at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
              <p className="mt-2 text-gray-600">
                You have the right to:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">7. Data Retention</h2>
              <p className="mt-2 text-gray-600">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted or anonymized.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">8. International Data Transfers</h2>
              <p className="mt-2 text-gray-600">
                Your data may be transferred to and processed in countries outside your home country. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">9. Cookies and Tracking</h2>
              <p className="mt-2 text-gray-600">
                We use cookies and similar technologies to improve user experience and analyze website usage. You can control cookie preferences through your browser settings.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">10. Children's Privacy</h2>
              <p className="mt-2 text-gray-600">
                Our services are not directed to individuals under 13. We do not knowingly collect personal information from children.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">11. Changes to This Policy</h2>
              <p className="mt-2 text-gray-600">
                We may update this policy periodically. We will notify you of any material changes through our website or email.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">12. Contact Us</h2>
              <p className="mt-2 text-gray-600">
                For privacy-related inquiries, please contact us at:
              </p>
              <ul className="mt-2 list-none text-gray-600 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:hello@frostwoodlabs.com" className="text-blue-700 hover:underline">hello@frostwoodlabs.com</a></li>
                <li><strong>Address:</strong> 75 E 3rd St, Ste 7, Sheridan, WY 82801</li>
                <li><strong>Phone:</strong> <a href="tel:+13074522403" className="text-blue-700 hover:underline">+1 (307) 452-2403</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;