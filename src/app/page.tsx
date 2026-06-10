'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import ShapeCard from '@/components/ShapeCard';
import ShapeSVG from '@/components/ShapeSVG';
import { testimonials } from '@/lib/mock-data';
import { getAllShapes } from '@/lib/charms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Heart, Gem, ShoppingCart, Star, LayoutGrid, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Home() {
  const shapes = getAllShapes();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      overlay: 'rgba(14, 10, 14, 0.6)'
    },
    {
      image: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 50%, #16213e 100%)',
      overlay: 'rgba(14, 10, 14, 0.6)'
    },
    {
      image: 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #2d1b3d 100%)',
      overlay: 'rgba(14, 10, 14, 0.6)'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section with Image Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
              style={{ background: slide.image }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: slide.overlay }} />
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: currentSlide === index ? '#a48355' : 'rgba(255, 255, 255, 0.3)',
                width: currentSlide === index ? '24px' : '12px'
              }}
            />
          ))}
        </div>

        {/* Centered Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ color: '#f4f1e2' }}
            >
              Wear Your <span style={{ color: '#a48355' }}>Memories</span> In Style
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link href="/charms">
                <Button
                  size="lg"
                  className="px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                >
                  Design Your Charm
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/charms">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg border-2 transition-all duration-300 hover:scale-105"
                  style={{ borderColor: '#e8d0b4', color: '#e8d0b4', backgroundColor: 'transparent' }}
                >
                  View Collection
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              How It Works
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#5f5f5f' }}>
              Create your custom charm in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: LayoutGrid, title: 'Choose a Shape', desc: 'Select from our beautiful collection of charm shapes' },
              { icon: ImageIcon, title: 'Upload Your Image', desc: 'Add your favorite photo in PNG format' },
              { icon: Sparkles, title: 'Customize Design', desc: 'Adjust position, zoom, and select your material' },
              { icon: ShoppingCart, title: 'Add to Cart', desc: 'Review and add your custom charm to cart' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#a48355' }}>
                    <step.icon className="w-10 h-10" style={{ color: '#f4f1e2' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm" style={{ backgroundColor: '#e8d0b4', color: '#0e0a0e' }}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold" style={{ color: '#0e0a0e' }}>{step.title}</h3>
                <p style={{ color: '#5f5f5f' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shapes */}
      <section className="py-20" style={{ backgroundColor: '#f4f1e2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              Featured Shapes
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#5f5f5f' }}>
              Discover our most popular charm designs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['circle', 'square'].map((shape, index) => (
              <motion.div
                key={shape}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ShapeCard shape={shape} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/charms">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#a48355', color: '#a48355' }}
              >
                View All Shapes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#e8d0b4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              What Our Customers Say
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#5f5f5f' }}>
              Real stories from our valued customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#f4f1e2' }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: '#a48355', color: '#a48355' }} />
                  ))}
                </div>
                <p className="leading-relaxed mb-6 italic" style={{ color: '#0e0a0e' }}>"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: '#0e0a0e' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Redesigned CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#a48355' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: '#f4f1e2' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#e8d0b4', border: '2px solid #a48355' }}>
                  <Heart className="w-8 h-8" style={{ color: '#a48355' }} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#a48355' }}>
                  Join Our Community
                </h2>
                <p className="text-lg mb-6" style={{ color: '#5f5f5f' }}>
                  Get exclusive offers, early access to new collections, and jewelry inspiration delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#a48355' }} />
                    <p style={{ color: '#5f5f5f' }}>15% off your first order</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#a48355' }} />
                    <p style={{ color: '#5f5f5f' }}>New collection previews</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#a48355' }} />
                    <p style={{ color: '#5f5f5f' }}>Exclusive member discounts</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#e8d0b4' }}>
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#0e0a0e' }}>
                    Subscribe Now
                  </h3>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: '#f4f1e2', borderColor: '#a48355', color: '#0e0a0e' }}
                    />
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: '#f4f1e2', borderColor: '#a48355', color: '#0e0a0e' }}
                    />
                    <Button 
                      className="w-full h-12 transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#a48355', color: '#f4f1e2' }}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs mt-4" style={{ color: '#5f5f5f' }}>
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}