'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import ShapeSVG from '@/components/ShapeSVG';
import { Gem, Award, Heart, Users, Sparkles } from 'lucide-react';

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How long does it take to receive my custom charm?',
      a: 'Standard production time is 3-5 business days, plus shipping. Express options are available for urgent orders.',
    },
    {
      q: 'What photo format and quality do you need?',
      a: 'We accept PNG format only. For best results, use high-resolution photos (minimum 300 DPI) with good lighting.',
    },
    {
      q: 'Are the charms waterproof?',
      a: 'Yes! Our charms are water-resistant and suitable for everyday wear. However, we recommend removing them before swimming or showering to maintain their beauty.',
    },
    {
      q: 'Can I return or exchange my custom charm?',
      a: 'Due to the personalized nature of our products, custom charms cannot be returned or exchanged unless there is a manufacturing defect.',
    },
    {
      q: 'Do you offer gift packaging?',
      a: 'Yes! All our charms come in elegant gift boxes. You can also add premium gift wrapping and personalized messages at checkout.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #f4f1e2 0%, #e8d0b4 50%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0e0a0e' }}>
              Our Story
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#5f5f5f' }}>
              Crafting timeless memories through custom photo charms since 2015. Each piece tells your unique story with elegance and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ backgroundColor: '#e8d0b4' }} />
                <div className="relative rounded-3xl p-12 shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <ShapeSVG shape="heart" material="gold" size={200} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#0e0a0e' }}>
                Born from Love
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5f5f5f' }}>
                LuxCharms was founded with a simple yet powerful idea: everyone deserves to wear their most precious memories close to their heart. What started as a small workshop in New York has grown into a beloved brand serving customers worldwide.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#5f5f5f' }}>
                Each charm we create is more than just jewelry—it's a story, a moment frozen in time, a connection to what matters most. From family portraits to pet photos, wedding memories to milestone celebrations, we help you preserve life's beautiful moments in exquisite detail.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold" style={{ color: '#a48355' }}>9+</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Years of Excellence</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold" style={{ color: '#a48355' }}>50K+</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold" style={{ color: '#a48355' }}>100K+</p>
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Charms Crafted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20" style={{ backgroundColor: '#f4f1e2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              Exceptional Craftsmanship
            </h2>
            <p className="text-xl" style={{ color: '#5f5f5f' }} max-w-2xl mx-auto>
              Every charm is handcrafted with meticulous attention to detail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Materials',
                desc: 'We use only the finest sterling silver, 18K gold, and rose gold for lasting beauty and durability.',
              },
              {
                icon: Gem,
                title: 'Precision Engineering',
                desc: 'Our state-of-the-art technology ensures every detail of your photo is captured with stunning clarity.',
              },
              {
                icon: Sparkles,
                title: 'Hand-Finished',
                desc: 'Each charm receives personal attention from our skilled artisans, ensuring perfection in every piece.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                  <item.icon className="w-8 h-8" style={{ color: '#a48355' }} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: '#0e0a0e' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#5f5f5f' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#0e0a0e' }}>
                Premium Materials
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #a48355 0%, #0e0a0e 100%)' }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>Sterling Silver</h3>
                    <p style={{ color: '#5f5f5f' }}>925 sterling silver, renowned for its durability and brilliant shine. Hypoallergenic and perfect for everyday wear.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #a48355 0%, #0e0a0e 100%)' }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>18K Gold</h3>
                    <p style={{ color: '#5f5f5f' }}>Luxurious 18K gold plating over premium silver base. Rich, warm tone that develops a beautiful patina over time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #a48355 0%, #0e0a0e 100%)' }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>18K Rose Gold</h3>
                    <p style={{ color: '#5f5f5f' }}>Romantic rose gold finish with copper alloy. Blends classic elegance with modern sophistication.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#f4f1e2' }}>
                    <ShapeSVG shape="circle" material="silver" size={120} />
                  </div>
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#f4f1e2' }}>
                    <ShapeSVG shape="heart" material="rose-gold" size={120} />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#f4f1e2' }}>
                    <ShapeSVG shape="star" material="gold" size={120} />
                  </div>
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#f4f1e2' }}>
                    <ShapeSVG shape="flower" material="silver" size={120} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Charms Are Made - Redesigned equal size boxes */}
      <section className="py-20" style={{ backgroundColor: '#0e0a0e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#f4f1e2' }}>
              How Your Charm Is Made
            </h2>
            <p className="text-xl" style={{ color: '#5f5f5f' }} max-w-2xl mx-auto>
              From your photo to a precious keepsake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Upload Photo', desc: 'You upload your favorite photo in high resolution', icon: '📷' },
              { step: '02', title: 'Customize', desc: 'Choose shape, material, and perfect the positioning', icon: '✨' },
              { step: '03', title: 'Craft', desc: 'Our artisans craft your charm with precision and care', icon: '🔨' },
              { step: '04', title: 'Deliver', desc: 'Your custom charm arrives beautifully packaged', icon: '🎁' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl p-6 flex flex-col"
                style={{ backgroundColor: 'rgba(244, 241, 226, 0.03)', border: '1px solid rgba(232, 208, 180, 0.1)', minHeight: '320px' }}
              >
                <div className="absolute top-4 right-4 text-6xl font-serif font-bold opacity-10" style={{ color: '#a48355' }}>
                  {item.step}
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl" style={{ backgroundColor: 'rgba(164, 131, 85, 0.2)' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#e8d0b4' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#5f5f5f', lineHeight: '1.6' }} className="flex-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0e0a0e' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ backgroundColor: '#f4f1e2' }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h3 className="font-serif text-xl font-semibold" style={{ color: '#0e0a0e' }}>
                    {faq.q}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#a48355' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#a48355' }} />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6" style={{ color: '#5f5f5f' }}>
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}