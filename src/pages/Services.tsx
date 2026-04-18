/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Wrench, 
  Hammer, 
  Search, 
  CloudLightning,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../constants';

const icons = {
  'roof-repair': <Wrench />,
  'roof-replacement': <Hammer />,
  'inspection': <Search />,
  'storm-damage': <CloudLightning />
};

export const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display font-bold text-brand-secondary mb-6"
          >
            Expert <span className="text-brand-primary">Roofing</span> Services
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to complete roof transformations, we provide the highest standard of care for your home.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
              >
                <div className="w-full md:w-1/2">
                   <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                     <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-secondary/10"></div>
                   </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-primary border border-orange-100">
                      {React.cloneElement(icons[service.id as keyof typeof icons] as React.ReactElement, { size: 24 })}
                    </div>
                    <span className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em]">Service {idx + 1}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0" />
                        <span className="font-semibold text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/schedule" className="btn-primary">
                      Request a Quote
                      <ArrowRight />
                    </Link>
                    <a href={`tel:${PHONE_NUMBER}`} className="btn-outline">
                       Call to Discuss
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-secondary text-white text-center">
        <div className="container mx-auto px-4">
           <Zap className="text-brand-primary mx-auto mb-8 animate-pulse" size={48} />
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Need Help Deciding?</h2>
           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Our roofing specialists are standing by to answer your questions and provide a free, no-obligation consultation.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href={`tel:${PHONE_NUMBER}`} className="btn-primary text-xl px-12 py-5 !bg-brand-primary !text-white">
                Call {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="btn-outline !text-white !border-white text-xl px-12 py-5">
                Send Message
              </Link>
           </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { t: '50-Year Warranty', d: 'We only use materials that come with industry-leading manufacturer warranties.' },
                { t: 'Satisfaction Guaranteed', d: "If it's not done right, it's not finished. We stand behind our work 100%." },
                { t: 'Fast Installation', d: 'Most projects are completed within 48 hours of starting the work.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                   <ShieldCheck className="text-brand-primary shrink-0" size={40} />
                   <div>
                      <h4 className="font-bold text-xl text-brand-secondary mb-2">{item.t}</h4>
                      <p className="text-gray-500">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
