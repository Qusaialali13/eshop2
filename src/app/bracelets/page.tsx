'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { ShoppingBag } from 'lucide-react';

interface Bracelet {
  id: string;
  name: string;
  description: string;
  price: number;
  material: string;
  image: string;
  fullDescription: string;
}

const bracelets: Bracelet[] = [
  {
    id: 'classic-silver',
    name: 'Classic Silver Chain',
    description: 'Elegant sterling silver chain bracelet',
    price: 89,
    material: 'Sterling Silver',
    image: '🔗',
    fullDescription: 'Experience timeless elegance with our Classic Silver Chain bracelet. Crafted from premium 925 sterling silver, this piece features a sophisticated link design that transitions seamlessly from day to night. The polished finish catches the light beautifully, making it a perfect standalone piece or an ideal canvas for your favorite charms.',
  },
  {
    id: 'gold-plated',
    name: 'Gold Plated Link',
    description: 'Luxurious 18K gold plated over sterling silver',
    price: 129,
    material: '18K Gold Plated',
    image: '✨',
    fullDescription: 'Indulge in luxury with our Gold Plated Link bracelet. Featuring 18K gold plating over premium sterling silver, this bracelet radiates warmth and sophistication. Each link is meticulously crafted and polished to perfection, creating a piece that exudes elegance and complements any style.',
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold Charm',
    description: 'Romantic rose gold bracelet with charm holder',
    price: 119,
    material: '18K Rose Gold',
    image: '💫',
    fullDescription: 'Embrace romance with our Rose Gold Charm bracelet. The warm blush tones of 18K rose gold plating create a feminine and modern aesthetic. Featuring a dedicated charm holder, this bracelet allows you to personalize your jewelry collection with your most meaningful charms.',
  },
  {
    id: 'silver-bangle',
    name: 'Silver Bangle',
    description: 'Minimalist sterling silver bangle',
    price: 99,
    material: 'Sterling Silver',
    image: '⭕',
    fullDescription: 'Discover understated elegance with our Silver Bangle. This minimalist design showcases the beauty of pure 925 sterling silver in its simplest form. The smooth, polished surface offers a contemporary look that stands alone beautifully or stacks effortlessly with other bracelets.',
  },
  {
    id: 'gold-tennis',
    name: 'Gold Tennis Bracelet',
    description: 'Classic tennis bracelet in gold plating',
    price: 159,
    material: '18K Gold Plated',
    image: '💎',
    fullDescription: 'Make a statement with our Gold Tennis Bracelet. This classic design features alternating cubic zirconia stones set in 18K gold-plated links. The brilliant stones catch light from every angle, creating a dazzling effect that transforms any outfit into something extraordinary.',
  },
  {
    id: 'rose-pendant',
    name: 'Rose Gold Pendant',
    description: 'Delicate rose gold bracelet with pendant',
    price: 139,
    material: '18K Rose Gold',
    image: '🌸',
    fullDescription: 'Add a touch of elegance to your collection with our Rose Gold Pendant bracelet. The delicate chain holds an exquisite pendant that adds movement and grace to the design. Crafted in warm 18K rose gold, this piece captures the essence of modern romance and timeless beauty.',
  },
];

export default function Bracelets() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e0a0e 0%, #1a1518 50%, #251f24 100%)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ backgroundColor: '#a48355' }} />
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#e8d0b4' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e0a0e' }}>
              Bracelet Collection
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#e8d0b4' }}>
              Discover our exquisite collection of bracelets. Each piece is crafted with premium materials for timeless elegance and everyday luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bracelets Grid */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {bracelets.map((bracelet, index) => (
              <Link key={bracelet.id} href={`/bracelets/${bracelet.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#f4f1e2' }}>
                    <div className="aspect-square flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e8d0b4 0%, #f4f1e2 100%)' }}>
                      <motion.span 
                        className="text-8xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {bracelet.image}
                      </motion.span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>
                        {bracelet.name}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: '#5f5f5f' }}>
                        {bracelet.description}
                      </p>
                      <p className="text-sm font-medium mb-4" style={{ color: '#a48355' }}>
                        {bracelet.material}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-2xl font-bold" style={{ color: '#0e0a0e' }}>
                          ${bracelet.price}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                        >
                          <ShoppingBag className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}