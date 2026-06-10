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

      {/* Hero Section - Modernized */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0e0a0e 0%, #1a1518 60%, #251f24 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ backgroundColor: '#a48355' }} />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#e8d0b4' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.15)', color: '#e8d0b4', border: '1px solid rgba(164, 131, 85, 0.25)' }}
              >
                <Sparkles className="w-3 h-3" />
                <span>Handcrafted Luxury Jewelry</span>
              </motion.div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#f4f1e2' }}>
                Wear Your
                <br />
                <span style={{ color: '#a48355' }}>Memories</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: '#e8d0b4' }}>In Style</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: '#8a8680' }}>
                Transform your most cherished moments into exquisite custom photo charms. Crafted with precision and love.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="/charms">
                  <Button
                    size="lg"
                    className="px-8 py-5 text-base transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                  >
                    Design Your Charm
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/charms">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-5 text-base border transition-all duration-300 hover:scale-105"
                    style={{ borderColor: '#e8d0b4', color: '#e8d0b4', backgroundColor: 'transparent' }}
                  >
                    View Collection
                  </Button>
                </Link>
              </motion.div>

              {/* Stats - Compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-3 gap-6 pt-4"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#a48355' }}>50K+</p>
                  <p className="text-xs" style={{ color: '#8a8680' }}>Happy<br />Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#a48355' }}>4.9</p>
                  <p className="text-xs" style={{ color: '#8a8680' }}>Star<br />Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#a48355' }}>100K+</p>
                  <p className="text-xs" style={{ color: '#8a8680' }}>Charms<br />Created</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Floating charms */}
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-10 -left-10 z-10"
                >
                  <div className="rounded-2xl p-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(244, 241, 226, 0.1)', border: '1px solid rgba(232, 208, 180, 0.2)' }}>
                    <ShapeSVG shape="heart" material="gold" size={100} />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [5, -5, 5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-10 -right-10 z-10"
                >
                  <div className="rounded-2xl p-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(244, 241, 226, 0.1)', border: '1px solid rgba(232, 208, 180, 0.2)' }}>
                    <ShapeSVG shape="circle" material="silver" size={90} />
                  </div>
                </motion.div>

                {/* Main charm */}
                <div className="rounded-3xl p-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(244, 241, 226, 0.05)', border: '1px solid rgba(232, 208, 180, 0.15)' }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    <ShapeSVG shape="square" material="rose-gold" size={200} />
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