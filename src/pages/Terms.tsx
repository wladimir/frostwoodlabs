import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen" style={{backgroundColor: 'var(--color-mint)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link to="/" className="inline-flex items-center text-black hover:text-red-600 mb-6 font-extrabold uppercase">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <div className="brutalist-border brutalist-bg p-8">
          <h1 className="text-3xl font-extrabold text-black mb-6 uppercase tracking-widest">Terms of Service</h1>
          <p className="text-black text-sm mb-6">Last updated: July 22, 2025</p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">1. Agreement to Terms</h2>
              <p className="mt-2 text-black">
                By downloading, installing, or using Frostwood Labs, LLC's mobile applications and software products, you agree to be bound by these Terms of Service and acknowledge that you have read and understood our Privacy Policy.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">2. Our Products and Services</h2>
              <p className="mt-2 text-black">
                Frostwood Labs, LLC owns and operates mobile applications and software solutions, including but not limited to:
              </p>
              <ul className="mt-2 list-disc pl-6 text-black space-y-1">
                <li>iOS mobile applications available on the App Store</li>
                <li>Android mobile applications available on Google Play Store</li>
                <li>Web-based software applications and platforms</li>
                <li>SaaS (Software as a Service) solutions</li>
                <li>Analytics and productivity tools</li>
                <li>Digital platforms and online services</li>
                <li>Associated APIs and developer tools</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">3. Intellectual Property Rights</h2>
              <p className="mt-2 text-black">
                All intellectual property rights in our applications and services belong to Frostwood Labs, LLC:
              </p>
              <ul className="mt-2 list-disc pl-6 text-black space-y-1">
                <li>All mobile applications, software, and digital products are owned by Frostwood Labs, LLC</li>
                <li>Users receive a limited, non-exclusive license to use our applications according to these terms</li>
                <li>All source code, algorithms, designs, and proprietary technology remain our exclusive property</li>
                <li>Trademarks, logos, and brand elements are protected intellectual property of Frostwood Labs, LLC</li>
                <li>Users may not reverse engineer, modify, or redistribute our applications</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">4. Payment and Subscriptions</h2>
              <p className="mt-2 text-black">
                Our applications may offer paid features, subscriptions, or in-app purchases:
              </p>
              <ul className="mt-2 list-disc pl-6 text-black space-y-1">
                <li>All payments are processed through Apple App Store, Google Play Store, or our secure payment systems</li>
                <li>Subscription fees are charged automatically according to your chosen plan</li>
                <li>Prices are quoted in your local currency or USD as specified in the app</li>
                <li>Refunds are handled according to Apple App Store and Google Play Store policies</li>
                <li>You may cancel subscriptions at any time through your device settings or our platform</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">5. User Conduct and Restrictions</h2>
              <p className="mt-2 text-black">
                When using our applications, you agree to:
              </p>
              <ul className="mt-2 list-disc pl-6 text-black space-y-1">
                <li>Use our applications only for lawful purposes</li>
                <li>Not attempt to circumvent security measures or access restrictions</li>
                <li>Not use our applications to transmit harmful or illegal content</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Comply with applicable laws and regulations in your jurisdiction</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">6. Limitation of Liability</h2>
              <p className="mt-2 text-black">
                To the maximum extent permitted by law, Frostwood Labs, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our applications and services.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">7. Account Termination</h2>
              <p className="mt-2 text-black">
                We reserve the right to suspend or terminate your access to our applications if you violate these terms. Upon termination:
              </p>
              <ul className="mt-2 list-disc pl-6 text-black space-y-1">
                <li>Your license to use our applications is immediately revoked</li>
                <li>You must cease all use of our applications and delete them from your devices</li>
                <li>Your user data will be handled according to our Privacy Policy</li>
                <li>Paid subscriptions may be cancelled according to our refund policy</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">8. Governing Law</h2>
              <p className="mt-2 text-black">
                These terms are governed by the laws of Wyoming, United States, without regard to its conflict of law principles.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">9. Changes to Terms</h2>
              <p className="mt-2 text-black">
                We reserve the right to modify these terms at any time. We will notify you of any material changes through app notifications, email, or by posting updates on our website.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-extrabold text-black uppercase">10. Contact Information</h2>
              <p className="mt-2 text-black">
                For questions about these terms, please contact Frostwood Labs, LLC at:
              </p>
              <ul className="mt-2 list-none text-black space-y-1">
                <li><strong>Business email:</strong> <a href="mailto:hello@frostwoodlabs.com" className="text-red-600 hover:underline">hello@frostwoodlabs.com</a></li>
                <li><strong>Business phone:</strong> <a href="tel:+13074522403" className="text-red-600 hover:underline">+1 (307) 452-2403</a></li>
                <li><strong>Registered Office:</strong> 75 E 3rd St, Ste 7, Sheridan, WY 82801</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;