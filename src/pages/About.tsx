/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, BadgeCheck, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

export const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-secondary py-20 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Built on <span className="text-brand-primary">Trust</span> & Integrity
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the story behind {COMPANY_NAME} and why thousands of North Texas homeowners trust us with their most valuable asset.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://picsum.photos/seed/roofingstory/1920/1080" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://picsum.photos/seed/roofingteam/800/1200" alt="Roofing Experts" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary rounded-3xl -z-0 opacity-20 rotate-12"></div>
               <div className="absolute top-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-l-4 border-brand-primary">
                  <p className="text-5xl font-display font-black text-brand-secondary mb-1">15+</p>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">Years of<br />Excellence</p>
               </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary mb-8">A Local Legacy of Quality</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2011, {COMPANY_NAME} started with a simple mission: to provide North Texas with honest, high-quality roofing services that stand the test of time and weather.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a family-owned locally-operated business, we don't just see ourselves as contractors—we're your neighbors. We understand the unique challenges that Texas weather poses, from extreme heat to devastating hailstorms.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                       <Shield className="text-brand-primary" size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-secondary">Premium Materials</h4>
                       <p className="text-sm text-gray-500">Only the best shingles & tools.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                       <Users className="text-brand-secondary" size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-secondary">Expert Team</h4>
                       <p className="text-sm text-gray-500">Certified master installers.</p>
                    </div>
                 </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex">
                 Contact Us to Learn More
                 <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary mb-6">Our Mission & Values</h2>
              <p className="text-gray-600">We operate under a clear set of principles to ensure every client receives the same world-class treatment.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <Heart className="text-brand-primary" />, 
                  title: 'Passion for Excellence', 
                  desc: 'We never settle for "good enough." Every shingle, every nail, and every flashing is installed with absolute precision.' 
                },
                { 
                  icon: <BadgeCheck className="text-brand-primary" />, 
                  title: 'Unwavering Integrity', 
                  desc: 'If you don\'t need a full replacement, we\'ll tell you. We value long-term trust over short-term profits.' 
                },
                { 
                  icon: <Shield className="text-brand-primary" />, 
                  title: 'Customer Protection', 
                  desc: 'We are fully licensed and insured, protecting our workers and your property from any liability.' 
                }
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-8">
                      {React.cloneElement(val.icon, { size: 32 })}
                   </div>
                   <h3 className="text-xl font-bold text-brand-secondary mb-4">{val.title}</h3>
                   <p className="text-gray-500 leading-relaxed shrink-0">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
           <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Team</span>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary mb-8">Ready to Serve You</h2>
           <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden relative group">
              <img src="https://picsum.photos/seed/rooferwork/1200/800" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                 <p className="text-xl font-medium mb-2 italic">"We treat every roof as if it were protecting our own children."</p>
                 <p className="font-bold text-brand-primary uppercase tracking-widest text-sm">— The {COMPANY_NAME} Management Team</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
