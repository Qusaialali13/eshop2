'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/charms', label: 'Charms' },
    { href: '/bracelets', label: 'Bracelets' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className='h-full  flex items-center '>
            <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className=" flex items-center justify-center mt-2"
              
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image src='/assets/Logos/Black_logo.png' height={48} width={150} alt='Logo'/>
            </motion.div>
            
          </Link>
             </div>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#D4A574]"
                style={{ color: '#000000' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/favorites">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 transition-all duration-300 hover:bg-[#D4A574]"
                style={{ color: '#000000' }}
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Button>
            </Link>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 transition-all duration-300 hover:bg-[#D4A574] relative"
                style={{ color: '#000000' }}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#D4A574', color: '#FFFFFF' }}>
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#000000' }}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#D4A574]"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-lg"
            style={{ borderColor: '#D4A574' }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 hover:bg-[#D4A574] hover:text-[#D4A574]"
                    style={{ color: '#000000' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-6 border-t flex justify-center space-x-4"
                style={{ borderColor: '#D4A574' }}
              >
                <Link href="/favorites" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="w-12 h-12">
                    <Heart className="w-6 h-6" strokeWidth={1.5} style={{ color: '#D4A574' }} />
                  </Button>
                </Link>
                <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="w-12 h-12 relative">
                    <ShoppingBag className="w-6 h-6" strokeWidth={1.5} style={{ color: '#D4A574' }} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#D4A574', color: '#FFFFFF' }}>
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;