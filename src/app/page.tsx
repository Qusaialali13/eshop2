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
      image: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 50%, #F5F5F5 100%)',
      overlay: 'rgba(0, 0, 0, 0.02)'
    },
    {
      image: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)',
      overlay: 'rgba(0, 0, 0, 0.02)'
    },
    {
      image: 'linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 50%, #FFFFFF 100%)',
      overlay: 'rgba(0, 0, 0, 0.02)'
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
                backgroundColor: currentSlide === index ? '#D4A574' : 'rgba(212, 165, 116, 0.3)',
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
              style={{ color: '#000000' }}
            >
              Wear Your <span style={{ color: '#D4A574' }}>Memories</span> In Style
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
                  style={{ backgroundColor: '#D4A574', color: '#FFFFFF' }}
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
                  style={{ borderColor: '#D4A574', color: '#D4A574', backgroundColor: 'transparent' }}
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              How It Works
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#666666' }}>
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
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4A574' }}>
                    <step.icon className="w-10 h-10" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm" style={{ backgroundColor: '#D4A574', color: '#FFFFFF' }}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold" style={{ color: '#000000' }}>{step.title}</h3>
                <p style={{ color: '#666666' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shapes */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Featured Shapes
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#666666' }}>
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
                style={{ borderColor: '#D4A574', color: '#D4A574' }}
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              What Our Customers Say
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#666666' }}>
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
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: '#D4A574', color: '#D4A574' }} />
                  ))}
                </div>
                <p className="leading-relaxed mb-6 italic" style={{ color: '#000000' }}>"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: '#000000' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: '#666666' }}>{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Redesigned CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#D4A574' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FAFAFA', border: '2px solid #D4A574' }}>
                  <Heart className="w-8 h-8" style={{ color: '#D4A574' }} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D4A574' }}>
                  Join Our Community
                </h2>
                <p className="text-lg mb-6" style={{ color: '#666666' }}>
                  Get exclusive offers, early access to new collections, and jewelry inspiration delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4A574' }} />
                    <p style={{ color: '#666666' }}>15% off your first order</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4A574' }} />
                    <p style={{ color: '#666666' }}>New collection previews</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4A574' }} />
                    <p style={{ color: '#666666' }}>Exclusive member discounts</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#FAFAFA' }}>
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                    Subscribe Now
                  </h3>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: '#FFFFFF', borderColor: '#D4A574', color: '#000000' }}
                    />
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="flex-1 h-12 text-base"
                      style={{ backgroundColor: '#FFFFFF', borderColor: '#D4A574', color: '#000000' }}
                    />
                    <Button
                      className="w-full h-12 transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#D4A574', color: '#FFFFFF' }}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs mt-4" style={{ color: '#666666' }}>
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