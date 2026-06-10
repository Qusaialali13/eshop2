'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Gem, Star, Sparkles } from 'lucide-react';

const brands = [
  {
    name: 'Royal Collection',
    description: 'Exquisite designs inspired by royal jewelry traditions, featuring timeless elegance and unparalleled craftsmanship.',
    icon: Crown,
    featured: true,
  },
  {
    name: 'Heritage Series',
    description: 'Classic designs that celebrate our rich history and traditional jewelry making techniques.',
    icon: Gem,
    featured: true,
  },
  {
    name: 'Modern Luxe',
    description: 'Contemporary designs that blend modern aesthetics with classic luxury for the discerning individual.',
    icon: Sparkles,
    featured: true,
  },
  {
    name: 'Signature Edition',
    description: 'Exclusive designs created by our master craftsmen, each piece a unique work of art.',
    icon: Star,
    featured: false,
  },
  {
    name: 'Essentials',
    description: 'Everyday luxury pieces designed for versatility and timeless appeal in your daily life.',
    icon: Gem,
    featured: false,
  },
  {
    name: 'Limited Edition',
    description: 'Rare and exclusive designs available for a limited time, perfect for collectors.',
    icon: Crown,
    featured: false,
  },
];

export default function Brands() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #f4f1e2 0%, #e8d0b4 50%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e0a0e' }}>
              Our Brands
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#5f5f5f' }}>
              Discover our curated collections of luxury jewelry brands, each with its own unique story and aesthetic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              Featured Collections
            </h2>
            <p className="text-xl" style={{ color: '#5f5f5f' }} max-w-2xl mx-auto>
              Our most popular and beloved collections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {brands.filter(b => b.featured).map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ backgroundColor: '#f4f1e2' }}>
                  <div className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                      <brand.icon className="w-8 h-8" style={{ color: '#a48355' }} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-center mb-4" style={{ color: '#0e0a0e' }}>
                      {brand.name}
                    </h3>
                    <p className="text-center leading-relaxed" style={{ color: '#5f5f5f' }}>
                      {brand.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(164, 131, 85, 0.95)' }}>
                    <Button 
                      className="transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands */}
      <section className="py-20" style={{ backgroundColor: '#f4f1e2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              All Collections
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#5f5f5f' }}>
              Explore our complete range of luxury jewelry collections
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <brand.icon className="w-6 h-6" style={{ color: '#a48355' }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>
                      {brand.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#5f5f5f' }}>
                      {brand.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#e8d0b4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center"
            style={{ backgroundColor: '#0e0a0e' }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f4f1e2' }}>
              Find Your Perfect Collection
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#e8d0b4' }}>
              Let us help you discover the perfect jewelry collection that matches your style and personality.
            </p>
            <Button 
              className="px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}