'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import ShapeCard from '@/components/ShapeCard';
import { getAllShapes } from '@/lib/charms';

export default function Charms() {
  const shapes = getAllShapes();

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
              Charm Collection
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#5f5f5f' }}>
              Discover our exquisite collection of charm shapes. Each design is crafted to showcase your most precious memories in timeless elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shapes Grid */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {shapes.map((shape, index) => (
              <motion.div
                key={shape}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ShapeCard shape={shape} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20" style={{ backgroundColor: '#e8d0b4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 shadow-lg"
            style={{ backgroundColor: '#f4f1e2' }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#0e0a0e' }}>
              Need Help Choosing?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto text-center" style={{ color: '#5f5f5f' }}>
              Our design consultants are here to help you create the perfect charm. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}
              >
                Contact Us
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-medium border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#a48355', color: '#a48355', backgroundColor: 'transparent' }}
              >
                View Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator before Footer */}
      <div className="h-8" style={{ backgroundColor: '#0e0a0e' }} />

      <Footer />
      <MobileNavbar />
    </div>
  );
}