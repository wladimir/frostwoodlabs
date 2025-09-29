import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen" style={{backgroundColor: 'var(--color-mint)'}}>
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
              <p className="text-black text-base mb-6">
                This Privacy Policy describes how Frostwood Labs, LLC ("we", "us", or "our") collects, uses, and protects information when you use our mobile applications, software solutions, and digital products.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">1. Information We Collect</h2>
              <div className="mt-2 space-y-3">
                <div>
                  <h3 className="font-extrabold text-black uppercase">Personal Information:</h3>
                  <ul className="list-disc pl-6 text-indigo-200 space-y-1">
                    <li className="text-black">Account registration information (name, email)</li>
                    <li className="text-black">Profile information and preferences</li>
                    <li className="text-black">Payment information for subscriptions and purchases</li>
                    <li className="text-black">User-generated content within our applications</li>
                    <li className="text-black">Communications and support interactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-black uppercase">Technical Information:</h3>
                  <ul className="list-disc pl-6 text-indigo-200 space-y-1">
                    <li className="text-black">Device identifiers and mobile advertising IDs</li>
                    <li className="text-black">Operating system and app version information</li>
                    <li className="text-black">App usage statistics and performance data</li>
                    <li className="text-black">Crash reports and diagnostic information</li>
                    <li className="text-black">Network and connectivity information</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">2. How We Use Your Information</h2>
              <ul className="mt-2 list-disc pl-6 text-indigo-200 space-y-1">
                <li className="text-black">Operating and maintaining our mobile applications</li>
                <li className="text-black">Personalizing your app experience and content</li>
                <li className="text-black">Processing payments for subscriptions and in-app purchases</li>
                <li className="text-black">Providing customer support and responding to inquiries</li>
                <li className="text-black">Analyzing app usage to improve functionality and performance</li>
                <li className="text-black">Sending app updates, security alerts, and administrative messages</li>
                <li className="text-black">Complying with legal obligations and enforcing our terms</li>
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
                <li className="text-black">App store platforms (Apple App Store, Google Play Store) for distribution</li>
                <li className="text-black">Payment processors for subscription and purchase processing</li>
                <li className="text-black">Analytics services to understand app usage and performance</li>
                <li className="text-black">Cloud infrastructure providers for data storage and processing</li>
                <li className="text-black">Customer support platforms for providing assistance</li>
                <li className="text-black">Legal authorities when required by law</li>
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
                For privacy-related inquiries, please contact Frostwood Labs, LLC at:
              </p>
              <ul className="mt-2 list-none text-black space-y-1">
                <li className="text-black"><strong>Business email:</strong> <a href="mailto:hello@frostwoodlabs.com" className="text-red-600 hover:underline">hello@frostwoodlabs.com</a></li>
                <li className="text-black"><strong>Business phone:</strong> <a href="tel:+13074522403" className="text-red-600 hover:underline">+1 (307) 452-2403</a></li>
                <li className="text-black"><strong>Registered Office:</strong> 75 E 3rd St, Ste 7, Sheridan, WY 82801</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;