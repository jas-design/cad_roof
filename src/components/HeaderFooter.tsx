/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative h-14 w-auto flex items-center justify-center">
       <img 
         src="logo.svg" 
         alt={COMPANY_NAME} 
         className="h-full w-auto object-contain"
         referrerPolicy="no-referrer"
       />
    </div>
  </Link>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md h-20' : 'bg-white h-28 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 h-full flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-black uppercase tracking-[0.05em] transition-colors hover:text-brand-primary ${
                location.pathname === link.path ? 'text-brand-primary' : 'text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/schedule" className="btn-secondary py-3 px-6 text-sm uppercase tracking-widest leading-none">
            Schedule Appointment
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-bold text-gray-800 hover:text-brand-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t flex flex-col gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-brand-secondary font-bold text-xl">
                  <Phone size={20} className="text-brand-primary" />
                  {PHONE_NUMBER}
                </a>
                <Link 
                  to="/schedule" 
                  className="btn-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Inspection
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile Call Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="bg-brand-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone size={24} />
        </a>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-8 h-12">
                <img 
                  src="logo.svg" 
                  alt={COMPANY_NAME} 
                  className="h-full w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
             </div>
             <p className="text-sm leading-relaxed mb-8 font-medium">
               Professional US-based roofing experts delivering high-impact solutions with 25-year warranties and licensed craftsmanship.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors italic">The Company</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors italic">Service List</Link></li>
              <li><Link to="/schedule" className="hover:text-brand-primary transition-colors italic">Book Inspection</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors italic">Get Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Operations</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Residential Build</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Emergency Repair</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Field Inspection</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Commercial Scale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Direct Access</h4>
            <ul className="space-y-6 text-sm font-black italic">
              <li className="flex items-center gap-3 text-white text-xl">
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-primary uppercase tracking-[0.2em] font-black text-[10px]">Ready 24/7 For Emergencies</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. NATIONAL ROOFING FEDERATION MEMBER.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-opacity opacity-60 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-opacity opacity-60 hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
