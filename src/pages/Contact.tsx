/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS, SERVICE_AREA } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data to a server
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-20 bg-brand-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Get In <span className="text-brand-primary">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Questions? Damage reports? We're here to help you secure your home.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-display font-bold text-brand-secondary mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-primary border border-orange-100 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-secondary border border-blue-100 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Office Address</p>
                    <p className="text-lg font-bold text-brand-secondary">
                      {ADDRESS}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Serving: {SERVICE_AREA}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-lg font-bold text-brand-secondary">Mon - Fri: 8am - 6pm</p>
                    <p className="text-lg font-bold text-brand-secondary">Sat: 9am - 3pm</p>
                    <p className="text-sm text-brand-primary font-bold mt-2">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl h-64 bg-gray-200 relative">
                 <div className="p-4 bg-white/50 backdrop-blur-md absolute bottom-4 left-4 right-4 rounded-xl border border-white/20">
                    <p className="text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] mb-1">Interactive Map Support</p>
                    <p className="text-[10px] text-gray-500 italic">Coming soon: Live GPS tracking for our crews</p>
                 </div>
                 <img src="https://picsum.photos/seed/map/800/600?grayscale" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="text-brand-primary animate-bounce" size={48} />
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <MessageSquare className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-brand-secondary mb-4">Message Sent!</h3>
                  <p className="text-gray-500 text-lg mb-8">Thank you for reaching out. One of our specialists will call/email you within the next 2 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-bold text-brand-secondary mb-4">Send us a Message</h2>
                  <p className="text-gray-500 mb-10">Use the form below for general inquiries or to ask a specific question. For inspections, please use our booking page.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                        <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="(555) 000-0000" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                      <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors">
                        <option>General Inquiry</option>
                        <option>Warranty Question</option>
                        <option>Job Opportunity</option>
                        <option>Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                      <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="How can we help you?"></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                      Send Your Message
                      <Send size={20} />
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 italic">By clicking send, you agree to our privacy policy and consent to receive automated messages/calls from our team.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
