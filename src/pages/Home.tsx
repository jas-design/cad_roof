/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  Award, 
  ChevronRight,
  CheckCircle2,
  Phone,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS, FAQS, PHONE_NUMBER, COMPANY_NAME, SERVICE_AREA } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-[850px] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/modernroofing/1920/1080?blur=1" 
            alt="Roofing Professionals"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/95 via-brand-secondary/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 lg:pr-12 text-white"
            >
              <span className="tagline !text-brand-primary">Trusted US Roofing Professionals</span>
              <h1 className="text-6xl md:text-[80px] mb-8 tracking-[-0.04em] text-white">
                Reliable Roofing<br />Services You<br />Can Trust.
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                From repairs to full replacements, our licensed team ensures your home is protected with high-quality materials and 25-year warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/schedule" className="btn-primary">
                  Get a Free Estimate
                </Link>
                <Link to="/contact" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-brand-secondary">
                  Schedule Inspection
                </Link>
              </div>
            </motion.div>

            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="card-bold mb-12 lg:mb-0"
            >
               <h3 className="text-2xl font-black text-brand-secondary mb-6 leading-tight">Book Your Free Roof Inspection</h3>
               <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Service Type</label>
                    <select className="w-full p-3.5 border border-gray-200 rounded-[4px] bg-[#FAFAFA] text-sm outline-none focus:border-brand-primary">
                      <option>Roof Replacement</option>
                      <option>Leak Repair</option>
                      <option>Storm Damage</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-3.5 border border-gray-200 rounded-[4px] bg-[#FAFAFA] text-sm outline-none focus:border-brand-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input type="text" placeholder="(555) 000-0000" className="w-full p-3.5 border border-gray-200 rounded-[4px] bg-[#FAFAFA] text-sm outline-none focus:border-brand-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Preferred Date</label>
                    <input type="date" className="w-full p-3.5 border border-gray-200 rounded-[4px] bg-[#FAFAFA] text-sm outline-none focus:border-brand-primary" />
                  </div>
                  <Link to="/schedule" className="btn-primary w-full mt-4">Confirm Appointment</Link>
                  <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest mt-4">Limited availability this week</p>
               </div>
               
               <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {[{ i: '🛡️', t: 'Insured'}, { i: '🏆', t: 'Licensed'}, { i: '⭐', t: '4.9/5'}, { i: '🇺🇸', t: 'Based'}].map((b, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="text-xl">{b.i}</span>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">{b.t}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>

        {/* Services Bar */}
        <div className="hidden lg:grid absolute bottom-0 left-0 w-full h-[120px] bg-brand-secondary grid-cols-4 items-center px-10">
           {SERVICES.map((s, idx) => (
             <div key={idx} className={`px-6 border-white/10 ${idx !== 3 ? 'border-r' : ''} text-white`}>
                <div className="font-black text-sm uppercase tracking-widest text-brand-primary mb-1">{s.title}</div>
                <div className="text-[11px] text-white/70 leading-tight uppercase font-medium">{s.description}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['BBB A+ Rating', 'Licensed & Bonded', 'Platinum Preferred', '25+ Year Warranty'].map((text, idx) => (
               <div key={idx} className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                 <Award className="text-brand-primary" size={20} />
                 {text}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-secondary">Comprehensive Roofing Solutions</h2>
            </div>
            <Link to="/services" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ChevronRight size={20} />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-brand-secondary">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
                  <Link to="/services" className="btn-outline py-2 text-sm">Learn More</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-secondary mb-6">Proven Quality, Visual Results</h2>
            <p className="text-gray-600">See how we transform worn-out roofs into durable, beautiful protection for your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-3xl overflow-hidden group shadow-2xl">
               <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&q=80&w=1200" 
                    alt="Professional House Roof Replacement" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute top-6 left-6 bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-black uppercase tracking-widest shadow-lg">Featured Project</div>
               </div>
               <div className="p-8 bg-gray-50 border-t border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-black text-2xl text-brand-secondary mb-1 uppercase tracking-tight">Full Shingle Replacement</h4>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Cedar Hill Residence • North Texas</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl border border-gray-200">
                      <span className="text-brand-primary font-black text-xs uppercase tracking-widest">Quality Guaranteed</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Custom architectural shingle installation providing superior wind resistance and aesthetic appeal. Completed with high-performance underlayment and precision flashing.
                  </p>
               </div>
            </div>

            <div className="flex flex-col gap-8 justify-center">
              <div className="bg-brand-secondary p-8 md:p-12 rounded-[2rem] text-white">
                <h3 className="text-3xl font-bold mb-6 italic text-brand-primary">Our Process is Simple:</h3>
                <ul className="space-y-6">
                  {[
                    { t: 'Free Inspection', d: 'Expert evaluation of your roof condition.' },
                    { t: 'Transparent Quote', d: 'Zero hidden fees, all details upfront.' },
                    { t: 'Expert Build', d: 'Fast, professional installation by local pros.' }
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-lg">{step.t}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                   <Link to="/schedule" className="btn-primary w-full">Schedule Your Inspection</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Happy <span className="text-brand-primary italic">Homeowners</span></h2>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="text-brand-primary fill-brand-primary" size={20} />)}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="text-brand-primary fill-brand-primary" size={14} />)}
                  </div>
                  <p className="text-lg text-gray-200 mb-8 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-brand-secondary">
                        {review.name[0]}
                     </div>
                     <div>
                        <h4 className="text-white font-bold">{review.name}</h4>
                        <p className="text-brand-primary text-xs font-bold uppercase tracking-widest">{review.location}</p>
                     </div>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
              <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Got Questions?</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-secondary">Common Roofing FAQs</h2>
           </div>

           <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-6 group">
                  <button 
                   onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                   className="w-full text-left outline-none"
                  >
                    <h3 className="text-xl font-bold text-brand-secondary mb-3 flex items-center justify-between group-hover:text-brand-primary transition-colors">
                      {faq.question}
                      <ChevronRight className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-brand-primary' : ''}`} />
                    </h3>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed pr-8">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Service Area Wrapper */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
           <div className="flex items-center gap-3">
              <CheckCircle2 size={40} className="text-brand-primary" />
              <div>
                <h4 className="text-lg font-bold text-brand-secondary uppercase tracking-widest">Main Service Area</h4>
                <p className="text-gray-500">{SERVICE_AREA}</p>
              </div>
           </div>
           <div className="h-px w-24 bg-gray-200 hidden md:block"></div>
           <p className="text-sm font-medium text-gray-400 italic">"Licensed, Bonded, and Ready to Deliver Premium Results"</p>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
         <div className="absolute left-0 bottom-0 w-full h-1/2 bg-brand-secondary/10 skew-y-3 translate-y-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready for a <span className="text-brand-secondary underline underline-offset-8">Perfect</span> New Roof?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">Don't wait for the next storm. Get your free inspection today and save on your roof replacement.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/schedule" className="btn-secondary !bg-white !text-brand-secondary text-xl px-12 py-5 shadow-2xl">
                 <Calendar size={24} />
                 Book Free Inspection
               </Link>
               <a href={`tel:${PHONE_NUMBER}`} className="btn-secondary text-xl px-12 py-5 shadow-2xl">
                 <Phone size={24} />
                 Call Now: {PHONE_NUMBER}
               </a>
            </div>
            <p className="mt-8 text-white/60 font-bold uppercase tracking-widest text-sm">Limited availability this week - Book Today</p>
         </div>
      </section>
    </div>
  );
};
