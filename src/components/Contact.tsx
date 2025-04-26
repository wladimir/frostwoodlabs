import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send Us a Message</h3>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 mb-8">
                <p className="text-lg font-medium">Thank you for your message!</p>
                <p>We'll get back to you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-8 w-8 text-blue-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Email</p>
                  <a href="mailto:hello@frostwoodlabs.com" className="text-lg text-blue-400 hover:text-blue-500">
                    hello@frostwoodlabs.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-blue-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Phone</p>
                  <a href="tel:+13074522403" className="text-lg text-blue-400 hover:text-blue-500">
                    +1 (307) 452-2403
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-blue-400 mt-1" />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Address</p>
                  <p className="text-lg text-gray-600">
                    75 E 3rd St, Ste 7<br />
                    Sheridan, WY 82801
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <iframe 
                title="Frostwood Labs Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.3344595455716!2d-106.9582673!3d44.7992899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2f21e81f%3A0xef6193a9b3c50f4!2s75%20E%203rd%20St%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1657296291937!5m2!1sen!2sus"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;