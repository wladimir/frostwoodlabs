import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 brutalist-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link to="/" className="inline-flex items-center text-black hover:text-red-600 mb-6 font-extrabold uppercase">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <div className="brutalist-border brutalist-bg p-8">
          <h1 className="text-3xl font-extrabold text-black mb-6 uppercase tracking-widest">Privacy Policy</h1>
          <p className="text-black text-sm mb-6">Last updated: July 22, 2025</p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">1. Information We Collect</h2>
              <div className="mt-2 space-y-3">
                <div>
                  <h3 className="font-extrabold text-black uppercase">Personal Information:</h3>
                  <ul className="list-disc pl-6 text-indigo-200 space-y-1">
                    <li className="text-black">Name and contact details</li>
                    <li className="text-black">Business information</li>
                    <li className="text-black">Payment information</li>
                    <li className="text-black">Project requirements and specifications</li>
                    <li className="text-black">Communications with our team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-black uppercase">Technical Information:</h3>
                  <ul className="list-disc pl-6 text-indigo-200 space-y-1">
                    <li className="text-black">IP addresses</li>
                    <li className="text-black">Browser type and version</li>
                    <li className="text-black">Device information</li>
                    <li className="text-black">Usage data and analytics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">2. How We Use Your Information</h2>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Providing and improving our services</li>
                <li className="text-black">Communicating about projects and services</li>
                <li className="text-black">Processing payments</li>
                <li className="text-black">Complying with legal obligations</li>
                <li className="text-black">Analyzing and improving our website and services</li>
                <li className="text-black">Sending relevant marketing communications (with consent)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">3. Legal Basis for Processing</h2>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Contract performance</li>
                <li className="text-black">Legal obligations</li>
                <li className="text-black">Legitimate business interests</li>
                <li className="text-black">Consent (where applicable)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">4. Data Sharing and Third Parties</h2>
              <p className="mt-2 text-black">
                We may share your data with:
              </p>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Service providers and subcontractors</li>
                <li className="text-black">Payment processors</li>
                <li className="text-black">Analytics providers</li>
                <li className="text-black">Legal authorities when required</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">5. Data Security</h2>
              <p className="mt-2 text-black">
                We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Encryption in transit and at rest</li>
                <li className="text-black">Access controls and authentication</li>
                <li className="text-black">Regular security assessments</li>
                <li className="text-black">Employee training on data protection</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">6. Your Rights</h2>
              <p className="mt-2 text-black">
                You have the right to:
              </p>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Access your personal data</li>
                <li className="text-black">Correct inaccurate data</li>
                <li className="text-black">Request data deletion</li>
                <li className="text-black">Object to data processing</li>
                <li className="text-black">Request data portability</li>
                <li className="text-black">Withdraw consent</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">7. Data Retention</h2>
              <p className="mt-2 text-black">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted or anonymized.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">8. International Data Transfers</h2>
              <p className="mt-2 text-black">
                Your data may be transferred to and processed in countries outside your home country. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">9. Cookies and Tracking</h2>
              <p className="mt-2 text-black">
                We use cookies and similar technologies to improve user experience and analyze website usage. You can control cookie preferences through your browser settings.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">10. Children's Privacy</h2>
              <p className="mt-2 text-black">
                Our services are not directed to individuals under 13. We do not knowingly collect personal information from children.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">11. Changes to This Policy</h2>
              <p className="mt-2 text-black">
                We may update this policy periodically. We will notify you of any material changes through our website or email.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">12. Contact Us</h2>
              <p className="mt-2 text-black">
                For privacy-related inquiries, please contact us at:
              </p>
              <ul className="mt-2 list-none text-black space-y-1">
                <li className="text-black"><strong>Email:</strong> <a href="mailto:hello@frostwoodlabs.com" className="text-red-600 hover:underline">hello@frostwoodlabs.com</a></li>
                <li className="text-black"><strong>Address:</strong> 75 E 3rd St, Ste 7, Sheridan, WY 82801</li>
                <li className="text-black"><strong>Phone:</strong> <a href="tel:+13074522403" className="text-red-600 hover:underline">+1 (307) 452-2403</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;