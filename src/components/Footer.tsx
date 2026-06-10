'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto" style={{ backgroundColor: '#0e0a0e' }}>
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
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #a48355 0%, #e8d0b4 100%)' }}>
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight" style={{ color: '#f4f1e2' }}>LuxCharms</span>
            </motion.div>
            <p className="leading-relaxed text-sm" style={{ color: '#5f5f5f' }}>
              Creating timeless memories through custom photo charms. Each piece tells your unique story with elegance and precision.
            </p>
            <div className="flex space-x-3 mt-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)', color: '#e8d0b4' }}
                whileHover={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)', color: '#e8d0b4' }}
                whileHover={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)', color: '#e8d0b4' }}
                whileHover={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
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
            <h3 className="text-base font-semibold mb-6" style={{ color: '#f4f1e2' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/charms" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Charms Collection</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/bracelets" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Bracelets</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/favorites" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
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
            <h3 className="text-base font-semibold mb-6" style={{ color: '#f4f1e2' }}>Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Shipping Info</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Returns & Exchanges</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>Size Guide</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#5f5f5f' }}
                >
                  <ChevronRight className="w-4 h-4" style={{ color: '#a48355' }} />
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
            <h3 className="text-base font-semibold mb-6" style={{ color: '#f4f1e2' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)' }}>
                  <Mail className="w-5 h-5" strokeWidth={1.5} style={{ color: '#e8d0b4' }} />
                </div>
                <div>
                  <a href="mailto:hello@luxcharms.com" className="text-sm transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                    hello@luxcharms.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)' }}>
                  <Phone className="w-5 h-5" strokeWidth={1.5} style={{ color: '#e8d0b4' }} />
                </div>
                <div>
                  <a href="tel:+1234567890" className="text-sm transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)' }}>
                  <MapPin className="w-5 h-5" strokeWidth={1.5} style={{ color: '#e8d0b4' }} />
                </div>
                <div>
                  <span className="text-sm" style={{ color: '#5f5f5f' }}>123 Jewelry Lane, NY 10001</span>
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
          style={{ borderColor: 'rgba(232, 208, 180, 0.2)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: '#5f5f5f' }}>
              © {currentYear} LuxCharms. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
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