'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16" style={{ backgroundColor: '#f4f1e2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e8d0b4 0%, #a48355 100%)' }}>
                <span className="text-white font-serif text-xl font-bold">L</span>
              </div>
              <span className="font-serif text-2xl font-medium" style={{ color: '#0e0a0e' }}>LuxCharms</span>
            </div>
            <p className="leading-relaxed" style={{ color: '#5f5f5f' }}>
              Creating timeless memories through custom photo charms. Each piece tells your unique story.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#a48355]"
                style={{ color: '#5f5f5f' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#a48355]"
                style={{ color: '#5f5f5f' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#a48355]"
                style={{ color: '#5f5f5f' }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg font-semibold mb-4" style={{ color: '#0e0a0e' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/charms" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Charms Collection
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/brands" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Brands
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
            <h3 className="font-serif text-lg font-semibold mb-4" style={{ color: '#0e0a0e' }}>Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  Contact Us
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
            <h3 className="font-serif text-lg font-semibold mb-4" style={{ color: '#0e0a0e' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#a48355' }} />
                <a href="mailto:hello@luxcharms.com" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  hello@luxcharms.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#a48355' }} />
                <a href="tel:+1234567890" className="transition-colors hover:text-[#a48355]" style={{ color: '#5f5f5f' }}>
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#a48355' }} />
                <span style={{ color: '#5f5f5f' }}>123 Jewelry Lane, NY 10001</span>
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
          style={{ borderColor: '#e8d0b4' }}
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