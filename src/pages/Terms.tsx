import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link to="/" className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 text-sm mb-6">Last updated: April 26, 2025</p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Agreement to Terms</h2>
              <p className="mt-2 text-gray-600">
                By accessing and using Frostwood Labs' services, you agree to be bound by these Terms of Service and acknowledge that you have read and understood our Privacy Policy.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. Description of Services</h2>
              <p className="mt-2 text-gray-600">
                Frostwood Labs provides digital product development and software engineering services, including but not limited to:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Custom software development</li>
                <li>Mobile application development</li>
                <li>Web development</li>
                <li>Cloud solutions</li>
                <li>Technical consulting</li>
                <li>API development and integration</li>
                <li>Software maintenance and support</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. Intellectual Property Rights</h2>
              <p className="mt-2 text-gray-600">
                Unless explicitly agreed upon in writing:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>Client retains ownership of their pre-existing intellectual property</li>
                <li>Upon full payment, clients receive ownership rights to the custom software developed specifically for them</li>
                <li>Frostwood Labs retains ownership of any pre-existing code, frameworks, or tools used in development</li>
                <li>Any general-purpose modules or tools developed during the project remain the property of Frostwood Labs</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Payment Terms</h2>
              <p className="mt-2 text-gray-600">
                Our payment terms include:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>All fees are quoted in USD unless otherwise specified</li>
                <li>Payment schedules are defined in individual service agreements</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept major credit cards, bank transfers, and other specified payment methods</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Data Protection and Security</h2>
              <p className="mt-2 text-gray-600">
                We implement industry-standard security measures to protect your data. For details about data handling, please refer to our <Link to="/privacy" className="text-blue-700 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
              <p className="mt-2 text-gray-600">
                To the maximum extent permitted by law, Frostwood Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">7. Term and Termination</h2>
              <p className="mt-2 text-gray-600">
                Either party may terminate the service agreement with written notice as specified in the individual service agreement. Upon termination:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
                <li>All outstanding payments become immediately due</li>
                <li>Access to services may be immediately revoked</li>
                <li>Client data will be handled according to our data retention policies</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">8. Governing Law</h2>
              <p className="mt-2 text-gray-600">
                These terms are governed by the laws of Wyoming, United States, without regard to its conflict of law principles.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">9. Changes to Terms</h2>
              <p className="mt-2 text-gray-600">
                We reserve the right to modify these terms at any time. We will notify you of any material changes via email or through our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900">10. Contact Information</h2>
              <p className="mt-2 text-gray-600">
                For questions about these terms, please contact us at:
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

export default Terms;