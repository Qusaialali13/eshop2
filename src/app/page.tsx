'use client';

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
import { ArrowRight, Sparkles, Heart, Gem, ShoppingCart, Star } from 'lucide-react';

export default function Home() {
  const shapes = getAllShapes();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e0a0e 0%, #1a1518 50%, #251f24 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#a48355' }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: '#e8d0b4' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#f4f1e2' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)', color: '#e8d0b4', border: '1px solid rgba(164, 131, 85, 0.3)' }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Handcrafted Luxury</span>
              </motion.div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight" style={{ color: '#f4f1e2' }}>
                Capture Your
                <br />
                <span style={{ color: '#a48355' }}>Precious Moments</span>
                <br />
                Forever
              </h1>
              
              <p className="text-xl leading-relaxed max-w-lg" style={{ color: '#5f5f5f' }}>
                Transform your most cherished memories into exquisite custom jewelry pieces crafted with precision and love.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/charms">
                  <Button 
                    size="lg" 
                    className="px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                  >
                    Create Your Charm
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

              {/* Stats container - redesigned with better layout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                <div className="flex items-baseline space-x-2">
                  <p className="text-4xl font-bold" style={{ color: '#a48355' }}>50K+</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Happy Customers</p>
                </div>
                <div className="w-1 h-6" style={{ backgroundColor: 'rgba(232, 208, 180, 0.3)' }} />
                <div className="flex items-baseline space-x-2">
                  <p className="text-4xl font-bold" style={{ color: '#a48355' }}>4.9</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Average Rating</p>
                </div>
                <div className="w-1 h-6" style={{ backgroundColor: 'rgba(232, 208, 180, 0.3)' }} />
                <div className="flex items-baseline space-x-2">
                  <p className="text-4xl font-bold" style={{ color: '#a48355' }}>100K+</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Charms Created</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl p-12 backdrop-blur-sm" style={{ backgroundColor: 'rgba(244, 241, 226, 0.03)', border: '1px solid rgba(232, 208, 180, 0.1)' }}>
                <div className="flex items-center justify-center space-x-6">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ShapeSVG shape="heart" material="gold" size={180} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <ShapeSVG shape="circle" material="silver" size={160} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
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
              { icon: Image as any, title: 'Upload Your Image', desc: 'Add your favorite photo in PNG format' },
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
                  <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <step.icon className="w-10 h-10" style={{ color: '#a48355' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
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
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
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
      <section className="py-20" style={{ backgroundColor: '#0e0a0e' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1518 0%, #251f24 100%)', border: '1px solid rgba(232, 208, 180, 0.1)' }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)' }}>
                  <Heart className="w-8 h-8" style={{ color: '#a48355' }} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f4f1e2' }}>
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
              <div className="flex flex-col justify-center pt-6 pb-6">
                <div className="rounded-2xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(244, 241, 226, 0.05)', border: '1px solid rgba(232, 208, 180, 0.15)' }}>
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#e8d0b4' }}>
                    Subscribe Now
                  </h3>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: 'rgba(14, 10, 14, 0.5)', borderColor: 'rgba(232, 208, 180, 0.2)', color: '#f4f1e2' }}
                    />
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: 'rgba(14, 10, 14, 0.5)', borderColor: 'rgba(232, 208, 180, 0.2)', color: '#f4f1e2' }}
                    />
                    <Button 
                      className="w-full h-12 transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
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

import { LayoutGrid, Image } from 'lucide-react';