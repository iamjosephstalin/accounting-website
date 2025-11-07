import React, { useState } from 'react';
import { UserIcon, MailIcon, PhoneIcon, MessageIcon, LocationIcon, ArrowRightIcon, CheckCircleIcon } from './icons/ContactIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    // Simulate an API call
    setTimeout(() => {
      setSubmissionStatus('success');
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmissionStatus('idle');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Get Expert Tax Help Today</h2>
           <p className="text-lg text-gray-600 mt-2">We're here to help you navigate your financial journey.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl flex flex-col justify-center min-h-[580px]">
            {submissionStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. We will get back to you shortly.</p>
                <button
                  onClick={handleResetForm}
                  className="bg-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-navy mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" aria-label="Your Name" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-transparent rounded-t-md focus:outline-none focus:bg-white focus:border-gold focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors duration-300" required />
                  </div>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" aria-label="Your Email" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-transparent rounded-t-md focus:outline-none focus:bg-white focus:border-gold focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors duration-300" required />
                  </div>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (Optional)" aria-label="Your Phone Number" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-transparent rounded-t-md focus:outline-none focus:bg-white focus:border-gold focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors duration-300" />
                  </div>
                  <div className="relative">
                    <MessageIcon className="absolute left-3 top-5 text-gray-400" />
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="How can we help?" aria-label="Your Message" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-transparent rounded-t-md focus:outline-none focus:bg-white focus:border-gold focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors duration-300" required></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {submissionStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRightIcon />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-8">Contact Information</h3>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full mt-1 flex-shrink-0">
                    <LocationIcon className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Office Address</h4>
                    <p className="text-gray-600">No. 68, 1st Floor, Avadi - Poonamallee High Road, Rajbai Nagar (Near Govardhanagiri), Avadi, Chennai, Tamil Nadu 600071</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full mt-1 flex-shrink-0">
                    <PhoneIcon className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Phone Number</h4>
                    <p className="text-gray-600">+91 9789801048</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full mt-1 flex-shrink-0">
                    <MailIcon className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Email Address</h4>
                    <p className="text-gray-600">contact@yuvarajtax.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg shadow-lg overflow-hidden h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.993952504936!2d80.1067447148226!3d13.10144919081297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzA1LjIiTiA4MMKwMDYnMzIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;