'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface Bracelet {
  id: string;
  name: string;
  description: string;
  price: number;
  material: string;
  image: string;
}

const bracelets: Bracelet[] = [
  {
    id: 'classic-silver',
    name: 'Classic Silver Chain',
    description: 'Elegant sterling silver chain bracelet, perfect for everyday wear',
    price: 89,
    material: 'Sterling Silver',
    image: '🔗',
  },
  {
    id: 'gold-plated',
    name: 'Gold Plated Link',
    description: 'Luxurious 18K gold plated over sterling silver',
    price: 129,
    material: '18K Gold Plated',
    image: '✨',
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold Charm',
    description: 'Romantic rose gold bracelet with charm holder',
    price: 119,
    material: '18K Rose Gold',
    image: '💫',
  },
  {
    id: 'silver-bangle',
    name: 'Silver Bangle',
    description: 'Minimalist sterling silver bangle, timeless design',
    price: 99,
    material: 'Sterling Silver',
    image: '⭕',
  },
  {
    id: 'gold-tennis',
    name: 'Gold Tennis Bracelet',
    description: 'Classic tennis bracelet in gold plating with cubic zirconia',
    price: 159,
    material: '18K Gold Plated',
    image: '💎',
  },
  {
    id: 'rose-pendant',
    name: 'Rose Gold Pendant',
    description: 'Delicate rose gold bracelet with elegant pendant',
    price: 139,
    material: '18K Rose Gold',
    image: '🌸',
  },
];

export default function Bracelets() {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedBracelet, setSelectedBracelet] = useState<Bracelet | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sizes = ['16', '17', '18'];

  const handleAddToCart = (bracelet: Bracelet) => {
    if (!selectedSize || selectedBracelet?.id !== bracelet.id) {
      setSelectedBracelet(bracelet);
      if (!selectedSize) {
        alert('Please select a size');
        return;
      }
    }

    addToCart(
      {
        id: `${bracelet.id}-size${selectedSize}`,
        shape: 'circle' as any,
        material: bracelet.material.toLowerCase() as any,
        size: 'medium',
        imageData: '',
        imageSettings: { scale: 1, rotation: 0, x: 0, y: 0 },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      1
    );

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0e0a0e 0%, #1a1518 50%, #251f24 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#f4f1e2' }}>
              Bracelet Collection
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#5f5f5f' }}>
              Discover our exquisite collection of bracelets. Each piece is crafted with premium materials for timeless elegance and everyday luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-12" style={{ backgroundColor: '#f4f1e2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              Select Your Size (cm)
            </h2>
            <div className="flex justify-center gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-16 h-16 rounded-xl font-serif text-xl font-semibold transition-all duration-300 ${
                    selectedSize === size
                      ? 'scale-110 shadow-lg'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedSize === size ? '#a48355' : '#FFFFFF',
                    color: selectedSize === size ? '#FFFFFF' : '#0e0a0e',
                    border: selectedSize === size ? 'none' : '2px solid #e8d0b4',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm mt-4" style={{ color: '#5f5f5f' }}>
              Size is measured in centimeters
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
              <motion.div
                key={bracelet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#f4f1e2' }}>
                  <div className="aspect-square flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e8d0b4 0%, #f4f1e2 100%)' }}>
                    <span className="text-8xl">{bracelet.image}</span>
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
                      <Button
                        onClick={() => handleAddToCart(bracelet)}
                        disabled={!selectedSize}
                        className="transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-24 right-4 z-50"
        >
          <div className="rounded-xl p-4 shadow-lg flex items-center space-x-3" style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#a48355' }}>
              <Check className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            </div>
            <span className="font-medium">Added to Cart!</span>
          </div>
        </motion.div>
      )}

      <Footer />
      <MobileNavbar />
    </div>
  );
}