/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  ClipboardList, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Phone,
  Clock
} from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../constants';

export const Schedule = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    address: '',
    date: '',
    time: '',
    fullName: '',
    phone: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-secondary">
           <img src="https://picsum.photos/seed/roofinspected/1920/1080" className="w-full h-full object-cover opacity-20 brightness-50" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Book Your <span className="text-brand-primary">Free</span> Inspection
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your preferred time and get an expert estimate at no cost to you.
          </p>
        </div>
      </section>

      <section className="py-24 -mt-12 relative z-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
              {/* Progress Bar */}
              <div className="h-2 w-full bg-gray-100 flex">
                 <div className="h-full bg-brand-primary transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>

              <div className="p-8 md:p-16">
                 {step === 1 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <h2 className="text-2xl font-display font-bold text-brand-secondary mb-8 flex items-center gap-3">
                         <ClipboardList className="text-brand-primary" />
                         Step 1: Choose Your Service
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {SERVICES.map(s => (
                           <button 
                              key={s.id}
                              onClick={() => {
                                setFormData({...formData, serviceType: s.title});
                                nextStep();
                              }}
                              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                                formData.serviceType === s.title ? 'border-brand-primary bg-orange-50' : 'border-gray-100 hover:border-brand-primary/50'
                              }`}
                           >
                              <h4 className="font-bold text-brand-secondary text-lg mb-1">{s.title}</h4>
                              <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
                           </button>
                         ))}
                      </div>
                   </motion.div>
                 )}

                 {step === 2 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <h2 className="text-2xl font-display font-bold text-brand-secondary mb-8 flex items-center gap-3">
                         <CalendarIcon className="text-brand-primary" />
                         Step 2: Choose Date & Details
                      </h2>
                      <div className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400">Preferred Date</label>
                               <input 
                                 type="date" 
                                 className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-primary"
                                 onChange={(e) => setFormData({...formData, date: e.target.value})}
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400">Preferred Time Block</label>
                               <select 
                                 className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-primary"
                                 onChange={(e) => setFormData({...formData, time: e.target.value})}
                               >
                                  <option>Morning (8am-12pm)</option>
                                  <option>Afternoon (1pm-5pm)</option>
                                  <option>Specific Time (Add in notes)</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400">Property Address</label>
                            <div className="relative">
                               <MapPin className="absolute left-4 top-4 text-gray-400" size={18} />
                               <input 
                                 type="text" 
                                 placeholder="Enter your street address"
                                 className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-xl outline-none focus:border-brand-primary"
                                 onChange={(e) => setFormData({...formData, address: e.target.value})}
                               />
                            </div>
                         </div>
                         <div className="pt-8 flex justify-between">
                            <button onClick={prevStep} className="font-bold text-gray-400 hover:text-brand-secondary">Back</button>
                            <button onClick={nextStep} className="btn-primary">Next Step <ChevronRight size={18} /></button>
                         </div>
                      </div>
                   </motion.div>
                 )}

                 {step === 3 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <h2 className="text-2xl font-display font-bold text-brand-secondary mb-8 flex items-center gap-3">
                         <Phone className="text-brand-primary" />
                         Final Step: Your Information
                      </h2>
                      <div className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400">Full Name</label>
                               <input 
                                 required
                                 type="text" 
                                 className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-primary"
                                 placeholder="John Doe"
                                 onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400">Cell Phone</label>
                               <input 
                                 required
                                 type="tel" 
                                 className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-primary"
                                 placeholder="(000) 000-0000"
                                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                               />
                            </div>
                         </div>
                         <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <div className="flex gap-4 items-center mb-4">
                               <CheckCircle2 className="text-brand-primary" />
                               <h4 className="font-bold text-brand-secondary">Instant Confirmation</h4>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                               By clicking "Confirm Booking", you are requesting a specialized team to visit your property at the selected time. We will call you within 15 minutes to confirm the exact arrival window. Service is priority based on current North Texas demand.
                            </p>
                         </div>
                         <div className="pt-8 flex justify-between items-center">
                            <button onClick={prevStep} className="font-bold text-gray-400 hover:text-brand-secondary">Review Info</button>
                            <button 
                              onClick={() => setStep(4)} 
                              className="btn-primary !bg-brand-secondary px-10 py-5 text-xl"
                            >
                              Confirm Free Inspection
                            </button>
                         </div>
                      </div>
                   </motion.div>
                 )}

                 {step === 4 && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                       <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                          <CheckCircle2 className="text-green-600" size={48} />
                       </div>
                       <h2 className="text-4xl font-display font-bold text-brand-secondary mb-4">Inspection Booked!</h2>
                       <p className="text-xl text-gray-500 mb-8 max-w-md mx-auto">
                          Great news, {formData.fullName}! Your request for a {formData.serviceType} has been received. Our team will contact you shortly at {formData.phone}.
                       </p>
                       <div className="flex flex-col gap-4 justify-center items-center">
                          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Need help right away?</p>
                          <a href={`tel:${PHONE_NUMBER}`} className="btn-primary">Call Support {PHONE_NUMBER}</a>
                       </div>
                    </motion.div>
                 )}
              </div>
           </div>

           {/* Trust elements under form */}
           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                 <ShieldCheck className="text-brand-primary mb-4" size={40} />
                 <h4 className="font-bold text-brand-secondary mb-2">100% Secure</h4>
                 <p className="text-xs text-gray-500">Your data is never shared with third parties.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <Clock className="text-brand-primary mb-4" size={40} />
                 <h4 className="font-bold text-brand-secondary mb-2">Punctual Pros</h4>
                 <p className="text-xs text-gray-500">We arrive on time or you get a $50 credit.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                 <Phone className="text-brand-primary mb-4" size={40} />
                 <h4 className="font-bold text-brand-secondary mb-2">Live Support</h4>
                 <p className="text-xs text-gray-500">Call anytime during business hours.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
