'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className=" flex items-center justify-center" >
               <Image src='/assets/Logos/Colored_logo.png' width={150} height={48} alt='Logo' />
              </div>
              
            </motion.div>
            <p className="leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Creating timeless memories through custom photo charms. Each piece tells your unique story with elegance and precision.
            </p>
            <div className="flex space-x-3 mt-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)', color: '#FFFFFF' }}
                whileHover={{ backgroundColor: '#D4A574', color: '#000000' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)', color: '#FFFFFF' }}
                whileHover={{ backgroundColor: '#D4A574', color: '#000000' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)', color: '#FFFFFF' }}
                whileHover={{ backgroundColor: '#D4A574', color: '#000000' }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/charms" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Charms Collection</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/bracelets" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Bracelets</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/favorites" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Favorites</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Shipping Info</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Returns & Exchanges</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Size Guide</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D4A574'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#D4A574' }} />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)' }}>
                  <Mail className="w-5 h-5" strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <a href="mailto:hello@luxcharms.com" className="text-sm transition-colors hover:text-[#D4A574]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    hello@luxcharms.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)' }}>
                  <Phone className="w-5 h-5" strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <a href="tel:+1234567890" className="text-sm transition-colors hover:text-[#D4A574]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)' }}>
                  <MapPin className="w-5 h-5" strokeWidth={1.5} style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>123 Jewelry Lane, NY 10001</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t"
          style={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              © {currentYear} NomadLinks. All rights reserved. Developed by ARTL STUDIO LLC
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="transition-colors hover:text-[#D4A574]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-[#D4A574]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-[#D4A574]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;