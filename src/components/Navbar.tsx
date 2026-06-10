'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e8d0b4 0%, #a48355 100%)' }}>
              <span className="text-white font-serif text-xl font-bold">L</span>
            </div>
            <span className="font-serif text-2xl font-medium" style={{ color: '#0e0a0e' }}>LuxCharms</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 font-medium hover:text-[#a48355]"
                style={{ color: '#0e0a0e' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/favorites">
              <Button variant="ghost" size="icon" style={{ color: '#0e0a0e' }} className="hover:text-[#a48355]">
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" style={{ color: '#0e0a0e' }} className="hover:text-[#a48355] relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon" style={{ color: '#0e0a0e' }} className="hover:text-[#a48355]">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#0e0a0e' }}
            className="md:hidden hover:text-[#a48355]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 transition-colors duration-200 font-medium hover:text-[#a48355]"
                  style={{ color: '#0e0a0e' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t flex space-x-4" style={{ borderColor: '#e8d0b4' }}>
                <Link href="/favorites" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon" relative>
                    <ShoppingBag className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;